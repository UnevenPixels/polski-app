// Real-world conversational scenarios with branching dialogue
// Each scenario simulates a practical situation a learner will encounter
// Format: nodes with id, npcLine, options (each leading to next nodeId or 'end')

export const scenarios = {
  cafe: {
    title: "W kawiarni",
    titleEn: "At the Café",
    icon: "☕",
    description: "Order coffee and a snack",
    difficulty: 1,
    startNode: "greet",
    nodes: {
      greet: {
        npc: "Barista",
        polish: "Dzień dobry! W czym mogę pomóc?",
        english: "Hello! How can I help?",
        options: [
          { polish: "Dzień dobry. Poproszę kawę.", english: "Hello. A coffee, please.", next: "coffee_type" },
          { polish: "Dzień dobry. Co polecacie?", english: "Hello. What do you recommend?", next: "recommend" }
        ]
      },
      coffee_type: {
        npc: "Barista",
        polish: "Jaką kawę? Espresso, latte, cappuccino?",
        english: "What kind of coffee? Espresso, latte, cappuccino?",
        options: [
          { polish: "Poproszę latte.", english: "A latte, please.", next: "size" },
          { polish: "Cappuccino poproszę.", english: "Cappuccino please.", next: "size" },
          { polish: "Espresso, dziękuję.", english: "Espresso, thanks.", next: "anything_else" }
        ]
      },
      recommend: {
        npc: "Barista",
        polish: "Polecam naszą kawę z mlekiem albo gorącą czekoladę.",
        english: "I recommend our coffee with milk or hot chocolate.",
        options: [
          { polish: "Poproszę kawę z mlekiem.", english: "Coffee with milk, please.", next: "size" },
          { polish: "Gorącą czekoladę poproszę.", english: "Hot chocolate, please.", next: "anything_else" }
        ]
      },
      size: {
        npc: "Barista",
        polish: "Mała czy duża?",
        english: "Small or large?",
        options: [
          { polish: "Małą, proszę.", english: "Small, please.", next: "anything_else" },
          { polish: "Dużą poproszę.", english: "Large, please.", next: "anything_else" }
        ]
      },
      anything_else: {
        npc: "Barista",
        polish: "Coś jeszcze? Mamy świeże ciasta.",
        english: "Anything else? We have fresh cakes.",
        options: [
          { polish: "Tak, poproszę szarlotkę.", english: "Yes, an apple pie, please.", next: "pay" },
          { polish: "Poproszę sernik.", english: "Cheesecake, please.", next: "pay" },
          { polish: "Nie, dziękuję.", english: "No, thanks.", next: "pay" }
        ]
      },
      pay: {
        npc: "Barista",
        polish: "To będzie piętnaście złotych. Płaci pan/pani kartą czy gotówką?",
        english: "That'll be fifteen zlotys. Are you paying by card or cash?",
        options: [
          { polish: "Kartą, proszę.", english: "By card, please.", next: "thanks" },
          { polish: "Gotówką.", english: "Cash.", next: "thanks" }
        ]
      },
      thanks: {
        npc: "Barista",
        polish: "Dziękuję. Smacznego!",
        english: "Thank you. Enjoy your meal!",
        options: [
          { polish: "Dziękuję, do widzenia.", english: "Thanks, goodbye.", next: "end" }
        ]
      }
    },
    vocabulary: [
      { word: "kawa", meaning: "coffee" },
      { word: "herbata", meaning: "tea" },
      { word: "z mlekiem", meaning: "with milk" },
      { word: "ciasto", meaning: "cake" },
      { word: "szarlotka", meaning: "apple pie" },
      { word: "sernik", meaning: "cheesecake" },
      { word: "kartą", meaning: "by card" },
      { word: "gotówką", meaning: "with cash" },
      { word: "smacznego", meaning: "enjoy your meal" }
    ]
  },

  restaurant: {
    title: "W restauracji",
    titleEn: "At the Restaurant",
    icon: "🍽️",
    description: "Order a meal and pay",
    difficulty: 2,
    startNode: "greet",
    nodes: {
      greet: {
        npc: "Kelner",
        polish: "Dzień dobry. Stolik dla ilu osób?",
        english: "Hello. Table for how many people?",
        options: [
          { polish: "Dla dwóch, proszę.", english: "For two, please.", next: "menu" },
          { polish: "Dla jednej osoby.", english: "For one person.", next: "menu" },
          { polish: "Dla czterech.", english: "For four.", next: "menu" }
        ]
      },
      menu: {
        npc: "Kelner",
        polish: "Proszę bardzo. Oto menu. Czy chce pan coś do picia?",
        english: "Here you are. Here's the menu. Would you like something to drink?",
        options: [
          { polish: "Wodę, proszę.", english: "Water, please.", next: "still_sparkling" },
          { polish: "Poproszę piwo.", english: "A beer, please.", next: "order_food" },
          { polish: "Lampkę wina.", english: "A glass of wine.", next: "wine_color" }
        ]
      },
      still_sparkling: {
        npc: "Kelner",
        polish: "Gazowaną czy niegazowaną?",
        english: "Sparkling or still?",
        options: [
          { polish: "Niegazowaną, proszę.", english: "Still, please.", next: "order_food" },
          { polish: "Gazowaną.", english: "Sparkling.", next: "order_food" }
        ]
      },
      wine_color: {
        npc: "Kelner",
        polish: "Białe czy czerwone?",
        english: "White or red?",
        options: [
          { polish: "Czerwone, proszę.", english: "Red, please.", next: "order_food" },
          { polish: "Białe poproszę.", english: "White please.", next: "order_food" }
        ]
      },
      order_food: {
        npc: "Kelner",
        polish: "A do jedzenia? Co pan/pani wybiera?",
        english: "And to eat? What are you choosing?",
        options: [
          { polish: "Poproszę pierogi.", english: "Pierogi, please.", next: "pierogi_type" },
          { polish: "Schabowy z ziemniakami.", english: "Pork cutlet with potatoes.", next: "anything_else" },
          { polish: "Co pan poleca?", english: "What do you recommend?", next: "recommendation" }
        ]
      },
      pierogi_type: {
        npc: "Kelner",
        polish: "Z mięsem, z kapustą czy ruskie?",
        english: "With meat, with cabbage, or Russian-style?",
        options: [
          { polish: "Ruskie, proszę.", english: "Russian, please.", next: "anything_else" },
          { polish: "Z mięsem.", english: "With meat.", next: "anything_else" },
          { polish: "Z kapustą.", english: "With cabbage.", next: "anything_else" }
        ]
      },
      recommendation: {
        npc: "Kelner",
        polish: "Polecam żurek i bigos. To nasze tradycyjne dania.",
        english: "I recommend żurek and bigos. They're our traditional dishes.",
        options: [
          { polish: "Wezmę żurek.", english: "I'll take żurek.", next: "anything_else" },
          { polish: "Poproszę bigos.", english: "Bigos, please.", next: "anything_else" }
        ]
      },
      anything_else: {
        npc: "Kelner",
        polish: "Coś jeszcze?",
        english: "Anything else?",
        options: [
          { polish: "Nie, dziękuję. To wszystko.", english: "No, thanks. That's all.", next: "wait" },
          { polish: "Poproszę jeszcze surówkę.", english: "Also a salad, please.", next: "wait" }
        ]
      },
      wait: {
        npc: "Kelner",
        polish: "Dziękuję. Zaraz przyniosę.",
        english: "Thank you. I'll bring it shortly.",
        options: [
          { polish: "Dziękuję.", english: "Thank you.", next: "after_meal" }
        ]
      },
      after_meal: {
        npc: "Kelner",
        polish: "Smakowało?",
        english: "Did you enjoy it?",
        options: [
          { polish: "Bardzo dobre, dziękuję.", english: "Very good, thanks.", next: "bill" },
          { polish: "Pyszne!", english: "Delicious!", next: "bill" }
        ]
      },
      bill: {
        npc: "Kelner",
        polish: "Czy mogę przynieść rachunek?",
        english: "May I bring the bill?",
        options: [
          { polish: "Tak, proszę o rachunek.", english: "Yes, the bill please.", next: "end" }
        ]
      }
    },
    vocabulary: [
      { word: "stolik", meaning: "table" },
      { word: "menu", meaning: "menu" },
      { word: "pierogi", meaning: "pierogi (dumplings)" },
      { word: "schabowy", meaning: "pork cutlet" },
      { word: "żurek", meaning: "sour rye soup" },
      { word: "bigos", meaning: "hunter's stew" },
      { word: "rachunek", meaning: "bill" },
      { word: "smakowało", meaning: "did you like it (food)" },
      { word: "pyszne", meaning: "delicious" },
      { word: "surówka", meaning: "salad (raw vegetables)" }
    ]
  },

  taxi: {
    title: "Taksówka",
    titleEn: "Taxi",
    icon: "🚕",
    description: "Get a taxi to your destination",
    difficulty: 1,
    startNode: "greet",
    nodes: {
      greet: {
        npc: "Kierowca",
        polish: "Dzień dobry. Gdzie pana/panią zawieźć?",
        english: "Hello. Where shall I take you?",
        options: [
          { polish: "Na lotnisko, proszę.", english: "To the airport, please.", next: "luggage" },
          { polish: "Na dworzec główny.", english: "To the main station.", next: "luggage" },
          { polish: "Do hotelu Marriott.", english: "To the Marriott hotel.", next: "address" }
        ]
      },
      address: {
        npc: "Kierowca",
        polish: "Wie pan/pani adres?",
        english: "Do you know the address?",
        options: [
          { polish: "Aleja Jerozolimskie 65.", english: "65 Jerusalem Avenue.", next: "luggage" },
          { polish: "Nie, ale wiem gdzie to jest.", english: "No, but I know where it is.", next: "luggage" }
        ]
      },
      luggage: {
        npc: "Kierowca",
        polish: "Ma pan/pani bagaż?",
        english: "Do you have luggage?",
        options: [
          { polish: "Tak, jedna walizka.", english: "Yes, one suitcase.", next: "going" },
          { polish: "Nie, tylko plecak.", english: "No, just a backpack.", next: "going" }
        ]
      },
      going: {
        npc: "Kierowca",
        polish: "Dobrze, jedziemy. Czy mam jechać szybko?",
        english: "OK, let's go. Should I drive fast?",
        options: [
          { polish: "Tak, śpieszę się.", english: "Yes, I'm in a hurry.", next: "arrived" },
          { polish: "Nie, bez pośpiechu.", english: "No, no rush.", next: "arrived" }
        ]
      },
      arrived: {
        npc: "Kierowca",
        polish: "Już jesteśmy. To będzie czterdzieści złotych.",
        english: "We're here. That'll be forty zlotys.",
        options: [
          { polish: "Proszę. Dziękuję!", english: "Here you go. Thanks!", next: "end" },
          { polish: "Czy mogę zapłacić kartą?", english: "Can I pay by card?", next: "card" }
        ]
      },
      card: {
        npc: "Kierowca",
        polish: "Tak, oczywiście. Proszę.",
        english: "Yes, of course. Here you are.",
        options: [
          { polish: "Dziękuję, do widzenia!", english: "Thank you, goodbye!", next: "end" }
        ]
      }
    },
    vocabulary: [
      { word: "lotnisko", meaning: "airport" },
      { word: "dworzec", meaning: "station" },
      { word: "kierowca", meaning: "driver" },
      { word: "bagaż", meaning: "luggage" },
      { word: "walizka", meaning: "suitcase" },
      { word: "plecak", meaning: "backpack" },
      { word: "śpieszyć się", meaning: "to be in a hurry" },
      { word: "zapłacić", meaning: "to pay" }
    ]
  },

  hotel: {
    title: "W hotelu",
    titleEn: "At the Hotel",
    icon: "🏨",
    description: "Check in to a hotel",
    difficulty: 2,
    startNode: "greet",
    nodes: {
      greet: {
        npc: "Recepcjonistka",
        polish: "Dzień dobry. Czy ma pan/pani rezerwację?",
        english: "Hello. Do you have a reservation?",
        options: [
          { polish: "Tak, na nazwisko Kowalski.", english: "Yes, under the name Kowalski.", next: "found" },
          { polish: "Nie, czy mają państwo wolny pokój?", english: "No, do you have a free room?", next: "no_reservation" }
        ]
      },
      found: {
        npc: "Recepcjonistka",
        polish: "Tak, mam. Pokój dwuosobowy na trzy noce.",
        english: "Yes, I have it. A double room for three nights.",
        options: [
          { polish: "Zgadza się.", english: "That's right.", next: "passport" },
          { polish: "Nie, na cztery noce.", english: "No, for four nights.", next: "correction" }
        ]
      },
      correction: {
        npc: "Recepcjonistka",
        polish: "Przepraszam, już poprawiam.",
        english: "Sorry, I'm correcting it now.",
        options: [
          { polish: "Dziękuję.", english: "Thank you.", next: "passport" }
        ]
      },
      no_reservation: {
        npc: "Recepcjonistka",
        polish: "Tak, mamy. Jednoosobowy czy dwuosobowy?",
        english: "Yes, we do. Single or double?",
        options: [
          { polish: "Jednoosobowy, proszę.", english: "Single, please.", next: "nights" },
          { polish: "Dwuosobowy.", english: "Double.", next: "nights" }
        ]
      },
      nights: {
        npc: "Recepcjonistka",
        polish: "Na ile nocy?",
        english: "For how many nights?",
        options: [
          { polish: "Na jedną noc.", english: "For one night.", next: "passport" },
          { polish: "Na dwie noce.", english: "For two nights.", next: "passport" },
          { polish: "Na tydzień.", english: "For a week.", next: "passport" }
        ]
      },
      passport: {
        npc: "Recepcjonistka",
        polish: "Poproszę pana/pani paszport lub dowód.",
        english: "Your passport or ID, please.",
        options: [
          { polish: "Proszę bardzo.", english: "Here you are.", next: "key" }
        ]
      },
      key: {
        npc: "Recepcjonistka",
        polish: "Oto klucz. Pokój numer 305, na trzecim piętrze. Śniadanie od siódmej do dziesiątej.",
        english: "Here's the key. Room 305, on the third floor. Breakfast from seven to ten.",
        options: [
          { polish: "Dziękuję bardzo.", english: "Thank you very much.", next: "wifi" },
          { polish: "Czy jest wifi?", english: "Is there wifi?", next: "wifi_yes" }
        ]
      },
      wifi: {
        npc: "Recepcjonistka",
        polish: "Hasło do wifi jest na karcie. Życzę miłego pobytu!",
        english: "The wifi password is on the card. Have a pleasant stay!",
        options: [
          { polish: "Dziękuję, do widzenia.", english: "Thank you, goodbye.", next: "end" }
        ]
      },
      wifi_yes: {
        npc: "Recepcjonistka",
        polish: "Tak, hasło jest na karcie w pokoju.",
        english: "Yes, the password is on the card in the room.",
        options: [
          { polish: "Świetnie, dziękuję!", english: "Great, thanks!", next: "end" }
        ]
      }
    },
    vocabulary: [
      { word: "rezerwacja", meaning: "reservation" },
      { word: "pokój", meaning: "room" },
      { word: "jednoosobowy", meaning: "single (room)" },
      { word: "dwuosobowy", meaning: "double (room)" },
      { word: "noc", meaning: "night" },
      { word: "klucz", meaning: "key" },
      { word: "piętro", meaning: "floor (level)" },
      { word: "śniadanie", meaning: "breakfast" },
      { word: "paszport", meaning: "passport" },
      { word: "dowód", meaning: "ID" }
    ]
  },

  directions: {
    title: "Pytanie o drogę",
    titleEn: "Asking for Directions",
    icon: "🗺️",
    description: "Ask how to get somewhere",
    difficulty: 2,
    startNode: "greet",
    nodes: {
      greet: {
        npc: "Przechodzień",
        polish: "Tak, słucham?",
        english: "Yes, I'm listening?",
        options: [
          { polish: "Przepraszam, gdzie jest dworzec?", english: "Excuse me, where is the station?", next: "station" },
          { polish: "Jak dojść do muzeum?", english: "How do I get to the museum?", next: "museum" },
          { polish: "Czy jest tu blisko apteka?", english: "Is there a pharmacy nearby?", next: "pharmacy" }
        ]
      },
      station: {
        npc: "Przechodzień",
        polish: "Proszę iść prosto, potem skręcić w lewo. To około pięciu minut.",
        english: "Go straight, then turn left. It's about five minutes.",
        options: [
          { polish: "Dziękuję bardzo.", english: "Thank you very much.", next: "end" },
          { polish: "Czy to daleko?", english: "Is it far?", next: "not_far" }
        ]
      },
      museum: {
        npc: "Przechodzień",
        polish: "Trzeba iść prosto, potem w prawo, koło kościoła.",
        english: "You need to go straight, then right, by the church.",
        options: [
          { polish: "Rozumiem, dziękuję.", english: "I understand, thanks.", next: "end" },
          { polish: "Czy może pan/pani powtórzyć?", english: "Could you repeat?", next: "repeat" }
        ]
      },
      pharmacy: {
        npc: "Przechodzień",
        polish: "Tak, jest apteka na rogu, dwie minuty stąd.",
        english: "Yes, there's a pharmacy on the corner, two minutes from here.",
        options: [
          { polish: "Świetnie. Dziękuję!", english: "Great. Thanks!", next: "end" }
        ]
      },
      not_far: {
        npc: "Przechodzień",
        polish: "Nie, naprawdę blisko. Pieszo szybciej niż autobusem.",
        english: "No, really close. Faster on foot than by bus.",
        options: [
          { polish: "Dziękuję za pomoc!", english: "Thanks for your help!", next: "end" }
        ]
      },
      repeat: {
        npc: "Przechodzień",
        polish: "Oczywiście. Prosto, potem w prawo, koło kościoła.",
        english: "Of course. Straight, then right, by the church.",
        options: [
          { polish: "Teraz rozumiem. Dziękuję!", english: "Now I understand. Thanks!", next: "end" }
        ]
      }
    },
    vocabulary: [
      { word: "prosto", meaning: "straight" },
      { word: "w lewo", meaning: "to the left" },
      { word: "w prawo", meaning: "to the right" },
      { word: "skręcić", meaning: "to turn" },
      { word: "blisko", meaning: "close" },
      { word: "daleko", meaning: "far" },
      { word: "apteka", meaning: "pharmacy" },
      { word: "muzeum", meaning: "museum" },
      { word: "kościół", meaning: "church" },
      { word: "róg", meaning: "corner" }
    ]
  },

  shop: {
    title: "W sklepie",
    titleEn: "At the Shop",
    icon: "🛍️",
    description: "Buy clothes",
    difficulty: 2,
    startNode: "greet",
    nodes: {
      greet: {
        npc: "Sprzedawczyni",
        polish: "Dzień dobry. W czym mogę pomóc?",
        english: "Hello. How can I help?",
        options: [
          { polish: "Szukam koszuli.", english: "I'm looking for a shirt.", next: "size" },
          { polish: "Tylko oglądam, dziękuję.", english: "Just looking, thanks.", next: "browse" },
          { polish: "Czy mają państwo spodnie?", english: "Do you have trousers?", next: "size" }
        ]
      },
      browse: {
        npc: "Sprzedawczyni",
        polish: "Dobrze, proszę się rozejrzeć. Jeśli będzie pan/pani potrzebować pomocy - zapraszam.",
        english: "OK, please look around. If you need help, just ask.",
        options: [
          { polish: "Dziękuję.", english: "Thank you.", next: "end" }
        ]
      },
      size: {
        npc: "Sprzedawczyni",
        polish: "Jaki rozmiar?",
        english: "What size?",
        options: [
          { polish: "Medium, proszę.", english: "Medium, please.", next: "color" },
          { polish: "Large.", english: "Large.", next: "color" },
          { polish: "Nie wiem.", english: "I don't know.", next: "measure" }
        ]
      },
      measure: {
        npc: "Sprzedawczyni",
        polish: "Mogę zmierzyć. Proszę za mną do przymierzalni.",
        english: "I can measure. Please follow me to the fitting room.",
        options: [
          { polish: "Dziękuję.", english: "Thank you.", next: "color" }
        ]
      },
      color: {
        npc: "Sprzedawczyni",
        polish: "Jaki kolor pana/panią interesuje?",
        english: "What color are you interested in?",
        options: [
          { polish: "Niebieski.", english: "Blue.", next: "try_on" },
          { polish: "Czarny.", english: "Black.", next: "try_on" },
          { polish: "Biały.", english: "White.", next: "try_on" }
        ]
      },
      try_on: {
        npc: "Sprzedawczyni",
        polish: "Proszę bardzo. Czy chce pan/pani przymierzyć?",
        english: "Here you are. Would you like to try it on?",
        options: [
          { polish: "Tak, gdzie jest przymierzalnia?", english: "Yes, where's the fitting room?", next: "fits" },
          { polish: "Nie trzeba, biorę.", english: "No need, I'll take it.", next: "pay" }
        ]
      },
      fits: {
        npc: "Sprzedawczyni",
        polish: "Tam, po prawej. Jak pasuje?",
        english: "There, on the right. How does it fit?",
        options: [
          { polish: "Pasuje idealnie. Biorę.", english: "Fits perfectly. I'll take it.", next: "pay" },
          { polish: "Za mały. Macie większy?", english: "Too small. Do you have a bigger one?", next: "bigger" }
        ]
      },
      bigger: {
        npc: "Sprzedawczyni",
        polish: "Tak, zaraz przyniosę.",
        english: "Yes, I'll bring it right away.",
        options: [
          { polish: "Dziękuję.", english: "Thank you.", next: "pay" }
        ]
      },
      pay: {
        npc: "Sprzedawczyni",
        polish: "To będzie dziewięćdziesiąt złotych. Karta czy gotówka?",
        english: "That'll be ninety zlotys. Card or cash?",
        options: [
          { polish: "Kartą, proszę.", english: "Card, please.", next: "end" },
          { polish: "Gotówką.", english: "Cash.", next: "end" }
        ]
      }
    },
    vocabulary: [
      { word: "koszula", meaning: "shirt" },
      { word: "spodnie", meaning: "trousers" },
      { word: "rozmiar", meaning: "size" },
      { word: "kolor", meaning: "color" },
      { word: "przymierzalnia", meaning: "fitting room" },
      { word: "pasować", meaning: "to fit" },
      { word: "większy", meaning: "bigger" },
      { word: "mniejszy", meaning: "smaller" },
      { word: "niebieski", meaning: "blue" },
      { word: "czarny", meaning: "black" }
    ]
  },

  doctor: {
    title: "U lekarza",
    titleEn: "At the Doctor's",
    icon: "🩺",
    description: "Describe your symptoms",
    difficulty: 3,
    startNode: "greet",
    nodes: {
      greet: {
        npc: "Lekarz",
        polish: "Dzień dobry. Co panu/pani dolega?",
        english: "Hello. What's wrong with you?",
        options: [
          { polish: "Boli mnie głowa.", english: "I have a headache.", next: "how_long" },
          { polish: "Boli mnie gardło.", english: "My throat hurts.", next: "how_long" },
          { polish: "Mam katar i kaszel.", english: "I have a cold and cough.", next: "how_long" },
          { polish: "Mam gorączkę.", english: "I have a fever.", next: "fever" }
        ]
      },
      how_long: {
        npc: "Lekarz",
        polish: "Od kiedy?",
        english: "Since when?",
        options: [
          { polish: "Od wczoraj.", english: "Since yesterday.", next: "fever" },
          { polish: "Od trzech dni.", english: "For three days.", next: "fever" },
          { polish: "Od tygodnia.", english: "For a week.", next: "fever" }
        ]
      },
      fever: {
        npc: "Lekarz",
        polish: "Czy ma pan/pani gorączkę?",
        english: "Do you have a fever?",
        options: [
          { polish: "Tak, trzydzieści osiem stopni.", english: "Yes, 38 degrees.", next: "exam" },
          { polish: "Nie, nie mam.", english: "No, I don't.", next: "exam" }
        ]
      },
      exam: {
        npc: "Lekarz",
        polish: "Proszę usiąść. Zbadam pana/panią. Proszę otworzyć usta.",
        english: "Please sit down. I'll examine you. Open your mouth.",
        options: [
          { polish: "Dobrze.", english: "OK.", next: "diagnosis" }
        ]
      },
      diagnosis: {
        npc: "Lekarz",
        polish: "To zwykłe przeziębienie. Zapiszę panu/pani lekarstwo.",
        english: "It's a common cold. I'll prescribe medicine.",
        options: [
          { polish: "Dziękuję. Co mam brać?", english: "Thank you. What should I take?", next: "medicine" },
          { polish: "Czy to coś poważnego?", english: "Is it something serious?", next: "not_serious" }
        ]
      },
      medicine: {
        npc: "Lekarz",
        polish: "Trzy razy dziennie po jednej tabletce. I dużo odpoczynku.",
        english: "Three times a day, one pill. And lots of rest.",
        options: [
          { polish: "Rozumiem. Dziękuję.", english: "I understand. Thank you.", next: "end" }
        ]
      },
      not_serious: {
        npc: "Lekarz",
        polish: "Nie, nic poważnego. Za kilka dni będzie pan/pani zdrowy/a.",
        english: "No, nothing serious. In a few days you'll be healthy.",
        options: [
          { polish: "Dziękuję, panie doktorze.", english: "Thank you, doctor.", next: "end" }
        ]
      }
    },
    vocabulary: [
      { word: "boli", meaning: "hurts" },
      { word: "głowa", meaning: "head" },
      { word: "gardło", meaning: "throat" },
      { word: "kaszel", meaning: "cough" },
      { word: "katar", meaning: "runny nose / cold" },
      { word: "gorączka", meaning: "fever" },
      { word: "przeziębienie", meaning: "common cold" },
      { word: "lekarstwo", meaning: "medicine" },
      { word: "tabletka", meaning: "pill" },
      { word: "odpoczynek", meaning: "rest" }
    ]
  },

  phone: {
    title: "Rozmowa telefoniczna",
    titleEn: "Phone Call",
    icon: "📞",
    description: "Make a phone call",
    difficulty: 2,
    startNode: "greet",
    nodes: {
      greet: {
        npc: "Pan Kowalski",
        polish: "Halo, słucham?",
        english: "Hello, listening?",
        options: [
          { polish: "Dzień dobry, czy mogę rozmawiać z panem Kowalskim?", english: "Hello, may I speak with Mr. Kowalski?", next: "yes_speaking" },
          { polish: "Dzień dobry, mówi Anna z firmy XYZ.", english: "Hello, this is Anna from company XYZ.", next: "what_about" }
        ]
      },
      yes_speaking: {
        npc: "Pan Kowalski",
        polish: "Tak, przy telefonie. Z kim mam przyjemność?",
        english: "Yes, speaking. Who am I speaking with?",
        options: [
          { polish: "Mówi Anna Nowak.", english: "This is Anna Nowak.", next: "what_about" },
          { polish: "Z firmy XYZ.", english: "From company XYZ.", next: "what_about" }
        ]
      },
      what_about: {
        npc: "Pan Kowalski",
        polish: "W jakiej sprawie?",
        english: "Regarding what?",
        options: [
          { polish: "Chciałbym/chciałabym umówić spotkanie.", english: "I'd like to arrange a meeting.", next: "when" },
          { polish: "W sprawie zamówienia.", english: "Regarding an order.", next: "order" }
        ]
      },
      when: {
        npc: "Pan Kowalski",
        polish: "Kiedy panu/pani pasuje?",
        english: "When works for you?",
        options: [
          { polish: "W poniedziałek o dziesiątej?", english: "Monday at ten?", next: "confirm" },
          { polish: "W przyszłym tygodniu.", english: "Next week.", next: "confirm" }
        ]
      },
      order: {
        npc: "Pan Kowalski",
        polish: "Rozumiem. Czy mogę poprosić numer zamówienia?",
        english: "I see. Could I have the order number?",
        options: [
          { polish: "Numer to 12345.", english: "The number is 12345.", next: "thanks" }
        ]
      },
      confirm: {
        npc: "Pan Kowalski",
        polish: "Świetnie. Potwierdzam.",
        english: "Great. Confirmed.",
        options: [
          { polish: "Dziękuję, do widzenia.", english: "Thank you, goodbye.", next: "end" }
        ]
      },
      thanks: {
        npc: "Pan Kowalski",
        polish: "Dziękuję. Sprawdzę i oddzwonię.",
        english: "Thank you. I'll check and call back.",
        options: [
          { polish: "Dobrze, dziękuję. Do usłyszenia.", english: "OK, thanks. Talk to you soon.", next: "end" }
        ]
      }
    },
    vocabulary: [
      { word: "halo", meaning: "hello (phone)" },
      { word: "słucham", meaning: "I'm listening" },
      { word: "rozmawiać", meaning: "to converse / talk" },
      { word: "spotkanie", meaning: "meeting" },
      { word: "umówić", meaning: "to arrange" },
      { word: "zamówienie", meaning: "order" },
      { word: "potwierdzam", meaning: "I confirm" },
      { word: "oddzwonić", meaning: "to call back" },
      { word: "do usłyszenia", meaning: "talk to you (later)" }
    ]
  },

  smalltalk: {
    title: "Small talk",
    titleEn: "Small Talk",
    icon: "💬",
    description: "Casual conversation with a new acquaintance",
    difficulty: 1,
    startNode: "greet",
    nodes: {
      greet: {
        npc: "Tomek",
        polish: "Cześć! Jak się masz?",
        english: "Hi! How are you?",
        options: [
          { polish: "Cześć! Dobrze, a ty?", english: "Hi! Good, and you?", next: "good" },
          { polish: "Tak sobie. A ty?", english: "So-so. And you?", next: "tired" }
        ]
      },
      good: {
        npc: "Tomek",
        polish: "Też dobrze. Co robisz w weekend?",
        english: "Also good. What are you doing this weekend?",
        options: [
          { polish: "Idę do kina. A ty?", english: "I'm going to the cinema. And you?", next: "cinema" },
          { polish: "Spotykam się ze znajomymi.", english: "I'm meeting friends.", next: "friends" },
          { polish: "Zostaję w domu.", english: "I'm staying home.", next: "home" }
        ]
      },
      tired: {
        npc: "Tomek",
        polish: "Zmęczony jestem. Dużo pracy.",
        english: "I'm tired. Lots of work.",
        options: [
          { polish: "Rozumiem. Co robisz?", english: "I understand. What do you do?", next: "work" }
        ]
      },
      cinema: {
        npc: "Tomek",
        polish: "Co oglądasz?",
        english: "What are you watching?",
        options: [
          { polish: "Nowy polski film.", english: "A new Polish film.", next: "interested" },
          { polish: "Jeszcze nie wiem.", english: "I don't know yet.", next: "suggestion" }
        ]
      },
      friends: {
        npc: "Tomek",
        polish: "Brzmi fajnie. Gdzie się spotykacie?",
        english: "Sounds nice. Where are you meeting?",
        options: [
          { polish: "W kawiarni w centrum.", english: "At a café downtown.", next: "end" }
        ]
      },
      home: {
        npc: "Tomek",
        polish: "Też potrzebuję odpoczynku.",
        english: "I need rest too.",
        options: [
          { polish: "No właśnie.", english: "Exactly.", next: "end" }
        ]
      },
      work: {
        npc: "Tomek",
        polish: "Pracuję jako programista. A ty?",
        english: "I work as a programmer. And you?",
        options: [
          { polish: "Jestem nauczycielem.", english: "I'm a teacher.", next: "interesting" },
          { polish: "Studiuję jeszcze.", english: "I'm still studying.", next: "studying" }
        ]
      },
      interested: {
        npc: "Tomek",
        polish: "Może też pójdę. O której?",
        english: "Maybe I'll go too. At what time?",
        options: [
          { polish: "O siódmej wieczorem.", english: "At seven in the evening.", next: "end" }
        ]
      },
      suggestion: {
        npc: "Tomek",
        polish: "Polecam najnowszy film z Cubą Goodingiem.",
        english: "I recommend the newest film with Cuba Gooding.",
        options: [
          { polish: "Dzięki za radę!", english: "Thanks for the advice!", next: "end" }
        ]
      },
      interesting: {
        npc: "Tomek",
        polish: "Ciekawe! Co uczysz?",
        english: "Interesting! What do you teach?",
        options: [
          { polish: "Angielskiego.", english: "English.", next: "end" },
          { polish: "Matematyki.", english: "Math.", next: "end" }
        ]
      },
      studying: {
        npc: "Tomek",
        polish: "Jaki kierunek?",
        english: "What field?",
        options: [
          { polish: "Informatykę.", english: "Computer science.", next: "end" },
          { polish: "Medycynę.", english: "Medicine.", next: "end" }
        ]
      }
    },
    vocabulary: [
      { word: "weekend", meaning: "weekend" },
      { word: "kino", meaning: "cinema" },
      { word: "znajomi", meaning: "friends/acquaintances" },
      { word: "zmęczony", meaning: "tired" },
      { word: "praca", meaning: "work" },
      { word: "programista", meaning: "programmer" },
      { word: "nauczyciel", meaning: "teacher" },
      { word: "studiować", meaning: "to study" },
      { word: "polecać", meaning: "to recommend" },
      { word: "rada", meaning: "advice" }
    ]
  },

  pharmacy: {
    title: "W aptece",
    titleEn: "At the Pharmacy",
    icon: "💊",
    description: "Buy medicine",
    difficulty: 2,
    startNode: "greet",
    nodes: {
      greet: {
        npc: "Aptekarz",
        polish: "Dzień dobry, słucham?",
        english: "Hello, listening?",
        options: [
          { polish: "Poproszę coś na ból głowy.", english: "Something for a headache, please.", next: "headache" },
          { polish: "Mam receptę.", english: "I have a prescription.", next: "prescription" },
          { polish: "Czy mają państwo coś na katar?", english: "Do you have something for a cold?", next: "cold" }
        ]
      },
      headache: {
        npc: "Aptekarz",
        polish: "Polecam ten lek. Bez recepty.",
        english: "I recommend this medicine. Over the counter.",
        options: [
          { polish: "Ile kosztuje?", english: "How much does it cost?", next: "price" },
          { polish: "Wezmę.", english: "I'll take it.", next: "instructions" }
        ]
      },
      prescription: {
        npc: "Aptekarz",
        polish: "Proszę bardzo, zaraz przygotuję.",
        english: "Of course, I'll prepare it now.",
        options: [
          { polish: "Dziękuję.", english: "Thank you.", next: "instructions" }
        ]
      },
      cold: {
        npc: "Aptekarz",
        polish: "Mamy syrop i tabletki. Co pan/pani woli?",
        english: "We have syrup and tablets. What do you prefer?",
        options: [
          { polish: "Tabletki proszę.", english: "Tablets, please.", next: "instructions" },
          { polish: "Syrop.", english: "Syrup.", next: "instructions" }
        ]
      },
      price: {
        npc: "Aptekarz",
        polish: "Dwadzieścia pięć złotych.",
        english: "Twenty-five zlotys.",
        options: [
          { polish: "Dobrze, biorę.", english: "OK, I'll take it.", next: "instructions" }
        ]
      },
      instructions: {
        npc: "Aptekarz",
        polish: "Trzy razy dziennie po posiłku.",
        english: "Three times a day after meals.",
        options: [
          { polish: "Rozumiem, dziękuję.", english: "I understand, thank you.", next: "end" }
        ]
      }
    },
    vocabulary: [
      { word: "ból", meaning: "pain" },
      { word: "lek", meaning: "medicine / drug" },
      { word: "recepta", meaning: "prescription" },
      { word: "syrop", meaning: "syrup" },
      { word: "tabletka", meaning: "tablet" },
      { word: "posiłek", meaning: "meal" },
      { word: "razy", meaning: "times" },
      { word: "kosztować", meaning: "to cost" }
    ]
  }
};

export function getScenarioList() {
  return Object.entries(scenarios).map(([id, s]) => ({
    id,
    title: s.title,
    titleEn: s.titleEn,
    icon: s.icon,
    description: s.description,
    difficulty: s.difficulty
  }));
}
