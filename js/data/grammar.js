export const grammar = {
  cases: [
    {
      name: "Nominative",
      polish: "Mianownik",
      question: "Kto? Co?",
      use: "Subject of the sentence",
      example: "To jest dom. (This is a house.)"
    },
    {
      name: "Genitive",
      polish: "Dopełniacz",
      question: "Kogo? Czego?",
      use: "Possession, negation, quantities, after certain prepositions (bez, dla, do, od, u, z)",
      example: "Nie mam czasu. (I don't have time.)"
    },
    {
      name: "Dative",
      polish: "Celownik",
      question: "Komu? Czemu?",
      use: "Indirect object (to/for someone)",
      example: "Daję ci książkę. (I'm giving you a book.)"
    },
    {
      name: "Accusative",
      polish: "Biernik",
      question: "Kogo? Co?",
      use: "Direct object of transitive verbs",
      example: "Widzę dom. (I see a house.)"
    },
    {
      name: "Instrumental",
      polish: "Narzędnik",
      question: "Z kim? Z czym?",
      use: "Means/tool, predicate nouns, after prepositions (z, przed, za, nad, pod, między)",
      example: "Jadę autobusem. (I'm going by bus.)"
    },
    {
      name: "Locative",
      polish: "Miejscownik",
      question: "O kim? O czym?",
      use: "Only after prepositions (w, na, o, po, przy)",
      example: "Jestem w domu. (I am at home.)"
    },
    {
      name: "Vocative",
      polish: "Wołacz",
      question: "—",
      use: "Direct address (obligatory for titles)",
      example: "Panie profesorze! (Professor!)"
    }
  ],
  
  verbConjugations: {
    byc: {
      infinitive: "być",
      meaning: "to be",
      present: {
        ja: "jestem",
        ty: "jesteś",
        "on/ona/ono": "jest",
        my: "jesteśmy",
        wy: "jesteście",
        "oni/one": "są"
      },
      past: {
        "ja (m)": "byłem",
        "ja (f)": "byłam",
        "ty (m)": "byłeś",
        "ty (f)": "byłaś",
        "on": "był",
        "ona": "była",
        "ono": "było",
        "my (m)": "byliśmy",
        "my (f)": "byłyśmy",
        "wy (m)": "byliście",
        "wy (f)": "byłyście",
        "oni": "byli",
        "one": "były"
      },
      future: {
        ja: "będę",
        ty: "będziesz",
        "on/ona/ono": "będzie",
        my: "będziemy",
        wy: "będziecie",
        "oni/one": "będą"
      }
    },
    miec: {
      infinitive: "mieć",
      meaning: "to have",
      present: {
        ja: "mam",
        ty: "masz",
        "on/ona/ono": "ma",
        my: "mamy",
        wy: "macie",
        "oni/one": "mają"
      }
    },
    robic: {
      infinitive: "robić",
      meaning: "to do/make",
      present: {
        ja: "robię",
        ty: "robisz",
        "on/ona/ono": "robi",
        my: "robimy",
        wy: "robicie",
        "oni/one": "robią"
      }
    },
    mowic: {
      infinitive: "mówić",
      meaning: "to speak",
      present: {
        ja: "mówię",
        ty: "mówisz",
        "on/ona/ono": "mówi",
        my: "mówimy",
        wy: "mówicie",
        "oni/one": "mówią"
      }
    }
  },

  nounEndings: {
    masculine: {
      description: "Usually ends in a consonant",
      examples: ["dom", "stół", "pies", "budynek", "kościół"]
    },
    feminine: {
      description: "Usually ends in -a (sometimes -i or soft consonant)",
      examples: ["kobieta", "szkoła", "lampa", "noc", "twarz"]
    },
    neuter: {
      description: "Ends in -o, -e, -ę, or -um",
      examples: ["okno", "morze", "imię", "muzeum"]
    }
  },

  demonstratives: {
    singular: {
      masculine: "ten",
      feminine: "ta",
      neuter: "to"
    },
    plural: {
      masculine_personal: "ci",
      other: "te"
    },
    remote: {
      masculine: "tamten",
      feminine: "tamta",
      neuter: "tamto"
    }
  },

  personalPronouns: {
    nominative: {
      "1sg": "ja",
      "2sg": "ty",
      "3sg_m": "on",
      "3sg_f": "ona",
      "3sg_n": "ono",
      "1pl": "my",
      "2pl": "wy",
      "3pl_m": "oni",
      "3pl_f": "one"
    },
    accusative: {
      "1sg": "mnie",
      "2sg": "cię / ciebie",
      "3sg_m": "go / jego / niego",
      "3sg_f": "ją / nią",
      "3sg_n": "je / nie",
      "1pl": "nas",
      "2pl": "was",
      "3pl": "ich / nich"
    },
    genitive: {
      "1sg": "mnie",
      "2sg": "cię / ciebie",
      "3sg_m": "go / jego / niego",
      "3sg_f": "jej / niej",
      "3sg_n": "go / jego / niego",
      "1pl": "nas",
      "2pl": "was",
      "3pl": "ich / nich"
    },
    dative: {
      "1sg": "mi / mnie",
      "2sg": "ci / tobie",
      "3sg_m": "mu / jemu / niemu",
      "3sg_f": "jej / niej",
      "3sg_n": "mu / jemu / niemu",
      "1pl": "nam",
      "2pl": "wam",
      "3pl": "im / nim"
    }
  },

  possessivePronouns: {
    moj: {
      meaning: "my",
      masculine: "mój",
      feminine: "moja",
      neuter: "moje",
      plural: "moi / moje"
    },
    twoj: {
      meaning: "your (singular)",
      masculine: "twój",
      feminine: "twoja",
      neuter: "twoje",
      plural: "twoi / twoje"
    },
    jego: {
      meaning: "his/its",
      note: "Invariable - does not change",
      all: "jego"
    },
    jej: {
      meaning: "her",
      note: "Invariable - does not change",
      all: "jej"
    },
    nasz: {
      meaning: "our",
      masculine: "nasz",
      feminine: "nasza",
      neuter: "nasze",
      plural: "nasi / nasze"
    },
    wasz: {
      meaning: "your (plural)",
      masculine: "wasz",
      feminine: "wasza",
      neuter: "wasze",
      plural: "wasi / wasze"
    },
    ich: {
      meaning: "their",
      note: "Invariable - does not change",
      all: "ich"
    }
  },

  numbers: {
    cardinal: {
      0: "zero",
      1: "jeden",
      2: "dwa",
      3: "trzy",
      4: "cztery",
      5: "pięć",
      6: "sześć",
      7: "siedem",
      8: "osiem",
      9: "dziewięć",
      10: "dziesięć",
      11: "jedenaście",
      12: "dwanaście",
      13: "trzynaście",
      14: "czternaście",
      15: "piętnaście",
      16: "szesnaście",
      17: "siedemnaście",
      18: "osiemnaście",
      19: "dziewiętnaście",
      20: "dwadzieścia",
      30: "trzydzieści",
      40: "czterdzieści",
      50: "pięćdziesiąt",
      60: "sześćdziesiąt",
      70: "siedemdziesiąt",
      80: "osiemdziesiąt",
      90: "dziewięćdziesiąt",
      100: "sto"
    },
    ordinal: {
      1: "pierwszy",
      2: "drugi",
      3: "trzeci",
      4: "czwarty",
      5: "piąty",
      6: "szósty",
      7: "siódmy",
      8: "ósmy",
      9: "dziewiąty",
      10: "dziesiąty"
    }
  },

  daysOfWeek: [
    { polish: "poniedziałek", english: "Monday" },
    { polish: "wtorek", english: "Tuesday" },
    { polish: "środa", english: "Wednesday" },
    { polish: "czwartek", english: "Thursday" },
    { polish: "piątek", english: "Friday" },
    { polish: "sobota", english: "Saturday" },
    { polish: "niedziela", english: "Sunday" }
  ],

  months: [
    { polish: "styczeń", english: "January" },
    { polish: "luty", english: "February" },
    { polish: "marzec", english: "March" },
    { polish: "kwiecień", english: "April" },
    { polish: "maj", english: "May" },
    { polish: "czerwiec", english: "June" },
    { polish: "lipiec", english: "July" },
    { polish: "sierpień", english: "August" },
    { polish: "wrzesień", english: "September" },
    { polish: "październik", english: "October" },
    { polish: "listopad", english: "November" },
    { polish: "grudzień", english: "December" }
  ],

  pastTense: {
    description: "Formed by dropping -ć from infinitive and adding gendered endings + person endings.",
    endings: {
      singular: { "1p (m)": "-łem", "1p (f)": "-łam", "2p (m)": "-łeś", "2p (f)": "-łaś", "3p (m)": "-ł", "3p (f)": "-ła", "3p (n)": "-ło" },
      plural: { "1p (m-pers)": "-liśmy", "1p (other)": "-łyśmy", "2p (m-pers)": "-liście", "2p (other)": "-łyście", "3p (m-pers)": "-li", "3p (other)": "-ły" }
    },
    examples: {
      dać: {
        meaning: "to give",
        forms: { "ja (m)": "dałem", "ja (f)": "dałam", "ty (m)": "dałeś", "ty (f)": "dałaś", "on": "dał", "ona": "dała", "ono": "dało", "my (m-p)": "daliśmy", "my (f)": "dałyśmy", "wy (m-p)": "daliście", "wy (f)": "dałyście", "oni": "dali", "one": "dały" }
      },
      mieć: {
        meaning: "to have (note: e→a)",
        forms: { "ja (m)": "miałem", "ja (f)": "miałam", "ty (m)": "miałeś", "ty (f)": "miałaś", "on": "miał", "ona": "miała", "ono": "miało", "my (m-p)": "mieliśmy", "my (f)": "miałyśmy", "wy (m-p)": "mieliście", "wy (f)": "miałyście", "oni": "mieli", "one": "miały" }
      },
      iść: {
        meaning: "to go (irregular)",
        forms: { "on": "szedł", "ona": "szła", "ono": "szło", "oni": "szli", "one": "szły" }
      },
      jeść: {
        meaning: "to eat (irregular)",
        forms: { "on": "jadł", "ona": "jadła", "oni": "jedli", "one": "jadły" }
      }
    }
  },

  futureTense: {
    description: "Imperfective: będę + infinitive (or past form). Perfective: just present-tense conjugation.",
    auxiliary: {
      ja: "będę", ty: "będziesz", "on/ona/ono": "będzie",
      my: "będziemy", wy: "będziecie", "oni/one": "będą"
    },
    examples: {
      "imperfective with infinitive": {
        verb: "czytać (read)",
        forms: { ja: "będę czytać", ty: "będziesz czytać", on: "będzie czytać", my: "będziemy czytać" }
      },
      "imperfective with past form (colloquial, required for males)": {
        verb: "czytać (read)",
        forms: { "ja (m)": "będę czytał", "ja (f)": "będę czytała", "ty (m)": "będziesz czytał", "my (m-p)": "będziemy czytali", "my (f)": "będziemy czytały" }
      },
      "perfective (just conjugate)": {
        verb: "przeczytać (read completely)",
        forms: { ja: "przeczytam", ty: "przeczytasz", on: "przeczyta", my: "przeczytamy", wy: "przeczytacie", oni: "przeczytają" }
      }
    }
  },

  imperative: {
    description: "Drop the present-tense ending; use niech + 3rd person for formal.",
    rules: [
      "Singular: stem of 3rd person sg present (drop -e, -y, -i, or add -j after -a)",
      "Plural (you all): add -cie",
      "Let's (1st pers pl): add -my",
      "Formal: niech + pan/pani + 3rd person verb",
      "Negative commands usually use imperfective; positive commands usually perfective"
    ],
    examples: [
      { verb: "pisać (write)", imperative: "pisz! / piszcie! / piszmy!" },
      { verb: "iść (go)", imperative: "idź! / idźcie! / idźmy!" },
      { verb: "kupić (buy)", imperative: "kup! / kupcie!" },
      { verb: "czekać (wait)", imperative: "czekaj! / czekajcie!" },
      { verb: "jeść (eat)", imperative: "jedz!" },
      { verb: "wziąć (take)", imperative: "weź!" },
      { verb: "Formal", imperative: "Niech pan/pani usiądzie. (Please sit down.)" },
      { verb: "Negative", imperative: "Nie otwieraj okna! (Don't open the window!)" },
      { verb: "Positive", imperative: "Otwórz okno! (Open the window!)" }
    ]
  },

  conditional: {
    description: "Used for 'would/could/should/might', hypotheticals, and polite requests.",
    formation: "3rd-person past-tense form + particle 'by' + personal ending. The 'by' can attach to verb or earlier in sentence.",
    particle: {
      singular: { "1p": "bym", "2p": "byś", "3p": "by" },
      plural: { "1p": "byśmy", "2p": "byście", "3p": "by" }
    },
    examples: [
      { polish: "Chciałbym kawę.", english: "I would like a coffee. (male)" },
      { polish: "Chciałabym herbatę.", english: "I would like tea. (female)" },
      { polish: "Mógłbyś mi pomóc?", english: "Could you help me? (to a male)" },
      { polish: "Czy mogłabyś?", english: "Could you? (to a female)" },
      { polish: "Pomógłbym ci, gdybym miał czas.", english: "I'd help you if I had time." },
      { polish: "Gdybyś przyszedł wcześniej...", english: "If you had come earlier..." }
    ]
  },

  verbsOfMotion: {
    description: "Polish distinguishes ongoing (determinate) vs habitual (indeterminate) motion, and on foot vs by vehicle.",
    pairs: [
      { meaning: "go on foot", determinate: "iść (idę, idziesz)", indeterminate: "chodzić (chodzę, chodzisz)" },
      { meaning: "go by vehicle", determinate: "jechać (jadę, jedziesz)", indeterminate: "jeździć (jeżdżę, jeździsz)" },
      { meaning: "carry on foot", determinate: "nieść (niosę, niesiesz)", indeterminate: "nosić (noszę, nosisz)" },
      { meaning: "carry by vehicle", determinate: "wieźć (wiozę, wieziesz)", indeterminate: "wozić (wożę, wozisz)" },
      { meaning: "fly", determinate: "lecieć (lecę, lecisz)", indeterminate: "latać (latam, latasz)" },
      { meaning: "run", determinate: "biec (biegnę, biegniesz)", indeterminate: "biegać (biegam, biegasz)" }
    ],
    usage: [
      { polish: "Idę do sklepu.", english: "I'm going to the shop (right now, on foot)." },
      { polish: "Często chodzę do kina.", english: "I often go to the cinema." },
      { polish: "Jadę do Warszawy pociągiem.", english: "I'm going to Warsaw by train (now)." },
      { polish: "Zwykle jeżdżę do Warszawy autobusem.", english: "I usually travel to Warsaw by bus." }
    ],
    prefixed: [
      { prefix: "przy-", meaning: "arrive", examples: "przyjść / przychodzić (arrive on foot); przyjechać / przyjeżdżać (arrive by vehicle)" },
      { prefix: "wy-", meaning: "leave/exit", examples: "wyjść / wychodzić; wyjechać / wyjeżdżać" },
      { prefix: "pod(e)-", meaning: "approach", examples: "podejść / podchodzić; podjechać / podjeżdżać" },
      { prefix: "do-", meaning: "reach/up to", examples: "dojść / dochodzić; dojechać / dojeżdżać" },
      { prefix: "w-", meaning: "enter", examples: "wejść / wchodzić; wjechać / wjeżdżać" },
      { prefix: "wy-/od-", meaning: "depart from", examples: "wyjechać / wyjeżdżać; odjechać / odjeżdżać" },
      { prefix: "prze-", meaning: "cross/pass", examples: "przejść / przechodzić; przejechać / przejeżdżać" }
    ]
  },

  aspect: {
    description: "Polish verbs come in pairs: imperfective (ongoing, habitual, incomplete) and perfective (completed, single action).",
    rules: [
      "Imperfective: continuous, repeated, ongoing actions. Used in present, future (with będę), past.",
      "Perfective: completed actions. No present tense - conjugates like present but refers to future.",
      "Aspect pairs are usually related: pisać/napisać, robić/zrobić, czytać/przeczytać.",
      "After 'będę' you can ONLY use imperfective.",
      "Negative imperatives use imperfective: Nie otwieraj okna."
    ],
    commonPairs: [
      { imperfective: "pisać", perfective: "napisać", meaning: "to write" },
      { imperfective: "czytać", perfective: "przeczytać", meaning: "to read" },
      { imperfective: "robić", perfective: "zrobić", meaning: "to do" },
      { imperfective: "jeść", perfective: "zjeść", meaning: "to eat" },
      { imperfective: "pić", perfective: "wypić", meaning: "to drink" },
      { imperfective: "kupować", perfective: "kupić", meaning: "to buy" },
      { imperfective: "dawać", perfective: "dać", meaning: "to give" },
      { imperfective: "mówić", perfective: "powiedzieć", meaning: "to say" },
      { imperfective: "widzieć", perfective: "zobaczyć", meaning: "to see" },
      { imperfective: "brać", perfective: "wziąć", meaning: "to take" },
      { imperfective: "spotykać", perfective: "spotkać", meaning: "to meet" },
      { imperfective: "kończyć", perfective: "skończyć", meaning: "to finish" },
      { imperfective: "zaczynać", perfective: "zacząć", meaning: "to begin" },
      { imperfective: "uczyć się", perfective: "nauczyć się", meaning: "to learn" },
      { imperfective: "wracać", perfective: "wrócić", meaning: "to return" },
      { imperfective: "otwierać", perfective: "otworzyć", meaning: "to open" },
      { imperfective: "zamykać", perfective: "zamknąć", meaning: "to close" },
      { imperfective: "wybierać", perfective: "wybrać", meaning: "to choose" },
      { imperfective: "pomagać", perfective: "pomóc", meaning: "to help" },
      { imperfective: "rozumieć", perfective: "zrozumieć", meaning: "to understand" }
    ]
  },

  reflexive: {
    description: "The particle 'się' marks reflexive, reciprocal, intransitive, or impersonal use. Never appears at start of clause.",
    uses: [
      { type: "Literal reflexive", desc: "action returns to actor", examples: ["myć się (wash oneself)", "ubierać się (dress oneself)", "golić się (shave)", "czesać się (comb)"] },
      { type: "Reciprocal", desc: "'each other' / 'one another'", examples: ["spotykamy się (we meet each other)", "lubimy się (we like each other)", "całować się (kiss each other)"] },
      { type: "Intransitive form", desc: "intransitive counterpart of transitive verb", examples: ["nazywam się Anna (I'm called Anna)", "drzwi się otwierają (the door opens)", "lekcja się zaczyna (the lesson begins)"] },
      { type: "Impersonal/general", desc: "general statements", examples: ["jak się mówi po polsku? (how does one say...?)", "tu się nie pali (no smoking here)"] }
    ],
    commonReflexives: [
      { verb: "nazywać się", meaning: "to be called" },
      { verb: "uczyć się", meaning: "to study/learn" },
      { verb: "spotkać się", meaning: "to meet" },
      { verb: "śmiać się", meaning: "to laugh" },
      { verb: "bać się", meaning: "to be afraid" },
      { verb: "cieszyć się", meaning: "to be happy" },
      { verb: "martwić się", meaning: "to worry" },
      { verb: "podobać się", meaning: "to appeal to / be liked" },
      { verb: "interesować się", meaning: "to be interested in" },
      { verb: "zajmować się", meaning: "to deal with / be occupied with" }
    ]
  },

  comparison: {
    description: "Comparatives and superlatives of adjectives and adverbs.",
    rules: [
      "Comparative: usually add -szy/-sza/-sze, or use bardziej + adj for long words",
      "Superlative: prefix naj- to comparative",
      "Adverb comparative: -ej; superlative: naj- + -ej",
      "Many common adjectives are irregular"
    ],
    irregular: [
      { positive: "dobry (good)", comparative: "lepszy", superlative: "najlepszy", adv: "dobrze→lepiej→najlepiej" },
      { positive: "zły (bad)", comparative: "gorszy", superlative: "najgorszy", adv: "źle→gorzej→najgorzej" },
      { positive: "duży (big)", comparative: "większy", superlative: "największy", adv: "dużo→więcej→najwięcej" },
      { positive: "mały (small)", comparative: "mniejszy", superlative: "najmniejszy", adv: "mało→mniej→najmniej" },
      { positive: "stary (old)", comparative: "starszy", superlative: "najstarszy", adv: "" },
      { positive: "młody (young)", comparative: "młodszy", superlative: "najmłodszy", adv: "" },
      { positive: "wysoki (tall)", comparative: "wyższy", superlative: "najwyższy", adv: "wysoko→wyżej" },
      { positive: "niski (short/low)", comparative: "niższy", superlative: "najniższy", adv: "nisko→niżej" },
      { positive: "długi (long)", comparative: "dłuższy", superlative: "najdłuższy", adv: "długo→dłużej" },
      { positive: "krótki (short)", comparative: "krótszy", superlative: "najkrótszy", adv: "krótko→krócej" },
      { positive: "drogi (expensive)", comparative: "droższy", superlative: "najdroższy", adv: "drogo→drożej" },
      { positive: "tani (cheap)", comparative: "tańszy", superlative: "najtańszy", adv: "tanio→taniej" },
      { positive: "łatwy (easy)", comparative: "łatwiejszy", superlative: "najłatwiejszy", adv: "łatwo→łatwiej" },
      { positive: "trudny (difficult)", comparative: "trudniejszy", superlative: "najtrudniejszy", adv: "trudno→trudniej" }
    ],
    examples: [
      { polish: "Mój dom jest większy niż twój.", english: "My house is bigger than yours." },
      { polish: "To najlepsza książka.", english: "This is the best book." },
      { polish: "Mówię po polsku lepiej niż wcześniej.", english: "I speak Polish better than before." }
    ]
  },

  prepositions: {
    description: "Each preposition requires a specific case on the following noun.",
    byCase: {
      genitive: [
        { prep: "bez", meaning: "without" }, { prep: "do", meaning: "to, until" },
        { prep: "od", meaning: "from, since" }, { prep: "u", meaning: "at (someone's)" },
        { prep: "z(e)", meaning: "from, out of" }, { prep: "dla", meaning: "for" },
        { prep: "obok", meaning: "next to" }, { prep: "blisko", meaning: "near" },
        { prep: "około", meaning: "around, about" }, { prep: "naprzeciwko", meaning: "across from" },
        { prep: "według", meaning: "according to" }, { prep: "podczas", meaning: "during" },
        { prep: "oprócz", meaning: "besides" }, { prep: "wśród", meaning: "among" },
        { prep: "mimo", meaning: "despite" }
      ],
      dative: [
        { prep: "ku", meaning: "toward (rare)" },
        { prep: "przeciw(ko)", meaning: "against" },
        { prep: "dzięki", meaning: "thanks to" }
      ],
      accusative: [
        { prep: "przez", meaning: "through, across" },
        { prep: "na (+A)", meaning: "for (a time), onto" },
        { prep: "za (+A)", meaning: "in exchange for" },
        { prep: "o (+A)", meaning: "against, into" }
      ],
      instrumental: [
        { prep: "z(e) (+I)", meaning: "with, together with" },
        { prep: "pod(e)", meaning: "under, beneath" },
        { prep: "nad(e)", meaning: "above, over" },
        { prep: "przed(e)", meaning: "before, in front of" },
        { prep: "za (+I)", meaning: "behind, beyond" },
        { prep: "między", meaning: "between, among" },
        { prep: "poza", meaning: "besides, beyond" }
      ],
      locative: [
        { prep: "w(e)", meaning: "in, at" },
        { prep: "na (+L)", meaning: "on, at" },
        { prep: "o (+L)", meaning: "about" },
        { prep: "po (+L)", meaning: "after, along" },
        { prep: "przy", meaning: "at, near" }
      ]
    }
  },

  sentenceConstructions: {
    description: "Common sentence patterns used in everyday speech.",
    patterns: [
      {
        name: "Introducing things/people",
        polish: "To jest... / To są...",
        english: "This is... / These are...",
        examples: ["To jest mój kolega.", "To są moje okulary.", "Tu jest dobra książka."]
      },
      {
        name: "Existential 'there is'",
        polish: "Jest... / Są... (positive); Nie ma + Genitive (negative)",
        english: "There is/are... / There isn't/aren't...",
        examples: ["Czy jest sok? — Jest / Nie ma soku.", "W sklepie jest piwo.", "W sklepie nie ma piwa."]
      },
      {
        name: "Predicate noun (Instrumental)",
        polish: "X jest + Instrumental",
        english: "X is a [noun]",
        examples: ["Janek jest studentem.", "Ewa jest nauczycielką.", "On jest lekarzem."]
      },
      {
        name: "Predicate adjective (Nominative)",
        polish: "X jest + Nominative adjective",
        english: "X is [adjective]",
        examples: ["Janek jest wysoki.", "Ona jest miła.", "Kawa jest gorąca."]
      },
      {
        name: "Modal expressions (+ infinitive)",
        polish: "muszę / powinienem / mogę / chcę / wolę + infinitive",
        english: "must / should / can / want / prefer to ...",
        examples: ["Muszę iść.", "Powinieneś się uczyć.", "Mogę pomóc?", "Wolę kawę."]
      },
      {
        name: "Impersonal modals",
        polish: "można / trzeba / wolno / nie wolno + infinitive",
        english: "may / must / is allowed / not allowed",
        examples: ["Można tu palić?", "Trzeba to zrobić.", "Tu nie wolno parkować."]
      },
      {
        name: "Polite request",
        polish: "Proszę + infinitive / about a thing",
        english: "Please ... / I'd like...",
        examples: ["Proszę usiąść.", "Poproszę kawę.", "Proszę o pomoc."]
      },
      {
        name: "Conditional polite",
        polish: "Chciał(a)bym / Mógł(a)byś + infinitive",
        english: "I'd like / Could you...",
        examples: ["Chciałbym zamówić kawę.", "Czy mogłabyś mi pomóc?"]
      }
    ]
  },

  negation: {
    description: "Polish negation has several quirks worth knowing.",
    rules: [
      "Nie always goes immediately before the verb.",
      "Double (or multiple) negation is required — 'nic nie wiem' = I don't know anything (lit: nothing not know).",
      "Verbs that take Accusative switch to Genitive when negated.",
      "'be' in existential sense: positive = jest/są + Nominative; negative = nie ma + Genitive."
    ],
    examples: [
      { polish: "Nie mam czasu.", english: "I don't have time." },
      { polish: "Nic nie wiem.", english: "I don't know anything." },
      { polish: "Nikt tu nie mieszka.", english: "Nobody lives here." },
      { polish: "Nigdy tam nie byłem.", english: "I've never been there." },
      { polish: "Oglądam telewizję. → Nie oglądam telewizji.", english: "Accusative → Genitive when negated" },
      { polish: "Jest piwo → Nie ma piwa.", english: "There is beer → There is no beer" }
    ]
  },

  modalWords: {
    description: "Essential modal verbs and impersonal expressions.",
    items: [
      { word: "muszę / musisz", meaning: "must, have to", construction: "+ infinitive" },
      { word: "powinienem / powinnam", meaning: "ought to, should", construction: "+ infinitive (gendered)" },
      { word: "mogę / możesz", meaning: "can, may, is able", construction: "+ infinitive" },
      { word: "chcę / chcesz", meaning: "want", construction: "+ infinitive" },
      { word: "wolę / wolisz", meaning: "prefer", construction: "+ infinitive or noun" },
      { word: "umiem / umiesz", meaning: "know how to", construction: "+ infinitive" },
      { word: "mam / masz", meaning: "supposed to", construction: "+ infinitive (when used modally)" },
      { word: "trzeba", meaning: "one should, must", construction: "impersonal + infinitive" },
      { word: "można", meaning: "one may, can", construction: "impersonal + infinitive" },
      { word: "wolno", meaning: "is allowed", construction: "impersonal + infinitive" },
      { word: "nie wolno", meaning: "not allowed", construction: "impersonal + infinitive" },
      { word: "warto", meaning: "worth (doing)", construction: "impersonal + infinitive" }
    ]
  },

  particlesAndFillers: {
    description: "Small words that flavor Polish conversation.",
    items: [
      { word: "też", meaning: "also, too" },
      { word: "także", meaning: "also (more formal)" },
      { word: "tylko", meaning: "only" },
      { word: "już", meaning: "already" },
      { word: "jeszcze", meaning: "still, yet" },
      { word: "może", meaning: "maybe, perhaps" },
      { word: "chyba", meaning: "probably, I think" },
      { word: "właśnie", meaning: "exactly, precisely" },
      { word: "naprawdę", meaning: "really" },
      { word: "rzeczywiście", meaning: "indeed" },
      { word: "wcale (nie)", meaning: "not at all" },
      { word: "akurat", meaning: "exactly, just so" },
      { word: "no", meaning: "well, yeah (filler)" },
      { word: "więc", meaning: "so, therefore" },
      { word: "no właśnie", meaning: "exactly!" },
      { word: "oczywiście", meaning: "of course" },
      { word: "niestety", meaning: "unfortunately" },
      { word: "zresztą", meaning: "besides, anyway" },
      { word: "natomiast", meaning: "however, whereas" },
      { word: "raczej", meaning: "rather" }
    ]
  },

  soundChanges: {
    description: "Common consonant alternations that occur in declension and conjugation.",
    patterns: [
      { from: "k → c / cz", example: "ręka → w ręce (loc.), piec → pieczesz" },
      { from: "g → dz / ż", example: "noga → o nodze (loc.), móc → możesz" },
      { from: "ch → sz", example: "mucha → o musze (loc.)" },
      { from: "t → c / ci", example: "kobieta → o kobiecie (loc.)" },
      { from: "d → dzi / dź", example: "młody → młodzi (m-pers pl)" },
      { from: "s → ś / si", example: "pas → na pasie (loc.)" },
      { from: "z → ź / zi", example: "wóz → wozie (loc.)" },
      { from: "r → rz", example: "stary → starzy (m-pers pl)" },
      { from: "ł → l", example: "stół → stole (loc.); biały → biali" },
      { from: "ó → o", example: "stół → stoły (pl.); mróz → mrozu (gen.)" },
      { from: "ą → ę", example: "ząb → zęby (pl.); zacząć → zacznę" }
    ]
  },

  collectiveNumerals: {
    description: "Used with mixed-gender groups (men + women) and some nouns (children, eyes).",
    items: [
      { num: "2", form: "dwoje" },
      { num: "3", form: "troje" },
      { num: "4", form: "czworo" },
      { num: "5", form: "pięcioro" },
      { num: "6", form: "sześcioro" },
      { num: "7", form: "siedmioro" }
    ],
    examples: [
      { polish: "dwoje dzieci", english: "two children" },
      { polish: "troje studentów (mixed group)", english: "three students" },
      { polish: "pięcioro ludzi", english: "five people" }
    ]
  },

  timeExpressions: {
    description: "Useful time-related vocabulary and constructions.",
    timeOfDay: [
      { polish: "rano", english: "morning / in the morning" },
      { polish: "w południe", english: "at noon" },
      { polish: "po południu", english: "in the afternoon" },
      { polish: "wieczorem", english: "in the evening" },
      { polish: "w nocy", english: "at night" }
    ],
    clock: [
      { polish: "Która godzina?", english: "What time is it?" },
      { polish: "Jest pierwsza.", english: "It's one o'clock." },
      { polish: "Jest druga.", english: "It's two o'clock." },
      { polish: "Jest piętnasta trzydzieści.", english: "It's 15:30." },
      { polish: "O której?", english: "At what time?" },
      { polish: "O dziesiątej.", english: "At ten." }
    ],
    duration: [
      { polish: "od + Gen", english: "since / from" },
      { polish: "do + Gen", english: "until" },
      { polish: "przez + Acc", english: "for (a duration)" },
      { polish: "za + Acc", english: "in (X time from now)" }
    ]
  },

  classroomExpressions: [
    { polish: "Proszę powtórzyć.", english: "Please repeat." },
    { polish: "Nie rozumiem.", english: "I don't understand." },
    { polish: "Wolniej, proszę.", english: "Slower, please." },
    { polish: "Jak to się pisze?", english: "How is it written?" },
    { polish: "Jak to się mówi po polsku?", english: "How do you say it in Polish?" },
    { polish: "Co to znaczy?", english: "What does it mean?" },
    { polish: "Mam pytanie.", english: "I have a question." },
    { polish: "Czy mogę zapytać?", english: "May I ask?" },
    { polish: "Dziękuję bardzo.", english: "Thank you very much." },
    { polish: "Przepraszam.", english: "Excuse me / sorry." },
    { polish: "Słucham?", english: "Pardon? (lit. 'I'm listening')" }
  ]
};
