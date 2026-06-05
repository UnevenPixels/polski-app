// Polish verb conjugation data - the 25 most common verbs (Batch 1)
// Each verb carries full present / past / future / imperative tables plus
// aspect + conjugation-group metadata and an example sentence.
//
// Key conventions (kept consistent with grammar.js so the UI is familiar):
//   present / future: ja, ty, "on/ona/ono", my, wy, "oni/one"
//   past (gendered):  "ja (m)","ja (f)","ty (m)","ty (f)","on","ona","ono",
//                     "my (m)","my (f)","wy (m)","wy (f)","oni","one"
//   imperative:       ty, wy, my   (null when the verb has no natural imperative)
//
// Future for imperfective verbs uses the będę + infinitive form (simple,
// invariant, and commonly taught). być has its own dedicated future.

export const PRESENT_PERSONS = ['ja', 'ty', 'on/ona/ono', 'my', 'wy', 'oni/one'];
export const PAST_PERSONS = [
  'ja (m)', 'ja (f)', 'ty (m)', 'ty (f)', 'on', 'ona', 'ono',
  'my (m)', 'my (f)', 'wy (m)', 'wy (f)', 'oni', 'one'
];
export const IMPERATIVE_PERSONS = ['ty', 'wy', 'my'];

// Helper to build a będę + infinitive future table.
function futureWithByc(infinitive) {
  return {
    ja: `będę ${infinitive}`,
    ty: `będziesz ${infinitive}`,
    'on/ona/ono': `będzie ${infinitive}`,
    my: `będziemy ${infinitive}`,
    wy: `będziecie ${infinitive}`,
    'oni/one': `będą ${infinitive}`
  };
}

