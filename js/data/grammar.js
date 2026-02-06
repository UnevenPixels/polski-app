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
  ]
};
