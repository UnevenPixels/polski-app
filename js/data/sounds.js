export const sounds = {
  alphabet: [
    "A", "Ą", "B", "C", "Ć", "D", "E", "Ę", "F", "G", "H", "I", "J", "K", "L", "Ł",
    "M", "N", "Ń", "O", "Ó", "P", "R", "S", "Ś", "T", "U", "W", "Y", "Z", "Ź", "Ż"
  ],

  vowels: [
    { letter: "a", sound: 'like "a" in "father"', example: "tak (yes)" },
    { letter: "e", sound: 'like "e" in "bed"', example: "ten (this)" },
    { letter: "i", sound: 'like "ee" in "see"', example: "i (and)" },
    { letter: "o", sound: 'like "o" in "lot"', example: "to (this)" },
    { letter: "u / ó", sound: 'like "oo" in "boot"', example: "tu (here), mój (my)" },
    { letter: "y", sound: 'like "i" in "bit"', example: "ty (you)" }
  ],

  nasalVowels: [
    { 
      letter: "ą", 
      sound: 'nasal "on/om"', 
      example: "są (they are)",
      notes: "Before consonants: usually 'on' or 'om'. Before ć or dź: pronounced 'oń'."
    },
    { 
      letter: "ę", 
      sound: 'nasal "en/em"', 
      example: "się (self)",
      notes: "At word end: often pronounced like regular 'e'. Before ć or dź: pronounced 'eń'."
    }
  ],

  consonants: [
    { letter: "c", sound: 'like "ts" in "fits"', example: "co (what)" },
    { letter: "ć / ci", sound: 'soft "ch" (like "cheese")', example: "być (to be), ciemny (dark)" },
    { letter: "cz", sound: 'hard "ch" (like "chalk")', example: "czas (time)" },
    { letter: "dz", sound: 'like "ds" in "odds"', example: "bardzo (very)" },
    { letter: "dź / dzi", sound: 'soft "j" (like "jeans")', example: "dźwięk (sound), dzień (day)" },
    { letter: "dż", sound: 'hard "j" (like "jam")', example: "dżem (jam)" },
    { letter: "h / ch", sound: 'raspy "h" (like Scottish "loch")', example: "herbata (tea), chleb (bread)" },
    { letter: "j", sound: 'like "y" in "yes"', example: "ja (I)" },
    { letter: "ł", sound: 'like English "w"', example: "mały (small)" },
    { letter: "ń / ni", sound: 'like "ny" in "canyon"', example: "koń (horse), nie (no)" },
    { letter: "r", sound: "trilled (like Spanish/Italian)", example: "rok (year)" },
    { letter: "ś / si", sound: 'soft "sh" (like "sheep")', example: "się (self), siedem (seven)" },
    { letter: "sz", sound: 'hard "sh" (like "shop")', example: "szkoła (school)" },
    { letter: "w", sound: 'like English "v"', example: "woda (water)" },
    { letter: "ź / zi", sound: 'soft "zh"', example: "źle (badly), zima (winter)" },
    { letter: "ż / rz", sound: 'hard "zh" (like "pleasure")', example: "może (maybe), rzeka (river)" }
  ],

  rules: {
    stress: {
      title: "Word Stress",
      description: "Stress falls on the second-to-last (penultimate) syllable.",
      examples: [
        "war-SZA-wa (Warsaw)",
        "u-ni-wer-sy-TE-tu (university)",
        "SPRA-wa (matter)"
      ],
      exception: "Words ending in -yka or -ika take stress on the third-to-last syllable: ma-te-MA-ty-ka"
    },
    devoicing: {
      title: "Final Devoicing",
      description: "Voiced consonants become unvoiced at the end of words.",
      pairs: [
        { voiced: "b", unvoiced: "p", example: "chleb sounds like 'chlep'" },
        { voiced: "d", unvoiced: "t", example: "sad sounds like 'sat'" },
        { voiced: "g", unvoiced: "k", example: "róg sounds like 'rók'" },
        { voiced: "w", unvoiced: "f", example: "paw sounds like 'paf'" },
        { voiced: "z", unvoiced: "s", example: "raz sounds like 'ras'" },
        { voiced: "ż/rz", unvoiced: "sz", example: "talerz sounds like 'talerš'" },
        { voiced: "ź", unvoiced: "ś", example: "teraz sounds like 'teraś'" },
        { voiced: "dz", unvoiced: "c", example: "" },
        { voiced: "dź", unvoiced: "ć", example: "chodź sounds like 'choć'" },
        { voiced: "dż", unvoiced: "cz", example: "" }
      ]
    },
    softening: {
      title: "Softening with 'i'",
      description: "The letter 'i' after certain consonants makes them soft.",
      rules: [
        "ci = ć (before vowels)",
        "si = ś (before vowels)",
        "zi = ź (before vowels)",
        "ni = ń (before vowels)",
        "dzi = dź (before vowels)"
      ],
      example: "dzień (day) vs. dnia (of the day)"
    },
    kreska: {
      title: "Kreska (Acute Accent)",
      description: "The accent mark (kreska) appears only at word end or before consonants. Before vowels, use 'i' instead.",
      examples: [
        "koń (horse) → konia (of a horse)",
        "gość (guest) → goście (guests)"
      ]
    }
  },

  hardSoftPairs: [
    { hard: "c", soft: "ć (ci)", example: "noc → nocy" },
    { hard: "s", soft: "ś (si)", example: "nos → nosie" },
    { hard: "z", soft: "ź (zi)", example: "wóz → wozie" },
    { hard: "n", soft: "ń (ni)", example: "pan → pani" },
    { hard: "dz", soft: "dź (dzi)", example: "" },
    { hard: "cz", soft: "ć (ci)", example: "" },
    { hard: "sz", soft: "ś (si)", example: "" },
    { hard: "ż/rz", soft: "ź (zi)", example: "" },
    { hard: "t", soft: "ci", example: "brat → braci" },
    { hard: "d", soft: "dzi", example: "sąsiad → sąsiedzi" },
    { hard: "k", soft: "cy", example: "Polak → Polacy" },
    { hard: "g", soft: "dzy", example: "kolega → koledzy" },
    { hard: "ch", soft: "si", example: "Czech → Czesi" },
    { hard: "r", soft: "rzy", example: "doktor → doktorzy" },
    { hard: "ł", soft: "li", example: "anioł → anieli" }
  ]
};