export const verbs = [
  {
    id: 'byc',
    infinitive: 'być',
    meaning: 'to be',
    aspect: 'imperfective',
    aspectPartner: null,
    group: 'irregular',
    irregular: true,
    present: { ja: 'jestem', ty: 'jesteś', 'on/ona/ono': 'jest', my: 'jesteśmy', wy: 'jesteście', 'oni/one': 'są' },
    past: {
      'ja (m)': 'byłem', 'ja (f)': 'byłam', 'ty (m)': 'byłeś', 'ty (f)': 'byłaś',
      on: 'był', ona: 'była', ono: 'było',
      'my (m)': 'byliśmy', 'my (f)': 'byłyśmy', 'wy (m)': 'byliście', 'wy (f)': 'byłyście',
      oni: 'byli', one: 'były'
    },
    future: { ja: 'będę', ty: 'będziesz', 'on/ona/ono': 'będzie', my: 'będziemy', wy: 'będziecie', 'oni/one': 'będą' },
    imperative: { ty: 'bądź', wy: 'bądźcie', my: 'bądźmy' },
    example: { polish: 'Jestem studentem.', english: 'I am a student.' }
  },
  {
    id: 'miec',
    infinitive: 'mieć',
    meaning: 'to have',
    aspect: 'imperfective',
    aspectPartner: null,
    group: 3,
    irregular: false,
    present: { ja: 'mam', ty: 'masz', 'on/ona/ono': 'ma', my: 'mamy', wy: 'macie', 'oni/one': 'mają' },
    past: {
      'ja (m)': 'miałem', 'ja (f)': 'miałam', 'ty (m)': 'miałeś', 'ty (f)': 'miałaś',
      on: 'miał', ona: 'miała', ono: 'miało',
      'my (m)': 'mieliśmy', 'my (f)': 'miałyśmy', 'wy (m)': 'mieliście', 'wy (f)': 'miałyście',
      oni: 'mieli', one: 'miały'
    },
    future: futureWithByc('mieć'),
    imperative: { ty: 'miej', wy: 'miejcie', my: 'miejmy' },
    example: { polish: 'Mam dwa psy.', english: 'I have two dogs.' }
  },
  {
    id: 'moc',
    infinitive: 'móc',
    meaning: 'can, to be able',
    aspect: 'imperfective',
    aspectPartner: null,
    group: 'irregular',
    irregular: true,
    present: { ja: 'mogę', ty: 'możesz', 'on/ona/ono': 'może', my: 'możemy', wy: 'możecie', 'oni/one': 'mogą' },
    past: {
      'ja (m)': 'mogłem', 'ja (f)': 'mogłam', 'ty (m)': 'mogłeś', 'ty (f)': 'mogłaś',
      on: 'mógł', ona: 'mogła', ono: 'mogło',
      'my (m)': 'mogliśmy', 'my (f)': 'mogłyśmy', 'wy (m)': 'mogliście', 'wy (f)': 'mogłyście',
      oni: 'mogli', one: 'mogły'
    },
    future: futureWithByc('móc'),
    imperative: null,
    example: { polish: 'Czy mogę ci pomóc?', english: 'Can I help you?' }
  },
  {
    id: 'chciec',
    infinitive: 'chcieć',
    meaning: 'to want',
    aspect: 'imperfective',
    aspectPartner: 'zechcieć',
    group: 1,
    irregular: true,
    present: { ja: 'chcę', ty: 'chcesz', 'on/ona/ono': 'chce', my: 'chcemy', wy: 'chcecie', 'oni/one': 'chcą' },
    past: {
      'ja (m)': 'chciałem', 'ja (f)': 'chciałam', 'ty (m)': 'chciałeś', 'ty (f)': 'chciałaś',
      on: 'chciał', ona: 'chciała', ono: 'chciało',
      'my (m)': 'chcieliśmy', 'my (f)': 'chciałyśmy', 'wy (m)': 'chcieliście', 'wy (f)': 'chciałyście',
      oni: 'chcieli', one: 'chciały'
    },
    future: futureWithByc('chcieć'),
    imperative: null,
    example: { polish: 'Chcę kawę.', english: 'I want a coffee.' }
  },
  {
    id: 'musiec',
    infinitive: 'musieć',
    meaning: 'must, to have to',
    aspect: 'imperfective',
    aspectPartner: null,
    group: 2,
    irregular: false,
    present: { ja: 'muszę', ty: 'musisz', 'on/ona/ono': 'musi', my: 'musimy', wy: 'musicie', 'oni/one': 'muszą' },
    past: {
      'ja (m)': 'musiałem', 'ja (f)': 'musiałam', 'ty (m)': 'musiałeś', 'ty (f)': 'musiałaś',
      on: 'musiał', ona: 'musiała', ono: 'musiało',
      'my (m)': 'musieliśmy', 'my (f)': 'musiałyśmy', 'wy (m)': 'musieliście', 'wy (f)': 'musiałyście',
      oni: 'musieli', one: 'musiały'
    },
    future: futureWithByc('musieć'),
    imperative: null,
    example: { polish: 'Muszę iść do pracy.', english: 'I have to go to work.' }
  },
  {
    id: 'robic',
    infinitive: 'robić',
    meaning: 'to do, to make',
    aspect: 'imperfective',
    aspectPartner: 'zrobić',
    group: 2,
    irregular: false,
    present: { ja: 'robię', ty: 'robisz', 'on/ona/ono': 'robi', my: 'robimy', wy: 'robicie', 'oni/one': 'robią' },
    past: {
      'ja (m)': 'robiłem', 'ja (f)': 'robiłam', 'ty (m)': 'robiłeś', 'ty (f)': 'robiłaś',
      on: 'robił', ona: 'robiła', ono: 'robiło',
      'my (m)': 'robiliśmy', 'my (f)': 'robiłyśmy', 'wy (m)': 'robiliście', 'wy (f)': 'robiłyście',
      oni: 'robili', one: 'robiły'
    },
    future: futureWithByc('robić'),
    imperative: { ty: 'rób', wy: 'róbcie', my: 'róbmy' },
    example: { polish: 'Co robisz?', english: 'What are you doing?' }
  },
  {
    id: 'mowic',
    infinitive: 'mówić',
    meaning: 'to speak, to say',
    aspect: 'imperfective',
    aspectPartner: 'powiedzieć',
    group: 2,
    irregular: false,
    present: { ja: 'mówię', ty: 'mówisz', 'on/ona/ono': 'mówi', my: 'mówimy', wy: 'mówicie', 'oni/one': 'mówią' },
    past: {
      'ja (m)': 'mówiłem', 'ja (f)': 'mówiłam', 'ty (m)': 'mówiłeś', 'ty (f)': 'mówiłaś',
      on: 'mówił', ona: 'mówiła', ono: 'mówiło',
      'my (m)': 'mówiliśmy', 'my (f)': 'mówiłyśmy', 'wy (m)': 'mówiliście', 'wy (f)': 'mówiłyście',
      oni: 'mówili', one: 'mówiły'
    },
    future: futureWithByc('mówić'),
    imperative: { ty: 'mów', wy: 'mówcie', my: 'mówmy' },
    example: { polish: 'Mówię po polsku.', english: 'I speak Polish.' }
  },
  {
    id: 'wiedziec',
    infinitive: 'wiedzieć',
    meaning: 'to know (a fact)',
    aspect: 'imperfective',
    aspectPartner: null,
    group: 4,
    irregular: true,
    present: { ja: 'wiem', ty: 'wiesz', 'on/ona/ono': 'wie', my: 'wiemy', wy: 'wiecie', 'oni/one': 'wiedzą' },
    past: {
      'ja (m)': 'wiedziałem', 'ja (f)': 'wiedziałam', 'ty (m)': 'wiedziałeś', 'ty (f)': 'wiedziałaś',
      on: 'wiedział', ona: 'wiedziała', ono: 'wiedziało',
      'my (m)': 'wiedzieliśmy', 'my (f)': 'wiedziałyśmy', 'wy (m)': 'wiedzieliście', 'wy (f)': 'wiedziałyście',
      oni: 'wiedzieli', one: 'wiedziały'
    },
    future: futureWithByc('wiedzieć'),
    imperative: { ty: 'wiedz', wy: 'wiedzcie', my: 'wiedzmy' },
    example: { polish: 'Nie wiem, gdzie on jest.', english: "I don't know where he is." }
  },
  {
    id: 'znac',
    infinitive: 'znać',
    meaning: 'to know (be acquainted with)',
    aspect: 'imperfective',
    aspectPartner: 'poznać',
    group: 3,
    irregular: false,
    present: { ja: 'znam', ty: 'znasz', 'on/ona/ono': 'zna', my: 'znamy', wy: 'znacie', 'oni/one': 'znają' },
    past: {
      'ja (m)': 'znałem', 'ja (f)': 'znałam', 'ty (m)': 'znałeś', 'ty (f)': 'znałaś',
      on: 'znał', ona: 'znała', ono: 'znało',
      'my (m)': 'znaliśmy', 'my (f)': 'znałyśmy', 'wy (m)': 'znaliście', 'wy (f)': 'znałyście',
      oni: 'znali', one: 'znały'
    },
    future: futureWithByc('znać'),
    imperative: { ty: 'znaj', wy: 'znajcie', my: 'znajmy' },
    example: { polish: 'Znam tę piosenkę.', english: 'I know this song.' }
  },
  {
    id: 'myslec',
    infinitive: 'myśleć',
    meaning: 'to think',
    aspect: 'imperfective',
    aspectPartner: 'pomyśleć',
    group: 2,
    irregular: false,
    present: { ja: 'myślę', ty: 'myślisz', 'on/ona/ono': 'myśli', my: 'myślimy', wy: 'myślicie', 'oni/one': 'myślą' },
    past: {
      'ja (m)': 'myślałem', 'ja (f)': 'myślałam', 'ty (m)': 'myślałeś', 'ty (f)': 'myślałaś',
      on: 'myślał', ona: 'myślała', ono: 'myślało',
      'my (m)': 'myśleliśmy', 'my (f)': 'myślałyśmy', 'wy (m)': 'myśleliście', 'wy (f)': 'myślałyście',
      oni: 'myśleli', one: 'myślały'
    },
    future: futureWithByc('myśleć'),
    imperative: { ty: 'myśl', wy: 'myślcie', my: 'myślmy' },
    example: { polish: 'Myślę, że masz rację.', english: 'I think you are right.' }
  },
  {
    id: 'isc',
    infinitive: 'iść',
    meaning: 'to go (on foot, now)',
    aspect: 'imperfective',
    aspectPartner: 'pójść',
    group: 'irregular',
    irregular: true,
    present: { ja: 'idę', ty: 'idziesz', 'on/ona/ono': 'idzie', my: 'idziemy', wy: 'idziecie', 'oni/one': 'idą' },
    past: {
      'ja (m)': 'szedłem', 'ja (f)': 'szłam', 'ty (m)': 'szedłeś', 'ty (f)': 'szłaś',
      on: 'szedł', ona: 'szła', ono: 'szło',
      'my (m)': 'szliśmy', 'my (f)': 'szłyśmy', 'wy (m)': 'szliście', 'wy (f)': 'szłyście',
      oni: 'szli', one: 'szły'
    },
    future: futureWithByc('iść'),
    imperative: { ty: 'idź', wy: 'idźcie', my: 'idźmy' },
    example: { polish: 'Idę do sklepu.', english: "I'm going to the shop." }
  },
  {
    id: 'chodzic',
    infinitive: 'chodzić',
    meaning: 'to go, to walk (habitually)',
    aspect: 'imperfective',
    aspectPartner: null,
    group: 2,
    irregular: false,
    present: { ja: 'chodzę', ty: 'chodzisz', 'on/ona/ono': 'chodzi', my: 'chodzimy', wy: 'chodzicie', 'oni/one': 'chodzą' },
    past: {
      'ja (m)': 'chodziłem', 'ja (f)': 'chodziłam', 'ty (m)': 'chodziłeś', 'ty (f)': 'chodziłaś',
      on: 'chodził', ona: 'chodziła', ono: 'chodziło',
      'my (m)': 'chodziliśmy', 'my (f)': 'chodziłyśmy', 'wy (m)': 'chodziliście', 'wy (f)': 'chodziłyście',
      oni: 'chodzili', one: 'chodziły'
    },
    future: futureWithByc('chodzić'),
    imperative: { ty: 'chodź', wy: 'chodźcie', my: 'chodźmy' },
    example: { polish: 'Często chodzę do kina.', english: 'I often go to the cinema.' }
  },
  {
    id: 'jechac',
    infinitive: 'jechać',
    meaning: 'to go (by vehicle, now)',
    aspect: 'imperfective',
    aspectPartner: 'pojechać',
    group: 'irregular',
    irregular: true,
    present: { ja: 'jadę', ty: 'jedziesz', 'on/ona/ono': 'jedzie', my: 'jedziemy', wy: 'jedziecie', 'oni/one': 'jadą' },
    past: {
      'ja (m)': 'jechałem', 'ja (f)': 'jechałam', 'ty (m)': 'jechałeś', 'ty (f)': 'jechałaś',
      on: 'jechał', ona: 'jechała', ono: 'jechało',
      'my (m)': 'jechaliśmy', 'my (f)': 'jechałyśmy', 'wy (m)': 'jechaliście', 'wy (f)': 'jechałyście',
      oni: 'jechali', one: 'jechały'
    },
    future: futureWithByc('jechać'),
    imperative: { ty: 'jedź', wy: 'jedźcie', my: 'jedźmy' },
    example: { polish: 'Jadę do Warszawy pociągiem.', english: "I'm going to Warsaw by train." }
  },
  {
    id: 'widziec',
    infinitive: 'widzieć',
    meaning: 'to see',
    aspect: 'imperfective',
    aspectPartner: 'zobaczyć',
    group: 2,
    irregular: false,
    present: { ja: 'widzę', ty: 'widzisz', 'on/ona/ono': 'widzi', my: 'widzimy', wy: 'widzicie', 'oni/one': 'widzą' },
    past: {
      'ja (m)': 'widziałem', 'ja (f)': 'widziałam', 'ty (m)': 'widziałeś', 'ty (f)': 'widziałaś',
      on: 'widział', ona: 'widziała', ono: 'widziało',
      'my (m)': 'widzieliśmy', 'my (f)': 'widziałyśmy', 'wy (m)': 'widzieliście', 'wy (f)': 'widziałyście',
      oni: 'widzieli', one: 'widziały'
    },
    future: futureWithByc('widzieć'),
    imperative: null,
    example: { polish: 'Widzę dom.', english: 'I see a house.' }
  },
  {
    id: 'dawac',
    infinitive: 'dawać',
    meaning: 'to give',
    aspect: 'imperfective',
    aspectPartner: 'dać',
    group: 1,
    irregular: false,
    present: { ja: 'daję', ty: 'dajesz', 'on/ona/ono': 'daje', my: 'dajemy', wy: 'dajecie', 'oni/one': 'dają' },
    past: {
      'ja (m)': 'dawałem', 'ja (f)': 'dawałam', 'ty (m)': 'dawałeś', 'ty (f)': 'dawałaś',
      on: 'dawał', ona: 'dawała', ono: 'dawało',
      'my (m)': 'dawaliśmy', 'my (f)': 'dawałyśmy', 'wy (m)': 'dawaliście', 'wy (f)': 'dawałyście',
      oni: 'dawali', one: 'dawały'
    },
    future: futureWithByc('dawać'),
    imperative: { ty: 'dawaj', wy: 'dawajcie', my: 'dawajmy' },
    example: { polish: 'Daję ci książkę.', english: "I'm giving you a book." }
  },
  {
    id: 'brac',
    infinitive: 'brać',
    meaning: 'to take',
    aspect: 'imperfective',
    aspectPartner: 'wziąć',
    group: 1,
    irregular: true,
    present: { ja: 'biorę', ty: 'bierzesz', 'on/ona/ono': 'bierze', my: 'bierzemy', wy: 'bierzecie', 'oni/one': 'biorą' },
    past: {
      'ja (m)': 'brałem', 'ja (f)': 'brałam', 'ty (m)': 'brałeś', 'ty (f)': 'brałaś',
      on: 'brał', ona: 'brała', ono: 'brało',
      'my (m)': 'braliśmy', 'my (f)': 'brałyśmy', 'wy (m)': 'braliście', 'wy (f)': 'brałyście',
      oni: 'brali', one: 'brały'
    },
    future: futureWithByc('brać'),
    imperative: { ty: 'bierz', wy: 'bierzcie', my: 'bierzmy' },
    example: { polish: 'Biorę parasol.', english: "I'm taking an umbrella." }
  },
  {
    id: 'jesc',
    infinitive: 'jeść',
    meaning: 'to eat',
    aspect: 'imperfective',
    aspectPartner: 'zjeść',
    group: 4,
    irregular: true,
    present: { ja: 'jem', ty: 'jesz', 'on/ona/ono': 'je', my: 'jemy', wy: 'jecie', 'oni/one': 'jedzą' },
    past: {
      'ja (m)': 'jadłem', 'ja (f)': 'jadłam', 'ty (m)': 'jadłeś', 'ty (f)': 'jadłaś',
      on: 'jadł', ona: 'jadła', ono: 'jadło',
      'my (m)': 'jedliśmy', 'my (f)': 'jadłyśmy', 'wy (m)': 'jedliście', 'wy (f)': 'jadłyście',
      oni: 'jedli', one: 'jadły'
    },
    future: futureWithByc('jeść'),
    imperative: { ty: 'jedz', wy: 'jedzcie', my: 'jedzmy' },
    example: { polish: 'Jem śniadanie.', english: "I'm eating breakfast." }
  },
  {
    id: 'pic',
    infinitive: 'pić',
    meaning: 'to drink',
    aspect: 'imperfective',
    aspectPartner: 'wypić',
    group: 1,
    irregular: false,
    present: { ja: 'piję', ty: 'pijesz', 'on/ona/ono': 'pije', my: 'pijemy', wy: 'pijecie', 'oni/one': 'piją' },
    past: {
      'ja (m)': 'piłem', 'ja (f)': 'piłam', 'ty (m)': 'piłeś', 'ty (f)': 'piłaś',
      on: 'pił', ona: 'piła', ono: 'piło',
      'my (m)': 'piliśmy', 'my (f)': 'piłyśmy', 'wy (m)': 'piliście', 'wy (f)': 'piłyście',
      oni: 'pili', one: 'piły'
    },
    future: futureWithByc('pić'),
    imperative: { ty: 'pij', wy: 'pijcie', my: 'pijmy' },
    example: { polish: 'Piję wodę.', english: "I'm drinking water." }
  },
  {
    id: 'czytac',
    infinitive: 'czytać',
    meaning: 'to read',
    aspect: 'imperfective',
    aspectPartner: 'przeczytać',
    group: 3,
    irregular: false,
    present: { ja: 'czytam', ty: 'czytasz', 'on/ona/ono': 'czyta', my: 'czytamy', wy: 'czytacie', 'oni/one': 'czytają' },
    past: {
      'ja (m)': 'czytałem', 'ja (f)': 'czytałam', 'ty (m)': 'czytałeś', 'ty (f)': 'czytałaś',
      on: 'czytał', ona: 'czytała', ono: 'czytało',
      'my (m)': 'czytaliśmy', 'my (f)': 'czytałyśmy', 'wy (m)': 'czytaliście', 'wy (f)': 'czytałyście',
      oni: 'czytali', one: 'czytały'
    },
    future: futureWithByc('czytać'),
    imperative: { ty: 'czytaj', wy: 'czytajcie', my: 'czytajmy' },
    example: { polish: 'Czytam książkę.', english: "I'm reading a book." }
  },
  {
    id: 'pisac',
    infinitive: 'pisać',
    meaning: 'to write',
    aspect: 'imperfective',
    aspectPartner: 'napisać',
    group: 1,
    irregular: true,
    present: { ja: 'piszę', ty: 'piszesz', 'on/ona/ono': 'pisze', my: 'piszemy', wy: 'piszecie', 'oni/one': 'piszą' },
    past: {
      'ja (m)': 'pisałem', 'ja (f)': 'pisałam', 'ty (m)': 'pisałeś', 'ty (f)': 'pisałaś',
      on: 'pisał', ona: 'pisała', ono: 'pisało',
      'my (m)': 'pisaliśmy', 'my (f)': 'pisałyśmy', 'wy (m)': 'pisaliście', 'wy (f)': 'pisałyście',
      oni: 'pisali', one: 'pisały'
    },
    future: futureWithByc('pisać'),
    imperative: { ty: 'pisz', wy: 'piszcie', my: 'piszmy' },
    example: { polish: 'Piszę list.', english: "I'm writing a letter." }
  },
  {
    id: 'lubic',
    infinitive: 'lubić',
    meaning: 'to like',
    aspect: 'imperfective',
    aspectPartner: 'polubić',
    group: 2,
    irregular: false,
    present: { ja: 'lubię', ty: 'lubisz', 'on/ona/ono': 'lubi', my: 'lubimy', wy: 'lubicie', 'oni/one': 'lubią' },
    past: {
      'ja (m)': 'lubiłem', 'ja (f)': 'lubiłam', 'ty (m)': 'lubiłeś', 'ty (f)': 'lubiłaś',
      on: 'lubił', ona: 'lubiła', ono: 'lubiło',
      'my (m)': 'lubiliśmy', 'my (f)': 'lubiłyśmy', 'wy (m)': 'lubiliście', 'wy (f)': 'lubiłyście',
      oni: 'lubili', one: 'lubiły'
    },
    future: futureWithByc('lubić'),
    imperative: { ty: 'lub', wy: 'lubcie', my: 'lubmy' },
    example: { polish: 'Lubię kawę.', english: 'I like coffee.' }
  },
  {
    id: 'kochac',
    infinitive: 'kochać',
    meaning: 'to love',
    aspect: 'imperfective',
    aspectPartner: 'pokochać',
    group: 3,
    irregular: false,
    present: { ja: 'kocham', ty: 'kochasz', 'on/ona/ono': 'kocha', my: 'kochamy', wy: 'kochacie', 'oni/one': 'kochają' },
    past: {
      'ja (m)': 'kochałem', 'ja (f)': 'kochałam', 'ty (m)': 'kochałeś', 'ty (f)': 'kochałaś',
      on: 'kochał', ona: 'kochała', ono: 'kochało',
      'my (m)': 'kochaliśmy', 'my (f)': 'kochałyśmy', 'wy (m)': 'kochaliście', 'wy (f)': 'kochałyście',
      oni: 'kochali', one: 'kochały'
    },
    future: futureWithByc('kochać'),
    imperative: { ty: 'kochaj', wy: 'kochajcie', my: 'kochajmy' },
    example: { polish: 'Kocham cię.', english: 'I love you.' }
  },
  {
    id: 'pracowac',
    infinitive: 'pracować',
    meaning: 'to work',
    aspect: 'imperfective',
    aspectPartner: null,
    group: 1,
    irregular: false,
    present: { ja: 'pracuję', ty: 'pracujesz', 'on/ona/ono': 'pracuje', my: 'pracujemy', wy: 'pracujecie', 'oni/one': 'pracują' },
    past: {
      'ja (m)': 'pracowałem', 'ja (f)': 'pracowałam', 'ty (m)': 'pracowałeś', 'ty (f)': 'pracowałaś',
      on: 'pracował', ona: 'pracowała', ono: 'pracowało',
      'my (m)': 'pracowaliśmy', 'my (f)': 'pracowałyśmy', 'wy (m)': 'pracowaliście', 'wy (f)': 'pracowałyście',
      oni: 'pracowali', one: 'pracowały'
    },
    future: futureWithByc('pracować'),
    imperative: { ty: 'pracuj', wy: 'pracujcie', my: 'pracujmy' },
    example: { polish: 'Pracuję w biurze.', english: 'I work in an office.' }
  },
  {
    id: 'mieszkac',
    infinitive: 'mieszkać',
    meaning: 'to live, to reside',
    aspect: 'imperfective',
    aspectPartner: 'zamieszkać',
    group: 3,
    irregular: false,
    present: { ja: 'mieszkam', ty: 'mieszkasz', 'on/ona/ono': 'mieszka', my: 'mieszkamy', wy: 'mieszkacie', 'oni/one': 'mieszkają' },
    past: {
      'ja (m)': 'mieszkałem', 'ja (f)': 'mieszkałam', 'ty (m)': 'mieszkałeś', 'ty (f)': 'mieszkałaś',
      on: 'mieszkał', ona: 'mieszkała', ono: 'mieszkało',
      'my (m)': 'mieszkaliśmy', 'my (f)': 'mieszkałyśmy', 'wy (m)': 'mieszkaliście', 'wy (f)': 'mieszkałyście',
      oni: 'mieszkali', one: 'mieszkały'
    },
    future: futureWithByc('mieszkać'),
    imperative: { ty: 'mieszkaj', wy: 'mieszkajcie', my: 'mieszkajmy' },
    example: { polish: 'Mieszkam w Krakowie.', english: 'I live in Kraków.' }
  },
  {
    id: 'czekac',
    infinitive: 'czekać',
    meaning: 'to wait',
    aspect: 'imperfective',
    aspectPartner: 'poczekać',
    group: 3,
    irregular: false,
    present: { ja: 'czekam', ty: 'czekasz', 'on/ona/ono': 'czeka', my: 'czekamy', wy: 'czekacie', 'oni/one': 'czekają' },
    past: {
      'ja (m)': 'czekałem', 'ja (f)': 'czekałam', 'ty (m)': 'czekałeś', 'ty (f)': 'czekałaś',
      on: 'czekał', ona: 'czekała', ono: 'czekało',
      'my (m)': 'czekaliśmy', 'my (f)': 'czekałyśmy', 'wy (m)': 'czekaliście', 'wy (f)': 'czekałyście',
      oni: 'czekali', one: 'czekały'
    },
    future: futureWithByc('czekać'),
    imperative: { ty: 'czekaj', wy: 'czekajcie', my: 'czekajmy' },
    example: { polish: 'Czekam na autobus.', english: "I'm waiting for the bus." }
  }
];

