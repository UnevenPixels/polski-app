class Router {
  constructor() {
    this.routes = new Map();
    this.currentView = null;
    this.history = [];
    this.params = {};
  }

  register(path, viewFactory) {
    this.routes.set(path, viewFactory);
  }

  async navigate(path, params = {}, addToHistory = true) {
    const [basePath] = path.split('?');
    const viewFactory = this.routes.get(basePath);

    if (!viewFactory) {
      console.error(`Route not found: ${path}`);
      return;
    }

    if (addToHistory && this.currentView) {
      this.history.push({ path: this.currentPath, params: this.params });
    }

    this.currentPath = basePath;
    this.params = params;

    const container = document.getElementById('main-content');
    const view = await viewFactory(params);

    container.innerHTML = '';
    if (typeof view === 'string') {
      container.innerHTML = view;
    } else if (view instanceof HTMLElement) {
      container.appendChild(view);
    }

    container.classList.add('animate-in');
    setTimeout(() => container.classList.remove('animate-in'), 200);

    this.updateNav(basePath);
    this.updateHeader(params);

    if (this.onNavigate) {
      this.onNavigate(basePath, params);
    }
  }

  back() {
    if (this.history.length > 0) {
      const { path, params } = this.history.pop();
      this.navigate(path, params, false);
    } else {
      this.navigate('home');
    }
  }

  updateNav(path) {
    const mainViews = ['home', 'lessons', 'review', 'reference'];
    const navPath = mainViews.includes(path) ? path : null;

    document.querySelectorAll('.nav-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.view === navPath);
    });
  }

  updateHeader(params) {
    const backBtn = document.getElementById('back-btn');
    const title = document.getElementById('page-title');

    const showBack = this.history.length > 0;
    backBtn.classList.toggle('hidden', !showBack);

    if (params.title) {
      title.textContent = params.title;
    } else {
      title.textContent = 'Polski';
    }
  }

  getParams() {
    return this.params;
  }
}

export const router = new Router();
