import { getProgress, getDailyHistory, getStreakCalendar, ACHIEVEMENTS } from '../core/progress.js';

export async function renderStats() {
  const progress = await getProgress();
  const weeklyData = getDailyHistory(progress.dailyHistory, 7);
  const monthlyData = getDailyHistory(progress.dailyHistory, 30);
  const streakCalendar = getStreakCalendar(progress.dailyHistory, 4);
  
  const container = document.createElement('div');
  container.className = 'stats-view';

  const totalWeekXP = weeklyData.reduce((sum, d) => sum + d.xp, 0);
  const totalMonthXP = monthlyData.reduce((sum, d) => sum + d.xp, 0);
  const activeDays = streakCalendar.filter(d => d.practiced).length;

  container.innerHTML = `
    <div class="card">
      <div class="card-title">Weekly XP</div>
      <div class="chart-summary">
        <span class="chart-total">${totalWeekXP} XP</span>
        <span class="chart-label">this week</span>
      </div>
      <canvas id="weekly-chart" width="400" height="150"></canvas>
    </div>

    <div class="card">
      <div class="card-title">Activity Calendar</div>
      <div class="chart-summary">
        <span class="chart-total">${activeDays}/28</span>
        <span class="chart-label">days practiced</span>
      </div>
      <div id="streak-calendar" class="streak-calendar"></div>
    </div>

    <div class="card">
      <div class="card-title">Monthly Overview</div>
      <div class="chart-summary">
        <span class="chart-total">${totalMonthXP} XP</span>
        <span class="chart-label">last 30 days</span>
      </div>
      <canvas id="monthly-chart" width="400" height="120"></canvas>
    </div>

    <div class="card">
      <div class="card-title">All-Time Stats</div>
      <div class="stats-grid-detailed">
        <div class="stat-box">
          <div class="stat-value-lg">${progress.xp}</div>
          <div class="stat-label">Total XP</div>
        </div>
        <div class="stat-box">
          <div class="stat-value-lg">${progress.level}</div>
          <div class="stat-label">Level</div>
        </div>
        <div class="stat-box">
          <div class="stat-value-lg">${progress.streak}</div>
          <div class="stat-label">Current Streak</div>
        </div>
        <div class="stat-box">
          <div class="stat-value-lg">${progress.stats.wordsLearned}</div>
          <div class="stat-label">Words Learned</div>
        </div>
        <div class="stat-box">
          <div class="stat-value-lg">${progress.stats.totalReviews}</div>
          <div class="stat-label">Total Reviews</div>
        </div>
        <div class="stat-box">
          <div class="stat-value-lg">${progress.stats.totalReviews > 0 
            ? Math.round((progress.stats.correctAnswers / progress.stats.totalReviews) * 100) 
            : 0}%</div>
          <div class="stat-label">Accuracy</div>
        </div>
        <div class="stat-box">
          <div class="stat-value-lg">${progress.stats.lessonsCompleted}</div>
          <div class="stat-label">Lessons Done</div>
        </div>
        <div class="stat-box">
          <div class="stat-value-lg">${progress.achievements.length}/${Object.keys(ACHIEVEMENTS).length}</div>
          <div class="stat-label">Achievements</div>
        </div>
      </div>
    </div>
  `;

  requestAnimationFrame(() => {
    drawWeeklyChart(weeklyData);
    drawMonthlyChart(monthlyData);
    renderStreakCalendar(streakCalendar, container.querySelector('#streak-calendar'));
  });

  return container;
}

function roundRect(ctx, x, y, w, h, r) {
  if (ctx.roundRect) {
    ctx.roundRect(x, y, w, h, r);
  } else {
    ctx.moveTo(x + r, y);
    ctx.arcTo(x + w, y, x + w, y + h, r);
    ctx.arcTo(x + w, y + h, x, y + h, r);
    ctx.arcTo(x, y + h, x, y, r);
    ctx.arcTo(x, y, x + w, y, r);
    ctx.closePath();
  }
}