// Tense metadata used by the UI (labels + which person set applies).
export const TENSES = [
  { id: 'present', label: 'Present', polish: 'Czas teraźniejszy', persons: PRESENT_PERSONS },
  { id: 'past', label: 'Past', polish: 'Czas przeszły', persons: PAST_PERSONS },
  { id: 'future', label: 'Future', polish: 'Czas przyszły', persons: PRESENT_PERSONS },
  { id: 'imperative', label: 'Imperative', polish: 'Tryb rozkazujący', persons: IMPERATIVE_PERSONS }
];

export function getVerbs() {
  return verbs;
}

export function getVerb(id) {
  return verbs.find(v => v.id === id) || null;
}

function groupLabel(verb) {
  return verb.irregular || verb.group === 'irregular'
    ? 'irregular'
    : `group ${verb.group}`;
}

// Build fill-in-the-blank drills for a given tense, rotating the person used
// across verbs so the whole paradigm gets practiced. Returns an array shaped
// for the existing drill engine: { prompt, answer, hint, explanation }.
export function getConjugationDrills(tense) {
  const tenseMeta = TENSES.find(t => t.id === tense);
  if (!tenseMeta) return [];

  const drills = [];
  verbs.forEach((verb, i) => {
    const forms = verb[tense];
    if (!forms) return; // e.g. no imperative

    const persons = tenseMeta.persons;
    const person = persons[i % persons.length];
    const answer = forms[person];
    if (!answer) return;

    const tenseTag = tense === 'present' ? '' : ` — ${tenseMeta.label.toLowerCase()}`;
    drills.push({
      prompt: `${person} ___ (${verb.infinitive}${tenseTag})`,
      answer,
      hint: verb.meaning,
      explanation: `${verb.infinitive} (${groupLabel(verb)}) → ${person}: ${answer}`
    });
  });
  return drills;
}

