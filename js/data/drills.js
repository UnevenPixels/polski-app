// Polish grammar drills - rapid-fire mechanical practice
// Categories: cases (the most needed), aspect pairs, conjugation

export const drillCategories = {
  genitive: {
    title: "Genitive Case",
    titlePl: "Dopełniacz",
    description: "Negation, possession, after certain prepositions",
    icon: "📚",
    drills: [
      { prompt: "Nie mam ___ (czas)", answer: "czasu", hint: "I don't have time", explanation: "Negation requires genitive" },
      { prompt: "Nie mam ___ (pies)", answer: "psa", hint: "I don't have a dog", explanation: "Animate masculine: -a" },
      { prompt: "Nie mam ___ (kot)", answer: "kota", hint: "I don't have a cat", explanation: "Animate masculine: -a" },
      { prompt: "Nie ma ___ (chleb)", answer: "chleba", hint: "There's no bread", explanation: "After 'nie ma'" },
      { prompt: "Nie ma ___ (woda)", answer: "wody", hint: "There's no water", explanation: "Feminine -a → -y" },
      { prompt: "Szukam ___ (ulica)", answer: "ulicy", hint: "I'm looking for the street", explanation: "Szukać + genitive" },
      { prompt: "Idę do ___ (dom)", answer: "domu", hint: "I'm going home", explanation: "After 'do'" },
      { prompt: "Idę do ___ (sklep)", answer: "sklepu", hint: "I'm going to the shop", explanation: "After 'do'" },
      { prompt: "Idę do ___ (szkoła)", answer: "szkoły", hint: "I'm going to school", explanation: "Feminine -a → -y" },
      { prompt: "Wracam z ___ (praca)", answer: "pracy", hint: "I'm returning from work", explanation: "After 'z'" },
      { prompt: "Wracam z ___ (Warszawa)", answer: "Warszawy", hint: "I'm returning from Warsaw", explanation: "Feminine -a → -y" },
      { prompt: "Filiżanka ___ (kawa)", answer: "kawy", hint: "A cup of coffee", explanation: "Quantity + genitive" },
      { prompt: "Szklanka ___ (mleko)", answer: "mleka", hint: "A glass of milk", explanation: "Neuter -o → -a" },
      { prompt: "Bez ___ (cukier)", answer: "cukru", hint: "Without sugar", explanation: "After 'bez'" },
      { prompt: "Dla ___ (mama)", answer: "mamy", hint: "For mom", explanation: "After 'dla'" },
      { prompt: "Od ___ (przyjaciel)", answer: "przyjaciela", hint: "From a friend", explanation: "Animate masc.: -a" },
      { prompt: "Nie lubię ___ (herbata)", answer: "herbaty", hint: "I don't like tea", explanation: "Negation + genitive" },
      { prompt: "Pięć ___ (zloty)", answer: "złotych", hint: "Five zlotys", explanation: "5+ takes genitive plural" },
      { prompt: "Nie ma ___ (problem)", answer: "problemu", hint: "There's no problem", explanation: "Inanimate masc.: -u" },
      { prompt: "Kawałek ___ (chleb)", answer: "chleba", hint: "A piece of bread", explanation: "Quantity + genitive" }
    ]
  },

  accusative: {
    title: "Accusative Case",
    titlePl: "Biernik",
    description: "Direct object of transitive verbs",
    icon: "🎯",
    drills: [
      { prompt: "Mam ___ (samochód)", answer: "samochód", hint: "I have a car", explanation: "Inanimate masc. = nominative" },
      { prompt: "Mam ___ (pies)", answer: "psa", hint: "I have a dog", explanation: "Animate masc.: -a" },
      { prompt: "Mam ___ (kot)", answer: "kota", hint: "I have a cat", explanation: "Animate masc.: -a" },
      { prompt: "Widzę ___ (kobieta)", answer: "kobietę", hint: "I see a woman", explanation: "Feminine -a → -ę" },
      { prompt: "Widzę ___ (mężczyzna)", answer: "mężczyznę", hint: "I see a man", explanation: "Feminine-pattern -a → -ę" },
      { prompt: "Lubię ___ (kawa)", answer: "kawę", hint: "I like coffee", explanation: "Feminine -a → -ę" },
      { prompt: "Piję ___ (woda)", answer: "wodę", hint: "I'm drinking water", explanation: "Feminine -a → -ę" },
      { prompt: "Czytam ___ (książka)", answer: "książkę", hint: "I'm reading a book", explanation: "Feminine -a → -ę" },
      { prompt: "Jem ___ (jabłko)", answer: "jabłko", hint: "I'm eating an apple", explanation: "Neuter unchanged" },
      { prompt: "Mam ___ (siostra)", answer: "siostrę", hint: "I have a sister", explanation: "Feminine -a → -ę" },
      { prompt: "Znam ___ (Anna)", answer: "Annę", hint: "I know Anna", explanation: "Feminine name -a → -ę" },
      { prompt: "Zna ___ (Tomek)", answer: "Tomka", hint: "He knows Tomek", explanation: "Animate masc.: -a" },
      { prompt: "Mam ___ (brat)", answer: "brata", hint: "I have a brother", explanation: "Animate masc.: -a" },
      { prompt: "Pisze ___ (list)", answer: "list", hint: "He's writing a letter", explanation: "Inanimate masc. = nom." },
      { prompt: "Kupuję ___ (chleb)", answer: "chleb", hint: "I'm buying bread", explanation: "Inanimate masc. = nom." },
      { prompt: "Oglądam ___ (film)", answer: "film", hint: "I'm watching a movie", explanation: "Inanimate masc. = nom." }
    ]
  },

  locative: {
    title: "Locative Case",
    titlePl: "Miejscownik",
    description: "After w, na, o, przy",
    icon: "📍",
    drills: [
      { prompt: "Jestem w ___ (dom)", answer: "domu", hint: "I'm at home", explanation: "Masc. -u" },
      { prompt: "Jestem w ___ (Warszawa)", answer: "Warszawie", hint: "I'm in Warsaw", explanation: "Fem. -a → -e" },
      { prompt: "Jestem w ___ (Kraków)", answer: "Krakowie", hint: "I'm in Kraków", explanation: "Masc. → -ie" },
      { prompt: "Mieszkam w ___ (Polska)", answer: "Polsce", hint: "I live in Poland", explanation: "Fem. -ka → -ce" },
      { prompt: "Pracuję w ___ (biuro)", answer: "biurze", hint: "I work in an office", explanation: "Neut. -o → -e" },
      { prompt: "Na ___ (stół)", answer: "stole", hint: "On the table", explanation: "Masc. -ó- → -o-, +e" },
      { prompt: "W ___ (sklep)", answer: "sklepie", hint: "In the shop", explanation: "Masc. + -ie" },
      { prompt: "Na ___ (uniwersytet)", answer: "uniwersytecie", hint: "At university", explanation: "-t → -cie" },
      { prompt: "O ___ (książka)", answer: "książce", hint: "About a book", explanation: "-ka → -ce" },
      { prompt: "W ___ (samochód)", answer: "samochodzie", hint: "In the car", explanation: "-d → -dzie" },
      { prompt: "Na ___ (lotnisko)", answer: "lotnisku", hint: "At the airport", explanation: "-ko → -ku" },
      { prompt: "W ___ (szkoła)", answer: "szkole", hint: "At school", explanation: "Fem. -a → -e" },
      { prompt: "O ___ (matka)", answer: "matce", hint: "About mother", explanation: "-ka → -ce" },
      { prompt: "Przy ___ (okno)", answer: "oknie", hint: "By the window", explanation: "Neut. -o → -ie" },
      { prompt: "W ___ (mieszkanie)", answer: "mieszkaniu", hint: "In the apartment", explanation: "Neut. -e → -u" }
    ]
  },

  instrumental: {
    title: "Instrumental Case",
    titlePl: "Narzędnik",
    description: "Means/tools, predicate nouns, with z/przed/za/nad/pod",
    icon: "🔧",
    drills: [
      { prompt: "Jadę ___ (autobus)", answer: "autobusem", hint: "I go by bus", explanation: "Masc. + -em" },
      { prompt: "Jadę ___ (pociąg)", answer: "pociągiem", hint: "I go by train", explanation: "Masc. + -em (g→gi)" },
      { prompt: "Jadę ___ (samochód)", answer: "samochodem", hint: "I go by car", explanation: "Masc. + -em" },
      { prompt: "Lecę ___ (samolot)", answer: "samolotem", hint: "I fly by plane", explanation: "Masc. + -em" },
      { prompt: "Piszę ___ (długopis)", answer: "długopisem", hint: "I write with a pen", explanation: "Masc. + -em" },
      { prompt: "Jestem ___ (student)", answer: "studentem", hint: "I am a student (m)", explanation: "Predicate + -em" },
      { prompt: "Jestem ___ (studentka)", answer: "studentką", hint: "I am a student (f)", explanation: "Fem. -a → -ą" },
      { prompt: "Jest ___ (lekarz)", answer: "lekarzem", hint: "He is a doctor", explanation: "Predicate + -em" },
      { prompt: "Z ___ (mama)", answer: "mamą", hint: "With mom", explanation: "Fem. -a → -ą" },
      { prompt: "Z ___ (przyjaciel)", answer: "przyjacielem", hint: "With a friend", explanation: "Masc. + -em" },
      { prompt: "Pod ___ (stół)", answer: "stołem", hint: "Under the table", explanation: "Masc. + -em" },
      { prompt: "Nad ___ (morze)", answer: "morzem", hint: "Above the sea", explanation: "Neut. + -em" },
      { prompt: "Z ___ (siostra)", answer: "siostrą", hint: "With sister", explanation: "Fem. -a → -ą" },
      { prompt: "Interesuję się ___ (sport)", answer: "sportem", hint: "I'm interested in sport", explanation: "+ instrumental" },
      { prompt: "Zajmuję się ___ (muzyka)", answer: "muzyką", hint: "I deal with music", explanation: "Fem. -a → -ą" }
    ]
  },

  aspect: {
    title: "Verb Aspect",
    titlePl: "Aspekt",
    description: "Imperfective vs perfective: ongoing vs completed",
    icon: "⏱️",
    drills: [
      { prompt: "Wczoraj ___ list. (write - completed)", answer: "napisałem", hint: "Yesterday I wrote a letter (finished)", explanation: "Perfective: napisać" },
      { prompt: "Często ___ listy. (write - habitual)", answer: "piszę", hint: "I often write letters (habitual)", explanation: "Imperfective: pisać" },
      { prompt: "Już ___ książkę. (read - completed)", answer: "przeczytałem", hint: "I already read the book", explanation: "Perfective: przeczytać" },
      { prompt: "Teraz ___ książkę. (read - in progress)", answer: "czytam", hint: "I'm reading a book now", explanation: "Imperfective: czytać" },
      { prompt: "___ obiad o 18:00. (eat - completed)", answer: "zjadłem", hint: "I ate dinner at 6pm", explanation: "Perfective: zjeść" },
      { prompt: "Codziennie ___ obiad. (eat - habitual)", answer: "jem", hint: "I eat dinner every day", explanation: "Imperfective: jeść" },
      { prompt: "Wczoraj ___ pracę. (do - completed)", answer: "zrobiłem", hint: "Yesterday I finished the work", explanation: "Perfective: zrobić" },
      { prompt: "Co ___? (do - now)", answer: "robisz", hint: "What are you doing?", explanation: "Imperfective: robić" },
      { prompt: "Jutro ___ list. (write - future complete)", answer: "napiszę", hint: "Tomorrow I will write a letter", explanation: "Perfective future" },
      { prompt: "Jutro ___ przez godzinę. (write - future ongoing)", answer: "będę pisać", hint: "Tomorrow I'll be writing for an hour", explanation: "Imperfective future" },
      { prompt: "___ kawę i wyszedłem. (drink - completed)", answer: "wypiłem", hint: "I drank coffee and left", explanation: "Perfective: wypić" },
      { prompt: "Codziennie ___ kawę. (drink - habitual)", answer: "piję", hint: "I drink coffee every day", explanation: "Imperfective: pić" }
    ]
  },

  adjectives: {
    title: "Adjective Agreement",
    titlePl: "Zgodność przymiotników",
    description: "Match adjective ending to noun gender",
    icon: "🎨",
    drills: [
      { prompt: "___ dom (big m)", answer: "duży", hint: "big house", explanation: "Masc. -y" },
      { prompt: "___ książka (big f)", answer: "duża", hint: "big book", explanation: "Fem. -a" },
      { prompt: "___ okno (big n)", answer: "duże", hint: "big window", explanation: "Neut. -e" },
      { prompt: "___ samochód (new m)", answer: "nowy", hint: "new car", explanation: "Masc. -y" },
      { prompt: "___ koszula (new f)", answer: "nowa", hint: "new shirt", explanation: "Fem. -a" },
      { prompt: "___ mieszkanie (new n)", answer: "nowe", hint: "new apartment", explanation: "Neut. -e" },
      { prompt: "___ pies (good m)", answer: "dobry", hint: "good dog", explanation: "Masc. -y" },
      { prompt: "___ kawa (good f)", answer: "dobra", hint: "good coffee", explanation: "Fem. -a" },
      { prompt: "___ jedzenie (good n)", answer: "dobre", hint: "good food", explanation: "Neut. -e" },
      { prompt: "___ mężczyzna (tall m)", answer: "wysoki", hint: "tall man", explanation: "Masc. -i (after k)" },
      { prompt: "___ kobieta (tall f)", answer: "wysoka", hint: "tall woman", explanation: "Fem. -a" },
      { prompt: "___ stół (small m)", answer: "mały", hint: "small table", explanation: "Masc. -y" },
      { prompt: "___ herbata (hot f)", answer: "gorąca", hint: "hot tea", explanation: "Fem. -a" },
      { prompt: "___ piwo (cold n)", answer: "zimne", hint: "cold beer", explanation: "Neut. -e" }
    ]
  },

  numbers: {
    title: "Numbers with Nouns",
    titlePl: "Liczby z rzeczownikami",
    description: "How numbers change noun forms",
    icon: "🔢",
    drills: [
      { prompt: "1 ___ (kawa)", answer: "kawa", hint: "1 coffee", explanation: "1 = nominative" },
      { prompt: "2 ___ (kawa)", answer: "kawy", hint: "2 coffees", explanation: "2,3,4 + plural nominative" },
      { prompt: "3 ___ (książka)", answer: "książki", hint: "3 books", explanation: "2,3,4 + nominative plural" },
      { prompt: "5 ___ (książka)", answer: "książek", hint: "5 books", explanation: "5+ takes genitive plural" },
      { prompt: "10 ___ (złoty)", answer: "złotych", hint: "10 zlotys", explanation: "5+ → genitive pl." },
      { prompt: "2 ___ (dziecko)", answer: "dzieci", hint: "2 children", explanation: "Irregular plural" },
      { prompt: "5 ___ (dziecko)", answer: "dzieci", hint: "5 children", explanation: "Same form 5+" },
      { prompt: "1 ___ (godzina)", answer: "godzina", hint: "1 hour", explanation: "1 = nominative" },
      { prompt: "2 ___ (godzina)", answer: "godziny", hint: "2 hours", explanation: "2-4 + nom. pl." },
      { prompt: "5 ___ (godzina)", answer: "godzin", hint: "5 hours", explanation: "5+ → gen. pl." },
      { prompt: "21 ___ (lat / rok)", answer: "lat", hint: "21 years (years use 'lat')", explanation: "Use 'lat' for 5+ and 11-19" },
      { prompt: "3 ___ (rok)", answer: "lata", hint: "3 years", explanation: "2-4 use 'lata'" }
    ]
  }
};

export function getDrillCategory(id) {
  return drillCategories[id] || null;
}

export function getCategoryList() {
  return Object.entries(drillCategories).map(([id, cat]) => ({
    id,
    title: cat.title,
    titlePl: cat.titlePl,
    description: cat.description,
    icon: cat.icon,
    count: cat.drills.length
  }));
}
