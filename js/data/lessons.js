export const lessons = {
  "1": {
    title: "First Contact",
    description: "Greetings, introductions, and basic phrases",
    grammar: ["Noun gender", "Verb 'być' (to be)", "Demonstratives (ten/ta/to)", "Numbers 1-100"],
    subLessons: {
      A: {
        title: "Cześć! (Informal Greetings)",
        dialogue: {
          context: "Two friends meet on the street",
          lines: [
            { speaker: "Agata", polish: "Cześć, Andrzej!", english: "Hi, Andrzej!" },
            { speaker: "Andrzej", polish: "Cześć, Agata! Jak się masz?", english: "Hi, Agata! How are you?" },
            { speaker: "Agata", polish: "Tak sobie. Co słychać?", english: "So-so. What's new?" },
            { speaker: "Andrzej", polish: "Nic nowego. A co słychać u ciebie?", english: "Nothing new. What's new with you?" },
            { speaker: "Agata", polish: "Też nic.", english: "Also nothing." },
            { speaker: "Andrzej", polish: "Gdzie teraz idziesz?", english: "Where are you going now?" },
            { speaker: "Agata", polish: "Idę na zajęcia. Jestem spóźniona.", english: "I'm going to class. I'm late." },
            { speaker: "Andrzej", polish: "A ja idę do domu. To na razie.", english: "And I'm going home. So see you." },
            { speaker: "Agata", polish: "Cześć, do zobaczenia!", english: "Bye, see you!" }
          ]
        },
        vocabulary: [
          { word: "cześć", meaning: "hi / bye (informal)", gender: "excl" },
          { word: "jak się masz?", meaning: "how are you? (informal)", gender: "phrase" },
          { word: "dobrze", meaning: "well, good", gender: "adv" },
          { word: "tak sobie", meaning: "so-so", gender: "phrase" },
          { word: "co słychać?", meaning: "what's new?", gender: "phrase" },
          { word: "nic nowego", meaning: "nothing new", gender: "phrase" },
          { word: "gdzie", meaning: "where", gender: "adv" },
          { word: "teraz", meaning: "now", gender: "adv" },
          { word: "iść", meaning: "to go (on foot)", gender: "v" },
          { word: "dom", meaning: "house, home", gender: "m" },
          { word: "na razie", meaning: "see you, for now", gender: "phrase" },
          { word: "do zobaczenia", meaning: "see you", gender: "phrase" }
        ],
        exercises: [
          { type: "gender-match", prompt: "___ dom (this house)", options: ["ten", "ta", "to"], answer: "ten" },
          { type: "fill-blank", prompt: "Jak się ___? (How are you?)", answer: "masz" }
        ]
      },
      B: {
        title: "Dzień dobry! (Formal Greetings)",
        dialogue: {
          context: "Two adults meet while shopping",
          lines: [
            { speaker: "Pan Karol", polish: "Dzień dobry pani!", english: "Hello, ma'am!" },
            { speaker: "Pani Maria", polish: "Dzień dobry panu! Jak się pan ma?", english: "Hello, sir! How are you?" },
            { speaker: "Pan Karol", polish: "Dobrze, dziękuję. A pani?", english: "Fine, thanks. And you?" },
            { speaker: "Pani Maria", polish: "Też dobrze. Co pan tu robi?", english: "Also fine. What are you doing here?" },
            { speaker: "Pan Karol", polish: "Robię zakupy. Przepraszam, ale bardzo się śpieszę.", english: "I'm shopping. Excuse me, but I'm in a big hurry." },
            { speaker: "Pani Maria", polish: "Ja też muszę iść. To do widzenia.", english: "I have to go too. So goodbye." },
            { speaker: "Pan Karol", polish: "Do widzenia.", english: "Goodbye." }
          ]
        },
        vocabulary: [
          { word: "dzień dobry", meaning: "good day, hello", gender: "phrase" },
          { word: "pan", meaning: "sir, Mr.", gender: "m" },
          { word: "pani", meaning: "ma'am, Ms.", gender: "f" },
          { word: "dziękuję", meaning: "thank you", gender: "v" },
          { word: "robić", meaning: "to do, to make", gender: "v" },
          { word: "zakupy", meaning: "shopping", gender: "pl" },
          { word: "przepraszam", meaning: "excuse me, I'm sorry", gender: "v" },
          { word: "ale", meaning: "but", gender: "conj" },
          { word: "bardzo", meaning: "very", gender: "adv" },
          { word: "śpieszyć się", meaning: "to be in a hurry", gender: "v" },
          { word: "musieć", meaning: "must, to have to", gender: "v" },
          { word: "do widzenia", meaning: "goodbye", gender: "phrase" }
        ],
        exercises: [
          { type: "translate-to-polish", prompt: "Thank you", answer: "dziękuję", options: ["dziękuję", "przepraszam", "proszę", "dobrze"] },
          { type: "fill-blank", prompt: "Jak się ___ ma? (How are you, sir?)", answer: "pan" }
        ]
      },
      C: {
        title: "Co to jest? (What is this?)",
        dialogue: {
          context: "Two people looking at a building",
          lines: [
            { speaker: "Mietek", polish: "Co to jest?", english: "What is that?" },
            { speaker: "Małgosia", polish: "Co? Gdzie?", english: "What? Where?" },
            { speaker: "Mietek", polish: "Tamten budynek. Czy to jest kościół?", english: "That building. Is that a church?" },
            { speaker: "Małgosia", polish: "Nie, to nie jest kościół, tylko stary ratusz.", english: "No, that's not a church, but the old city hall." },
            { speaker: "Mietek", polish: "On wygląda wspaniale.", english: "It looks wonderful." },
            { speaker: "Małgosia", polish: "Tak myślisz?", english: "You think so?" }
          ]
        },
        vocabulary: [
          { word: "co", meaning: "what", gender: "pron" },
          { word: "to", meaning: "this, it", gender: "pron" },
          { word: "jest", meaning: "is", gender: "v" },
          { word: "budynek", meaning: "building", gender: "m" },
          { word: "kościół", meaning: "church", gender: "m" },
          { word: "ratusz", meaning: "city hall", gender: "m" },
          { word: "stary", meaning: "old", gender: "adj" },
          { word: "nowy", meaning: "new", gender: "adj" },
          { word: "wyglądać", meaning: "to look, appear", gender: "v" },
          { word: "wspaniale", meaning: "wonderful(ly)", gender: "adv" },
          { word: "myśleć", meaning: "to think", gender: "v" },
          { word: "tak", meaning: "yes, so", gender: "adv" },
          { word: "nie", meaning: "no, not", gender: "adv" }
        ],
        exercises: [
          { type: "gender-match", prompt: "___ kościół (this church)", options: ["ten", "ta", "to"], answer: "ten" },
          { type: "gender-match", prompt: "___ szkoła (this school)", options: ["ten", "ta", "to"], answer: "ta" },
          { type: "gender-match", prompt: "___ okno (this window)", options: ["ten", "ta", "to"], answer: "to" }
        ]
      },
      D: {
        title: "Dobrze wyglądasz (You look good)",
        dialogue: {
          context: "Complimenting someone's appearance",
          lines: [
            { speaker: "Marian", polish: "Bardzo dobrze wyglądasz dzisiaj.", english: "You look very good today." },
            { speaker: "Mirka", polish: "To dziwne, bo bardzo źle się czuję.", english: "That's strange, because I feel very bad." },
            { speaker: "Marian", polish: "Jesteś chora?", english: "Are you sick?" },
            { speaker: "Mirka", polish: "Tak, mam katar.", english: "Yes, I have a cold." },
            { speaker: "Marian", polish: "Przykro mi. Ale wyglądasz znakomicie.", english: "I'm sorry. But you look great." },
            { speaker: "Mirka", polish: "Dziękuję. Jesteś miły.", english: "Thanks. You're nice." }
          ]
        },
        vocabulary: [
          { word: "dzisiaj", meaning: "today", gender: "adv" },
          { word: "dziwne", meaning: "strange", gender: "adj" },
          { word: "bo", meaning: "because", gender: "conj" },
          { word: "źle", meaning: "badly", gender: "adv" },
          { word: "czuć się", meaning: "to feel", gender: "v" },
          { word: "chory", meaning: "sick (m)", gender: "adj" },
          { word: "chora", meaning: "sick (f)", gender: "adj" },
          { word: "katar", meaning: "cold (illness)", gender: "m" },
          { word: "przykro mi", meaning: "I'm sorry", gender: "phrase" },
          { word: "znakomicie", meaning: "great, excellent", gender: "adv" },
          { word: "miły", meaning: "nice (m)", gender: "adj" },
          { word: "miła", meaning: "nice (f)", gender: "adj" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Bardzo ___ się czuję. (I feel very bad)", answer: "źle" },
          { type: "translate-to-english", prompt: "Jestem chory", answer: "I am sick", options: ["I am sick", "I am tired", "I am hungry", "I am happy"] }
        ]
      },
      E: {
        title: "Autobus (At the bus stop)",
        dialogue: {
          context: "Two students waiting for a bus",
          lines: [
            { speaker: "Janek", polish: "Interesujące zajęcia, prawda?", english: "Interesting class, right?" },
            { speaker: "Agnieszka", polish: "Bardzo.", english: "Very." },
            { speaker: "Janek", polish: "Janek jestem.", english: "I'm Janek." },
            { speaker: "Agnieszka", polish: "Bardzo mi miło. Agnieszka.", english: "Nice to meet you. Agnieszka." },
            { speaker: "Janek", polish: "Czekasz na autobus?", english: "Are you waiting for the bus?" },
            { speaker: "Agnieszka", polish: "Tak. Już bardzo długo.", english: "Yes. Already for a long time." },
            { speaker: "Janek", polish: "Ja też. Mieszkasz tu blisko?", english: "Me too. Do you live close?" },
            { speaker: "Agnieszka", polish: "Nie, raczej daleko. O, jedzie mój autobus.", english: "No, rather far. Oh, here comes my bus." },
            { speaker: "Janek", polish: "To do jutra.", english: "Then see you tomorrow." },
            { speaker: "Agnieszka", polish: "Cześć!", english: "Bye!" }
          ]
        },
        vocabulary: [
          { word: "interesujący", meaning: "interesting", gender: "adj" },
          { word: "zajęcia", meaning: "class, classes", gender: "pl" },
          { word: "prawda", meaning: "truth, right?", gender: "f" },
          { word: "bardzo mi miło", meaning: "nice to meet you", gender: "phrase" },
          { word: "czekać", meaning: "to wait", gender: "v" },
          { word: "autobus", meaning: "bus", gender: "m" },
          { word: "już", meaning: "already", gender: "adv" },
          { word: "długo", meaning: "long (time)", gender: "adv" },
          { word: "mieszkać", meaning: "to live (reside)", gender: "v" },
          { word: "blisko", meaning: "close, near", gender: "adv" },
          { word: "daleko", meaning: "far", gender: "adv" },
          { word: "jechać", meaning: "to go (by vehicle)", gender: "v" },
          { word: "jutro", meaning: "tomorrow", gender: "adv" },
          { word: "do jutra", meaning: "see you tomorrow", gender: "phrase" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Bardzo mi ___. (Nice to meet you)", answer: "miło" },
          { type: "translate-to-polish", prompt: "I live far", answer: "mieszkam daleko", options: ["mieszkam daleko", "mieszkam blisko", "jestem daleko", "idę daleko"] }
        ]
      }
    }
  },

  "2": {
    title: "Personal Information",
    description: "Names, languages, and household items",
    grammar: ["Personal pronouns", "Possessive pronouns", "Present tense conjugations", "Imperative mood"],
    subLessons: {
      A: {
        title: "Warszawa, Kraków",
        dialogue: {
          context: "Asking for personal information on a train",
          lines: [
            { speaker: "Pan X", polish: "Dziękuję za miłe towarzystwo.", english: "Thanks for the pleasant company." },
            { speaker: "Pani Y", polish: "Ja również dziękuję.", english: "I likewise thank you." },
            { speaker: "Pan X", polish: "Czy pani mieszka w Warszawie?", english: "Do you live in Warsaw?" },
            { speaker: "Pani Y", polish: "Nie, mieszkam i studiuję w Krakowie.", english: "No, I live and study in Kraków." },
            { speaker: "Pan X", polish: "A jak się pani nazywa?", english: "And what's your name?" },
            { speaker: "Pani Y", polish: "Nazywam się Maria Zielińska. Dlaczego pan pyta?", english: "My name is Maria Zielińska. Why do you ask?" },
            { speaker: "Pan X", polish: "Po prostu jestem ciekawy.", english: "I'm simply curious." }
          ]
        },
        vocabulary: [
          { word: "mieszkać", meaning: "to live (reside)", gender: "v" },
          { word: "studiować", meaning: "to study (at university)", gender: "v" },
          { word: "nazywać się", meaning: "to be called", gender: "v" },
          { word: "pytać", meaning: "to ask", gender: "v" },
          { word: "ciekawy", meaning: "curious, interesting", gender: "adj" },
          { word: "zamężna", meaning: "married (f)", gender: "adj" },
          { word: "żonaty", meaning: "married (m)", gender: "adj" },
          { word: "adres", meaning: "address", gender: "m" },
          { word: "towarzystwo", meaning: "company", gender: "n" },
          { word: "również", meaning: "likewise, also", gender: "adv" },
          { word: "dlaczego", meaning: "why", gender: "adv" },
          { word: "po prostu", meaning: "simply", gender: "phrase" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Jak się pani ___? (What is your name?)", answer: "nazywa" },
          { type: "translate-to-english", prompt: "Mieszkam w Krakowie", answer: "I live in Kraków", options: ["I live in Kraków", "I work in Kraków", "I study in Kraków", "I'm from Kraków"] },
          { type: "gender-match", prompt: "___ adres (this address)", options: ["ten", "ta", "to"], answer: "ten" }
        ]
      },
      B: {
        title: "Jak masz na imię?",
        dialogue: {
          context: "Discussing first names",
          lines: [
            { speaker: "Zenon", polish: "Jak masz na imię?", english: "What's your first name?" },
            { speaker: "Margaret", polish: "Mam na imię Margaret.", english: "My name is Margaret." },
            { speaker: "Zenon", polish: "To nie jest polskie imię.", english: "That's not a Polish name." },
            { speaker: "Margaret", polish: "Nie, jest angielskie. Jak to będzie po polsku?", english: "No, it's English. How would that be in Polish?" },
            { speaker: "Zenon", polish: "Margaret po polsku to Małgorzata.", english: "Margaret in Polish is Małgorzata." },
            { speaker: "Margaret", polish: "To trudne imię!", english: "That's a difficult name!" },
            { speaker: "Zenon", polish: "Nie, to łatwe. Mał-go-rza-ta.", english: "No, it's easy. Mał-go-rza-ta." }
          ]
        },
        vocabulary: [
          { word: "imię", meaning: "first name", gender: "n" },
          { word: "nazwisko", meaning: "last name", gender: "n" },
          { word: "polski", meaning: "Polish", gender: "adj" },
          { word: "angielski", meaning: "English", gender: "adj" },
          { word: "łatwy", meaning: "easy", gender: "adj" },
          { word: "trudny", meaning: "difficult", gender: "adj" },
          { word: "mieć", meaning: "to have", gender: "v" },
          { word: "wiedzieć", meaning: "to know (facts)", gender: "v" },
          { word: "rozumieć", meaning: "to understand", gender: "v" },
          { word: "jak", meaning: "how, like", gender: "adv" },
          { word: "po polsku", meaning: "in Polish", gender: "phrase" },
          { word: "po angielsku", meaning: "in English", gender: "phrase" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Jak masz na ___? (What's your first name?)", answer: "imię" },
          { type: "translate-to-polish", prompt: "It's easy", answer: "to łatwe", options: ["to łatwe", "to trudne", "to polskie", "to dobre"] },
          { type: "gender-match", prompt: "___ imię (this name)", options: ["ten", "ta", "to"], answer: "to" }
        ]
      },
      C: {
        title: "Nie rozumiem",
        dialogue: {
          context: "Discussing languages and understanding",
          lines: [
            { speaker: "Krysia", polish: "Nie rozumiem, co on mówi.", english: "I don't understand what he's saying." },
            { speaker: "Krzysiek", polish: "Bo mówi po francusku.", english: "Because he's speaking French." },
            { speaker: "Krysia", polish: "Mówi bardzo szybko.", english: "He speaks very fast." },
            { speaker: "Krzysiek", polish: "Tak, i niewyraźnie.", english: "Yes, and unclearly." },
            { speaker: "Krysia", polish: "Czy ty rozumiesz po francusku?", english: "Do you understand French?" },
            { speaker: "Krzysiek", polish: "Trochę. Mówię słabo, ale rozumiem.", english: "A little. I speak poorly, but I understand." }
          ]
        },
        vocabulary: [
          { word: "mówić", meaning: "to speak, say", gender: "v" },
          { word: "rozumieć", meaning: "to understand", gender: "v" },
          { word: "po francusku", meaning: "in French", gender: "phrase" },
          { word: "po niemiecku", meaning: "in German", gender: "phrase" },
          { word: "po rosyjsku", meaning: "in Russian", gender: "phrase" },
          { word: "po hiszpańsku", meaning: "in Spanish", gender: "phrase" },
          { word: "szybko", meaning: "quickly, fast", gender: "adv" },
          { word: "wolno", meaning: "slowly", gender: "adv" },
          { word: "wyraźnie", meaning: "clearly", gender: "adv" },
          { word: "słabo", meaning: "poorly, weakly", gender: "adv" },
          { word: "trochę", meaning: "a little", gender: "adv" },
          { word: "dobrze", meaning: "well", gender: "adv" }
        ],
        exercises: [
          { type: "translate-to-english", prompt: "Nie rozumiem", answer: "I don't understand", options: ["I don't understand", "I don't know", "I don't speak", "I don't hear"] },
          { type: "fill-blank", prompt: "Mówię po ___. (I speak Polish)", answer: "polsku" },
          { type: "translate-to-polish", prompt: "He speaks fast", answer: "on mówi szybko", options: ["on mówi szybko", "on mówi wolno", "on mówi dobrze", "on mówi słabo"] }
        ]
      },
      D: {
        title: "Jesteś pewien?",
        dialogue: {
          context: "Discussing broken appliances",
          lines: [
            { speaker: "Zosia", polish: "Winda nie działa.", english: "The elevator isn't working." },
            { speaker: "Zenon", polish: "Jesteś pewna?", english: "Are you sure?" },
            { speaker: "Zosia", polish: "Tak, jest zepsuta.", english: "Yes, it's broken." },
            { speaker: "Zenon", polish: "A telefon? Telefon działa?", english: "And the phone? Does the phone work?" },
            { speaker: "Zosia", polish: "Tak, telefon działa.", english: "Yes, the phone works." },
            { speaker: "Zenon", polish: "To dobrze. Zadzwonię po serwis.", english: "That's good. I'll call for service." }
          ]
        },
        vocabulary: [
          { word: "winda", meaning: "elevator", gender: "f" },
          { word: "telefon", meaning: "telephone", gender: "m" },
          { word: "lodówka", meaning: "refrigerator", gender: "f" },
          { word: "pralka", meaning: "washing machine", gender: "f" },
          { word: "zmywarka", meaning: "dishwasher", gender: "f" },
          { word: "odkurzacz", meaning: "vacuum cleaner", gender: "m" },
          { word: "działać", meaning: "to work, function", gender: "v" },
          { word: "zepsuty", meaning: "broken", gender: "adj" },
          { word: "pewien", meaning: "sure, certain (m)", gender: "adj" },
          { word: "pewna", meaning: "sure, certain (f)", gender: "adj" },
          { word: "dzwonić", meaning: "to call, ring", gender: "v" },
          { word: "serwis", meaning: "service", gender: "m" }
        ],
        exercises: [
          { type: "gender-match", prompt: "___ winda (this elevator)", options: ["ten", "ta", "to"], answer: "ta" },
          { type: "gender-match", prompt: "___ telefon (this phone)", options: ["ten", "ta", "to"], answer: "ten" },
          { type: "fill-blank", prompt: "Telefon nie ___. (The phone doesn't work)", answer: "działa" }
        ]
      },
      E: {
        title: "Co to znaczy?",
        dialogue: {
          context: "Asking about word meanings",
          lines: [
            { speaker: "A", polish: "Co to słowo znaczy?", english: "What does this word mean?" },
            { speaker: "B", polish: "Które słowo?", english: "Which word?" },
            { speaker: "A", polish: "To słowo tutaj: 'zresztą'.", english: "This word here: 'zresztą'." },
            { speaker: "B", polish: "To znaczy 'besides' albo 'anyway'.", english: "It means 'besides' or 'anyway'." },
            { speaker: "A", polish: "Dziękuję. A jak się mówi 'computer'?", english: "Thanks. And how do you say 'computer'?" },
            { speaker: "B", polish: "Komputer.", english: "Komputer." },
            { speaker: "A", polish: "To łatwe!", english: "That's easy!" }
          ]
        },
        vocabulary: [
          { word: "znaczyć", meaning: "to mean", gender: "v" },
          { word: "słowo", meaning: "word", gender: "n" },
          { word: "który", meaning: "which", gender: "pron" },
          { word: "tutaj", meaning: "here", gender: "adv" },
          { word: "albo", meaning: "or", gender: "conj" },
          { word: "komputer", meaning: "computer", gender: "m" },
          { word: "laptop", meaning: "laptop", gender: "m" },
          { word: "smartfon", meaning: "smartphone", gender: "m" },
          { word: "lepszy", meaning: "better", gender: "adj" },
          { word: "gorszy", meaning: "worse", gender: "adj" },
          { word: "więcej", meaning: "more", gender: "adv" },
          { word: "mniej", meaning: "less", gender: "adv" }
        ],
        exercises: [
          { type: "translate-to-english", prompt: "Co to znaczy?", answer: "What does it mean?", options: ["What does it mean?", "What is it?", "Where is it?", "How is it?"] },
          { type: "gender-match", prompt: "___ słowo (this word)", options: ["ten", "ta", "to"], answer: "to" },
          { type: "fill-blank", prompt: "Jak się ___ 'book' po polsku? (How do you say...)", answer: "mówi" }
        ]
      }
    }
  },

  "3": {
    title: "Work & Education",
    description: "Professions, university life, and introductions",
    grammar: ["Accusative case", "Locative case", "Instrumental case preview", "Comparatives"],
    subLessons: {
      A: {
        title: "Już czy jeszcze?",
        dialogue: {
          context: "A couple getting ready to go out",
          lines: [
            { speaker: "Żona", polish: "Czy jesteś już gotowy?", english: "Are you ready yet?" },
            { speaker: "Mąż", polish: "Jeszcze nie. Jeszcze się golę.", english: "Not yet. I'm still shaving." },
            { speaker: "Żona", polish: "Ale my już jesteśmy spóźnieni!", english: "But we're already late!" },
            { speaker: "Mąż", polish: "Spokojnie. Jeszcze mamy czas.", english: "Calm down. We still have time." },
            { speaker: "Żona", polish: "Czy już się ubrałeś?", english: "Have you already gotten dressed?" },
            { speaker: "Mąż", polish: "Jeszcze nie, ale zaraz będę gotowy.", english: "Not yet, but I'll be ready soon." }
          ]
        },
        vocabulary: [
          { word: "już", meaning: "already, yet", gender: "adv" },
          { word: "jeszcze", meaning: "still, yet", gender: "adv" },
          { word: "gotowy", meaning: "ready", gender: "adj" },
          { word: "spóźniony", meaning: "late", gender: "adj" },
          { word: "golić się", meaning: "to shave", gender: "v" },
          { word: "ubierać się", meaning: "to get dressed", gender: "v" },
          { word: "spokojnie", meaning: "calmly, take it easy", gender: "adv" },
          { word: "zaraz", meaning: "soon, in a moment", gender: "adv" },
          { word: "czas", meaning: "time", gender: "m" },
          { word: "żona", meaning: "wife", gender: "f" },
          { word: "mąż", meaning: "husband", gender: "m" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Czy jesteś ___ gotowy? (Are you ready yet?)", answer: "już" },
          { type: "translate-to-english", prompt: "Jeszcze nie", answer: "Not yet", options: ["Not yet", "Already", "Still", "Never"] },
          { type: "fill-blank", prompt: "___ się golę. (I'm still shaving)", answer: "Jeszcze" }
        ]
      },
      B: {
        title: "Gdzie pracuje twój brat?",
        dialogue: {
          context: "Friends discussing siblings and jobs",
          lines: [
            { speaker: "Anna", polish: "Gdzie pracuje twój brat?", english: "Where does your brother work?" },
            { speaker: "Adam", polish: "Pracuje w banku.", english: "He works at a bank." },
            { speaker: "Anna", polish: "A twoja siostra?", english: "And your sister?" },
            { speaker: "Adam", polish: "Ona jest lekarką. Pracuje w szpitalu.", english: "She's a doctor. She works at a hospital." },
            { speaker: "Anna", polish: "Czy lubi swoją pracę?", english: "Does she like her job?" },
            { speaker: "Adam", polish: "Tak, bardzo. A twój brat?", english: "Yes, very much. And your brother?" },
            { speaker: "Anna", polish: "On jest nauczycielem. Pracuje w szkole.", english: "He's a teacher. He works at a school." }
          ]
        },
        vocabulary: [
          { word: "pracować", meaning: "to work", gender: "v" },
          { word: "praca", meaning: "work, job", gender: "f" },
          { word: "brat", meaning: "brother", gender: "m" },
          { word: "siostra", meaning: "sister", gender: "f" },
          { word: "bank", meaning: "bank", gender: "m" },
          { word: "szpital", meaning: "hospital", gender: "m" },
          { word: "szkoła", meaning: "school", gender: "f" },
          { word: "lekarz", meaning: "doctor (m)", gender: "m" },
          { word: "lekarka", meaning: "doctor (f)", gender: "f" },
          { word: "nauczyciel", meaning: "teacher (m)", gender: "m" },
          { word: "nauczycielka", meaning: "teacher (f)", gender: "f" },
          { word: "lubić", meaning: "to like", gender: "v" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Pracuję w ___. (I work at a bank)", answer: "banku" },
          { type: "translate-to-polish", prompt: "He works at a hospital", answer: "on pracuje w szpitalu", options: ["on pracuje w szpitalu", "on pracuje w banku", "on pracuje w szkole", "ona pracuje w szpitalu"] },
          { type: "gender-match", prompt: "___ szpital (this hospital)", options: ["ten", "ta", "to"], answer: "ten" }
        ]
      },
      C: {
        title: "W bibliotece",
        dialogue: {
          context: "Talking about work at the library",
          lines: [
            { speaker: "Marek", polish: "Słyszałem, że pracujesz w bibliotece.", english: "I heard you work at the library." },
            { speaker: "Marta", polish: "Tak, jestem bibliotekarką.", english: "Yes, I'm a librarian." },
            { speaker: "Marek", polish: "Czy to ciekawa praca?", english: "Is it interesting work?" },
            { speaker: "Marta", polish: "Bardzo! Lubię książki.", english: "Very! I like books." },
            { speaker: "Marek", polish: "Czy masz dużo pracy?", english: "Do you have a lot of work?" },
            { speaker: "Marta", polish: "Czasem tak, czasem nie.", english: "Sometimes yes, sometimes no." }
          ]
        },
        vocabulary: [
          { word: "biblioteka", meaning: "library", gender: "f" },
          { word: "bibliotekarz", meaning: "librarian (m)", gender: "m" },
          { word: "bibliotekarka", meaning: "librarian (f)", gender: "f" },
          { word: "książka", meaning: "book", gender: "f" },
          { word: "ciekawy", meaning: "interesting", gender: "adj" },
          { word: "nudny", meaning: "boring", gender: "adj" },
          { word: "słyszeć", meaning: "to hear", gender: "v" },
          { word: "czasem", meaning: "sometimes", gender: "adv" },
          { word: "dużo", meaning: "a lot, much", gender: "adv" },
          { word: "mało", meaning: "little, few", gender: "adv" }
        ],
        exercises: [
          { type: "gender-match", prompt: "___ biblioteka (this library)", options: ["ten", "ta", "to"], answer: "ta" },
          { type: "fill-blank", prompt: "Czy to ___ praca? (Is it interesting work?)", answer: "ciekawa" },
          { type: "translate-to-english", prompt: "Lubię książki", answer: "I like books", options: ["I like books", "I read books", "I have books", "I need books"] }
        ]
      },
      D: {
        title: "Kto to jest?",
        dialogue: {
          context: "Asking about a person at a party",
          lines: [
            { speaker: "Kasia", polish: "Kto to jest?", english: "Who is that?" },
            { speaker: "Kamil", polish: "To jest mój kolega z pracy.", english: "That's my colleague from work." },
            { speaker: "Kasia", polish: "Jak on się nazywa?", english: "What's his name?" },
            { speaker: "Kamil", polish: "Nazywa się Piotr Kowalski.", english: "His name is Piotr Kowalski." },
            { speaker: "Kasia", polish: "Co on robi?", english: "What does he do?" },
            { speaker: "Kamil", polish: "Jest inżynierem.", english: "He's an engineer." },
            { speaker: "Kasia", polish: "Czy możesz mnie przedstawić?", english: "Can you introduce me?" }
          ]
        },
        vocabulary: [
          { word: "kto", meaning: "who", gender: "pron" },
          { word: "kolega", meaning: "colleague (m)", gender: "m" },
          { word: "koleżanka", meaning: "colleague (f)", gender: "f" },
          { word: "inżynier", meaning: "engineer", gender: "m" },
          { word: "adwokat", meaning: "lawyer", gender: "m" },
          { word: "prawnik", meaning: "lawyer, legal professional", gender: "m" },
          { word: "przedstawić", meaning: "to introduce", gender: "v" },
          { word: "móc", meaning: "can, to be able", gender: "v" },
          { word: "z", meaning: "from, with", gender: "prep" }
        ],
        exercises: [
          { type: "translate-to-english", prompt: "Kto to jest?", answer: "Who is that?", options: ["Who is that?", "What is that?", "Where is that?", "How is that?"] },
          { type: "fill-blank", prompt: "Jest ___. (He's an engineer)", answer: "inżynierem" },
          { type: "translate-to-polish", prompt: "my colleague from work", answer: "mój kolega z pracy", options: ["mój kolega z pracy", "moja koleżanka z pracy", "mój przyjaciel z pracy", "mój brat z pracy"] }
        ]
      },
      E: {
        title: "Miło mi pana poznać",
        dialogue: {
          context: "Formal introduction at a business event",
          lines: [
            { speaker: "Pan Nowak", polish: "Dzień dobry. Jestem Jan Nowak.", english: "Hello. I'm Jan Nowak." },
            { speaker: "Pani Kowalska", polish: "Miło mi pana poznać. Anna Kowalska.", english: "Nice to meet you. Anna Kowalska." },
            { speaker: "Pan Nowak", polish: "Czym się pani zajmuje?", english: "What do you do?" },
            { speaker: "Pani Kowalska", polish: "Jestem dyrektorem w firmie IT.", english: "I'm a director at an IT company." },
            { speaker: "Pan Nowak", polish: "To bardzo interesujące.", english: "That's very interesting." },
            { speaker: "Pani Kowalska", polish: "A pan?", english: "And you?" },
            { speaker: "Pan Nowak", polish: "Jestem profesorem na uniwersytecie.", english: "I'm a professor at the university." }
          ]
        },
        vocabulary: [
          { word: "poznać", meaning: "to meet, get to know", gender: "v" },
          { word: "zajmować się", meaning: "to be occupied with", gender: "v" },
          { word: "dyrektor", meaning: "director", gender: "m" },
          { word: "firma", meaning: "company", gender: "f" },
          { word: "profesor", meaning: "professor", gender: "m" },
          { word: "uniwersytet", meaning: "university", gender: "m" },
          { word: "interesujący", meaning: "interesting", gender: "adj" }
        ],
        exercises: [
          { type: "translate-to-english", prompt: "Miło mi pana poznać", answer: "Nice to meet you (formal)", options: ["Nice to meet you (formal)", "Goodbye sir", "How are you sir", "Thank you sir"] },
          { type: "fill-blank", prompt: "Czym się pan ___? (What do you do?)", answer: "zajmuje" },
          { type: "translate-to-polish", prompt: "I'm a professor", answer: "jestem profesorem", options: ["jestem profesorem", "jestem dyrektorem", "jestem inżynierem", "jestem studentem"] }
        ]
      }
    }
  },

  "4": {
    title: "Shopping & Home",
    description: "Clothing, pets, and describing your apartment",
    grammar: ["Accusative case (full)", "Nominative plural", "Pronominal adjectives"],
    subLessons: {
      A: {
        title: "Czekam na kogoś",
        dialogue: {
          context: "Meeting a friend who is waiting for someone",
          lines: [
            { speaker: "Beata", polish: "Cześć Bogusław! Co tu robisz?", english: "Hi Bogusław! What are you doing here?" },
            { speaker: "Bogusław", polish: "Siedzę na ławce i czekam na kogoś.", english: "I'm sitting on a bench and waiting for someone." },
            { speaker: "Beata", polish: "Na kogo czekasz?", english: "Who are you waiting for?" },
            { speaker: "Bogusław", polish: "Na Marię. Znasz ją?", english: "For Maria. Do you know her?" },
            { speaker: "Beata", polish: "Oczywiście! To moja stara znajoma.", english: "Of course! She's my old friend." },
            { speaker: "Bogusław", polish: "Odwiedza mnie.", english: "She's visiting me." }
          ]
        },
        vocabulary: [
          { word: "siedzieć", meaning: "to sit", gender: "v" },
          { word: "ławka", meaning: "bench", gender: "f" },
          { word: "czekać na", meaning: "to wait for", gender: "v" },
          { word: "ktoś", meaning: "someone", gender: "pron" },
          { word: "znać", meaning: "to know (a person)", gender: "v" },
          { word: "znajomy", meaning: "acquaintance (m)", gender: "m" },
          { word: "znajoma", meaning: "acquaintance (f)", gender: "f" },
          { word: "odwiedzać", meaning: "to visit", gender: "v" },
          { word: "oczywiście", meaning: "of course", gender: "adv" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Czekam na ___. (I'm waiting for someone)", answer: "kogoś" },
          { type: "translate-to-english", prompt: "Znasz ją?", answer: "Do you know her?", options: ["Do you know her?", "Do you see her?", "Do you like her?", "Do you need her?"] },
          { type: "translate-to-polish", prompt: "She's visiting me", answer: "ona mnie odwiedza", options: ["ona mnie odwiedza", "ona mnie zna", "ona na mnie czeka", "ona mnie widzi"] }
        ]
      },
      B: {
        title: "W sklepie odzieżowym",
        dialogue: {
          context: "Shopping for clothes",
          lines: [
            { speaker: "Ewa", polish: "Chcę kupić jakąś sukienkę.", english: "I want to buy a dress." },
            { speaker: "Adam", polish: "Wspaniały pomysł. Jaką sukienkę chcesz?", english: "Great idea. What kind of dress do you want?" },
            { speaker: "Ewa", polish: "Nową i ładną. Na przykład tę.", english: "New and pretty. For example, this one." },
            { speaker: "Adam", polish: "Nie, kup tamtą. Jest tania i modna.", english: "No, buy that one. It's cheap and fashionable." },
            { speaker: "Ewa", polish: "Nie, nie podoba mi się.", english: "No, I don't like it." },
            { speaker: "Adam", polish: "To kup obie!", english: "Then buy both!" }
          ]
        },
        vocabulary: [
          { word: "kupić", meaning: "to buy", gender: "v" },
          { word: "sukienka", meaning: "dress", gender: "f" },
          { word: "koszula", meaning: "shirt", gender: "f" },
          { word: "spodnie", meaning: "pants", gender: "pl" },
          { word: "but", meaning: "shoe", gender: "m" },
          { word: "kurtka", meaning: "jacket", gender: "f" },
          { word: "płaszcz", meaning: "coat", gender: "m" },
          { word: "ładny", meaning: "pretty", gender: "adj" },
          { word: "modny", meaning: "fashionable", gender: "adj" },
          { word: "tani", meaning: "cheap", gender: "adj" },
          { word: "drogi", meaning: "expensive", gender: "adj" },
          { word: "podobać się", meaning: "to be pleasing", gender: "v" }
        ],
        exercises: [
          { type: "gender-match", prompt: "___ sukienka (this dress)", options: ["ten", "ta", "to"], answer: "ta" },
          { type: "translate-to-english", prompt: "Nie podoba mi się", answer: "I don't like it", options: ["I don't like it", "I don't want it", "I don't see it", "I don't have it"] },
          { type: "fill-blank", prompt: "Chcę ___ sukienkę. (I want to buy a dress)", answer: "kupić" }
        ]
      },
      C: {
        title: "Nie mam pojęcia",
        dialogue: {
          context: "Looking for lost items",
          lines: [
            { speaker: "Zosia", polish: "Czy masz moje nowe czasopismo?", english: "Do you have my new magazine?" },
            { speaker: "Zenek", polish: "Nie, mam własne. Dlaczego pytasz?", english: "No, I have my own. Why do you ask?" },
            { speaker: "Zosia", polish: "Nie wiem, gdzie jest moje.", english: "I don't know where mine is." },
            { speaker: "Zenek", polish: "Nie mam pojęcia. Dużo rzeczy gubisz.", english: "I have no idea. You lose a lot of things." },
            { speaker: "Zosia", polish: "O, tu jest! A gdzie są moje okulary?", english: "Oh, here it is! And where are my glasses?" },
            { speaker: "Zenek", polish: "Nie wiem.", english: "I don't know." }
          ]
        },
        vocabulary: [
          { word: "czasopismo", meaning: "magazine", gender: "n" },
          { word: "gazeta", meaning: "newspaper", gender: "f" },
          { word: "własny", meaning: "own", gender: "adj" },
          { word: "gubić", meaning: "to lose", gender: "v" },
          { word: "rzecz", meaning: "thing", gender: "f" },
          { word: "okulary", meaning: "glasses", gender: "pl" },
          { word: "klucze", meaning: "keys", gender: "pl" },
          { word: "portfel", meaning: "wallet", gender: "m" },
          { word: "pojęcie", meaning: "idea, concept", gender: "n" },
          { word: "nie mam pojęcia", meaning: "I have no idea", gender: "phrase" }
        ],
        exercises: [
          { type: "translate-to-english", prompt: "Nie mam pojęcia", answer: "I have no idea", options: ["I have no idea", "I don't have it", "I don't want it", "I don't see it"] },
          { type: "gender-match", prompt: "___ okulary (these glasses)", options: ["ten", "ta", "te"], answer: "te" },
          { type: "fill-blank", prompt: "Gdzie są moje ___? (Where are my keys?)", answer: "klucze" }
        ]
      },
      D: {
        title: "Masz psa?",
        dialogue: {
          context: "Talking about pets",
          lines: [
            { speaker: "Julek", polish: "Masz psa?", english: "Do you have a dog?" },
            { speaker: "Joasia", polish: "Tak, mam.", english: "Yes, I do." },
            { speaker: "Julek", polish: "Co to za pies? Jaka rasa?", english: "What kind of dog? What breed?" },
            { speaker: "Joasia", polish: "To owczarek.", english: "It's a sheepdog." },
            { speaker: "Julek", polish: "Jak się wabi?", english: "What's its name?" },
            { speaker: "Joasia", polish: "Wabi się Burek.", english: "Its name is Burek." },
            { speaker: "Julek", polish: "Co on umie?", english: "What can he do?" },
            { speaker: "Joasia", polish: "Umie siedzieć i szczekać.", english: "He can sit and bark." }
          ]
        },
        vocabulary: [
          { word: "pies", meaning: "dog", gender: "m" },
          { word: "kot", meaning: "cat", gender: "m" },
          { word: "rasa", meaning: "breed", gender: "f" },
          { word: "owczarek", meaning: "sheepdog", gender: "m" },
          { word: "wabić się", meaning: "to be called (animals)", gender: "v" },
          { word: "umieć", meaning: "to know how to", gender: "v" },
          { word: "szczekać", meaning: "to bark", gender: "v" },
          { word: "merdać", meaning: "to wag", gender: "v" },
          { word: "ogon", meaning: "tail", gender: "m" }
        ],
        exercises: [
          { type: "translate-to-english", prompt: "Jak się wabi?", answer: "What's it called?", options: ["What's it called?", "What is it?", "Where is it?", "How is it?"] },
          { type: "gender-match", prompt: "___ pies (this dog)", options: ["ten", "ta", "to"], answer: "ten" },
          { type: "fill-blank", prompt: "Mam ___. (I have a cat)", answer: "kota" }
        ]
      },
      E: {
        title: "Nowe mieszkanie",
        dialogue: {
          context: "Describing a new apartment",
          lines: [
            { speaker: "Patrycja", polish: "Mam nowe mieszkanie.", english: "I have a new apartment." },
            { speaker: "Piotr", polish: "Wspaniale! Jak ono wygląda?", english: "Wonderful! What does it look like?" },
            { speaker: "Patrycja", polish: "Jest duże i wygodne.", english: "It's big and comfortable." },
            { speaker: "Piotr", polish: "Ile ma pokoi?", english: "How many rooms does it have?" },
            { speaker: "Patrycja", polish: "Trzy pokoje, kuchnię i łazienkę.", english: "Three rooms, a kitchen, and a bathroom." },
            { speaker: "Piotr", polish: "Na którym piętrze?", english: "On which floor?" },
            { speaker: "Patrycja", polish: "Na czwartym. Jest winda.", english: "On the fourth. There's an elevator." }
          ]
        },
        vocabulary: [
          { word: "mieszkanie", meaning: "apartment", gender: "n" },
          { word: "pokój", meaning: "room", gender: "m" },
          { word: "kuchnia", meaning: "kitchen", gender: "f" },
          { word: "łazienka", meaning: "bathroom", gender: "f" },
          { word: "sypialnia", meaning: "bedroom", gender: "f" },
          { word: "salon", meaning: "living room", gender: "m" },
          { word: "piętro", meaning: "floor, story", gender: "n" },
          { word: "wygodny", meaning: "comfortable", gender: "adj" },
          { word: "duży", meaning: "big, large", gender: "adj" },
          { word: "mały", meaning: "small", gender: "adj" },
          { word: "ile", meaning: "how many, how much", gender: "adv" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "___ ma pokoi? (How many rooms?)", answer: "Ile" },
          { type: "gender-match", prompt: "___ mieszkanie (this apartment)", options: ["ten", "ta", "to"], answer: "to" },
          { type: "translate-to-polish", prompt: "It's big and comfortable", answer: "jest duże i wygodne", options: ["jest duże i wygodne", "jest małe i wygodne", "jest duże i ładne", "jest nowe i duże"] }
        ]
      }
    }
  },

  "5": {
    title: "Time & Leisure",
    description: "Making plans, telling time, and free time activities",
    grammar: ["Past tense", "Future tense", "Clock time", "Modal verbs"],
    subLessons: {
      A: {
        title: "Kino",
        dialogue: {
          context: "Inviting someone to the movies",
          lines: [
            { speaker: "Marian", polish: "Czy jesteś wolna dziś wieczorem?", english: "Are you free this evening?" },
            { speaker: "Marta", polish: "Nie. Jak zwykle jestem zajęta.", english: "No. As usual, I'm busy." },
            { speaker: "Marian", polish: "Mam bilety na polski film.", english: "I have tickets to a Polish film." },
            { speaker: "Marta", polish: "Chciałabym pójść, ale już jestem umówiona.", english: "I'd like to go, but I already have plans." },
            { speaker: "Marian", polish: "Szkoda. Może innym razem.", english: "Too bad. Maybe another time." },
            { speaker: "Marta", polish: "Z przyjemnością.", english: "With pleasure." }
          ]
        },
        vocabulary: [
          { word: "wolny", meaning: "free", gender: "adj" },
          { word: "zajęty", meaning: "busy", gender: "adj" },
          { word: "wieczór", meaning: "evening", gender: "m" },
          { word: "wieczorem", meaning: "in the evening", gender: "adv" },
          { word: "bilet", meaning: "ticket", gender: "m" },
          { word: "film", meaning: "film, movie", gender: "m" },
          { word: "kino", meaning: "cinema", gender: "n" },
          { word: "umówiony", meaning: "having an appointment", gender: "adj" },
          { word: "szkoda", meaning: "too bad, pity", gender: "f" },
          { word: "inny", meaning: "other, another", gender: "adj" },
          { word: "raz", meaning: "time, once", gender: "m" },
          { word: "przyjemność", meaning: "pleasure", gender: "f" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Czy jesteś ___ dziś wieczorem? (free)", answer: "wolny" },
          { type: "translate-to-english", prompt: "Jestem zajęta", answer: "I'm busy", options: ["I'm busy", "I'm free", "I'm tired", "I'm late"] },
          { type: "translate-to-polish", prompt: "Maybe another time", answer: "może innym razem", options: ["może innym razem", "może teraz", "może jutro", "może dziś"] }
        ]
      },
      B: {
        title: "Pilna sprawa",
        dialogue: {
          context: "An urgent matter",
          lines: [
            { speaker: "Aneta", polish: "Czy masz trochę czasu?", english: "Do you have a little time?" },
            { speaker: "Artur", polish: "To zależy kiedy.", english: "It depends when." },
            { speaker: "Aneta", polish: "Teraz. Chcę ci coś pokazać.", english: "Now. I want to show you something." },
            { speaker: "Artur", polish: "Nie, teraz nie mam czasu.", english: "No, I don't have time now." },
            { speaker: "Aneta", polish: "To kiedy będziesz miał czas?", english: "Then when will you have time?" },
            { speaker: "Artur", polish: "Później, może za godzinę.", english: "Later, maybe in an hour." }
          ]
        },
        vocabulary: [
          { word: "trochę", meaning: "a little", gender: "adv" },
          { word: "zależeć", meaning: "to depend", gender: "v" },
          { word: "kiedy", meaning: "when", gender: "adv" },
          { word: "pokazać", meaning: "to show", gender: "v" },
          { word: "coś", meaning: "something", gender: "pron" },
          { word: "później", meaning: "later", gender: "adv" },
          { word: "godzina", meaning: "hour", gender: "f" },
          { word: "minuta", meaning: "minute", gender: "f" },
          { word: "pilny", meaning: "urgent", gender: "adj" },
          { word: "sprawa", meaning: "matter, case", gender: "f" }
        ],
        exercises: [
          { type: "translate-to-english", prompt: "Nie mam czasu", answer: "I don't have time", options: ["I don't have time", "I don't have money", "I don't have it", "I don't want it"] },
          { type: "fill-blank", prompt: "To ___ kiedy. (It depends when)", answer: "zależy" },
          { type: "translate-to-polish", prompt: "in an hour", answer: "za godzinę", options: ["za godzinę", "za minutę", "za chwilę", "za tydzień"] }
        ]
      },
      C: {
        title: "Przepraszam cię",
        dialogue: {
          context: "Apologizing for missing a party",
          lines: [
            { speaker: "Ania", polish: "Gdzie byłeś wczoraj?", english: "Where were you yesterday?" },
            { speaker: "Olek", polish: "Jak to gdzie? Byłem w domu.", english: "What do you mean where? I was at home." },
            { speaker: "Ania", polish: "Byłeś zaproszony na moje przyjęcie!", english: "You were invited to my party!" },
            { speaker: "Olek", polish: "Myślałem, że przyjęcie jest dzisiaj.", english: "I thought the party was today." },
            { speaker: "Ania", polish: "Nie. Pomyliłeś się.", english: "No. You made a mistake." },
            { speaker: "Olek", polish: "Przepraszam cię! Jest mi bardzo przykro.", english: "I'm sorry! I feel very bad about it." }
          ]
        },
        vocabulary: [
          { word: "wczoraj", meaning: "yesterday", gender: "adv" },
          { word: "byłem", meaning: "I was (m)", gender: "v" },
          { word: "byłam", meaning: "I was (f)", gender: "v" },
          { word: "przyjęcie", meaning: "party", gender: "n" },
          { word: "zaproszony", meaning: "invited", gender: "adj" },
          { word: "myśleć", meaning: "to think", gender: "v" },
          { word: "myślałem", meaning: "I thought (m)", gender: "v" },
          { word: "pomylić się", meaning: "to make a mistake", gender: "v" },
          { word: "przepraszać", meaning: "to apologize", gender: "v" },
          { word: "przykro", meaning: "sorry (feeling)", gender: "adv" }
        ],
        exercises: [
          { type: "translate-to-english", prompt: "Gdzie byłeś wczoraj?", answer: "Where were you yesterday?", options: ["Where were you yesterday?", "Where are you today?", "Where will you be tomorrow?", "Where do you live?"] },
          { type: "fill-blank", prompt: "___ że przyjęcie jest dzisiaj. (I thought)", answer: "Myślałem" },
          { type: "translate-to-polish", prompt: "I'm sorry", answer: "przepraszam", options: ["przepraszam", "dziękuję", "proszę", "przykro mi"] }
        ]
      },
      D: {
        title: "Telewizja",
        dialogue: {
          context: "Watching TV",
          lines: [
            { speaker: "Żona", polish: "Czy będziesz tam siedział cały wieczór?", english: "Will you sit there all evening?" },
            { speaker: "Mąż", polish: "Oglądam telewizję.", english: "I'm watching television." },
            { speaker: "Żona", polish: "Ostatnio cały czas oglądasz telewizję.", english: "Lately you watch TV all the time." },
            { speaker: "Mąż", polish: "To mój ulubiony program.", english: "It's my favorite program." },
            { speaker: "Żona", polish: "Przecież to powtórka!", english: "But it's a rerun!" },
            { speaker: "Mąż", polish: "I tak jest interesująca.", english: "It's still interesting." }
          ]
        },
        vocabulary: [
          { word: "telewizja", meaning: "television", gender: "f" },
          { word: "oglądać", meaning: "to watch", gender: "v" },
          { word: "program", meaning: "program, show", gender: "m" },
          { word: "ulubiony", meaning: "favorite", gender: "adj" },
          { word: "powtórka", meaning: "rerun, repeat", gender: "f" },
          { word: "ostatnio", meaning: "lately, recently", gender: "adv" },
          { word: "cały", meaning: "whole, all", gender: "adj" },
          { word: "przecież", meaning: "but, after all", gender: "part" },
          { word: "i tak", meaning: "still, anyway", gender: "phrase" }
        ],
        exercises: [
          { type: "translate-to-english", prompt: "Oglądam telewizję", answer: "I'm watching television", options: ["I'm watching television", "I'm listening to radio", "I'm reading a book", "I'm playing a game"] },
          { type: "fill-blank", prompt: "To mój ___ program. (favorite)", answer: "ulubiony" },
          { type: "gender-match", prompt: "___ telewizja (this television)", options: ["ten", "ta", "to"], answer: "ta" }
        ]
      },
      E: {
        title: "Która godzina?",
        dialogue: {
          context: "Asking about time",
          lines: [
            { speaker: "Ewa", polish: "Która jest godzina?", english: "What time is it?" },
            { speaker: "Edek", polish: "Jest za kwadrans dwunasta.", english: "It's quarter to twelve." },
            { speaker: "Ewa", polish: "Ojej! Muszę być w domu o dwunastej.", english: "Oh my! I have to be home at twelve." },
            { speaker: "Edek", polish: "Nie zdążysz. Autobusy nie jeżdżą o tej porze.", english: "You won't make it. Buses don't run at this hour." },
            { speaker: "Ewa", polish: "To zadzwonię po taksówkę.", english: "Then I'll call a taxi." }
          ]
        },
        vocabulary: [
          { word: "godzina", meaning: "hour, o'clock", gender: "f" },
          { word: "kwadrans", meaning: "quarter (hour)", gender: "m" },
          { word: "pół", meaning: "half", gender: "n" },
          { word: "dwunasta", meaning: "twelve o'clock", gender: "num" },
          { word: "zdążyć", meaning: "to make it in time", gender: "v" },
          { word: "taksówka", meaning: "taxi", gender: "f" },
          { word: "pora", meaning: "time, hour", gender: "f" },
          { word: "o tej porze", meaning: "at this hour", gender: "phrase" }
        ],
        exercises: [
          { type: "translate-to-english", prompt: "Która jest godzina?", answer: "What time is it?", options: ["What time is it?", "What day is it?", "What is it?", "Where is it?"] },
          { type: "fill-blank", prompt: "Jest za ___ dwunasta. (quarter to twelve)", answer: "kwadrans" },
          { type: "translate-to-polish", prompt: "I have to be home at twelve", answer: "muszę być w domu o dwunastej", options: ["muszę być w domu o dwunastej", "chcę być w domu o dwunastej", "mogę być w domu o dwunastej", "będę w domu o dwunastej"] }
        ]
      }
    }
  },

  "6": {
    title: "Travel & Life",
    description: "Transportation, nature, and life events",
    grammar: ["Vocative case", "Verbs of motion", "Prepositions of direction"],
    subLessons: {
      A: {
        title: "W ogrodzie",
        dialogue: {
          context: "Talking about the garden",
          lines: [
            { speaker: "Ela", polish: "Masz piękny ogród!", english: "You have a beautiful garden!" },
            { speaker: "Emil", polish: "Dziękuję. Dużo pracuję.", english: "Thanks. I work a lot on it." },
            { speaker: "Ela", polish: "Co sadzisz?", english: "What do you plant?" },
            { speaker: "Emil", polish: "Pomidory, ogórki i marchewki.", english: "Tomatoes, cucumbers, and carrots." },
            { speaker: "Ela", polish: "Lubię pracę w ogrodzie.", english: "I like working in the garden." }
          ]
        },
        vocabulary: [
          { word: "ogród", meaning: "garden", gender: "m" },
          { word: "piękny", meaning: "beautiful", gender: "adj" },
          { word: "sadzić", meaning: "to plant", gender: "v" },
          { word: "pomidor", meaning: "tomato", gender: "m" },
          { word: "ogórek", meaning: "cucumber", gender: "m" },
          { word: "marchewka", meaning: "carrot", gender: "f" },
          { word: "kwiat", meaning: "flower", gender: "m" },
          { word: "drzewo", meaning: "tree", gender: "n" }
        ],
        exercises: [
          { type: "gender-match", prompt: "___ ogród (this garden)", options: ["ten", "ta", "to"], answer: "ten" },
          { type: "translate-to-english", prompt: "Masz piękny ogród", answer: "You have a beautiful garden", options: ["You have a beautiful garden", "You have a big house", "You have a nice car", "You have a good job"] }
        ]
      },
      B: {
        title: "Koncert",
        dialogue: {
          context: "Going to a concert",
          lines: [
            { speaker: "Kasia", polish: "Idziesz na koncert?", english: "Are you going to the concert?" },
            { speaker: "Kamil", polish: "Tak, bardzo lubię tę grupę.", english: "Yes, I really like this band." },
            { speaker: "Kasia", polish: "O której zaczyna się koncert?", english: "What time does the concert start?" },
            { speaker: "Kamil", polish: "O ósmej wieczorem.", english: "At eight in the evening." },
            { speaker: "Kasia", polish: "Może pójdziemy razem?", english: "Maybe we'll go together?" },
            { speaker: "Kamil", polish: "Świetny pomysł!", english: "Great idea!" }
          ]
        },
        vocabulary: [
          { word: "koncert", meaning: "concert", gender: "m" },
          { word: "grupa", meaning: "band, group", gender: "f" },
          { word: "muzyka", meaning: "music", gender: "f" },
          { word: "zaczynać się", meaning: "to begin", gender: "v" },
          { word: "razem", meaning: "together", gender: "adv" },
          { word: "świetny", meaning: "great", gender: "adj" },
          { word: "pomysł", meaning: "idea", gender: "m" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "O której ___ się koncert? (begins)", answer: "zaczyna" },
          { type: "translate-to-polish", prompt: "Great idea!", answer: "świetny pomysł", options: ["świetny pomysł", "dobry pomysł", "zły pomysł", "nowy pomysł"] }
        ]
      },
      C: {
        title: "Jak dojeżdżasz do pracy?",
        dialogue: {
          context: "Commuting to work",
          lines: [
            { speaker: "A", polish: "Jak dojeżdżasz do pracy?", english: "How do you get to work?" },
            { speaker: "B", polish: "Zazwyczaj jadę tramwajem.", english: "I usually go by tram." },
            { speaker: "A", polish: "A jak daleko masz do pracy?", english: "And how far is it to work?" },
            { speaker: "B", polish: "Około trzydziestu minut.", english: "About thirty minutes." },
            { speaker: "A", polish: "To niedaleko.", english: "That's not far." }
          ]
        },
        vocabulary: [
          { word: "dojeżdżać", meaning: "to commute", gender: "v" },
          { word: "tramwaj", meaning: "tram", gender: "m" },
          { word: "metro", meaning: "metro, subway", gender: "n" },
          { word: "pociąg", meaning: "train", gender: "m" },
          { word: "samochód", meaning: "car", gender: "m" },
          { word: "rower", meaning: "bicycle", gender: "m" },
          { word: "zazwyczaj", meaning: "usually", gender: "adv" },
          { word: "około", meaning: "about, approximately", gender: "prep" }
        ],
        exercises: [
          { type: "translate-to-english", prompt: "Jak dojeżdżasz do pracy?", answer: "How do you get to work?", options: ["How do you get to work?", "Where do you work?", "When do you work?", "Do you like work?"] },
          { type: "fill-blank", prompt: "Jadę ___. (by tram)", answer: "tramwajem" }
        ]
      },
      D: {
        title: "Podróż",
        dialogue: {
          context: "Planning a trip",
          lines: [
            { speaker: "Tomek", polish: "Gdzie jedziesz na wakacje?", english: "Where are you going for vacation?" },
            { speaker: "Teresa", polish: "Jadę nad morze.", english: "I'm going to the seaside." },
            { speaker: "Tomek", polish: "Jak długo tam będziesz?", english: "How long will you be there?" },
            { speaker: "Teresa", polish: "Dwa tygodnie.", english: "Two weeks." },
            { speaker: "Tomek", polish: "Zazdroszczę ci!", english: "I envy you!" }
          ]
        },
        vocabulary: [
          { word: "podróż", meaning: "trip, journey", gender: "f" },
          { word: "wakacje", meaning: "vacation", gender: "pl" },
          { word: "morze", meaning: "sea", gender: "n" },
          { word: "góry", meaning: "mountains", gender: "pl" },
          { word: "jezioro", meaning: "lake", gender: "n" },
          { word: "plaża", meaning: "beach", gender: "f" },
          { word: "tydzień", meaning: "week", gender: "m" },
          { word: "zazdrościć", meaning: "to envy", gender: "v" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Jadę nad ___. (to the sea)", answer: "morze" },
          { type: "translate-to-polish", prompt: "Two weeks", answer: "dwa tygodnie", options: ["dwa tygodnie", "dwa dni", "dwa miesiące", "dwa lata"] }
        ]
      },
      E: {
        title: "Emerytura",
        dialogue: {
          context: "Talking about retirement",
          lines: [
            { speaker: "Jan", polish: "Kiedy idziesz na emeryturę?", english: "When are you retiring?" },
            { speaker: "Jolanta", polish: "Za dwa lata.", english: "In two years." },
            { speaker: "Jan", polish: "Co będziesz robiła?", english: "What will you do?" },
            { speaker: "Jolanta", polish: "Będę podróżować i czytać.", english: "I'll travel and read." },
            { speaker: "Jan", polish: "Brzmi wspaniale!", english: "Sounds wonderful!" }
          ]
        },
        vocabulary: [
          { word: "emerytura", meaning: "retirement", gender: "f" },
          { word: "emeryt", meaning: "retiree (m)", gender: "m" },
          { word: "emerytka", meaning: "retiree (f)", gender: "f" },
          { word: "podróżować", meaning: "to travel", gender: "v" },
          { word: "czytać", meaning: "to read", gender: "v" },
          { word: "brzmieć", meaning: "to sound", gender: "v" },
          { word: "rok", meaning: "year", gender: "m" },
          { word: "lata", meaning: "years", gender: "pl" }
        ],
        exercises: [
          { type: "translate-to-english", prompt: "Kiedy idziesz na emeryturę?", answer: "When are you retiring?", options: ["When are you retiring?", "Where are you going?", "What are you doing?", "How are you feeling?"] },
          { type: "fill-blank", prompt: "Za dwa ___. (In two years)", answer: "lata" }
        ]
      }
    }
  },

  "7": {
    title: "Social Life",
    description: "Parties, chores, sports, and cooking",
    grammar: ["Verbal aspect (impf/pf)", "Dative case", "Experiential adverbs"],
    subLessons: {
      A: {
        title: "Przyjęcie",
        dialogue: {
          context: "Organizing a party",
          lines: [
            { speaker: "Zdzisiek", polish: "Urządzam przyjęcie u siebie w najbliższy weekend.", english: "I'm organizing a party at my place this weekend." },
            { speaker: "Zosia", polish: "Świetny pomysł. Czy to znaczy, że jestem zaproszona?", english: "Great idea. Does that mean I'm invited?" },
            { speaker: "Zdzisiek", polish: "Oczywiście. Co więcej, możesz mi pomóc.", english: "Of course. What's more, you can help me." },
            { speaker: "Zosia", polish: "Chętnie, ale nie będę gotować i sprzątać.", english: "Gladly, but I won't be cooking and cleaning." },
            { speaker: "Zdzisiek", polish: "Kogo jeszcze zapraszasz?", english: "Who else are you inviting?" },
            { speaker: "Zosia", polish: "Nie wiem jeszcze. Będę musiał pomyśleć.", english: "I don't know yet. I'll have to think about it." }
          ]
        },
        vocabulary: [
          { word: "przyjęcie", meaning: "party", gender: "n" },
          { word: "zaproszenie", meaning: "invitation", gender: "n" },
          { word: "gość", meaning: "guest", gender: "m" },
          { word: "gospodarz", meaning: "host", gender: "m" },
          { word: "gospodyni", meaning: "hostess", gender: "f" },
          { word: "zaprosić", meaning: "to invite (pf)", gender: "v" },
          { word: "zapraszać", meaning: "to invite (impf)", gender: "v" },
          { word: "urządzać", meaning: "to organize", gender: "v" },
          { word: "chętnie", meaning: "gladly", gender: "adv" },
          { word: "pomóc", meaning: "to help (pf)", gender: "v" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Urządzam ___ u siebie. (I'm organizing a party)", answer: "przyjęcie" },
          { type: "translate-to-english", prompt: "Czy jestem zaproszona?", answer: "Am I invited?", options: ["Am I invited?", "Am I late?", "Am I ready?", "Am I welcome?"] },
          { type: "translate-to-polish", prompt: "I'll help you gladly", answer: "chętnie ci pomogę", options: ["chętnie ci pomogę", "chętnie cię zaproszę", "chętnie przyjdę", "chętnie zjem"] }
        ]
      },
      B: {
        title: "Prace domowe",
        dialogue: {
          context: "Discussing household chores",
          lines: [
            { speaker: "Żona", polish: "Czy już posprzątałeś mieszkanie?", english: "Have you already cleaned the apartment?" },
            { speaker: "Mąż", polish: "Jeszcze nie. Właśnie zmywam naczynia.", english: "Not yet. I'm just washing the dishes." },
            { speaker: "Żona", polish: "A śmieci? Wyrzuciłeś śmieci?", english: "And the trash? Did you take out the trash?" },
            { speaker: "Mąż", polish: "Zaraz wyrzucę. Daj mi chwilę.", english: "I'll throw it out soon. Give me a moment." },
            { speaker: "Żona", polish: "Dobrze. A ja będę prać.", english: "Okay. And I'll do the laundry." }
          ]
        },
        vocabulary: [
          { word: "sprzątać", meaning: "to clean (impf)", gender: "v" },
          { word: "posprzątać", meaning: "to clean (pf)", gender: "v" },
          { word: "zmywać", meaning: "to wash dishes (impf)", gender: "v" },
          { word: "pozmywać", meaning: "to wash dishes (pf)", gender: "v" },
          { word: "naczynie", meaning: "dish, vessel", gender: "n" },
          { word: "śmieci", meaning: "trash", gender: "pl" },
          { word: "wyrzucać", meaning: "to throw out (impf)", gender: "v" },
          { word: "prać", meaning: "to do laundry", gender: "v" },
          { word: "odkurzać", meaning: "to vacuum", gender: "v" },
          { word: "prasować", meaning: "to iron", gender: "v" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Czy już ___ mieszkanie? (Have you cleaned?)", answer: "posprzątałeś" },
          { type: "translate-to-english", prompt: "Zmywam naczynia", answer: "I'm washing the dishes", options: ["I'm washing the dishes", "I'm cooking dinner", "I'm cleaning up", "I'm taking out trash"] },
          { type: "gender-match", prompt: "___ naczynie (this dish)", options: ["ten", "ta", "to"], answer: "to" }
        ]
      },
      C: {
        title: "Sport",
        dialogue: {
          context: "Watching sports on TV",
          lines: [
            { speaker: "Żona", polish: "Jakie masz plany na dziś?", english: "What plans do you have for today?" },
            { speaker: "Mąż", polish: "Będę cały czas w domu.", english: "I'll be at home the whole time." },
            { speaker: "Żona", polish: "Nie masz ochoty pójść ze mną na zakupy?", english: "Don't you feel like going shopping with me?" },
            { speaker: "Mąż", polish: "Nie, wolę zostać w domu i oglądać wyścig.", english: "No, I prefer to stay home and watch the race." },
            { speaker: "Żona", polish: "Jak chcesz. Mogę ci coś załatwić?", english: "As you wish. Can I get you anything?" },
            { speaker: "Mąż", polish: "Tak, kup mi gazetę, proszę.", english: "Yes, buy me a newspaper, please." }
          ]
        },
        vocabulary: [
          { word: "wyścig", meaning: "race", gender: "m" },
          { word: "kolarstwo", meaning: "cycling", gender: "n" },
          { word: "piłka nożna", meaning: "football/soccer", gender: "f" },
          { word: "siatkówka", meaning: "volleyball", gender: "f" },
          { word: "koszykówka", meaning: "basketball", gender: "f" },
          { word: "zostać", meaning: "to stay (pf)", gender: "v" },
          { word: "załatwić", meaning: "to take care of (pf)", gender: "v" },
          { word: "mieć ochotę", meaning: "to feel like", gender: "phrase" },
          { word: "wolę", meaning: "I prefer", gender: "v" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Wolę ___ w domu. (I prefer to stay)", answer: "zostać" },
          { type: "translate-to-english", prompt: "Masz ochotę pójść?", answer: "Do you feel like going?", options: ["Do you feel like going?", "Do you want to stay?", "Do you have time?", "Do you like it?"] },
          { type: "gender-match", prompt: "___ wyścig (this race)", options: ["ten", "ta", "to"], answer: "ten" }
        ]
      },
      D: {
        title: "Moda",
        dialogue: {
          context: "Fashion vs comfort",
          lines: [
            { speaker: "Anna", polish: "Przykro mi, że nie podoba ci się mój nowy płaszcz.", english: "I'm sorry you don't like my new coat." },
            { speaker: "Antoni", polish: "On mi się podoba, ale chyba ci w nim zimno.", english: "I like it, but aren't you cold in it?" },
            { speaker: "Anna", polish: "Trochę jest mi zimno, ale moda jest ważniejsza.", english: "I'm a little cold, but fashion is more important." },
            { speaker: "Antoni", polish: "W ten sposób możesz się przeziębić.", english: "That way you can catch a cold." },
            { speaker: "Anna", polish: "Nie szkodzi. Już i tak jestem przeziębiona.", english: "No problem. I already have a cold anyway." }
          ]
        },
        vocabulary: [
          { word: "moda", meaning: "fashion", gender: "f" },
          { word: "wygoda", meaning: "comfort", gender: "f" },
          { word: "zimno", meaning: "cold (feeling)", gender: "adv" },
          { word: "gorąco", meaning: "hot (feeling)", gender: "adv" },
          { word: "duszno", meaning: "stuffy", gender: "adv" },
          { word: "przeziębić się", meaning: "to catch a cold", gender: "v" },
          { word: "przeziębiony", meaning: "having a cold", gender: "adj" },
          { word: "katar", meaning: "head cold", gender: "m" },
          { word: "grypa", meaning: "flu", gender: "f" },
          { word: "ważny", meaning: "important", gender: "adj" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Jest mi ___. (I am cold)", answer: "zimno" },
          { type: "translate-to-english", prompt: "Możesz się przeziębić", answer: "You can catch a cold", options: ["You can catch a cold", "You can feel cold", "You can stay home", "You can get better"] },
          { type: "translate-to-polish", prompt: "Fashion is important", answer: "moda jest ważna", options: ["moda jest ważna", "moda jest piękna", "moda jest droga", "moda jest nowa"] }
        ]
      },
      E: {
        title: "Przepis",
        dialogue: {
          context: "Discussing a soup recipe",
          lines: [
            { speaker: "Magda", polish: "Jak ci smakuje ta zupa?", english: "How do you like the soup?" },
            { speaker: "Marek", polish: "Bardzo mi smakuje. Co to jest?", english: "I like it a lot. What is it?" },
            { speaker: "Magda", polish: "Zupa szczawiowa. Jest dobra na katar.", english: "Sorrel soup. It's good for a cold." },
            { speaker: "Marek", polish: "Musisz mi dać przepis.", english: "You have to give me the recipe." },
            { speaker: "Magda", polish: "To proste. Otwierasz torebkę i dodajesz wodę.", english: "It's simple. You open a bag and add water." }
          ]
        },
        vocabulary: [
          { word: "przepis", meaning: "recipe", gender: "m" },
          { word: "smakować", meaning: "to taste", gender: "v" },
          { word: "zupa", meaning: "soup", gender: "f" },
          { word: "gotować", meaning: "to cook (impf)", gender: "v" },
          { word: "ugotować", meaning: "to cook (pf)", gender: "v" },
          { word: "dodawać", meaning: "to add (impf)", gender: "v" },
          { word: "dodać", meaning: "to add (pf)", gender: "v" },
          { word: "otwierać", meaning: "to open (impf)", gender: "v" },
          { word: "otworzyć", meaning: "to open (pf)", gender: "v" },
          { word: "podgrzewać", meaning: "to heat up", gender: "v" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Jak ci ___ ta zupa? (How do you like...)", answer: "smakuje" },
          { type: "translate-to-english", prompt: "Musisz mi dać przepis", answer: "You have to give me the recipe", options: ["You have to give me the recipe", "You have to cook for me", "You have to help me", "You have to try this"] },
          { type: "gender-match", prompt: "___ zupa (this soup)", options: ["ten", "ta", "to"], answer: "ta" }
        ]
      }
    }
  },

  "8": {
    title: "Daily Routines",
    description: "Building a house, daily activities, transportation",
    grammar: ["Plural past tense", "Reflexive się", "Conjugation mastery"],
    subLessons: {
      A: {
        title: "Nowy dom",
        dialogue: {
          context: "Discussing house construction",
          lines: [
            { speaker: "Joasia", polish: "Słyszałam, że państwo budują nowy dom.", english: "I heard you're building a new house." },
            { speaker: "Janusz", polish: "Tak. Budujemy go już prawie rok.", english: "Yes. We've been building it for almost a year." },
            { speaker: "Joasia", polish: "Dlaczego budowa trwa tak długo?", english: "Why is the construction taking so long?" },
            { speaker: "Janusz", polish: "Bo ciągle są kłopoty z pracownikami.", english: "Because there are constantly problems with the workers." },
            { speaker: "Joasia", polish: "Kiedy się przeprowadzacie?", english: "When are you moving?" },
            { speaker: "Janusz", polish: "Chyba w następnym miesiącu.", english: "Probably next month." }
          ]
        },
        vocabulary: [
          { word: "budować", meaning: "to build", gender: "v" },
          { word: "budowa", meaning: "construction", gender: "f" },
          { word: "dom", meaning: "house", gender: "m" },
          { word: "przeprowadzać się", meaning: "to move (house)", gender: "v" },
          { word: "kłopoty", meaning: "troubles, problems", gender: "pl" },
          { word: "pracownik", meaning: "worker", gender: "m" },
          { word: "materiały", meaning: "materials", gender: "pl" },
          { word: "trwać", meaning: "to last", gender: "v" },
          { word: "gotowy", meaning: "ready", gender: "adj" },
          { word: "następny", meaning: "next", gender: "adj" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Budujemy dom już prawie ___. (for almost a year)", answer: "rok" },
          { type: "translate-to-english", prompt: "Kiedy się przeprowadzacie?", answer: "When are you moving?", options: ["When are you moving?", "When are you building?", "When are you coming?", "When are you leaving?"] },
          { type: "gender-match", prompt: "___ budowa (this construction)", options: ["ten", "ta", "to"], answer: "ta" }
        ]
      },
      B: {
        title: "Jak się poznaliśmy",
        dialogue: {
          context: "Discussing how people met",
          lines: [
            { speaker: "Anna", polish: "Andrzej, czy znasz Bożenę?", english: "Andrzej, do you know Bożena?" },
            { speaker: "Andrzej", polish: "Oczywiście, znamy się od dawna.", english: "Of course, we've known each other for a long time." },
            { speaker: "Anna", polish: "Naprawdę?", english: "Really?" },
            { speaker: "Andrzej", polish: "Tak, jesteśmy dobrymi przyjaciółmi.", english: "Yes, we're good friends." },
            { speaker: "Anna", polish: "Skąd wy się znacie?", english: "Where do you know each other from?" },
            { speaker: "Andrzej", polish: "Naprawdę nie pamiętam.", english: "I really don't remember." }
          ]
        },
        vocabulary: [
          { word: "znać się", meaning: "to know each other", gender: "v" },
          { word: "poznać się", meaning: "to meet each other", gender: "v" },
          { word: "od dawna", meaning: "for a long time", gender: "phrase" },
          { word: "przyjaciel", meaning: "friend (m)", gender: "m" },
          { word: "przyjaciółka", meaning: "friend (f)", gender: "f" },
          { word: "pamiętać", meaning: "to remember", gender: "v" },
          { word: "skąd", meaning: "from where", gender: "adv" },
          { word: "naprawdę", meaning: "really", gender: "adv" },
          { word: "dawno", meaning: "long ago", gender: "adv" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Znamy się od ___. (for a long time)", answer: "dawna" },
          { type: "translate-to-english", prompt: "Skąd się znacie?", answer: "Where do you know each other from?", options: ["Where do you know each other from?", "How are you?", "When did you meet?", "Who is she?"] },
          { type: "translate-to-polish", prompt: "We are good friends", answer: "jesteśmy dobrymi przyjaciółmi", options: ["jesteśmy dobrymi przyjaciółmi", "jesteśmy kolegami", "znamy się dobrze", "lubimy się"] }
        ]
      },
      C: {
        title: "Przypadkowe spotkanie",
        dialogue: {
          context: "Meeting someone at a party",
          lines: [
            { speaker: "Paweł", polish: "Nudzisz się tu chyba.", english: "You're probably bored here." },
            { speaker: "Paulina", polish: "Nie, wcale się nie nudzę.", english: "No, I'm not bored at all." },
            { speaker: "Paweł", polish: "Naprawdę się nie nudzisz?", english: "You're really not bored?" },
            { speaker: "Paulina", polish: "Nie martw się. Nieźle się bawię.", english: "Don't worry. I'm having a good time." },
            { speaker: "Paweł", polish: "Cieszę się, że się nie nudzisz.", english: "I'm glad you're not bored." },
            { speaker: "Paulina", polish: "Zawsze mówię, co myślę.", english: "I always say what I think." }
          ]
        },
        vocabulary: [
          { word: "nudzić się", meaning: "to be bored", gender: "v" },
          { word: "bawić się", meaning: "to have fun", gender: "v" },
          { word: "cieszyć się", meaning: "to be glad", gender: "v" },
          { word: "martwić się", meaning: "to worry", gender: "v" },
          { word: "wcale nie", meaning: "not at all", gender: "phrase" },
          { word: "nieźle", meaning: "not bad, pretty well", gender: "adv" },
          { word: "zawsze", meaning: "always", gender: "adv" },
          { word: "myśleć", meaning: "to think", gender: "v" },
          { word: "mówić", meaning: "to speak, say", gender: "v" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Wcale się nie ___. (I'm not bored at all)", answer: "nudzę" },
          { type: "translate-to-english", prompt: "Nieźle się bawię", answer: "I'm having a good time", options: ["I'm having a good time", "I'm not bored", "I'm thinking", "I'm worried"] },
          { type: "translate-to-polish", prompt: "Don't worry", answer: "nie martw się", options: ["nie martw się", "nie nudzę się", "nie baw się", "nie myśl"] }
        ]
      },
      D: {
        title: "Komputer",
        dialogue: {
          context: "Asking about technology terms",
          lines: [
            { speaker: "Darek", polish: "Jak się mówi po angielsku 'informatyka'?", english: "How do you say 'informatyka' in English?" },
            { speaker: "Danka", polish: "Nie mam pojęcia. Trzeba zapytać profesora.", english: "I have no idea. We should ask the professor." },
            { speaker: "Darek", polish: "Nie chcę go zapytać. Trochę się wstydzę.", english: "I don't want to ask him. I'm a little embarrassed." },
            { speaker: "Danka", polish: "To ja go zapytam. Ja się nie boję.", english: "Then I'll ask him. I'm not afraid." },
            { speaker: "Darek", polish: "Zawsze można to wygooglować.", english: "One can always Google it." }
          ]
        },
        vocabulary: [
          { word: "informatyka", meaning: "computer science", gender: "f" },
          { word: "informatyk", meaning: "computer specialist", gender: "m" },
          { word: "komputer", meaning: "computer", gender: "m" },
          { word: "wstydzić się", meaning: "to be embarrassed", gender: "v" },
          { word: "bać się", meaning: "to be afraid", gender: "v" },
          { word: "googlować", meaning: "to google", gender: "v" },
          { word: "zapytać", meaning: "to ask (pf)", gender: "v" },
          { word: "profesor", meaning: "professor", gender: "m" },
          { word: "trzeba", meaning: "one must, it's necessary", gender: "v" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Jak się ___ po angielsku...? (How do you say...)", answer: "mówi" },
          { type: "translate-to-english", prompt: "Trochę się wstydzę", answer: "I'm a little embarrassed", options: ["I'm a little embarrassed", "I'm a little afraid", "I'm a little bored", "I'm a little tired"] },
          { type: "gender-match", prompt: "___ komputer (this computer)", options: ["ten", "ta", "to"], answer: "ten" }
        ]
      },
      E: {
        title: "Na dworcu",
        dialogue: {
          context: "Missing a train",
          lines: [
            { speaker: "Piotr", polish: "Przepraszam, spóźniłem się. Która jest godzina?", english: "Sorry, I'm late. What time is it?" },
            { speaker: "Patrycja", polish: "Niedługo będzie dziewiąta.", english: "Soon it will be nine." },
            { speaker: "Piotr", polish: "Teraz chyba nie zdążymy na pociąg.", english: "Now we probably won't make the train." },
            { speaker: "Patrycja", polish: "Nasz pociąg już odjechał. Ale nie przejmuj się.", english: "Our train already left. But don't worry." },
            { speaker: "Piotr", polish: "Następny będzie dopiero za dwie godziny.", english: "The next one will be only in two hours." },
            { speaker: "Patrycja", polish: "Pójdziemy do baru i poczekamy.", english: "We'll go to the bar and wait." }
          ]
        },
        vocabulary: [
          { word: "dworzec", meaning: "train station", gender: "m" },
          { word: "pociąg", meaning: "train", gender: "m" },
          { word: "spóźnić się", meaning: "to be late", gender: "v" },
          { word: "zdążyć", meaning: "to make it on time", gender: "v" },
          { word: "odjechać", meaning: "to depart", gender: "v" },
          { word: "przejmować się", meaning: "to worry about", gender: "v" },
          { word: "poczekać", meaning: "to wait (pf)", gender: "v" },
          { word: "wina", meaning: "fault", gender: "f" },
          { word: "dopiero", meaning: "only, not until", gender: "adv" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Nie ___ na pociąg. (We won't make it)", answer: "zdążymy" },
          { type: "translate-to-english", prompt: "Nasz pociąg już odjechał", answer: "Our train already left", options: ["Our train already left", "Our train is coming", "Our train is late", "Our train is here"] },
          { type: "translate-to-polish", prompt: "Don't worry about it", answer: "nie przejmuj się", options: ["nie przejmuj się", "nie martw się", "nie bój się", "nie spóźnij się"] }
        ]
      }
    }
  },

  "9": {
    title: "Genitive Foundations",
    description: "Possession, directions, and food vocabulary",
    grammar: ["Genitive case (singular)", "Negation", "Quantities and containers"],
    subLessons: {
      A: {
        title: "Zdjęcie",
        dialogue: {
          context: "Showing a photograph",
          lines: [
            { speaker: "Beata", polish: "Co tam masz?", english: "What do you have there?" },
            { speaker: "Bronek", polish: "To fotografia mojej narzeczonej. Podoba ci się?", english: "That's a photograph of my fiancée. Do you like it?" },
            { speaker: "Beata", polish: "Zdjęcie czy narzeczona?", english: "The photo or the fiancée?" },
            { speaker: "Bronek", polish: "Narzeczona, oczywiście.", english: "My fiancée, of course." },
            { speaker: "Beata", polish: "Owszem, ona jest bardzo ładna.", english: "Sure, she's very pretty." },
            { speaker: "Bronek", polish: "Jest studentką trzeciego roku.", english: "She's a third-year student." }
          ]
        },
        vocabulary: [
          { word: "zdjęcie", meaning: "photo, picture", gender: "n" },
          { word: "fotografia", meaning: "photograph", gender: "f" },
          { word: "narzeczona", meaning: "fiancée", gender: "f" },
          { word: "narzeczony", meaning: "fiancé", gender: "m" },
          { word: "ślub", meaning: "wedding", gender: "m" },
          { word: "legitymacja", meaning: "ID card", gender: "f" },
          { word: "paszport", meaning: "passport", gender: "m" },
          { word: "portfel", meaning: "wallet", gender: "m" },
          { word: "owszem", meaning: "sure, certainly", gender: "adv" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "To fotografia mojej ___. (of my fiancée)", answer: "narzeczonej" },
          { type: "translate-to-english", prompt: "Podoba ci się?", answer: "Do you like it?", options: ["Do you like it?", "Do you have it?", "Do you see it?", "Do you want it?"] },
          { type: "gender-match", prompt: "___ zdjęcie (this photo)", options: ["ten", "ta", "to"], answer: "to" }
        ]
      },
      B: {
        title: "Szukam ulicy",
        dialogue: {
          context: "Asking for directions",
          lines: [
            { speaker: "Pan Edward", polish: "Czego pani szuka? Może mogę pomóc?", english: "What are you looking for? Maybe I can help?" },
            { speaker: "Pani Elżbieta", polish: "Szukam ulicy Ogrodowej.", english: "I'm looking for Ogrodowa Street." },
            { speaker: "Pan Edward", polish: "Ogrodowa to pierwsza przecznica w prawo.", english: "Ogrodowa is the first cross-street to the right." },
            { speaker: "Pani Elżbieta", polish: "A sklep z rowerami?", english: "And the bicycle shop?" },
            { speaker: "Pan Edward", polish: "Będzie po lewej stronie, obok kościoła.", english: "It will be on the left side, next to the church." },
            { speaker: "Pani Elżbieta", polish: "Dziękuję uprzejmie.", english: "Thank you kindly." }
          ]
        },
        vocabulary: [
          { word: "ulica", meaning: "street", gender: "f" },
          { word: "szukać", meaning: "to look for", gender: "v" },
          { word: "przecznica", meaning: "cross-street", gender: "f" },
          { word: "prawo", meaning: "right", gender: "n" },
          { word: "lewo", meaning: "left", gender: "n" },
          { word: "strona", meaning: "side", gender: "f" },
          { word: "obok", meaning: "next to", gender: "prep" },
          { word: "sklep", meaning: "shop", gender: "m" },
          { word: "uprzejmie", meaning: "kindly", gender: "adv" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Szukam ___ Ogrodowej. (of Ogrodowa Street)", answer: "ulicy" },
          { type: "translate-to-english", prompt: "Pierwsza przecznica w prawo", answer: "The first cross-street to the right", options: ["The first cross-street to the right", "The second street on the left", "Straight ahead", "Behind the church"] },
          { type: "translate-to-polish", prompt: "next to the church", answer: "obok kościoła", options: ["obok kościoła", "za kościołem", "przed kościołem", "w kościele"] }
        ]
      },
      C: {
        title: "Na ścieżce rowerowej",
        dialogue: {
          context: "On the bicycle path",
          lines: [
            { speaker: "Tomek", polish: "Wydaje mi się, że skądś znam tę kobietę.", english: "It seems to me I know that woman from somewhere." },
            { speaker: "Teresa", polish: "Przecież to Elżbieta, żona Adama.", english: "Why, that's Elżbieta, Adam's wife." },
            { speaker: "Tomek", polish: "Rzeczywiście, nie poznałem jej.", english: "Indeed, I didn't recognize her." },
            { speaker: "Teresa", polish: "To dlatego, że widzisz ją bez męża.", english: "That's because you see her without her husband." },
            { speaker: "Tomek", polish: "Ona dziś jakoś inaczej wygląda.", english: "She looks somehow different today." }
          ]
        },
        vocabulary: [
          { word: "ścieżka", meaning: "path", gender: "f" },
          { word: "rower", meaning: "bicycle", gender: "m" },
          { word: "kobieta", meaning: "woman", gender: "f" },
          { word: "mężczyzna", meaning: "man", gender: "m" },
          { word: "żona", meaning: "wife", gender: "f" },
          { word: "mąż", meaning: "husband", gender: "m" },
          { word: "bez", meaning: "without", gender: "prep" },
          { word: "poznać", meaning: "to recognize", gender: "v" },
          { word: "wydawać się", meaning: "to seem", gender: "v" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Widzę ją bez ___. (without her husband)", answer: "męża" },
          { type: "translate-to-english", prompt: "Nie poznałem jej", answer: "I didn't recognize her", options: ["I didn't recognize her", "I didn't see her", "I didn't know her", "I didn't meet her"] },
          { type: "gender-match", prompt: "___ ścieżka (this path)", options: ["ten", "ta", "to"], answer: "ta" }
        ]
      },
      D: {
        title: "Telefon",
        dialogue: {
          context: "A telephone call",
          lines: [
            { speaker: "Matka", polish: "Słucham?", english: "Hello?" },
            { speaker: "Kolega", polish: "Dobry wieczór. Czy jest tam Maria?", english: "Good evening. Is Maria there?" },
            { speaker: "Matka", polish: "Nie, nie ma jej.", english: "No, she's not here." },
            { speaker: "Kolega", polish: "A kiedy ona będzie?", english: "And when will she be there?" },
            { speaker: "Matka", polish: "Maria wyszła na chwilę. Niedługo wraca.", english: "Maria went out for a moment. She'll be back soon." },
            { speaker: "Kolega", polish: "To zadzwonię później.", english: "Then I'll call later." }
          ]
        },
        vocabulary: [
          { word: "telefon", meaning: "telephone", gender: "m" },
          { word: "komórka", meaning: "cell phone", gender: "f" },
          { word: "dzwonić", meaning: "to call", gender: "v" },
          { word: "zadzwonić", meaning: "to call (pf)", gender: "v" },
          { word: "słuchać", meaning: "to listen", gender: "v" },
          { word: "wracać", meaning: "to return", gender: "v" },
          { word: "wyjść", meaning: "to go out", gender: "v" },
          { word: "chwila", meaning: "moment", gender: "f" },
          { word: "niedługo", meaning: "soon", gender: "adv" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Nie ma ___. (She's not here)", answer: "jej" },
          { type: "translate-to-english", prompt: "Zadzwonię później", answer: "I'll call later", options: ["I'll call later", "I'll come later", "I'll wait", "I'll leave a message"] },
          { type: "translate-to-polish", prompt: "She went out for a moment", answer: "wyszła na chwilę", options: ["wyszła na chwilę", "wróciła na chwilę", "zadzwoniła na chwilę", "czekała chwilę"] }
        ]
      },
      E: {
        title: "Mam ochotę na lody",
        dialogue: {
          context: "Wanting ice cream",
          lines: [
            { speaker: "Felicja", polish: "Jestem głodna. Chciałabym coś zjeść.", english: "I'm hungry. I'd like to eat something." },
            { speaker: "Tomek", polish: "Ja też. Na co masz ochotę?", english: "Me too. What do you feel like having?" },
            { speaker: "Felicja", polish: "Mam ochotę na coś słodkiego.", english: "I feel like something sweet." },
            { speaker: "Tomek", polish: "Możemy kupić ciastka.", english: "We can buy some pastries." },
            { speaker: "Felicja", polish: "Nie, wolę coś zimnego. Lody!", english: "No, I prefer something cold. Ice cream!" },
            { speaker: "Tomek", polish: "Chodźmy do tej kawiarni.", english: "Let's go to that café." }
          ]
        },
        vocabulary: [
          { word: "lody", meaning: "ice cream", gender: "pl" },
          { word: "ciastko", meaning: "pastry, cookie", gender: "n" },
          { word: "kawiarnia", meaning: "café", gender: "f" },
          { word: "słodki", meaning: "sweet", gender: "adj" },
          { word: "zimny", meaning: "cold", gender: "adj" },
          { word: "głodny", meaning: "hungry", gender: "adj" },
          { word: "ochotę", meaning: "desire, appetite", gender: "f" },
          { word: "herbata", meaning: "tea", gender: "f" },
          { word: "sok", meaning: "juice", gender: "m" },
          { word: "woda", meaning: "water", gender: "f" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Mam ochotę na coś ___. (something sweet)", answer: "słodkiego" },
          { type: "translate-to-english", prompt: "Na co masz ochotę?", answer: "What do you feel like having?", options: ["What do you feel like having?", "What do you want?", "What do you need?", "What do you see?"] },
          { type: "translate-to-polish", prompt: "Let's go to the café", answer: "chodźmy do kawiarni", options: ["chodźmy do kawiarni", "idźmy do sklepu", "chodźmy do domu", "idźmy na lody"] }
        ]
      }
    }
  },

  "10": {
    title: "Plurals & Body",
    description: "Body parts, animals, and complex plurals",
    grammar: ["Nominative plural", "Masculine-personal plurals", "Numbers 2-4"],
    subLessons: {
      A: {
        title: "Pieniądze",
        dialogue: {
          context: "Discussing money problems",
          lines: [
            { speaker: "Marta", polish: "O cześć, Jarek. Wejdź, proszę.", english: "Oh hi, Jarek. Please come in." },
            { speaker: "Jarek", polish: "Szczerze mówiąc, potrzebuję twojej pomocy.", english: "Honestly, I need your help." },
            { speaker: "Marta", polish: "W czym mogę ci pomóc? Masz kłopoty?", english: "How can I help you? Are you having problems?" },
            { speaker: "Jarek", polish: "No właśnie chodzi o pieniądze.", english: "Well, it's about money." },
            { speaker: "Marta", polish: "Znamy się od dzieciństwa, Jarek.", english: "We've known each other since childhood, Jarek." },
            { speaker: "Jarek", polish: "Czy możesz mi pożyczyć sto złotych?", english: "Can you lend me a hundred zlotys?" }
          ]
        },
        vocabulary: [
          { word: "pieniądze", meaning: "money", gender: "pl" },
          { word: "pożyczka", meaning: "loan", gender: "f" },
          { word: "pożyczać", meaning: "to lend/borrow", gender: "v" },
          { word: "pomoc", meaning: "help", gender: "f" },
          { word: "kłopoty", meaning: "troubles", gender: "pl" },
          { word: "szczerze", meaning: "honestly", gender: "adv" },
          { word: "dzieciństwo", meaning: "childhood", gender: "n" },
          { word: "złoty", meaning: "zloty (currency)", gender: "m" },
          { word: "potrzebować", meaning: "to need", gender: "v" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Chodzi o ___. (It's about money)", answer: "pieniądze" },
          { type: "translate-to-english", prompt: "Potrzebuję twojej pomocy", answer: "I need your help", options: ["I need your help", "I need your money", "I need your time", "I need your advice"] },
          { type: "translate-to-polish", prompt: "Can you lend me?", answer: "czy możesz mi pożyczyć", options: ["czy możesz mi pożyczyć", "czy możesz mi pomóc", "czy możesz mi dać", "czy możesz przyjść"] }
        ]
      },
      B: {
        title: "W hotelu",
        dialogue: {
          context: "At the hotel reception",
          lines: [
            { speaker: "Recepcjonistka", polish: "Dobry wieczór!", english: "Good evening!" },
            { speaker: "Gość", polish: "Nie mam rezerwacji. Czy są wolne pokoje?", english: "I don't have a reservation. Are there rooms available?" },
            { speaker: "Recepcjonistka", polish: "Owszem, są.", english: "Yes, there are." },
            { speaker: "Gość", polish: "Proszę o dwuosobowy pokój z jacuzzi.", english: "I'd like a two-person room with a jacuzzi." },
            { speaker: "Recepcjonistka", polish: "Wszystkie nasze pokoje mają jacuzzi.", english: "All our rooms have jacuzzis." },
            { speaker: "Gość", polish: "Świetnie. Ile kosztuje doba?", english: "Great. How much is a night?" }
          ]
        },
        vocabulary: [
          { word: "hotel", meaning: "hotel", gender: "m" },
          { word: "pokój", meaning: "room", gender: "m" },
          { word: "pokoje", meaning: "rooms", gender: "pl" },
          { word: "rezerwacja", meaning: "reservation", gender: "f" },
          { word: "recepcja", meaning: "reception", gender: "f" },
          { word: "gość", meaning: "guest", gender: "m" },
          { word: "doba", meaning: "24-hour period", gender: "f" },
          { word: "wolny", meaning: "free, available", gender: "adj" },
          { word: "dwuosobowy", meaning: "for two people", gender: "adj" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Czy są wolne ___? (Are there rooms available?)", answer: "pokoje" },
          { type: "translate-to-english", prompt: "Ile kosztuje doba?", answer: "How much is a night?", options: ["How much is a night?", "How much is a room?", "How much is breakfast?", "How much is the hotel?"] },
          { type: "gender-match", prompt: "___ hotel (this hotel)", options: ["ten", "ta", "to"], answer: "ten" }
        ]
      },
      C: {
        title: "Gospodarstwo",
        dialogue: {
          context: "Visiting a farm",
          lines: [
            { speaker: "Pan Olaf", polish: "Słyszałem, że państwo mają gospodarstwo.", english: "I heard you have a farm." },
            { speaker: "Pani Ola", polish: "Tak, ale niezbyt wielkie.", english: "Yes, but not very big." },
            { speaker: "Pan Olaf", polish: "Jakie zwierzęta państwo hodują?", english: "What animals do you raise?" },
            { speaker: "Pani Ola", polish: "Głównie krowy, konie, świnie i owce.", english: "Mainly cows, horses, pigs, and sheep." },
            { speaker: "Pan Olaf", polish: "Czy macie gości w tej chwili?", english: "Do you have guests at the moment?" },
            { speaker: "Pani Ola", polish: "Tylko parę. Jest zima.", english: "Only a few. It's winter." }
          ]
        },
        vocabulary: [
          { word: "gospodarstwo", meaning: "farm", gender: "n" },
          { word: "zwierzę", meaning: "animal", gender: "n" },
          { word: "zwierzęta", meaning: "animals", gender: "pl" },
          { word: "krowa", meaning: "cow", gender: "f" },
          { word: "koń", meaning: "horse", gender: "m" },
          { word: "świnia", meaning: "pig", gender: "f" },
          { word: "owca", meaning: "sheep", gender: "f" },
          { word: "kura", meaning: "chicken", gender: "f" },
          { word: "hodować", meaning: "to raise, breed", gender: "v" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Jakie ___ państwo hodują? (What animals?)", answer: "zwierzęta" },
          { type: "translate-to-english", prompt: "Głównie krowy i konie", answer: "Mainly cows and horses", options: ["Mainly cows and horses", "Many cows and horses", "Some cows and horses", "Few cows and horses"] },
          { type: "gender-match", prompt: "___ gospodarstwo (this farm)", options: ["ten", "ta", "to"], answer: "to" }
        ]
      },
      D: {
        title: "Imieniny",
        dialogue: {
          context: "Discussing noisy neighbors",
          lines: [
            { speaker: "Wiktor", polish: "Czy wszyscy sąsiedzi są zawsze tacy hałaśliwi?", english: "Are all neighbors always so noisy?" },
            { speaker: "Wiesława", polish: "Nie wszyscy. Zwykle są spokojni.", english: "Not all. Usually they're peaceful." },
            { speaker: "Wiktor", polish: "Widocznie ktoś ma dziś imieniny.", english: "Evidently someone has a name day today." },
            { speaker: "Wiesława", polish: "Imieniny są tylko raz w roku.", english: "A name day comes only once a year." },
            { speaker: "Wiktor", polish: "Dobrze, ale nie w środku nocy.", english: "Fine, but not in the middle of the night." },
            { speaker: "Wiesława", polish: "Godzina dziesiąta to nie środek nocy.", english: "Ten o'clock is not the middle of the night." }
          ]
        },
        vocabulary: [
          { word: "imieniny", meaning: "name day", gender: "pl" },
          { word: "urodziny", meaning: "birthday", gender: "pl" },
          { word: "sąsiad", meaning: "neighbor (m)", gender: "m" },
          { word: "sąsiedzi", meaning: "neighbors", gender: "pl" },
          { word: "hałaśliwy", meaning: "noisy", gender: "adj" },
          { word: "spokojny", meaning: "peaceful, calm", gender: "adj" },
          { word: "noc", meaning: "night", gender: "f" },
          { word: "środek", meaning: "middle", gender: "m" },
          { word: "obchodzić", meaning: "to celebrate", gender: "v" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Wszyscy ___ są hałaśliwi. (All neighbors)", answer: "sąsiedzi" },
          { type: "translate-to-english", prompt: "Ktoś ma dziś imieniny", answer: "Someone has a name day today", options: ["Someone has a name day today", "Someone has a birthday today", "Someone has a party today", "Someone is noisy today"] },
          { type: "translate-to-polish", prompt: "in the middle of the night", answer: "w środku nocy", options: ["w środku nocy", "w nocy", "późno w nocy", "całą noc"] }
        ]
      },
      E: {
        title: "Nowi sąsiedzi",
        dialogue: {
          context: "Meeting new neighbors",
          lines: [
            { speaker: "Leon", polish: "Kim są ci ludzie?", english: "Who are those people?" },
            { speaker: "Lucyna", polish: "Jacy ludzie?", english: "What people?" },
            { speaker: "Leon", polish: "Ten pan z brodą i ta pani.", english: "That man with the beard and that lady." },
            { speaker: "Lucyna", polish: "To państwo Kluczewscy, nasi nowi sąsiedzi.", english: "That's Mr. and Mrs. Kluczewski, our new neighbors." },
            { speaker: "Leon", polish: "Sprawiają dziwne wrażenie.", english: "They make a strange impression." },
            { speaker: "Lucyna", polish: "To bardzo mili i interesujący ludzie.", english: "They're very nice and interesting people." }
          ]
        },
        vocabulary: [
          { word: "ludzie", meaning: "people", gender: "pl" },
          { word: "człowiek", meaning: "person, human", gender: "m" },
          { word: "broda", meaning: "beard", gender: "f" },
          { word: "wrażenie", meaning: "impression", gender: "n" },
          { word: "sprawiać", meaning: "to make, cause", gender: "v" },
          { word: "miły", meaning: "nice", gender: "adj" },
          { word: "mili", meaning: "nice (pl)", gender: "adj" },
          { word: "interesujący", meaning: "interesting", gender: "adj" },
          { word: "nowy", meaning: "new", gender: "adj" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Kim są ci ___? (Who are those people?)", answer: "ludzie" },
          { type: "translate-to-english", prompt: "To bardzo mili ludzie", answer: "They're very nice people", options: ["They're very nice people", "They're very noisy people", "They're very strange people", "They're very old people"] },
          { type: "translate-to-polish", prompt: "our new neighbors", answer: "nasi nowi sąsiedzi", options: ["nasi nowi sąsiedzi", "moi nowi przyjaciele", "nasze nowe mieszkanie", "nasz nowy dom"] }
        ]
      }
    }
  },

  "11": {
    title: "Complex Cases",
    description: "Genitive and instrumental plural, health topics",
    grammar: ["Genitive plural", "Instrumental plural", "Complex sentences"],
    subLessons: {
      A: {
        title: "Zdrowie",
        dialogue: {
          context: "At the doctor's office",
          lines: [
            { speaker: "Lekarz", polish: "Co panu dolega?", english: "What's troubling you?" },
            { speaker: "Pacjent", polish: "Bardzo źle się czuję. Boli mnie głowa.", english: "I feel very bad. My head hurts." },
            { speaker: "Lekarz", polish: "Czy ma pan temperaturę?", english: "Do you have a temperature?" },
            { speaker: "Pacjent", polish: "Tak, mam gorączkę od wczoraj.", english: "Yes, I've had a fever since yesterday." },
            { speaker: "Lekarz", polish: "Musi pan zostać w domu i odpoczywać.", english: "You must stay home and rest." },
            { speaker: "Pacjent", polish: "Czy potrzebuję lekarstwa?", english: "Do I need medicine?" }
          ]
        },
        vocabulary: [
          { word: "zdrowie", meaning: "health", gender: "n" },
          { word: "chory", meaning: "sick", gender: "adj" },
          { word: "zdrowy", meaning: "healthy", gender: "adj" },
          { word: "boleć", meaning: "to hurt", gender: "v" },
          { word: "głowa", meaning: "head", gender: "f" },
          { word: "gorączka", meaning: "fever", gender: "f" },
          { word: "temperatura", meaning: "temperature", gender: "f" },
          { word: "lekarstwo", meaning: "medicine", gender: "n" },
          { word: "odpoczywać", meaning: "to rest", gender: "v" },
          { word: "pacjent", meaning: "patient", gender: "m" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Boli mnie ___. (My head hurts)", answer: "głowa" },
          { type: "translate-to-english", prompt: "Źle się czuję", answer: "I feel bad", options: ["I feel bad", "I feel good", "I feel tired", "I feel cold"] },
          { type: "translate-to-polish", prompt: "I have a fever", answer: "mam gorączkę", options: ["mam gorączkę", "mam katar", "mam ból głowy", "mam temperaturę"] }
        ]
      },
      B: {
        title: "Pogoda",
        dialogue: {
          context: "Discussing the weather",
          lines: [
            { speaker: "Ania", polish: "Jaka jest dzisiaj pogoda?", english: "What's the weather like today?" },
            { speaker: "Adam", polish: "Jest bardzo zimno i pada śnieg.", english: "It's very cold and it's snowing." },
            { speaker: "Ania", polish: "Czy będzie jutro cieplej?", english: "Will it be warmer tomorrow?" },
            { speaker: "Adam", polish: "Według prognozy ma być słonecznie.", english: "According to the forecast, it will be sunny." },
            { speaker: "Ania", polish: "Świetnie! Mogę wyjść bez kurtki.", english: "Great! I can go out without a jacket." },
            { speaker: "Adam", polish: "Nie przesadzaj. Nadal będzie chłodno.", english: "Don't exaggerate. It will still be cool." }
          ]
        },
        vocabulary: [
          { word: "pogoda", meaning: "weather", gender: "f" },
          { word: "zimno", meaning: "cold", gender: "adv" },
          { word: "ciepło", meaning: "warm", gender: "adv" },
          { word: "gorąco", meaning: "hot", gender: "adv" },
          { word: "śnieg", meaning: "snow", gender: "m" },
          { word: "deszcz", meaning: "rain", gender: "m" },
          { word: "słońce", meaning: "sun", gender: "n" },
          { word: "słonecznie", meaning: "sunny", gender: "adv" },
          { word: "prognoza", meaning: "forecast", gender: "f" },
          { word: "padać", meaning: "to fall (rain/snow)", gender: "v" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Pada ___. (It's snowing)", answer: "śnieg" },
          { type: "translate-to-english", prompt: "Jaka jest dzisiaj pogoda?", answer: "What's the weather like today?", options: ["What's the weather like today?", "What day is today?", "What time is it?", "How are you today?"] },
          { type: "gender-match", prompt: "___ pogoda (this weather)", options: ["ten", "ta", "to"], answer: "ta" }
        ]
      },
      C: {
        title: "Opisy",
        dialogue: {
          context: "Describing people",
          lines: [
            { speaker: "Kasia", polish: "Jak wygląda twój nowy chłopak?", english: "What does your new boyfriend look like?" },
            { speaker: "Magda", polish: "Jest wysoki i ma ciemne włosy.", english: "He's tall and has dark hair." },
            { speaker: "Kasia", polish: "A oczy? Jakie ma oczy?", english: "And eyes? What kind of eyes does he have?" },
            { speaker: "Magda", polish: "Ma niebieskie oczy i ładny uśmiech.", english: "He has blue eyes and a nice smile." },
            { speaker: "Kasia", polish: "Brzmi jak bardzo przystojny mężczyzna.", english: "Sounds like a very handsome man." },
            { speaker: "Magda", polish: "Jest i inteligentny, i przystojny.", english: "He's both smart and handsome." }
          ]
        },
        vocabulary: [
          { word: "wysoki", meaning: "tall", gender: "adj" },
          { word: "niski", meaning: "short", gender: "adj" },
          { word: "włosy", meaning: "hair", gender: "pl" },
          { word: "oczy", meaning: "eyes", gender: "pl" },
          { word: "ciemny", meaning: "dark", gender: "adj" },
          { word: "jasny", meaning: "light", gender: "adj" },
          { word: "uśmiech", meaning: "smile", gender: "m" },
          { word: "przystojny", meaning: "handsome", gender: "adj" },
          { word: "piękny", meaning: "beautiful", gender: "adj" },
          { word: "brzydki", meaning: "ugly", gender: "adj" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Ma ciemne ___. (dark hair)", answer: "włosy" },
          { type: "translate-to-english", prompt: "Jak wygląda?", answer: "What does he/she look like?", options: ["What does he/she look like?", "How is he/she?", "Where is he/she?", "Who is he/she?"] },
          { type: "translate-to-polish", prompt: "He has blue eyes", answer: "ma niebieskie oczy", options: ["ma niebieskie oczy", "ma zielone oczy", "ma brązowe oczy", "ma ciemne włosy"] }
        ]
      },
      D: {
        title: "Złożone zdania",
        dialogue: {
          context: "Making complex statements",
          lines: [
            { speaker: "Tomek", polish: "Myślę, że powinieneś iść do lekarza.", english: "I think you should go to the doctor." },
            { speaker: "Marek", polish: "Wiem, że masz rację, ale nie mam czasu.", english: "I know you're right, but I don't have time." },
            { speaker: "Tomek", polish: "Jeśli się nie leczysz, będzie gorzej.", english: "If you don't get treatment, it will get worse." },
            { speaker: "Marek", polish: "Może pójdę, kiedy skończę pracę.", english: "Maybe I'll go when I finish work." },
            { speaker: "Tomek", polish: "Dobrze, ale nie czekaj zbyt długo.", english: "Okay, but don't wait too long." }
          ]
        },
        vocabulary: [
          { word: "myśleć", meaning: "to think", gender: "v" },
          { word: "wiedzieć", meaning: "to know", gender: "v" },
          { word: "że", meaning: "that (conjunction)", gender: "conj" },
          { word: "jeśli", meaning: "if", gender: "conj" },
          { word: "kiedy", meaning: "when", gender: "conj" },
          { word: "powinienem", meaning: "I should", gender: "v" },
          { word: "leczyć się", meaning: "to get treatment", gender: "v" },
          { word: "gorzej", meaning: "worse", gender: "adv" },
          { word: "lepiej", meaning: "better", gender: "adv" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Myślę, ___ masz rację. (I think that)", answer: "że" },
          { type: "translate-to-english", prompt: "Jeśli nie pójdziesz...", answer: "If you don't go...", options: ["If you don't go...", "When you go...", "Because you go...", "Although you go..."] },
          { type: "translate-to-polish", prompt: "I know you're right", answer: "wiem, że masz rację", options: ["wiem, że masz rację", "myślę, że masz rację", "widzę, że masz rację", "czuję, że masz rację"] }
        ]
      },
      E: {
        title: "Powtórka",
        dialogue: {
          context: "Reviewing at a café",
          lines: [
            { speaker: "Ela", polish: "Jak długo uczysz się polskiego?", english: "How long have you been learning Polish?" },
            { speaker: "John", polish: "Od sześciu miesięcy.", english: "For six months." },
            { speaker: "Ela", polish: "Mówisz bardzo dobrze!", english: "You speak very well!" },
            { speaker: "John", polish: "Dziękuję, ale mam problemy z przypadkami.", english: "Thanks, but I have problems with cases." },
            { speaker: "Ela", polish: "Wszyscy cudzoziemcy mają ten problem.", english: "All foreigners have that problem." },
            { speaker: "John", polish: "To mnie pociesza.", english: "That comforts me." }
          ]
        },
        vocabulary: [
          { word: "uczyć się", meaning: "to learn", gender: "v" },
          { word: "miesiąc", meaning: "month", gender: "m" },
          { word: "miesięcy", meaning: "months (gen pl)", gender: "pl" },
          { word: "przypadek", meaning: "case (grammar)", gender: "m" },
          { word: "cudzoziemiec", meaning: "foreigner", gender: "m" },
          { word: "cudzoziemcy", meaning: "foreigners", gender: "pl" },
          { word: "problem", meaning: "problem", gender: "m" },
          { word: "pocieszać", meaning: "to comfort", gender: "v" },
          { word: "dobrze", meaning: "well", gender: "adv" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Od sześciu ___. (For six months)", answer: "miesięcy" },
          { type: "translate-to-english", prompt: "Wszyscy cudzoziemcy", answer: "All foreigners", options: ["All foreigners", "Some foreigners", "Many foreigners", "Few foreigners"] },
          { type: "translate-to-polish", prompt: "I have problems with cases", answer: "mam problemy z przypadkami", options: ["mam problemy z przypadkami", "mam problemy z polskim", "mam problemy z nauką", "mam problemy z wymową"] }
        ]
      }
    }
  },

  "12": {
    title: "Mastery",
    description: "Food, numbers, dates, and social situations",
    grammar: ["Genitive plural mastery", "Numerals 5+", "Dates and years", "Word order"],
    subLessons: {
      A: {
        title: "Bar mleczny",
        dialogue: {
          context: "Ordering at a milk bar",
          lines: [
            { speaker: "Ekspedientka", polish: "Słucham pana?", english: "May I help you, sir?" },
            { speaker: "Klient", polish: "Proszę chleb, masło i jajko.", english: "I'd like bread, butter, and an egg." },
            { speaker: "Ekspedientka", polish: "Jajko gotowane czy smażone?", english: "Boiled or fried egg?" },
            { speaker: "Klient", polish: "Gotowane na twardo, proszę.", english: "Hard boiled, please." },
            { speaker: "Ekspedientka", polish: "Proszę bardzo. Co jeszcze?", english: "Here you go. What else?" },
            { speaker: "Klient", polish: "Proszę jeszcze kawę. Ile płacę?", english: "Also a coffee, please. How much do I owe?" },
            { speaker: "Ekspedientka", polish: "Dwanaście złotych.", english: "Twelve zlotys." }
          ]
        },
        vocabulary: [
          { word: "bar mleczny", meaning: "milk bar", gender: "m" },
          { word: "chleb", meaning: "bread", gender: "m" },
          { word: "masło", meaning: "butter", gender: "n" },
          { word: "jajko", meaning: "egg", gender: "n" },
          { word: "gotowany", meaning: "boiled", gender: "adj" },
          { word: "smażony", meaning: "fried", gender: "adj" },
          { word: "na twardo", meaning: "hard (boiled)", gender: "phrase" },
          { word: "na miękko", meaning: "soft (boiled)", gender: "phrase" },
          { word: "kawa", meaning: "coffee", gender: "f" },
          { word: "płacić", meaning: "to pay", gender: "v" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Ile ___? (How much do I owe?)", answer: "płacę" },
          { type: "translate-to-english", prompt: "Jajko gotowane na twardo", answer: "Hard boiled egg", options: ["Hard boiled egg", "Soft boiled egg", "Fried egg", "Scrambled egg"] },
          { type: "translate-to-polish", prompt: "Twelve zlotys", answer: "dwanaście złotych", options: ["dwanaście złotych", "dziesięć złotych", "jedenaście złotych", "trzynaście złotych"] }
        ]
      },
      B: {
        title: "Sklep spożywczy",
        dialogue: {
          context: "At the grocery store",
          lines: [
            { speaker: "Klient", polish: "Dzień dobry! Proszę jakąś kiełbasę.", english: "Hello! I'd like some sausage." },
            { speaker: "Ekspedient", polish: "Nie ma już kiełbasy. Będzie jutro.", english: "There's no more sausage. There will be some tomorrow." },
            { speaker: "Klient", polish: "To wezmę pół kilo szynki.", english: "Then I'll take half a kilo of ham." },
            { speaker: "Ekspedient", polish: "Proszę bardzo. Co jeszcze?", english: "Here you go. What else?" },
            { speaker: "Klient", polish: "Proszę kostkę masła i dziesięć deko sera.", english: "I'd like a block of butter and 100g of cheese." },
            { speaker: "Ekspedient", polish: "Żółtego czy białego?", english: "Yellow or white?" }
          ]
        },
        vocabulary: [
          { word: "sklep spożywczy", meaning: "grocery store", gender: "m" },
          { word: "kiełbasa", meaning: "sausage", gender: "f" },
          { word: "szynka", meaning: "ham", gender: "f" },
          { word: "ser", meaning: "cheese", gender: "m" },
          { word: "twaróg", meaning: "cottage cheese", gender: "m" },
          { word: "kilo", meaning: "kilogram", gender: "n" },
          { word: "deko", meaning: "decagram (10g)", gender: "n" },
          { word: "kostka", meaning: "block, cube", gender: "f" },
          { word: "świeży", meaning: "fresh", gender: "adj" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Nie ma już ___. (There's no more sausage)", answer: "kiełbasy" },
          { type: "translate-to-english", prompt: "Pół kilo szynki", answer: "Half a kilo of ham", options: ["Half a kilo of ham", "One kilo of ham", "A piece of ham", "Some ham"] },
          { type: "gender-match", prompt: "___ sklep (this shop)", options: ["ten", "ta", "to"], answer: "ten" }
        ]
      },
      C: {
        title: "Restauracja",
        dialogue: {
          context: "Ordering at a restaurant",
          lines: [
            { speaker: "Kelner", polish: "Słucham państwa?", english: "How may I help you?" },
            { speaker: "Pan", polish: "Proszę zupę pomidorową i kotlet schabowy.", english: "I'd like tomato soup and a pork chop." },
            { speaker: "Kelner", polish: "A dla pani?", english: "And for you, madam?" },
            { speaker: "Pani", polish: "Proszę kieliszek białego wina. Co pan poleca?", english: "I'd like a glass of white wine. What do you recommend?" },
            { speaker: "Kelner", polish: "Specjalność zakładu to łosoś w sosie.", english: "The specialty is salmon in sauce." },
            { speaker: "Pani", polish: "Dobrze, poproszę łososia.", english: "Good, I'll have the salmon." }
          ]
        },
        vocabulary: [
          { word: "restauracja", meaning: "restaurant", gender: "f" },
          { word: "kelner", meaning: "waiter", gender: "m" },
          { word: "zupa", meaning: "soup", gender: "f" },
          { word: "kotlet", meaning: "cutlet, chop", gender: "m" },
          { word: "schabowy", meaning: "pork (adj)", gender: "adj" },
          { word: "łosoś", meaning: "salmon", gender: "m" },
          { word: "sos", meaning: "sauce", gender: "m" },
          { word: "kieliszek", meaning: "wine glass", gender: "m" },
          { word: "wino", meaning: "wine", gender: "n" },
          { word: "polecać", meaning: "to recommend", gender: "v" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Kieliszek białego ___. (glass of white wine)", answer: "wina" },
          { type: "translate-to-english", prompt: "Co pan poleca?", answer: "What do you recommend?", options: ["What do you recommend?", "What do you have?", "What do you want?", "What do you like?"] },
          { type: "translate-to-polish", prompt: "tomato soup", answer: "zupa pomidorowa", options: ["zupa pomidorowa", "zupa ogórkowa", "zupa grzybowa", "zupa jarzynowa"] }
        ]
      },
      D: {
        title: "Gotowanie",
        dialogue: {
          context: "Home cooking",
          lines: [
            { speaker: "Gospodarz", polish: "Nareszcie spróbujesz mojej kaczki. Smacznego!", english: "Finally you'll try my duck. Bon appétit!" },
            { speaker: "Gość", polish: "Dziękuję. O, naprawdę pyszna!", english: "Thanks. Oh, it's really delicious!" },
            { speaker: "Gospodarz", polish: "Cieszę się, że ci smakuje.", english: "I'm glad you like it." },
            { speaker: "Gość", polish: "Masz prawdziwy talent kulinarny.", english: "You have real culinary talent." },
            { speaker: "Gospodarz", polish: "Po prostu gotuję według przepisu.", english: "I just cook according to the recipe." }
          ]
        },
        vocabulary: [
          { word: "gotowanie", meaning: "cooking", gender: "n" },
          { word: "kaczka", meaning: "duck", gender: "f" },
          { word: "pyszny", meaning: "delicious", gender: "adj" },
          { word: "smacznego", meaning: "bon appétit", gender: "phrase" },
          { word: "smakować", meaning: "to taste", gender: "v" },
          { word: "talent", meaning: "talent", gender: "m" },
          { word: "kulinarny", meaning: "culinary", gender: "adj" },
          { word: "według", meaning: "according to", gender: "prep" },
          { word: "książka kucharska", meaning: "cookbook", gender: "f" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Gotuję według ___. (according to the recipe)", answer: "przepisu" },
          { type: "translate-to-english", prompt: "Smacznego!", answer: "Bon appétit!", options: ["Bon appétit!", "Thank you!", "Delicious!", "Enjoy!"] },
          { type: "translate-to-polish", prompt: "It's really delicious", answer: "naprawdę pyszne", options: ["naprawdę pyszne", "bardzo dobre", "całkiem smaczne", "doskonałe"] }
        ]
      },
      E: {
        title: "Ślub",
        dialogue: {
          context: "Discussing marriage",
          lines: [
            { speaker: "Artek", polish: "Prawdopodobnie wkrótce się ożenię.", english: "I'm probably getting married soon." },
            { speaker: "Asia", polish: "Naprawdę? Gratulacje!", english: "Really? Congratulations!" },
            { speaker: "Artek", polish: "Dziękuję. Wesele będzie w lipcu.", english: "Thanks. The wedding party will be in July." },
            { speaker: "Asia", polish: "Gdzie będzie ślub?", english: "Where will the ceremony be?" },
            { speaker: "Artek", polish: "W kościele, a potem przyjęcie w ogrodzie.", english: "In a church, then a reception in a garden." },
            { speaker: "Asia", polish: "Życzę wam szczęścia!", english: "I wish you happiness!" }
          ]
        },
        vocabulary: [
          { word: "ślub", meaning: "wedding ceremony", gender: "m" },
          { word: "wesele", meaning: "wedding party", gender: "n" },
          { word: "żenić się", meaning: "to get married (m)", gender: "v" },
          { word: "wychodzić za mąż", meaning: "to get married (f)", gender: "v" },
          { word: "pobrać się", meaning: "to get married (couple)", gender: "v" },
          { word: "gratulacje", meaning: "congratulations", gender: "pl" },
          { word: "szczęście", meaning: "happiness", gender: "n" },
          { word: "życzyć", meaning: "to wish", gender: "v" },
          { word: "lipiec", meaning: "July", gender: "m" }
        ],
        exercises: [
          { type: "fill-blank", prompt: "Wkrótce się ___. (I'm getting married - male)", answer: "ożenię" },
          { type: "translate-to-english", prompt: "Życzę wam szczęścia", answer: "I wish you happiness", options: ["I wish you happiness", "I wish you luck", "Congratulations", "Best wishes"] },
          { type: "translate-to-polish", prompt: "wedding party", answer: "wesele", options: ["wesele", "ślub", "przyjęcie", "uroczystość"] }
        ]
      }
    }
  }
};