// ---- English glosses for conjugated forms -------------------------------
// Compact per-verb English: bare form (base), 3rd-person singular (third),
// and English past (uniform across persons). The full phrase is generated
// with the correct subject pronoun per person and tense. być is irregular
// in English too and is handled separately.
const VERB_EN = {
  miec: { base: 'have', third: 'has', past: 'had' },
  moc: { base: 'can', third: 'can', past: 'could', futureBase: 'be able to' },
  chciec: { base: 'want', third: 'wants', past: 'wanted' },
  musiec: { base: 'have to', third: 'has to', past: 'had to' },
  robic: { base: 'do/make', third: 'does/makes', past: 'did/made' },
  mowic: { base: 'speak/say', third: 'speaks/says', past: 'spoke/said' },
  wiedziec: { base: 'know', third: 'knows', past: 'knew' },
  znac: { base: 'know', third: 'knows', past: 'knew' },
  myslec: { base: 'think', third: 'thinks', past: 'thought' },
  isc: { base: 'go', third: 'goes', past: 'went' },
  chodzic: { base: 'go/walk', third: 'goes/walks', past: 'went/walked' },
  jechac: { base: 'go', third: 'goes', past: 'went' },
  widziec: { base: 'see', third: 'sees', past: 'saw' },
  dawac: { base: 'give', third: 'gives', past: 'gave' },
  brac: { base: 'take', third: 'takes', past: 'took' },
  jesc: { base: 'eat', third: 'eats', past: 'ate' },
  pic: { base: 'drink', third: 'drinks', past: 'drank' },
  czytac: { base: 'read', third: 'reads', past: 'read' },
  pisac: { base: 'write', third: 'writes', past: 'wrote' },
  lubic: { base: 'like', third: 'likes', past: 'liked' },
  kochac: { base: 'love', third: 'loves', past: 'loved' },
  pracowac: { base: 'work', third: 'works', past: 'worked' },
  mieszkac: { base: 'live', third: 'lives', past: 'lived' },
  czekac: { base: 'wait', third: 'waits', past: 'waited' }
};