function drawWeeklyChart(data) {
  const canvas = document.getElementById('weekly-chart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = 150 * dpr;
  canvas.style.height = '150px';
  ctx.scale(dpr, dpr);
  
  const width = canvas.offsetWidth;
  const height = 150;
  const padding = { top: 10, right: 10, bottom: 30, left: 10 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  
  const maxXP = Math.max(...data.map(d => d.xp), 1);
  const barWidth = chartWidth / data.length - 8;
  
  ctx.clearRect(0, 0, width, height);
  
  data.forEach((day, i) => {
    const barHeight = (day.xp / maxXP) * chartHeight;
    const x = padding.left + i * (chartWidth / data.length) + 4;
    const y = padding.top + chartHeight - barHeight;
    
    const gradient = ctx.createLinearGradient(0, y, 0, y + barHeight);
    gradient.addColorStop(0, '#3b82f6');
    gradient.addColorStop(1, '#1d4ed8');
    
    ctx.fillStyle = day.xp > 0 ? gradient : '#333333';
    ctx.beginPath();
    roundRect(ctx, x, y, barWidth, barHeight || 4, 4);
    ctx.fill();
    
    ctx.fillStyle = '#a3a3a3';
    ctx.font = '11px -apple-system, BlinkMacSystemFont, sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(day.dayName, x + barWidth / 2, height - 8);
    
    if (day.xp > 0) {
      ctx.fillStyle = '#f5f5f5';
      ctx.font = 'bold 10px -apple-system, BlinkMacSystemFont, sans-serif';
      ctx.fillText(day.xp, x + barWidth / 2, y - 5);
    }
  });
}

function drawMonthlyChart(data) {
  const canvas = document.getElementById('monthly-chart');
  if (!canvas) return;
  
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  
  canvas.width = canvas.offsetWidth * dpr;
  canvas.height = 120 * dpr;
  canvas.style.height = '120px';
  ctx.scale(dpr, dpr);
  
  const width = canvas.offsetWidth;
  const height = 120;
  const padding = { top: 20, right: 10, bottom: 10, left: 10 };
  const chartWidth = width - padding.left - padding.right;
  const chartHeight = height - padding.top - padding.bottom;
  
  const maxXP = Math.max(...data.map(d => d.xp), 1);
  
  ctx.clearRect(0, 0, width, height);
  
  ctx.strokeStyle = '#262626';
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(padding.left, padding.top + chartHeight / 2);
  ctx.lineTo(width - padding.right, padding.top + chartHeight / 2);
  ctx.stroke();
  
  if (data.some(d => d.xp > 0)) {
    ctx.beginPath();
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2;
    
    const points = data.map((day, i) => ({
      x: padding.left + (i / (data.length - 1)) * chartWidth,
      y: padding.top + chartHeight - (day.xp / maxXP) * chartHeight
    }));
    
    ctx.moveTo(points[0].x, points[0].y);
    points.forEach((point, i) => {
      if (i > 0) {
        const prev = points[i - 1];
        const cpX = (prev.x + point.x) / 2;
        ctx.bezierCurveTo(cpX, prev.y, cpX, point.y, point.x, point.y);
      }
    });
    ctx.stroke();
    
    const gradient = ctx.createLinearGradient(0, padding.top, 0, height - padding.bottom);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.3)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0)');
    
    ctx.lineTo(points[points.length - 1].x, height - padding.bottom);
    ctx.lineTo(points[0].x, height - padding.bottom);
    ctx.closePath();
    ctx.fillStyle = gradient;
    ctx.fill();
  }
}

function renderStreakCalendar(data, container) {
  if (!container) return;
  
  container.innerHTML = data.map((day, i) => {
    const level = day.practiced ? 'active' : 'inactive';
    return `<div class="streak-day ${level}" title="${day.date}"></div>`;
  }).join('');
}