const EN_SUBJECT_PRESENT = {
  'ja': 'I', 'ty': 'you', 'on/ona/ono': 'he/she/it',
  'my': 'we', 'wy': 'you (pl)', 'oni/one': 'they'
};
const EN_SUBJECT_PAST = {
  'ja (m)': 'I', 'ja (f)': 'I', 'ty (m)': 'you', 'ty (f)': 'you',
  'on': 'he', 'ona': 'she', 'ono': 'it',
  'my (m)': 'we', 'my (f)': 'we', 'wy (m)': 'you (pl)', 'wy (f)': 'you (pl)',
  'oni': 'they', 'one': 'they'
};

function bycEnglish(tense, person) {
  if (tense === 'present') {
    return {
      'ja': 'I am', 'ty': 'you are', 'on/ona/ono': 'he/she/it is',
      'my': 'we are', 'wy': 'you are (pl)', 'oni/one': 'they are'
    }[person] || '';
  }
  if (tense === 'future') {
    return `${EN_SUBJECT_PRESENT[person]} will be`;
  }
  if (tense === 'past') {
    const byPerson = { on: 'he was', ona: 'she was', ono: 'it was' };
    if (byPerson[person]) return byPerson[person];
    const subj = EN_SUBJECT_PAST[person];
    return `${subj} ${subj === 'I' ? 'was' : 'were'}`;
  }
  if (tense === 'imperative') {
    return person === 'my' ? "let's be" : person === 'wy' ? 'be! (pl)' : 'be!';
  }
  return '';
}

// English translation of one conjugated form,
// e.g. conjugationEnglish(robic, 'present', 'ja') -> "I do/make".
export function conjugationEnglish(verb, tense, person) {
  if (!verb) return '';
  if (verb.id === 'byc') return bycEnglish(tense, person);
  const en = VERB_EN[verb.id];
  if (!en) return '';
  if (tense === 'present') {
    const v = person === 'on/ona/ono' ? en.third : en.base;
    return `${EN_SUBJECT_PRESENT[person]} ${v}`;
  }
  if (tense === 'future') {
    return `${EN_SUBJECT_PRESENT[person]} will ${en.futureBase || en.base}`;
  }
  if (tense === 'past') {
    return `${EN_SUBJECT_PAST[person]} ${en.past}`;
  }
  if (tense === 'imperative') {
    const b = en.imperativeBase || en.base;
    return person === 'my' ? `let's ${b}` : person === 'wy' ? `${b}! (pl)` : `${b}!`;
  }
  return '';
}

// Build spaced-repetition card seeds for a verb. Each seed is a plain object
// describing one conjugated form; the caller wraps it with SRS bookkeeping.
// Includes present + future (all persons), core past forms, and imperative.
export function getConjugationCardSeeds(verb) {
  const seeds = [];
  const add = (tense, person, form) => {
    if (!form) return;
    seeds.push({
      key: `${verb.infinitive} · ${person} · ${tense}`,
      infinitive: verb.infinitive,
      meaning: verb.meaning,
      tense,
      person,
      form,
      english: conjugationEnglish(verb, tense, person)
    });
  };

  PRESENT_PERSONS.forEach(p => add('present', p, verb.present?.[p]));
  PRESENT_PERSONS.forEach(p => add('future', p, verb.future?.[p]));
  // Core past forms (a representative subset of the 13 gendered forms).
  ['ja (m)', 'ja (f)', 'on', 'ona', 'oni', 'one'].forEach(p => add('past', p, verb.past?.[p]));
  if (verb.imperative) {
    IMPERATIVE_PERSONS.forEach(p => add('imperative', p, verb.imperative?.[p]));
  }
  return seeds;
}
