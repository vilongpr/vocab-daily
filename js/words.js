const WORDS = [
  {
    "german": "Zeit",
    "english": "time",
    "pos": "noun",
    "imageSearch": "clock time",
    "id": "w0000"
  },
  {
    "german": "Jahr",
    "english": "year",
    "pos": "noun",
    "imageSearch": "calendar year",
    "id": "w0001"
  },
  {
    "german": "Mensch",
    "english": "human",
    "pos": "noun",
    "imageSearch": "person human",
    "id": "w0002"
  },
  {
    "german": "Tag",
    "english": "day",
    "pos": "noun",
    "imageSearch": "sunny day",
    "id": "w0003"
  },
  {
    "german": "Welt",
    "english": "world",
    "pos": "noun",
    "imageSearch": "earth globe",
    "id": "w0004"
  },
  {
    "german": "Hand",
    "english": "hand",
    "pos": "noun",
    "imageSearch": "human hand",
    "id": "w0005"
  },
  {
    "german": "Teil",
    "english": "part",
    "pos": "noun",
    "imageSearch": "puzzle piece",
    "id": "w0006"
  },
  {
    "german": "Kind",
    "english": "child",
    "pos": "noun",
    "imageSearch": "child playing",
    "id": "w0007"
  },
  {
    "german": "Auge",
    "english": "eye",
    "pos": "noun",
    "imageSearch": "human eye close up",
    "id": "w0008"
  },
  {
    "german": "Kopf",
    "english": "head",
    "pos": "noun",
    "imageSearch": "head portrait",
    "id": "w0009"
  },
  {
    "german": "Wort",
    "english": "word",
    "pos": "noun",
    "imageSearch": "letters words",
    "id": "w0010"
  },
  {
    "german": "Frau",
    "english": "woman",
    "pos": "noun",
    "imageSearch": "woman portrait",
    "id": "w0011"
  },
  {
    "german": "Mann",
    "english": "man",
    "pos": "noun",
    "imageSearch": "man portrait",
    "id": "w0012"
  },
  {
    "german": "Geld",
    "english": "money",
    "pos": "noun",
    "imageSearch": "money coins",
    "id": "w0013"
  },
  {
    "german": "Freund",
    "english": "friend",
    "pos": "noun",
    "imageSearch": "friends together",
    "id": "w0014"
  },
  {
    "german": "Frage",
    "english": "question",
    "pos": "noun",
    "imageSearch": "question mark",
    "id": "w0015"
  },
  {
    "german": "Haus",
    "english": "house",
    "pos": "noun",
    "imageSearch": "house building",
    "id": "w0016"
  },
  {
    "german": "Land",
    "english": "country",
    "pos": "noun",
    "imageSearch": "countryside landscape",
    "id": "w0017"
  },
  {
    "german": "Leute",
    "english": "people",
    "pos": "noun",
    "imageSearch": "crowd people",
    "id": "w0018"
  },
  {
    "german": "Arbeit",
    "english": "work",
    "pos": "noun",
    "imageSearch": "office work",
    "id": "w0019"
  },
  {
    "german": "Nacht",
    "english": "night",
    "pos": "noun",
    "imageSearch": "night sky stars",
    "id": "w0020"
  },
  {
    "german": "Stadt",
    "english": "city",
    "pos": "noun",
    "imageSearch": "city skyline",
    "id": "w0021"
  },
  {
    "german": "Wasser",
    "english": "water",
    "pos": "noun",
    "imageSearch": "water drop",
    "id": "w0022"
  },
  {
    "german": "Buch",
    "english": "book",
    "pos": "noun",
    "imageSearch": "open book",
    "id": "w0023"
  },
  {
    "german": "Schule",
    "english": "school",
    "pos": "noun",
    "imageSearch": "school building",
    "id": "w0024"
  },
  {
    "german": "Mutter",
    "english": "mother",
    "pos": "noun",
    "imageSearch": "mother child",
    "id": "w0025"
  },
  {
    "german": "Vater",
    "english": "father",
    "pos": "noun",
    "imageSearch": "father family",
    "id": "w0026"
  },
  {
    "german": "Bild",
    "english": "picture",
    "pos": "noun",
    "imageSearch": "picture frame",
    "id": "w0027"
  },
  {
    "german": "Leben",
    "english": "life",
    "pos": "noun",
    "imageSearch": "life nature",
    "id": "w0028"
  },
  {
    "german": "Stunde",
    "english": "hour",
    "pos": "noun",
    "imageSearch": "clock hour",
    "id": "w0029"
  },
  {
    "german": "Weg",
    "english": "way/path",
    "pos": "noun",
    "imageSearch": "path road",
    "id": "w0030"
  },
  {
    "german": "Platz",
    "english": "place/square",
    "pos": "noun",
    "imageSearch": "town square",
    "id": "w0031"
  },
  {
    "german": "Grund",
    "english": "reason/ground",
    "pos": "noun",
    "imageSearch": "ground earth",
    "id": "w0032"
  },
  {
    "german": "Seite",
    "english": "side/page",
    "pos": "noun",
    "imageSearch": "book page",
    "id": "w0033"
  },
  {
    "german": "Ende",
    "english": "end",
    "pos": "noun",
    "imageSearch": "road end",
    "id": "w0034"
  },
  {
    "german": "Stimme",
    "english": "voice",
    "pos": "noun",
    "imageSearch": "microphone singing",
    "id": "w0035"
  },
  {
    "german": "Sache",
    "english": "thing/matter",
    "pos": "noun",
    "imageSearch": "objects things",
    "id": "w0036"
  },
  {
    "german": "Kraft",
    "english": "strength/force",
    "pos": "noun",
    "imageSearch": "strong muscle",
    "id": "w0037"
  },
  {
    "german": "Auto",
    "english": "car",
    "pos": "noun",
    "imageSearch": "car automobile",
    "id": "w0038"
  },
  {
    "german": "Straße",
    "english": "street",
    "pos": "noun",
    "imageSearch": "street road",
    "id": "w0039"
  },
  {
    "german": "Tür",
    "english": "door",
    "pos": "noun",
    "imageSearch": "door entrance",
    "id": "w0040"
  },
  {
    "german": "Sprache",
    "english": "language",
    "pos": "noun",
    "imageSearch": "languages speech",
    "id": "w0041"
  },
  {
    "german": "Milch",
    "english": "milk",
    "pos": "noun",
    "imageSearch": "milk glass",
    "id": "w0042"
  },
  {
    "german": "Brot",
    "english": "bread",
    "pos": "noun",
    "imageSearch": "bread loaf",
    "id": "w0043"
  },
  {
    "german": "Tisch",
    "english": "table",
    "pos": "noun",
    "imageSearch": "wooden table",
    "id": "w0044"
  },
  {
    "german": "Stuhl",
    "english": "chair",
    "pos": "noun",
    "imageSearch": "chair furniture",
    "id": "w0045"
  },
  {
    "german": "Fenster",
    "english": "window",
    "pos": "noun",
    "imageSearch": "window light",
    "id": "w0046"
  },
  {
    "german": "Herz",
    "english": "heart",
    "pos": "noun",
    "imageSearch": "heart love",
    "id": "w0047"
  },
  {
    "german": "Bruder",
    "english": "brother",
    "pos": "noun",
    "imageSearch": "brothers siblings",
    "id": "w0048"
  },
  {
    "german": "Schwester",
    "english": "sister",
    "pos": "noun",
    "imageSearch": "sisters siblings",
    "id": "w0049"
  },
  {
    "german": "Hund",
    "english": "dog",
    "pos": "noun",
    "imageSearch": "dog pet",
    "id": "w0050"
  },
  {
    "german": "Katze",
    "english": "cat",
    "pos": "noun",
    "imageSearch": "cat pet",
    "id": "w0051"
  },
  {
    "german": "Baum",
    "english": "tree",
    "pos": "noun",
    "imageSearch": "tree nature",
    "id": "w0052"
  },
  {
    "german": "Blume",
    "english": "flower",
    "pos": "noun",
    "imageSearch": "flower blossom",
    "id": "w0053"
  },
  {
    "german": "Berg",
    "english": "mountain",
    "pos": "noun",
    "imageSearch": "mountain peak",
    "id": "w0054"
  },
  {
    "german": "Sonne",
    "english": "sun",
    "pos": "noun",
    "imageSearch": "sun sunshine",
    "id": "w0055"
  },
  {
    "german": "Mond",
    "english": "moon",
    "pos": "noun",
    "imageSearch": "moon night",
    "id": "w0056"
  },
  {
    "german": "Stern",
    "english": "star",
    "pos": "noun",
    "imageSearch": "star night sky",
    "id": "w0057"
  },
  {
    "german": "Feuer",
    "english": "fire",
    "pos": "noun",
    "imageSearch": "fire flames",
    "id": "w0058"
  },
  {
    "german": "Luft",
    "english": "air",
    "pos": "noun",
    "imageSearch": "air breeze wind",
    "id": "w0059"
  },
  {
    "german": "Erde",
    "english": "earth",
    "pos": "noun",
    "imageSearch": "earth soil",
    "id": "w0060"
  },
  {
    "german": "Meer",
    "english": "sea",
    "pos": "noun",
    "imageSearch": "sea ocean",
    "id": "w0061"
  },
  {
    "german": "Fluss",
    "english": "river",
    "pos": "noun",
    "imageSearch": "river flowing",
    "id": "w0062"
  },
  {
    "german": "Brücke",
    "english": "bridge",
    "pos": "noun",
    "imageSearch": "bridge architecture",
    "id": "w0063"
  },
  {
    "german": "Kirche",
    "english": "church",
    "pos": "noun",
    "imageSearch": "church building",
    "id": "w0064"
  },
  {
    "german": "Garten",
    "english": "garden",
    "pos": "noun",
    "imageSearch": "garden flowers",
    "id": "w0065"
  },
  {
    "german": "Küche",
    "english": "kitchen",
    "pos": "noun",
    "imageSearch": "kitchen cooking",
    "id": "w0066"
  },
  {
    "german": "Zimmer",
    "english": "room",
    "pos": "noun",
    "imageSearch": "room interior",
    "id": "w0067"
  },
  {
    "german": "Bett",
    "english": "bed",
    "pos": "noun",
    "imageSearch": "bed bedroom",
    "id": "w0068"
  },
  {
    "german": "Schlüssel",
    "english": "key",
    "pos": "noun",
    "imageSearch": "key lock",
    "id": "w0069"
  },
  {
    "german": "Uhr",
    "english": "clock/watch",
    "pos": "noun",
    "imageSearch": "clock watch",
    "id": "w0070"
  },
  {
    "german": "Telefon",
    "english": "telephone",
    "pos": "noun",
    "imageSearch": "telephone phone",
    "id": "w0071"
  },
  {
    "german": "Brief",
    "english": "letter",
    "pos": "noun",
    "imageSearch": "letter envelope",
    "id": "w0072"
  },
  {
    "german": "Zeitung",
    "english": "newspaper",
    "pos": "noun",
    "imageSearch": "newspaper reading",
    "id": "w0073"
  },
  {
    "german": "Musik",
    "english": "music",
    "pos": "noun",
    "imageSearch": "music notes",
    "id": "w0074"
  },
  {
    "german": "Film",
    "english": "film/movie",
    "pos": "noun",
    "imageSearch": "movie cinema",
    "id": "w0075"
  },
  {
    "german": "Spiel",
    "english": "game",
    "pos": "noun",
    "imageSearch": "board game",
    "id": "w0076"
  },
  {
    "german": "Zug",
    "english": "train",
    "pos": "noun",
    "imageSearch": "train railway",
    "id": "w0077"
  },
  {
    "german": "Flugzeug",
    "english": "airplane",
    "pos": "noun",
    "imageSearch": "airplane flying",
    "id": "w0078"
  },
  {
    "german": "Schiff",
    "english": "ship",
    "pos": "noun",
    "imageSearch": "ship boat",
    "id": "w0079"
  },
  {
    "german": "Fahrrad",
    "english": "bicycle",
    "pos": "noun",
    "imageSearch": "bicycle bike",
    "id": "w0080"
  },
  {
    "german": "Arzt",
    "english": "doctor",
    "pos": "noun",
    "imageSearch": "doctor medical",
    "id": "w0081"
  },
  {
    "german": "Krankenhaus",
    "english": "hospital",
    "pos": "noun",
    "imageSearch": "hospital building",
    "id": "w0082"
  },
  {
    "german": "Apotheke",
    "english": "pharmacy",
    "pos": "noun",
    "imageSearch": "pharmacy drugstore",
    "id": "w0083"
  },
  {
    "german": "Geschäft",
    "english": "shop/business",
    "pos": "noun",
    "imageSearch": "shop store",
    "id": "w0084"
  },
  {
    "german": "Markt",
    "english": "market",
    "pos": "noun",
    "imageSearch": "market stall",
    "id": "w0085"
  },
  {
    "german": "Restaurant",
    "english": "restaurant",
    "pos": "noun",
    "imageSearch": "restaurant dining",
    "id": "w0086"
  },
  {
    "german": "Kaffee",
    "english": "coffee",
    "pos": "noun",
    "imageSearch": "coffee cup",
    "id": "w0087"
  },
  {
    "german": "Tee",
    "english": "tea",
    "pos": "noun",
    "imageSearch": "tea cup",
    "id": "w0088"
  },
  {
    "german": "Bier",
    "english": "beer",
    "pos": "noun",
    "imageSearch": "beer glass",
    "id": "w0089"
  },
  {
    "german": "Wein",
    "english": "wine",
    "pos": "noun",
    "imageSearch": "wine glass",
    "id": "w0090"
  },
  {
    "german": "Fleisch",
    "english": "meat",
    "pos": "noun",
    "imageSearch": "meat steak",
    "id": "w0091"
  },
  {
    "german": "Fisch",
    "english": "fish",
    "pos": "noun",
    "imageSearch": "fish seafood",
    "id": "w0092"
  },
  {
    "german": "Obst",
    "english": "fruit",
    "pos": "noun",
    "imageSearch": "fruit basket",
    "id": "w0093"
  },
  {
    "german": "Gemüse",
    "english": "vegetables",
    "pos": "noun",
    "imageSearch": "vegetables fresh",
    "id": "w0094"
  },
  {
    "german": "Apfel",
    "english": "apple",
    "pos": "noun",
    "imageSearch": "red apple",
    "id": "w0095"
  },
  {
    "german": "Kartoffel",
    "english": "potato",
    "pos": "noun",
    "imageSearch": "potato",
    "id": "w0096"
  },
  {
    "german": "Reis",
    "english": "rice",
    "pos": "noun",
    "imageSearch": "rice bowl",
    "id": "w0097"
  },
  {
    "german": "Zucker",
    "english": "sugar",
    "pos": "noun",
    "imageSearch": "sugar cubes",
    "id": "w0098"
  },
  {
    "german": "Salz",
    "english": "salt",
    "pos": "noun",
    "imageSearch": "salt shaker",
    "id": "w0099"
  },
  {
    "german": "Ei",
    "english": "egg",
    "pos": "noun",
    "imageSearch": "egg chicken",
    "id": "w0100"
  },
  {
    "german": "Butter",
    "english": "butter",
    "pos": "noun",
    "imageSearch": "butter",
    "id": "w0101"
  },
  {
    "german": "Käse",
    "english": "cheese",
    "pos": "noun",
    "imageSearch": "cheese",
    "id": "w0102"
  },
  {
    "german": "Kuchen",
    "english": "cake",
    "pos": "noun",
    "imageSearch": "cake dessert",
    "id": "w0103"
  },
  {
    "german": "Eis",
    "english": "ice cream/ice",
    "pos": "noun",
    "imageSearch": "ice cream cone",
    "id": "w0104"
  },
  {
    "german": "Kleid",
    "english": "dress",
    "pos": "noun",
    "imageSearch": "dress clothing",
    "id": "w0105"
  },
  {
    "german": "Hemd",
    "english": "shirt",
    "pos": "noun",
    "imageSearch": "shirt clothing",
    "id": "w0106"
  },
  {
    "german": "Hose",
    "english": "pants",
    "pos": "noun",
    "imageSearch": "pants trousers",
    "id": "w0107"
  },
  {
    "german": "Schuh",
    "english": "shoe",
    "pos": "noun",
    "imageSearch": "shoe footwear",
    "id": "w0108"
  },
  {
    "german": "Hut",
    "english": "hat",
    "pos": "noun",
    "imageSearch": "hat",
    "id": "w0109"
  },
  {
    "german": "Tasche",
    "english": "bag/pocket",
    "pos": "noun",
    "imageSearch": "bag handbag",
    "id": "w0110"
  },
  {
    "german": "Regenschirm",
    "english": "umbrella",
    "pos": "noun",
    "imageSearch": "umbrella rain",
    "id": "w0111"
  },
  {
    "german": "Brille",
    "english": "glasses",
    "pos": "noun",
    "imageSearch": "eyeglasses",
    "id": "w0112"
  },
  {
    "german": "Haar",
    "english": "hair",
    "pos": "noun",
    "imageSearch": "hair hairstyle",
    "id": "w0113"
  },
  {
    "german": "Gesicht",
    "english": "face",
    "pos": "noun",
    "imageSearch": "face portrait",
    "id": "w0114"
  },
  {
    "german": "Mund",
    "english": "mouth",
    "pos": "noun",
    "imageSearch": "mouth lips",
    "id": "w0115"
  },
  {
    "german": "Nase",
    "english": "nose",
    "pos": "noun",
    "imageSearch": "nose face",
    "id": "w0116"
  },
  {
    "german": "Ohr",
    "english": "ear",
    "pos": "noun",
    "imageSearch": "ear listening",
    "id": "w0117"
  },
  {
    "german": "Finger",
    "english": "finger",
    "pos": "noun",
    "imageSearch": "finger hand",
    "id": "w0118"
  },
  {
    "german": "Fuß",
    "english": "foot",
    "pos": "noun",
    "imageSearch": "foot barefoot",
    "id": "w0119"
  },
  {
    "german": "Arm",
    "english": "arm",
    "pos": "noun",
    "imageSearch": "arm body",
    "id": "w0120"
  },
  {
    "german": "Bein",
    "english": "leg",
    "pos": "noun",
    "imageSearch": "leg running",
    "id": "w0121"
  },
  {
    "german": "Rücken",
    "english": "back",
    "pos": "noun",
    "imageSearch": "back body",
    "id": "w0122"
  },
  {
    "german": "Zahn",
    "english": "tooth",
    "pos": "noun",
    "imageSearch": "tooth smile",
    "id": "w0123"
  },
  {
    "german": "Blut",
    "english": "blood",
    "pos": "noun",
    "imageSearch": "blood red",
    "id": "w0124"
  },
  {
    "german": "Körper",
    "english": "body",
    "pos": "noun",
    "imageSearch": "human body",
    "id": "w0125"
  },
  {
    "german": "Schnee",
    "english": "snow",
    "pos": "noun",
    "imageSearch": "snow winter",
    "id": "w0126"
  },
  {
    "german": "Regen",
    "english": "rain",
    "pos": "noun",
    "imageSearch": "rain drops",
    "id": "w0127"
  },
  {
    "german": "Wind",
    "english": "wind",
    "pos": "noun",
    "imageSearch": "wind blowing",
    "id": "w0128"
  },
  {
    "german": "Wolke",
    "english": "cloud",
    "pos": "noun",
    "imageSearch": "cloud sky",
    "id": "w0129"
  },
  {
    "german": "Himmel",
    "english": "sky/heaven",
    "pos": "noun",
    "imageSearch": "blue sky",
    "id": "w0130"
  },
  {
    "german": "Wald",
    "english": "forest",
    "pos": "noun",
    "imageSearch": "forest trees",
    "id": "w0131"
  },
  {
    "german": "Feld",
    "english": "field",
    "pos": "noun",
    "imageSearch": "green field",
    "id": "w0132"
  },
  {
    "german": "See",
    "english": "lake",
    "pos": "noun",
    "imageSearch": "lake calm water",
    "id": "w0133"
  },
  {
    "german": "Insel",
    "english": "island",
    "pos": "noun",
    "imageSearch": "island tropical",
    "id": "w0134"
  },
  {
    "german": "Strand",
    "english": "beach",
    "pos": "noun",
    "imageSearch": "beach sand",
    "id": "w0135"
  },
  {
    "german": "Tier",
    "english": "animal",
    "pos": "noun",
    "imageSearch": "animal wildlife",
    "id": "w0136"
  },
  {
    "german": "Vogel",
    "english": "bird",
    "pos": "noun",
    "imageSearch": "bird flying",
    "id": "w0137"
  },
  {
    "german": "Pferd",
    "english": "horse",
    "pos": "noun",
    "imageSearch": "horse running",
    "id": "w0138"
  },
  {
    "german": "Kuh",
    "english": "cow",
    "pos": "noun",
    "imageSearch": "cow farm",
    "id": "w0139"
  },
  {
    "german": "Schwein",
    "english": "pig",
    "pos": "noun",
    "imageSearch": "pig farm",
    "id": "w0140"
  },
  {
    "german": "Maus",
    "english": "mouse",
    "pos": "noun",
    "imageSearch": "mouse animal",
    "id": "w0141"
  },
  {
    "german": "Schmetterling",
    "english": "butterfly",
    "pos": "noun",
    "imageSearch": "butterfly colorful",
    "id": "w0142"
  },
  {
    "german": "Farbe",
    "english": "color",
    "pos": "noun",
    "imageSearch": "colors rainbow",
    "id": "w0143"
  },
  {
    "german": "Licht",
    "english": "light",
    "pos": "noun",
    "imageSearch": "light beam",
    "id": "w0144"
  },
  {
    "german": "Schatten",
    "english": "shadow",
    "pos": "noun",
    "imageSearch": "shadow silhouette",
    "id": "w0145"
  },
  {
    "german": "Morgen",
    "english": "morning",
    "pos": "noun",
    "imageSearch": "morning sunrise",
    "id": "w0146"
  },
  {
    "german": "Abend",
    "english": "evening",
    "pos": "noun",
    "imageSearch": "evening sunset",
    "id": "w0147"
  },
  {
    "german": "Mittag",
    "english": "noon",
    "pos": "noun",
    "imageSearch": "noon midday sun",
    "id": "w0148"
  },
  {
    "german": "Woche",
    "english": "week",
    "pos": "noun",
    "imageSearch": "weekly calendar",
    "id": "w0149"
  },
  {
    "german": "Monat",
    "english": "month",
    "pos": "noun",
    "imageSearch": "calendar month",
    "id": "w0150"
  },
  {
    "german": "Sommer",
    "english": "summer",
    "pos": "noun",
    "imageSearch": "summer beach",
    "id": "w0151"
  },
  {
    "german": "Winter",
    "english": "winter",
    "pos": "noun",
    "imageSearch": "winter snow",
    "id": "w0152"
  },
  {
    "german": "Frühling",
    "english": "spring",
    "pos": "noun",
    "imageSearch": "spring flowers",
    "id": "w0153"
  },
  {
    "german": "Herbst",
    "english": "autumn",
    "pos": "noun",
    "imageSearch": "autumn leaves",
    "id": "w0154"
  },
  {
    "german": "Geburtstag",
    "english": "birthday",
    "pos": "noun",
    "imageSearch": "birthday cake candles",
    "id": "w0155"
  },
  {
    "german": "Geschenk",
    "english": "gift",
    "pos": "noun",
    "imageSearch": "gift present",
    "id": "w0156"
  },
  {
    "german": "Fest",
    "english": "festival/party",
    "pos": "noun",
    "imageSearch": "festival celebration",
    "id": "w0157"
  },
  {
    "german": "Urlaub",
    "english": "vacation",
    "pos": "noun",
    "imageSearch": "vacation travel",
    "id": "w0158"
  },
  {
    "german": "Reise",
    "english": "journey/trip",
    "pos": "noun",
    "imageSearch": "travel journey",
    "id": "w0159"
  },
  {
    "german": "Flughafen",
    "english": "airport",
    "pos": "noun",
    "imageSearch": "airport terminal",
    "id": "w0160"
  },
  {
    "german": "Bahnhof",
    "english": "train station",
    "pos": "noun",
    "imageSearch": "train station",
    "id": "w0161"
  },
  {
    "german": "Hotel",
    "english": "hotel",
    "pos": "noun",
    "imageSearch": "hotel building",
    "id": "w0162"
  },
  {
    "german": "Museum",
    "english": "museum",
    "pos": "noun",
    "imageSearch": "museum art",
    "id": "w0163"
  },
  {
    "german": "Kino",
    "english": "cinema",
    "pos": "noun",
    "imageSearch": "cinema movie theater",
    "id": "w0164"
  },
  {
    "german": "Theater",
    "english": "theater",
    "pos": "noun",
    "imageSearch": "theater stage",
    "id": "w0165"
  },
  {
    "german": "Park",
    "english": "park",
    "pos": "noun",
    "imageSearch": "park nature",
    "id": "w0166"
  },
  {
    "german": "Bibliothek",
    "english": "library",
    "pos": "noun",
    "imageSearch": "library books",
    "id": "w0167"
  },
  {
    "german": "Universität",
    "english": "university",
    "pos": "noun",
    "imageSearch": "university campus",
    "id": "w0168"
  },
  {
    "german": "Lehrer",
    "english": "teacher",
    "pos": "noun",
    "imageSearch": "teacher classroom",
    "id": "w0169"
  },
  {
    "german": "Schüler",
    "english": "student",
    "pos": "noun",
    "imageSearch": "student studying",
    "id": "w0170"
  },
  {
    "german": "Aufgabe",
    "english": "task/assignment",
    "pos": "noun",
    "imageSearch": "homework task",
    "id": "w0171"
  },
  {
    "german": "Prüfung",
    "english": "exam",
    "pos": "noun",
    "imageSearch": "exam test",
    "id": "w0172"
  },
  {
    "german": "Antwort",
    "english": "answer",
    "pos": "noun",
    "imageSearch": "answer response",
    "id": "w0173"
  },
  {
    "german": "Problem",
    "english": "problem",
    "pos": "noun",
    "imageSearch": "problem solving",
    "id": "w0174"
  },
  {
    "german": "Lösung",
    "english": "solution",
    "pos": "noun",
    "imageSearch": "solution idea",
    "id": "w0175"
  },
  {
    "german": "Idee",
    "english": "idea",
    "pos": "noun",
    "imageSearch": "idea lightbulb",
    "id": "w0176"
  },
  {
    "german": "Erfahrung",
    "english": "experience",
    "pos": "noun",
    "imageSearch": "experience adventure",
    "id": "w0177"
  },
  {
    "german": "Beispiel",
    "english": "example",
    "pos": "noun",
    "imageSearch": "example demonstration",
    "id": "w0178"
  },
  {
    "german": "Geschichte",
    "english": "story/history",
    "pos": "noun",
    "imageSearch": "story book",
    "id": "w0179"
  },
  {
    "german": "Anfang",
    "english": "beginning",
    "pos": "noun",
    "imageSearch": "beginning start",
    "id": "w0180"
  },
  {
    "german": "Ziel",
    "english": "goal/target",
    "pos": "noun",
    "imageSearch": "target goal",
    "id": "w0181"
  },
  {
    "german": "Erfolg",
    "english": "success",
    "pos": "noun",
    "imageSearch": "success achievement",
    "id": "w0182"
  },
  {
    "german": "Fehler",
    "english": "mistake/error",
    "pos": "noun",
    "imageSearch": "mistake error",
    "id": "w0183"
  },
  {
    "german": "Hilfe",
    "english": "help",
    "pos": "noun",
    "imageSearch": "helping hand",
    "id": "w0184"
  },
  {
    "german": "Angst",
    "english": "fear",
    "pos": "noun",
    "imageSearch": "fear scared",
    "id": "w0185"
  },
  {
    "german": "Freude",
    "english": "joy",
    "pos": "noun",
    "imageSearch": "joy happiness",
    "id": "w0186"
  },
  {
    "german": "Liebe",
    "english": "love",
    "pos": "noun",
    "imageSearch": "love heart",
    "id": "w0187"
  },
  {
    "german": "Glück",
    "english": "luck/happiness",
    "pos": "noun",
    "imageSearch": "four leaf clover luck",
    "id": "w0188"
  },
  {
    "german": "Hoffnung",
    "english": "hope",
    "pos": "noun",
    "imageSearch": "hope light",
    "id": "w0189"
  },
  {
    "german": "Traum",
    "english": "dream",
    "pos": "noun",
    "imageSearch": "dream clouds",
    "id": "w0190"
  },
  {
    "german": "Wahrheit",
    "english": "truth",
    "pos": "noun",
    "imageSearch": "truth honesty",
    "id": "w0191"
  },
  {
    "german": "Freiheit",
    "english": "freedom",
    "pos": "noun",
    "imageSearch": "freedom bird flying",
    "id": "w0192"
  },
  {
    "german": "Frieden",
    "english": "peace",
    "pos": "noun",
    "imageSearch": "peace dove",
    "id": "w0193"
  },
  {
    "german": "Krieg",
    "english": "war",
    "pos": "noun",
    "imageSearch": "war conflict",
    "id": "w0194"
  },
  {
    "german": "Polizei",
    "english": "police",
    "pos": "noun",
    "imageSearch": "police officer",
    "id": "w0195"
  },
  {
    "german": "Regierung",
    "english": "government",
    "pos": "noun",
    "imageSearch": "government building",
    "id": "w0196"
  },
  {
    "german": "Gesetz",
    "english": "law",
    "pos": "noun",
    "imageSearch": "law justice",
    "id": "w0197"
  },
  {
    "german": "Gesellschaft",
    "english": "society",
    "pos": "noun",
    "imageSearch": "society community",
    "id": "w0198"
  },
  {
    "german": "Familie",
    "english": "family",
    "pos": "noun",
    "imageSearch": "family together",
    "id": "w0199"
  },
  {
    "german": "Eltern",
    "english": "parents",
    "pos": "noun",
    "imageSearch": "parents family",
    "id": "w0200"
  },
  {
    "german": "Sohn",
    "english": "son",
    "pos": "noun",
    "imageSearch": "son boy",
    "id": "w0201"
  },
  {
    "german": "Tochter",
    "english": "daughter",
    "pos": "noun",
    "imageSearch": "daughter girl",
    "id": "w0202"
  },
  {
    "german": "Baby",
    "english": "baby",
    "pos": "noun",
    "imageSearch": "baby infant",
    "id": "w0203"
  },
  {
    "german": "Nachbar",
    "english": "neighbor",
    "pos": "noun",
    "imageSearch": "neighbor house",
    "id": "w0204"
  },
  {
    "german": "Chef",
    "english": "boss",
    "pos": "noun",
    "imageSearch": "boss manager office",
    "id": "w0205"
  },
  {
    "german": "Kollege",
    "english": "colleague",
    "pos": "noun",
    "imageSearch": "colleague coworker",
    "id": "w0206"
  },
  {
    "german": "Computer",
    "english": "computer",
    "pos": "noun",
    "imageSearch": "computer laptop",
    "id": "w0207"
  },
  {
    "german": "Internet",
    "english": "internet",
    "pos": "noun",
    "imageSearch": "internet wifi",
    "id": "w0208"
  },
  {
    "german": "Handy",
    "english": "cellphone",
    "pos": "noun",
    "imageSearch": "smartphone mobile",
    "id": "w0209"
  },
  {
    "german": "Nachricht",
    "english": "message/news",
    "pos": "noun",
    "imageSearch": "message notification",
    "id": "w0210"
  },
  {
    "german": "Foto",
    "english": "photo",
    "pos": "noun",
    "imageSearch": "camera photo",
    "id": "w0211"
  },
  {
    "german": "Lied",
    "english": "song",
    "pos": "noun",
    "imageSearch": "song music",
    "id": "w0212"
  },
  {
    "german": "Tanz",
    "english": "dance",
    "pos": "noun",
    "imageSearch": "dance dancing",
    "id": "w0213"
  },
  {
    "german": "Kunst",
    "english": "art",
    "pos": "noun",
    "imageSearch": "art painting",
    "id": "w0214"
  },
  {
    "german": "Sport",
    "english": "sport",
    "pos": "noun",
    "imageSearch": "sport athletics",
    "id": "w0215"
  },
  {
    "german": "Fußball",
    "english": "soccer/football",
    "pos": "noun",
    "imageSearch": "soccer ball",
    "id": "w0216"
  },
  {
    "german": "Schwimmbad",
    "english": "swimming pool",
    "pos": "noun",
    "imageSearch": "swimming pool",
    "id": "w0217"
  },
  {
    "german": "Messer",
    "english": "knife",
    "pos": "noun",
    "imageSearch": "knife kitchen",
    "id": "w0218"
  },
  {
    "german": "Gabel",
    "english": "fork",
    "pos": "noun",
    "imageSearch": "fork silverware",
    "id": "w0219"
  },
  {
    "german": "Löffel",
    "english": "spoon",
    "pos": "noun",
    "imageSearch": "spoon",
    "id": "w0220"
  },
  {
    "german": "Teller",
    "english": "plate",
    "pos": "noun",
    "imageSearch": "plate dish",
    "id": "w0221"
  },
  {
    "german": "Glas",
    "english": "glass",
    "pos": "noun",
    "imageSearch": "drinking glass",
    "id": "w0222"
  },
  {
    "german": "Flasche",
    "english": "bottle",
    "pos": "noun",
    "imageSearch": "bottle water",
    "id": "w0223"
  },
  {
    "german": "Topf",
    "english": "pot",
    "pos": "noun",
    "imageSearch": "cooking pot",
    "id": "w0224"
  },
  {
    "german": "Kühlschrank",
    "english": "refrigerator",
    "pos": "noun",
    "imageSearch": "refrigerator fridge",
    "id": "w0225"
  },
  {
    "german": "Ofen",
    "english": "oven",
    "pos": "noun",
    "imageSearch": "oven kitchen",
    "id": "w0226"
  },
  {
    "german": "Spiegel",
    "english": "mirror",
    "pos": "noun",
    "imageSearch": "mirror reflection",
    "id": "w0227"
  },
  {
    "german": "Treppe",
    "english": "stairs",
    "pos": "noun",
    "imageSearch": "stairs staircase",
    "id": "w0228"
  },
  {
    "german": "Dach",
    "english": "roof",
    "pos": "noun",
    "imageSearch": "roof house",
    "id": "w0229"
  },
  {
    "german": "Wand",
    "english": "wall",
    "pos": "noun",
    "imageSearch": "wall brick",
    "id": "w0230"
  },
  {
    "german": "Boden",
    "english": "floor/ground",
    "pos": "noun",
    "imageSearch": "floor wooden",
    "id": "w0231"
  },
  {
    "german": "Decke",
    "english": "ceiling/blanket",
    "pos": "noun",
    "imageSearch": "blanket warm",
    "id": "w0232"
  },
  {
    "german": "Lampe",
    "english": "lamp",
    "pos": "noun",
    "imageSearch": "lamp light",
    "id": "w0233"
  },
  {
    "german": "Sofa",
    "english": "sofa/couch",
    "pos": "noun",
    "imageSearch": "sofa couch",
    "id": "w0234"
  },
  {
    "german": "Schrank",
    "english": "closet/cabinet",
    "pos": "noun",
    "imageSearch": "closet wardrobe",
    "id": "w0235"
  },
  {
    "german": "Bad",
    "english": "bathroom",
    "pos": "noun",
    "imageSearch": "bathroom",
    "id": "w0236"
  },
  {
    "german": "Dusche",
    "english": "shower",
    "pos": "noun",
    "imageSearch": "shower bathroom",
    "id": "w0237"
  },
  {
    "german": "Seife",
    "english": "soap",
    "pos": "noun",
    "imageSearch": "soap bar",
    "id": "w0238"
  },
  {
    "german": "Handtuch",
    "english": "towel",
    "pos": "noun",
    "imageSearch": "towel",
    "id": "w0239"
  },
  {
    "german": "Zahnarzt",
    "english": "dentist",
    "pos": "noun",
    "imageSearch": "dentist",
    "id": "w0240"
  },
  {
    "german": "Medizin",
    "english": "medicine",
    "pos": "noun",
    "imageSearch": "medicine pills",
    "id": "w0241"
  },
  {
    "german": "Schmerz",
    "english": "pain",
    "pos": "noun",
    "imageSearch": "pain headache",
    "id": "w0242"
  },
  {
    "german": "Gesundheit",
    "english": "health",
    "pos": "noun",
    "imageSearch": "health wellness",
    "id": "w0243"
  },
  {
    "german": "Krankheit",
    "english": "illness",
    "pos": "noun",
    "imageSearch": "sick illness",
    "id": "w0244"
  },
  {
    "german": "Unfall",
    "english": "accident",
    "pos": "noun",
    "imageSearch": "car accident",
    "id": "w0245"
  },
  {
    "german": "Nummer",
    "english": "number",
    "pos": "noun",
    "imageSearch": "numbers",
    "id": "w0246"
  },
  {
    "german": "Name",
    "english": "name",
    "pos": "noun",
    "imageSearch": "name tag",
    "id": "w0247"
  },
  {
    "german": "Adresse",
    "english": "address",
    "pos": "noun",
    "imageSearch": "address mailbox",
    "id": "w0248"
  },
  {
    "german": "Geheimnis",
    "english": "secret",
    "pos": "noun",
    "imageSearch": "secret whisper",
    "id": "w0249"
  },
  {
    "german": "Überraschung",
    "english": "surprise",
    "pos": "noun",
    "imageSearch": "surprise party",
    "id": "w0250"
  },
  {
    "german": "Witz",
    "english": "joke",
    "pos": "noun",
    "imageSearch": "joke laughing",
    "id": "w0251"
  },
  {
    "german": "Spaß",
    "english": "fun",
    "pos": "noun",
    "imageSearch": "fun happy",
    "id": "w0252"
  },
  {
    "german": "Ruhe",
    "english": "quiet/calm",
    "pos": "noun",
    "imageSearch": "calm quiet nature",
    "id": "w0253"
  },
  {
    "german": "Lärm",
    "english": "noise",
    "pos": "noun",
    "imageSearch": "noise loud",
    "id": "w0254"
  },
  {
    "german": "Stück",
    "english": "piece",
    "pos": "noun",
    "imageSearch": "puzzle piece",
    "id": "w0255"
  },
  {
    "german": "Form",
    "english": "shape/form",
    "pos": "noun",
    "imageSearch": "geometric shapes",
    "id": "w0256"
  },
  {
    "german": "Größe",
    "english": "size",
    "pos": "noun",
    "imageSearch": "size comparison",
    "id": "w0257"
  },
  {
    "german": "Preis",
    "english": "price",
    "pos": "noun",
    "imageSearch": "price tag",
    "id": "w0258"
  },
  {
    "german": "Gruppe",
    "english": "group",
    "pos": "noun",
    "imageSearch": "group people",
    "id": "w0259"
  },
  {
    "german": "Mannschaft",
    "english": "team",
    "pos": "noun",
    "imageSearch": "team sports",
    "id": "w0260"
  },
  {
    "german": "Gewicht",
    "english": "weight",
    "pos": "noun",
    "imageSearch": "weight scale",
    "id": "w0261"
  },
  {
    "german": "Richtung",
    "english": "direction",
    "pos": "noun",
    "imageSearch": "direction arrow sign",
    "id": "w0262"
  },
  {
    "german": "Zukunft",
    "english": "future",
    "pos": "noun",
    "imageSearch": "future technology",
    "id": "w0263"
  },
  {
    "german": "Vergangenheit",
    "english": "past",
    "pos": "noun",
    "imageSearch": "vintage old photo",
    "id": "w0264"
  },
  {
    "german": "Gegenwart",
    "english": "present",
    "pos": "noun",
    "imageSearch": "present moment now",
    "id": "w0265"
  },
  {
    "german": "Unterschied",
    "english": "difference",
    "pos": "noun",
    "imageSearch": "difference contrast",
    "id": "w0266"
  },
  {
    "german": "Meinung",
    "english": "opinion",
    "pos": "noun",
    "imageSearch": "opinion speech bubble",
    "id": "w0267"
  },
  {
    "german": "Wunsch",
    "english": "wish",
    "pos": "noun",
    "imageSearch": "wish star",
    "id": "w0268"
  },
  {
    "german": "Gefühl",
    "english": "feeling",
    "pos": "noun",
    "imageSearch": "feeling emotion",
    "id": "w0269"
  },
  {
    "german": "Sorge",
    "english": "worry/concern",
    "pos": "noun",
    "imageSearch": "worry anxious",
    "id": "w0270"
  },
  {
    "german": "Interesse",
    "english": "interest",
    "pos": "noun",
    "imageSearch": "curiosity interest",
    "id": "w0271"
  },
  {
    "german": "Geduld",
    "english": "patience",
    "pos": "noun",
    "imageSearch": "patience waiting",
    "id": "w0272"
  },
  {
    "german": "Mut",
    "english": "courage",
    "pos": "noun",
    "imageSearch": "courage brave",
    "id": "w0273"
  },
  {
    "german": "Vertrauen",
    "english": "trust",
    "pos": "noun",
    "imageSearch": "trust handshake",
    "id": "w0274"
  },
  {
    "german": "Respekt",
    "english": "respect",
    "pos": "noun",
    "imageSearch": "respect bow",
    "id": "w0275"
  },
  {
    "german": "Wissen",
    "english": "knowledge",
    "pos": "noun",
    "imageSearch": "knowledge books",
    "id": "w0276"
  },
  {
    "german": "Bildung",
    "english": "education",
    "pos": "noun",
    "imageSearch": "education learning",
    "id": "w0277"
  },
  {
    "german": "Wissenschaft",
    "english": "science",
    "pos": "noun",
    "imageSearch": "science laboratory",
    "id": "w0278"
  },
  {
    "german": "Technik",
    "english": "technology",
    "pos": "noun",
    "imageSearch": "technology",
    "id": "w0279"
  },
  {
    "german": "Energie",
    "english": "energy",
    "pos": "noun",
    "imageSearch": "energy power",
    "id": "w0280"
  },
  {
    "german": "Umwelt",
    "english": "environment",
    "pos": "noun",
    "imageSearch": "environment nature",
    "id": "w0281"
  },
  {
    "german": "Natur",
    "english": "nature",
    "pos": "noun",
    "imageSearch": "nature landscape",
    "id": "w0282"
  },
  {
    "german": "Verkehr",
    "english": "traffic",
    "pos": "noun",
    "imageSearch": "traffic cars",
    "id": "w0283"
  },
  {
    "german": "Ampel",
    "english": "traffic light",
    "pos": "noun",
    "imageSearch": "traffic light",
    "id": "w0284"
  },
  {
    "german": "Haltestelle",
    "english": "bus stop",
    "pos": "noun",
    "imageSearch": "bus stop",
    "id": "w0285"
  },
  {
    "german": "Fahrkarte",
    "english": "ticket",
    "pos": "noun",
    "imageSearch": "ticket transit",
    "id": "w0286"
  },
  {
    "german": "Gepäck",
    "english": "luggage",
    "pos": "noun",
    "imageSearch": "luggage suitcase",
    "id": "w0287"
  },
  {
    "german": "Pass",
    "english": "passport",
    "pos": "noun",
    "imageSearch": "passport travel",
    "id": "w0288"
  },
  {
    "german": "Grenze",
    "english": "border",
    "pos": "noun",
    "imageSearch": "border crossing",
    "id": "w0289"
  },
  {
    "german": "Schritt",
    "english": "step",
    "pos": "noun",
    "imageSearch": "footstep walk",
    "id": "w0290"
  },
  {
    "german": "Bewegung",
    "english": "movement",
    "pos": "noun",
    "imageSearch": "movement motion",
    "id": "w0291"
  },
  {
    "german": "Entscheidung",
    "english": "decision",
    "pos": "noun",
    "imageSearch": "crossroads decision",
    "id": "w0292"
  },
  {
    "german": "Möglichkeit",
    "english": "possibility",
    "pos": "noun",
    "imageSearch": "open door possibility",
    "id": "w0293"
  },
  {
    "german": "Bedeutung",
    "english": "meaning",
    "pos": "noun",
    "imageSearch": "meaning symbol",
    "id": "w0294"
  },
  {
    "german": "Entwicklung",
    "english": "development",
    "pos": "noun",
    "imageSearch": "growth development",
    "id": "w0295"
  },
  {
    "german": "Beziehung",
    "english": "relationship",
    "pos": "noun",
    "imageSearch": "couple relationship",
    "id": "w0296"
  },
  {
    "german": "Gespräch",
    "english": "conversation",
    "pos": "noun",
    "imageSearch": "conversation talking",
    "id": "w0297"
  },
  {
    "german": "Vertrag",
    "english": "contract",
    "pos": "noun",
    "imageSearch": "contract signing",
    "id": "w0298"
  },
  {
    "german": "Rechnung",
    "english": "bill/invoice",
    "pos": "noun",
    "imageSearch": "bill receipt",
    "id": "w0299"
  },
  {
    "german": "Konto",
    "english": "account",
    "pos": "noun",
    "imageSearch": "bank account",
    "id": "w0300"
  },
  {
    "german": "Steuer",
    "english": "tax",
    "pos": "noun",
    "imageSearch": "tax money",
    "id": "w0301"
  },
  {
    "german": "Miete",
    "english": "rent",
    "pos": "noun",
    "imageSearch": "apartment rent",
    "id": "w0302"
  },
  {
    "german": "Wohnung",
    "english": "apartment",
    "pos": "noun",
    "imageSearch": "apartment building",
    "id": "w0303"
  },
  {
    "german": "Gebäude",
    "english": "building",
    "pos": "noun",
    "imageSearch": "building architecture",
    "id": "w0304"
  },
  {
    "german": "Fabrik",
    "english": "factory",
    "pos": "noun",
    "imageSearch": "factory industrial",
    "id": "w0305"
  },
  {
    "german": "Büro",
    "english": "office",
    "pos": "noun",
    "imageSearch": "office desk",
    "id": "w0306"
  },
  {
    "german": "Beruf",
    "english": "profession",
    "pos": "noun",
    "imageSearch": "career profession",
    "id": "w0307"
  },
  {
    "german": "Gehalt",
    "english": "salary",
    "pos": "noun",
    "imageSearch": "salary paycheck",
    "id": "w0308"
  },
  {
    "german": "Termin",
    "english": "appointment",
    "pos": "noun",
    "imageSearch": "appointment calendar",
    "id": "w0309"
  },
  {
    "german": "Pause",
    "english": "break/pause",
    "pos": "noun",
    "imageSearch": "coffee break",
    "id": "w0310"
  },
  {
    "german": "sein",
    "english": "to be",
    "pos": "verb",
    "imageSearch": "being existence",
    "id": "w0311"
  },
  {
    "german": "haben",
    "english": "to have",
    "pos": "verb",
    "imageSearch": "having holding",
    "id": "w0312"
  },
  {
    "german": "werden",
    "english": "to become",
    "pos": "verb",
    "imageSearch": "transformation growing",
    "id": "w0313"
  },
  {
    "german": "können",
    "english": "can/to be able",
    "pos": "verb",
    "imageSearch": "ability strength",
    "id": "w0314"
  },
  {
    "german": "müssen",
    "english": "must/to have to",
    "pos": "verb",
    "imageSearch": "obligation rules",
    "id": "w0315"
  },
  {
    "german": "sagen",
    "english": "to say",
    "pos": "verb",
    "imageSearch": "speaking talking",
    "id": "w0316"
  },
  {
    "german": "machen",
    "english": "to make/do",
    "pos": "verb",
    "imageSearch": "making creating",
    "id": "w0317"
  },
  {
    "german": "geben",
    "english": "to give",
    "pos": "verb",
    "imageSearch": "giving present",
    "id": "w0318"
  },
  {
    "german": "kommen",
    "english": "to come",
    "pos": "verb",
    "imageSearch": "arriving coming",
    "id": "w0319"
  },
  {
    "german": "wollen",
    "english": "to want",
    "pos": "verb",
    "imageSearch": "wanting desire",
    "id": "w0320"
  },
  {
    "german": "gehen",
    "english": "to go/walk",
    "pos": "verb",
    "imageSearch": "walking going",
    "id": "w0321"
  },
  {
    "german": "wissen",
    "english": "to know",
    "pos": "verb",
    "imageSearch": "knowing thinking",
    "id": "w0322"
  },
  {
    "german": "sehen",
    "english": "to see",
    "pos": "verb",
    "imageSearch": "seeing eyes",
    "id": "w0323"
  },
  {
    "german": "lassen",
    "english": "to let/leave",
    "pos": "verb",
    "imageSearch": "letting go releasing",
    "id": "w0324"
  },
  {
    "german": "stehen",
    "english": "to stand",
    "pos": "verb",
    "imageSearch": "standing person",
    "id": "w0325"
  },
  {
    "german": "finden",
    "english": "to find",
    "pos": "verb",
    "imageSearch": "finding treasure",
    "id": "w0326"
  },
  {
    "german": "bleiben",
    "english": "to stay",
    "pos": "verb",
    "imageSearch": "staying home",
    "id": "w0327"
  },
  {
    "german": "liegen",
    "english": "to lie/be located",
    "pos": "verb",
    "imageSearch": "lying down",
    "id": "w0328"
  },
  {
    "german": "heißen",
    "english": "to be called",
    "pos": "verb",
    "imageSearch": "name tag",
    "id": "w0329"
  },
  {
    "german": "denken",
    "english": "to think",
    "pos": "verb",
    "imageSearch": "thinking person",
    "id": "w0330"
  },
  {
    "german": "nehmen",
    "english": "to take",
    "pos": "verb",
    "imageSearch": "taking grabbing",
    "id": "w0331"
  },
  {
    "german": "halten",
    "english": "to hold/stop",
    "pos": "verb",
    "imageSearch": "holding hands",
    "id": "w0332"
  },
  {
    "german": "bringen",
    "english": "to bring",
    "pos": "verb",
    "imageSearch": "bringing carrying",
    "id": "w0333"
  },
  {
    "german": "leben",
    "english": "to live",
    "pos": "verb",
    "imageSearch": "living life",
    "id": "w0334"
  },
  {
    "german": "fahren",
    "english": "to drive/travel",
    "pos": "verb",
    "imageSearch": "driving car",
    "id": "w0335"
  },
  {
    "german": "fragen",
    "english": "to ask",
    "pos": "verb",
    "imageSearch": "asking question",
    "id": "w0336"
  },
  {
    "german": "kennen",
    "english": "to know (person)",
    "pos": "verb",
    "imageSearch": "knowing recognizing",
    "id": "w0337"
  },
  {
    "german": "sprechen",
    "english": "to speak",
    "pos": "verb",
    "imageSearch": "speaking talking",
    "id": "w0338"
  },
  {
    "german": "spielen",
    "english": "to play",
    "pos": "verb",
    "imageSearch": "playing children",
    "id": "w0339"
  },
  {
    "german": "arbeiten",
    "english": "to work",
    "pos": "verb",
    "imageSearch": "working office",
    "id": "w0340"
  },
  {
    "german": "brauchen",
    "english": "to need",
    "pos": "verb",
    "imageSearch": "needing essential",
    "id": "w0341"
  },
  {
    "german": "lernen",
    "english": "to learn",
    "pos": "verb",
    "imageSearch": "learning studying",
    "id": "w0342"
  },
  {
    "german": "beginnen",
    "english": "to begin",
    "pos": "verb",
    "imageSearch": "starting beginning",
    "id": "w0343"
  },
  {
    "german": "verstehen",
    "english": "to understand",
    "pos": "verb",
    "imageSearch": "understanding idea",
    "id": "w0344"
  },
  {
    "german": "bekommen",
    "english": "to receive",
    "pos": "verb",
    "imageSearch": "receiving package",
    "id": "w0345"
  },
  {
    "german": "tragen",
    "english": "to carry/wear",
    "pos": "verb",
    "imageSearch": "carrying box",
    "id": "w0346"
  },
  {
    "german": "laufen",
    "english": "to run",
    "pos": "verb",
    "imageSearch": "running jogging",
    "id": "w0347"
  },
  {
    "german": "lesen",
    "english": "to read",
    "pos": "verb",
    "imageSearch": "reading book",
    "id": "w0348"
  },
  {
    "german": "schreiben",
    "english": "to write",
    "pos": "verb",
    "imageSearch": "writing pen",
    "id": "w0349"
  },
  {
    "german": "essen",
    "english": "to eat",
    "pos": "verb",
    "imageSearch": "eating food",
    "id": "w0350"
  },
  {
    "german": "trinken",
    "english": "to drink",
    "pos": "verb",
    "imageSearch": "drinking water",
    "id": "w0351"
  },
  {
    "german": "schlafen",
    "english": "to sleep",
    "pos": "verb",
    "imageSearch": "sleeping bed",
    "id": "w0352"
  },
  {
    "german": "kaufen",
    "english": "to buy",
    "pos": "verb",
    "imageSearch": "shopping buying",
    "id": "w0353"
  },
  {
    "german": "verkaufen",
    "english": "to sell",
    "pos": "verb",
    "imageSearch": "selling store",
    "id": "w0354"
  },
  {
    "german": "kochen",
    "english": "to cook",
    "pos": "verb",
    "imageSearch": "cooking kitchen",
    "id": "w0355"
  },
  {
    "german": "waschen",
    "english": "to wash",
    "pos": "verb",
    "imageSearch": "washing hands",
    "id": "w0356"
  },
  {
    "german": "öffnen",
    "english": "to open",
    "pos": "verb",
    "imageSearch": "opening door",
    "id": "w0357"
  },
  {
    "german": "schließen",
    "english": "to close",
    "pos": "verb",
    "imageSearch": "closing door",
    "id": "w0358"
  },
  {
    "german": "sitzen",
    "english": "to sit",
    "pos": "verb",
    "imageSearch": "sitting chair",
    "id": "w0359"
  },
  {
    "german": "ziehen",
    "english": "to pull/move",
    "pos": "verb",
    "imageSearch": "pulling rope",
    "id": "w0360"
  },
  {
    "german": "fallen",
    "english": "to fall",
    "pos": "verb",
    "imageSearch": "falling autumn leaves",
    "id": "w0361"
  },
  {
    "german": "steigen",
    "english": "to climb/rise",
    "pos": "verb",
    "imageSearch": "climbing mountain",
    "id": "w0362"
  },
  {
    "german": "fliegen",
    "english": "to fly",
    "pos": "verb",
    "imageSearch": "flying airplane",
    "id": "w0363"
  },
  {
    "german": "schwimmen",
    "english": "to swim",
    "pos": "verb",
    "imageSearch": "swimming pool",
    "id": "w0364"
  },
  {
    "german": "tanzen",
    "english": "to dance",
    "pos": "verb",
    "imageSearch": "dancing couple",
    "id": "w0365"
  },
  {
    "german": "singen",
    "english": "to sing",
    "pos": "verb",
    "imageSearch": "singing microphone",
    "id": "w0366"
  },
  {
    "german": "lachen",
    "english": "to laugh",
    "pos": "verb",
    "imageSearch": "laughing happy",
    "id": "w0367"
  },
  {
    "german": "weinen",
    "english": "to cry",
    "pos": "verb",
    "imageSearch": "crying tears",
    "id": "w0368"
  },
  {
    "german": "lächeln",
    "english": "to smile",
    "pos": "verb",
    "imageSearch": "smiling face",
    "id": "w0369"
  },
  {
    "german": "hören",
    "english": "to hear",
    "pos": "verb",
    "imageSearch": "listening headphones",
    "id": "w0370"
  },
  {
    "german": "fühlen",
    "english": "to feel",
    "pos": "verb",
    "imageSearch": "feeling touching",
    "id": "w0371"
  },
  {
    "german": "warten",
    "english": "to wait",
    "pos": "verb",
    "imageSearch": "waiting clock",
    "id": "w0372"
  },
  {
    "german": "suchen",
    "english": "to search",
    "pos": "verb",
    "imageSearch": "searching magnifying glass",
    "id": "w0373"
  },
  {
    "german": "versuchen",
    "english": "to try",
    "pos": "verb",
    "imageSearch": "trying attempt",
    "id": "w0374"
  },
  {
    "german": "vergessen",
    "english": "to forget",
    "pos": "verb",
    "imageSearch": "forgetting memory",
    "id": "w0375"
  },
  {
    "german": "erinnern",
    "english": "to remember",
    "pos": "verb",
    "imageSearch": "remembering memories",
    "id": "w0376"
  },
  {
    "german": "helfen",
    "english": "to help",
    "pos": "verb",
    "imageSearch": "helping hand",
    "id": "w0377"
  },
  {
    "german": "zeigen",
    "english": "to show",
    "pos": "verb",
    "imageSearch": "showing pointing",
    "id": "w0378"
  },
  {
    "german": "erklären",
    "english": "to explain",
    "pos": "verb",
    "imageSearch": "explaining teaching",
    "id": "w0379"
  },
  {
    "german": "lieben",
    "english": "to love",
    "pos": "verb",
    "imageSearch": "love couple",
    "id": "w0380"
  },
  {
    "german": "hoffen",
    "english": "to hope",
    "pos": "verb",
    "imageSearch": "hope light sunrise",
    "id": "w0381"
  },
  {
    "german": "glauben",
    "english": "to believe",
    "pos": "verb",
    "imageSearch": "believe faith",
    "id": "w0382"
  },
  {
    "german": "wünschen",
    "english": "to wish",
    "pos": "verb",
    "imageSearch": "wishing star",
    "id": "w0383"
  },
  {
    "german": "entscheiden",
    "english": "to decide",
    "pos": "verb",
    "imageSearch": "deciding choice",
    "id": "w0384"
  },
  {
    "german": "ändern",
    "english": "to change",
    "pos": "verb",
    "imageSearch": "changing transformation",
    "id": "w0385"
  },
  {
    "german": "benutzen",
    "english": "to use",
    "pos": "verb",
    "imageSearch": "using tool",
    "id": "w0386"
  },
  {
    "german": "bezahlen",
    "english": "to pay",
    "pos": "verb",
    "imageSearch": "paying money",
    "id": "w0387"
  },
  {
    "german": "bestellen",
    "english": "to order",
    "pos": "verb",
    "imageSearch": "ordering restaurant",
    "id": "w0388"
  },
  {
    "german": "bauen",
    "english": "to build",
    "pos": "verb",
    "imageSearch": "building construction",
    "id": "w0389"
  },
  {
    "german": "putzen",
    "english": "to clean",
    "pos": "verb",
    "imageSearch": "cleaning house",
    "id": "w0390"
  },
  {
    "german": "reisen",
    "english": "to travel",
    "pos": "verb",
    "imageSearch": "traveling airplane",
    "id": "w0391"
  },
  {
    "german": "ankommen",
    "english": "to arrive",
    "pos": "verb",
    "imageSearch": "arriving destination",
    "id": "w0392"
  },
  {
    "german": "einladen",
    "english": "to invite",
    "pos": "verb",
    "imageSearch": "invitation party",
    "id": "w0393"
  },
  {
    "german": "besuchen",
    "english": "to visit",
    "pos": "verb",
    "imageSearch": "visiting friends",
    "id": "w0394"
  },
  {
    "german": "anrufen",
    "english": "to call (phone)",
    "pos": "verb",
    "imageSearch": "phone call",
    "id": "w0395"
  },
  {
    "german": "schicken",
    "english": "to send",
    "pos": "verb",
    "imageSearch": "sending package",
    "id": "w0396"
  },
  {
    "german": "teilen",
    "english": "to share",
    "pos": "verb",
    "imageSearch": "sharing food",
    "id": "w0397"
  },
  {
    "german": "schenken",
    "english": "to give (gift)",
    "pos": "verb",
    "imageSearch": "giving gift",
    "id": "w0398"
  },
  {
    "german": "danken",
    "english": "to thank",
    "pos": "verb",
    "imageSearch": "thanking grateful",
    "id": "w0399"
  },
  {
    "german": "vorstellen",
    "english": "to introduce",
    "pos": "verb",
    "imageSearch": "introducing handshake",
    "id": "w0400"
  },
  {
    "german": "versprechen",
    "english": "to promise",
    "pos": "verb",
    "imageSearch": "promise pinky",
    "id": "w0401"
  },
  {
    "german": "gewinnen",
    "english": "to win",
    "pos": "verb",
    "imageSearch": "winning trophy",
    "id": "w0402"
  },
  {
    "german": "verlieren",
    "english": "to lose",
    "pos": "verb",
    "imageSearch": "losing sad",
    "id": "w0403"
  },
  {
    "german": "wachsen",
    "english": "to grow",
    "pos": "verb",
    "imageSearch": "growing plant seedling",
    "id": "w0404"
  },
  {
    "german": "tun",
    "english": "to do",
    "pos": "verb",
    "imageSearch": "doing action",
    "id": "w0405"
  },
  {
    "german": "werfen",
    "english": "to throw",
    "pos": "verb",
    "imageSearch": "throwing ball",
    "id": "w0406"
  },
  {
    "german": "fangen",
    "english": "to catch",
    "pos": "verb",
    "imageSearch": "catching ball",
    "id": "w0407"
  },
  {
    "german": "schneiden",
    "english": "to cut",
    "pos": "verb",
    "imageSearch": "cutting scissors",
    "id": "w0408"
  },
  {
    "german": "zeichnen",
    "english": "to draw",
    "pos": "verb",
    "imageSearch": "drawing pencil",
    "id": "w0409"
  },
  {
    "german": "malen",
    "english": "to paint",
    "pos": "verb",
    "imageSearch": "painting brush art",
    "id": "w0410"
  },
  {
    "german": "rennen",
    "english": "to run (fast)",
    "pos": "verb",
    "imageSearch": "sprinting running",
    "id": "w0411"
  },
  {
    "german": "springen",
    "english": "to jump",
    "pos": "verb",
    "imageSearch": "jumping high",
    "id": "w0412"
  },
  {
    "german": "klettern",
    "english": "to climb",
    "pos": "verb",
    "imageSearch": "climbing rock",
    "id": "w0413"
  },
  {
    "german": "atmen",
    "english": "to breathe",
    "pos": "verb",
    "imageSearch": "breathing meditation",
    "id": "w0414"
  },
  {
    "german": "träumen",
    "english": "to dream",
    "pos": "verb",
    "imageSearch": "dreaming sleeping",
    "id": "w0415"
  },
  {
    "german": "aufwachen",
    "english": "to wake up",
    "pos": "verb",
    "imageSearch": "waking up morning",
    "id": "w0416"
  },
  {
    "german": "anziehen",
    "english": "to put on (clothes)",
    "pos": "verb",
    "imageSearch": "getting dressed",
    "id": "w0417"
  },
  {
    "german": "duschen",
    "english": "to shower",
    "pos": "verb",
    "imageSearch": "showering",
    "id": "w0418"
  },
  {
    "german": "frühstücken",
    "english": "to have breakfast",
    "pos": "verb",
    "imageSearch": "breakfast morning",
    "id": "w0419"
  },
  {
    "german": "rufen",
    "english": "to call/shout",
    "pos": "verb",
    "imageSearch": "shouting calling",
    "id": "w0420"
  },
  {
    "german": "erzählen",
    "english": "to tell/narrate",
    "pos": "verb",
    "imageSearch": "storytelling narrating",
    "id": "w0421"
  },
  {
    "german": "übersetzen",
    "english": "to translate",
    "pos": "verb",
    "imageSearch": "translating languages",
    "id": "w0422"
  },
  {
    "german": "üben",
    "english": "to practice",
    "pos": "verb",
    "imageSearch": "practicing piano",
    "id": "w0423"
  },
  {
    "german": "gut",
    "english": "good",
    "pos": "adjective",
    "imageSearch": "thumbs up good",
    "id": "w0424"
  },
  {
    "german": "schlecht",
    "english": "bad",
    "pos": "adjective",
    "imageSearch": "thumbs down bad",
    "id": "w0425"
  },
  {
    "german": "groß",
    "english": "big/tall",
    "pos": "adjective",
    "imageSearch": "big large",
    "id": "w0426"
  },
  {
    "german": "klein",
    "english": "small/short",
    "pos": "adjective",
    "imageSearch": "small tiny",
    "id": "w0427"
  },
  {
    "german": "neu",
    "english": "new",
    "pos": "adjective",
    "imageSearch": "new shiny",
    "id": "w0428"
  },
  {
    "german": "alt",
    "english": "old",
    "pos": "adjective",
    "imageSearch": "old vintage",
    "id": "w0429"
  },
  {
    "german": "lang",
    "english": "long",
    "pos": "adjective",
    "imageSearch": "long road",
    "id": "w0430"
  },
  {
    "german": "kurz",
    "english": "short",
    "pos": "adjective",
    "imageSearch": "short small",
    "id": "w0431"
  },
  {
    "german": "schön",
    "english": "beautiful",
    "pos": "adjective",
    "imageSearch": "beautiful landscape",
    "id": "w0432"
  },
  {
    "german": "schnell",
    "english": "fast",
    "pos": "adjective",
    "imageSearch": "fast speed",
    "id": "w0433"
  },
  {
    "german": "langsam",
    "english": "slow",
    "pos": "adjective",
    "imageSearch": "slow snail",
    "id": "w0434"
  },
  {
    "german": "stark",
    "english": "strong",
    "pos": "adjective",
    "imageSearch": "strong muscle",
    "id": "w0435"
  },
  {
    "german": "schwach",
    "english": "weak",
    "pos": "adjective",
    "imageSearch": "weak fragile",
    "id": "w0436"
  },
  {
    "german": "jung",
    "english": "young",
    "pos": "adjective",
    "imageSearch": "young person",
    "id": "w0437"
  },
  {
    "german": "schwer",
    "english": "heavy/difficult",
    "pos": "adjective",
    "imageSearch": "heavy weight",
    "id": "w0438"
  },
  {
    "german": "leicht",
    "english": "light/easy",
    "pos": "adjective",
    "imageSearch": "light feather",
    "id": "w0439"
  },
  {
    "german": "warm",
    "english": "warm",
    "pos": "adjective",
    "imageSearch": "warm cozy fire",
    "id": "w0440"
  },
  {
    "german": "kalt",
    "english": "cold",
    "pos": "adjective",
    "imageSearch": "cold ice frozen",
    "id": "w0441"
  },
  {
    "german": "heiß",
    "english": "hot",
    "pos": "adjective",
    "imageSearch": "hot summer heat",
    "id": "w0442"
  },
  {
    "german": "nass",
    "english": "wet",
    "pos": "adjective",
    "imageSearch": "wet rain drops",
    "id": "w0443"
  },
  {
    "german": "trocken",
    "english": "dry",
    "pos": "adjective",
    "imageSearch": "dry desert",
    "id": "w0444"
  },
  {
    "german": "hell",
    "english": "bright/light",
    "pos": "adjective",
    "imageSearch": "bright light",
    "id": "w0445"
  },
  {
    "german": "dunkel",
    "english": "dark",
    "pos": "adjective",
    "imageSearch": "dark night",
    "id": "w0446"
  },
  {
    "german": "laut",
    "english": "loud",
    "pos": "adjective",
    "imageSearch": "loud speaker",
    "id": "w0447"
  },
  {
    "german": "leise",
    "english": "quiet",
    "pos": "adjective",
    "imageSearch": "quiet silence",
    "id": "w0448"
  },
  {
    "german": "süß",
    "english": "sweet",
    "pos": "adjective",
    "imageSearch": "sweet candy",
    "id": "w0449"
  },
  {
    "german": "sauer",
    "english": "sour",
    "pos": "adjective",
    "imageSearch": "sour lemon",
    "id": "w0450"
  },
  {
    "german": "scharf",
    "english": "spicy/sharp",
    "pos": "adjective",
    "imageSearch": "spicy chili pepper",
    "id": "w0451"
  },
  {
    "german": "weich",
    "english": "soft",
    "pos": "adjective",
    "imageSearch": "soft pillow",
    "id": "w0452"
  },
  {
    "german": "hart",
    "english": "hard",
    "pos": "adjective",
    "imageSearch": "hard rock stone",
    "id": "w0453"
  },
  {
    "german": "rund",
    "english": "round",
    "pos": "adjective",
    "imageSearch": "round circle ball",
    "id": "w0454"
  },
  {
    "german": "breit",
    "english": "wide",
    "pos": "adjective",
    "imageSearch": "wide road panorama",
    "id": "w0455"
  },
  {
    "german": "eng",
    "english": "narrow/tight",
    "pos": "adjective",
    "imageSearch": "narrow alley",
    "id": "w0456"
  },
  {
    "german": "voll",
    "english": "full",
    "pos": "adjective",
    "imageSearch": "full glass",
    "id": "w0457"
  },
  {
    "german": "leer",
    "english": "empty",
    "pos": "adjective",
    "imageSearch": "empty room",
    "id": "w0458"
  },
  {
    "german": "offen",
    "english": "open",
    "pos": "adjective",
    "imageSearch": "open door",
    "id": "w0459"
  },
  {
    "german": "richtig",
    "english": "correct/right",
    "pos": "adjective",
    "imageSearch": "correct checkmark green",
    "id": "w0460"
  },
  {
    "german": "falsch",
    "english": "wrong/false",
    "pos": "adjective",
    "imageSearch": "wrong cross red",
    "id": "w0461"
  },
  {
    "german": "wichtig",
    "english": "important",
    "pos": "adjective",
    "imageSearch": "important exclamation",
    "id": "w0462"
  },
  {
    "german": "einfach",
    "english": "simple/easy",
    "pos": "adjective",
    "imageSearch": "simple minimal",
    "id": "w0463"
  },
  {
    "german": "schwierig",
    "english": "difficult",
    "pos": "adjective",
    "imageSearch": "difficult puzzle",
    "id": "w0464"
  },
  {
    "german": "möglich",
    "english": "possible",
    "pos": "adjective",
    "imageSearch": "possible check",
    "id": "w0465"
  },
  {
    "german": "frei",
    "english": "free",
    "pos": "adjective",
    "imageSearch": "free bird flying",
    "id": "w0466"
  },
  {
    "german": "fertig",
    "english": "finished/ready",
    "pos": "adjective",
    "imageSearch": "finished done",
    "id": "w0467"
  },
  {
    "german": "bereit",
    "english": "ready",
    "pos": "adjective",
    "imageSearch": "ready set go",
    "id": "w0468"
  },
  {
    "german": "müde",
    "english": "tired",
    "pos": "adjective",
    "imageSearch": "tired sleepy",
    "id": "w0469"
  },
  {
    "german": "gesund",
    "english": "healthy",
    "pos": "adjective",
    "imageSearch": "healthy food",
    "id": "w0470"
  },
  {
    "german": "krank",
    "english": "sick",
    "pos": "adjective",
    "imageSearch": "sick ill",
    "id": "w0471"
  },
  {
    "german": "hungrig",
    "english": "hungry",
    "pos": "adjective",
    "imageSearch": "hungry food",
    "id": "w0472"
  },
  {
    "german": "durstig",
    "english": "thirsty",
    "pos": "adjective",
    "imageSearch": "thirsty water",
    "id": "w0473"
  },
  {
    "german": "glücklich",
    "english": "happy",
    "pos": "adjective",
    "imageSearch": "happy smiling",
    "id": "w0474"
  },
  {
    "german": "traurig",
    "english": "sad",
    "pos": "adjective",
    "imageSearch": "sad crying",
    "id": "w0475"
  },
  {
    "german": "böse",
    "english": "angry/evil",
    "pos": "adjective",
    "imageSearch": "angry face",
    "id": "w0476"
  },
  {
    "german": "freundlich",
    "english": "friendly",
    "pos": "adjective",
    "imageSearch": "friendly smiling",
    "id": "w0477"
  },
  {
    "german": "nett",
    "english": "nice",
    "pos": "adjective",
    "imageSearch": "nice kind person",
    "id": "w0478"
  },
  {
    "german": "lustig",
    "english": "funny",
    "pos": "adjective",
    "imageSearch": "funny laughing",
    "id": "w0479"
  },
  {
    "german": "langweilig",
    "english": "boring",
    "pos": "adjective",
    "imageSearch": "bored yawning",
    "id": "w0480"
  },
  {
    "german": "interessant",
    "english": "interesting",
    "pos": "adjective",
    "imageSearch": "interesting curious",
    "id": "w0481"
  },
  {
    "german": "gefährlich",
    "english": "dangerous",
    "pos": "adjective",
    "imageSearch": "dangerous warning",
    "id": "w0482"
  },
  {
    "german": "sicher",
    "english": "safe/sure",
    "pos": "adjective",
    "imageSearch": "safe secure lock",
    "id": "w0483"
  },
  {
    "german": "billig",
    "english": "cheap",
    "pos": "adjective",
    "imageSearch": "cheap sale discount",
    "id": "w0484"
  },
  {
    "german": "teuer",
    "english": "expensive",
    "pos": "adjective",
    "imageSearch": "expensive luxury",
    "id": "w0485"
  },
  {
    "german": "reich",
    "english": "rich",
    "pos": "adjective",
    "imageSearch": "rich wealthy gold",
    "id": "w0486"
  },
  {
    "german": "sauber",
    "english": "clean",
    "pos": "adjective",
    "imageSearch": "clean sparkling",
    "id": "w0487"
  },
  {
    "german": "schmutzig",
    "english": "dirty",
    "pos": "adjective",
    "imageSearch": "dirty muddy",
    "id": "w0488"
  },
  {
    "german": "frisch",
    "english": "fresh",
    "pos": "adjective",
    "imageSearch": "fresh vegetables",
    "id": "w0489"
  },
  {
    "german": "rot",
    "english": "red",
    "pos": "adjective",
    "imageSearch": "red color",
    "id": "w0490"
  },
  {
    "german": "blau",
    "english": "blue",
    "pos": "adjective",
    "imageSearch": "blue ocean sky",
    "id": "w0491"
  },
  {
    "german": "grün",
    "english": "green",
    "pos": "adjective",
    "imageSearch": "green nature grass",
    "id": "w0492"
  },
  {
    "german": "gelb",
    "english": "yellow",
    "pos": "adjective",
    "imageSearch": "yellow sunflower",
    "id": "w0493"
  },
  {
    "german": "schwarz",
    "english": "black",
    "pos": "adjective",
    "imageSearch": "black dark",
    "id": "w0494"
  },
  {
    "german": "weiß",
    "english": "white",
    "pos": "adjective",
    "imageSearch": "white snow clean",
    "id": "w0495"
  },
  {
    "german": "grau",
    "english": "gray",
    "pos": "adjective",
    "imageSearch": "gray fog",
    "id": "w0496"
  },
  {
    "german": "braun",
    "english": "brown",
    "pos": "adjective",
    "imageSearch": "brown chocolate wood",
    "id": "w0497"
  },
  {
    "german": "dick",
    "english": "thick/fat",
    "pos": "adjective",
    "imageSearch": "thick book",
    "id": "w0498"
  },
  {
    "german": "dünn",
    "english": "thin",
    "pos": "adjective",
    "imageSearch": "thin slim",
    "id": "w0499"
  },
  {
    "german": "tief",
    "english": "deep",
    "pos": "adjective",
    "imageSearch": "deep ocean water",
    "id": "w0500"
  },
  {
    "german": "hoch",
    "english": "high/tall",
    "pos": "adjective",
    "imageSearch": "high mountain tall",
    "id": "w0501"
  },
  {
    "german": "nah",
    "english": "near/close",
    "pos": "adjective",
    "imageSearch": "close nearby",
    "id": "w0502"
  },
  {
    "german": "weit",
    "english": "far/wide",
    "pos": "adjective",
    "imageSearch": "far distance",
    "id": "w0503"
  },
  {
    "german": "früh",
    "english": "early",
    "pos": "adjective",
    "imageSearch": "early morning sunrise",
    "id": "w0504"
  },
  {
    "german": "spät",
    "english": "late",
    "pos": "adjective",
    "imageSearch": "late night clock",
    "id": "w0505"
  },
  {
    "german": "bekannt",
    "english": "well-known",
    "pos": "adjective",
    "imageSearch": "famous celebrity",
    "id": "w0506"
  },
  {
    "german": "besonder",
    "english": "special",
    "pos": "adjective",
    "imageSearch": "special unique star",
    "id": "w0507"
  },
  {
    "german": "verschieden",
    "english": "different",
    "pos": "adjective",
    "imageSearch": "different variety",
    "id": "w0508"
  },
  {
    "german": "gleich",
    "english": "same/equal",
    "pos": "adjective",
    "imageSearch": "same equal identical",
    "id": "w0509"
  },
  {
    "german": "wunderbar",
    "english": "wonderful",
    "pos": "adjective",
    "imageSearch": "wonderful amazing",
    "id": "w0510"
  },
  {
    "german": "perfekt",
    "english": "perfect",
    "pos": "adjective",
    "imageSearch": "perfect score",
    "id": "w0511"
  },
  {
    "german": "schrecklich",
    "english": "terrible",
    "pos": "adjective",
    "imageSearch": "terrible storm",
    "id": "w0512"
  },
  {
    "german": "verrückt",
    "english": "crazy",
    "pos": "adjective",
    "imageSearch": "crazy wild fun",
    "id": "w0513"
  },
  {
    "german": "ruhig",
    "english": "calm/quiet",
    "pos": "adjective",
    "imageSearch": "calm peaceful lake",
    "id": "w0514"
  },
  {
    "german": "lecker",
    "english": "delicious",
    "pos": "adjective",
    "imageSearch": "delicious food",
    "id": "w0515"
  },
  {
    "german": "gemütlich",
    "english": "cozy",
    "pos": "adjective",
    "imageSearch": "cozy room fireplace",
    "id": "w0516"
  },
  {
    "german": "pünktlich",
    "english": "punctual",
    "pos": "adjective",
    "imageSearch": "punctual clock time",
    "id": "w0517"
  },
  {
    "german": "fleißig",
    "english": "hardworking",
    "pos": "adjective",
    "imageSearch": "hardworking studying",
    "id": "w0518"
  },
  {
    "german": "faul",
    "english": "lazy",
    "pos": "adjective",
    "imageSearch": "lazy sleeping cat",
    "id": "w0519"
  },
  {
    "german": "höflich",
    "english": "polite",
    "pos": "adjective",
    "imageSearch": "polite gentleman",
    "id": "w0520"
  },
  {
    "german": "klug",
    "english": "smart/clever",
    "pos": "adjective",
    "imageSearch": "smart clever brain",
    "id": "w0521"
  },
  {
    "german": "mutig",
    "english": "brave",
    "pos": "adjective",
    "imageSearch": "brave courageous lion",
    "id": "w0522"
  },
  {
    "german": "neugierig",
    "english": "curious",
    "pos": "adjective",
    "imageSearch": "curious exploring",
    "id": "w0523"
  },
  {
    "german": "stolz",
    "english": "proud",
    "pos": "adjective",
    "imageSearch": "proud achievement",
    "id": "w0524"
  },
  {
    "german": "dankbar",
    "english": "grateful",
    "pos": "adjective",
    "imageSearch": "grateful thankful",
    "id": "w0525"
  },
  {
    "german": "zufrieden",
    "english": "satisfied/content",
    "pos": "adjective",
    "imageSearch": "satisfied content happy",
    "id": "w0526"
  },
  {
    "german": "sehr",
    "english": "very",
    "pos": "adverb",
    "imageSearch": "very much extreme",
    "id": "w0527"
  },
  {
    "german": "auch",
    "english": "also/too",
    "pos": "adverb",
    "imageSearch": "also plus addition",
    "id": "w0528"
  },
  {
    "german": "schon",
    "english": "already",
    "pos": "adverb",
    "imageSearch": "already done finished",
    "id": "w0529"
  },
  {
    "german": "noch",
    "english": "still/yet",
    "pos": "adverb",
    "imageSearch": "still waiting",
    "id": "w0530"
  },
  {
    "german": "immer",
    "english": "always",
    "pos": "adverb",
    "imageSearch": "always forever infinity",
    "id": "w0531"
  },
  {
    "german": "nie",
    "english": "never",
    "pos": "adverb",
    "imageSearch": "never stop sign",
    "id": "w0532"
  },
  {
    "german": "oft",
    "english": "often",
    "pos": "adverb",
    "imageSearch": "often frequently repeat",
    "id": "w0533"
  },
  {
    "german": "manchmal",
    "english": "sometimes",
    "pos": "adverb",
    "imageSearch": "sometimes occasional",
    "id": "w0534"
  },
  {
    "german": "selten",
    "english": "rarely",
    "pos": "adverb",
    "imageSearch": "rare diamond",
    "id": "w0535"
  },
  {
    "german": "hier",
    "english": "here",
    "pos": "adverb",
    "imageSearch": "here pin location",
    "id": "w0536"
  },
  {
    "german": "dort",
    "english": "there",
    "pos": "adverb",
    "imageSearch": "there pointing far",
    "id": "w0537"
  },
  {
    "german": "heute",
    "english": "today",
    "pos": "adverb",
    "imageSearch": "today calendar",
    "id": "w0538"
  },
  {
    "german": "gestern",
    "english": "yesterday",
    "pos": "adverb",
    "imageSearch": "yesterday past",
    "id": "w0539"
  },
  {
    "german": "morgen",
    "english": "tomorrow",
    "pos": "adverb",
    "imageSearch": "tomorrow future",
    "id": "w0540"
  },
  {
    "german": "jetzt",
    "english": "now",
    "pos": "adverb",
    "imageSearch": "now present moment",
    "id": "w0541"
  },
  {
    "german": "bald",
    "english": "soon",
    "pos": "adverb",
    "imageSearch": "soon upcoming",
    "id": "w0542"
  },
  {
    "german": "wieder",
    "english": "again",
    "pos": "adverb",
    "imageSearch": "again repeat",
    "id": "w0543"
  },
  {
    "german": "zusammen",
    "english": "together",
    "pos": "adverb",
    "imageSearch": "together hands",
    "id": "w0544"
  },
  {
    "german": "allein",
    "english": "alone",
    "pos": "adverb",
    "imageSearch": "alone lonely",
    "id": "w0545"
  },
  {
    "german": "draußen",
    "english": "outside",
    "pos": "adverb",
    "imageSearch": "outside nature outdoors",
    "id": "w0546"
  },
  {
    "german": "drinnen",
    "english": "inside",
    "pos": "adverb",
    "imageSearch": "inside house cozy",
    "id": "w0547"
  },
  {
    "german": "oben",
    "english": "above/upstairs",
    "pos": "adverb",
    "imageSearch": "above sky up",
    "id": "w0548"
  },
  {
    "german": "unten",
    "english": "below/downstairs",
    "pos": "adverb",
    "imageSearch": "below down under",
    "id": "w0549"
  },
  {
    "german": "links",
    "english": "left",
    "pos": "adverb",
    "imageSearch": "left arrow direction",
    "id": "w0550"
  },
  {
    "german": "rechts",
    "english": "right",
    "pos": "adverb",
    "imageSearch": "right arrow direction",
    "id": "w0551"
  },
  {
    "german": "geradeaus",
    "english": "straight ahead",
    "pos": "adverb",
    "imageSearch": "straight road ahead",
    "id": "w0552"
  },
  {
    "german": "vielleicht",
    "english": "maybe/perhaps",
    "pos": "adverb",
    "imageSearch": "maybe uncertain",
    "id": "w0553"
  },
  {
    "german": "bestimmt",
    "english": "certainly",
    "pos": "adverb",
    "imageSearch": "certain sure",
    "id": "w0554"
  },
  {
    "german": "wahrscheinlich",
    "english": "probably",
    "pos": "adverb",
    "imageSearch": "probably likely",
    "id": "w0555"
  },
  {
    "german": "wirklich",
    "english": "really",
    "pos": "adverb",
    "imageSearch": "really truly",
    "id": "w0556"
  },
  {
    "german": "genau",
    "english": "exactly",
    "pos": "adverb",
    "imageSearch": "exact precise target",
    "id": "w0557"
  },
  {
    "german": "sofort",
    "english": "immediately",
    "pos": "adverb",
    "imageSearch": "immediately instant fast",
    "id": "w0558"
  },
  {
    "german": "endlich",
    "english": "finally",
    "pos": "adverb",
    "imageSearch": "finally done celebration",
    "id": "w0559"
  },
  {
    "german": "plötzlich",
    "english": "suddenly",
    "pos": "adverb",
    "imageSearch": "suddenly surprise lightning",
    "id": "w0560"
  },
  {
    "german": "trotzdem",
    "english": "nevertheless",
    "pos": "adverb",
    "imageSearch": "nevertheless perseverance",
    "id": "w0561"
  },
  {
    "german": "überall",
    "english": "everywhere",
    "pos": "adverb",
    "imageSearch": "everywhere all around",
    "id": "w0562"
  },
  {
    "german": "nirgendwo",
    "english": "nowhere",
    "pos": "adverb",
    "imageSearch": "nowhere empty desert",
    "id": "w0563"
  },
  {
    "german": "irgendwo",
    "english": "somewhere",
    "pos": "adverb",
    "imageSearch": "somewhere mystery",
    "id": "w0564"
  },
  {
    "german": "gern",
    "english": "gladly",
    "pos": "adverb",
    "imageSearch": "gladly happy willing",
    "id": "w0565"
  },
  {
    "german": "leider",
    "english": "unfortunately",
    "pos": "adverb",
    "imageSearch": "unfortunately sad",
    "id": "w0566"
  },
  {
    "german": "natürlich",
    "english": "of course/naturally",
    "pos": "adverb",
    "imageSearch": "naturally obvious",
    "id": "w0567"
  },
  {
    "german": "besonders",
    "english": "especially",
    "pos": "adverb",
    "imageSearch": "especially special star",
    "id": "w0568"
  },
  {
    "german": "ziemlich",
    "english": "quite/fairly",
    "pos": "adverb",
    "imageSearch": "quite fairly",
    "id": "w0569"
  },
  {
    "german": "fast",
    "english": "almost",
    "pos": "adverb",
    "imageSearch": "almost nearly close",
    "id": "w0570"
  },
  {
    "german": "genug",
    "english": "enough",
    "pos": "adverb",
    "imageSearch": "enough sufficient",
    "id": "w0571"
  },
  {
    "german": "zuerst",
    "english": "first/at first",
    "pos": "adverb",
    "imageSearch": "first number one",
    "id": "w0572"
  },
  {
    "german": "danach",
    "english": "afterwards",
    "pos": "adverb",
    "imageSearch": "afterwards then next",
    "id": "w0573"
  },
  {
    "german": "gleichzeitig",
    "english": "simultaneously",
    "pos": "adverb",
    "imageSearch": "simultaneous parallel",
    "id": "w0574"
  },
  {
    "german": "null",
    "english": "zero",
    "pos": "noun",
    "imageSearch": "zero number",
    "id": "w0575"
  },
  {
    "german": "eins",
    "english": "one",
    "pos": "noun",
    "imageSearch": "one single",
    "id": "w0576"
  },
  {
    "german": "zwei",
    "english": "two",
    "pos": "noun",
    "imageSearch": "two pair",
    "id": "w0577"
  },
  {
    "german": "drei",
    "english": "three",
    "pos": "noun",
    "imageSearch": "three trio",
    "id": "w0578"
  },
  {
    "german": "vier",
    "english": "four",
    "pos": "noun",
    "imageSearch": "four number",
    "id": "w0579"
  },
  {
    "german": "fünf",
    "english": "five",
    "pos": "noun",
    "imageSearch": "five hand fingers",
    "id": "w0580"
  },
  {
    "german": "sechs",
    "english": "six",
    "pos": "noun",
    "imageSearch": "six dice",
    "id": "w0581"
  },
  {
    "german": "sieben",
    "english": "seven",
    "pos": "noun",
    "imageSearch": "seven lucky",
    "id": "w0582"
  },
  {
    "german": "acht",
    "english": "eight",
    "pos": "noun",
    "imageSearch": "eight number",
    "id": "w0583"
  },
  {
    "german": "neun",
    "english": "nine",
    "pos": "noun",
    "imageSearch": "nine number",
    "id": "w0584"
  },
  {
    "german": "zehn",
    "english": "ten",
    "pos": "noun",
    "imageSearch": "ten number",
    "id": "w0585"
  },
  {
    "german": "hundert",
    "english": "hundred",
    "pos": "noun",
    "imageSearch": "hundred century",
    "id": "w0586"
  },
  {
    "german": "tausend",
    "english": "thousand",
    "pos": "noun",
    "imageSearch": "thousand many",
    "id": "w0587"
  },
  {
    "german": "ja",
    "english": "yes",
    "pos": "adverb",
    "imageSearch": "yes thumbs up",
    "id": "w0588"
  },
  {
    "german": "nein",
    "english": "no",
    "pos": "adverb",
    "imageSearch": "no stop hand",
    "id": "w0589"
  },
  {
    "german": "bitte",
    "english": "please",
    "pos": "adverb",
    "imageSearch": "please polite",
    "id": "w0590"
  },
  {
    "german": "danke",
    "english": "thank you",
    "pos": "adverb",
    "imageSearch": "thank you grateful",
    "id": "w0591"
  },
  {
    "german": "Entschuldigung",
    "english": "excuse me/sorry",
    "pos": "noun",
    "imageSearch": "sorry apology",
    "id": "w0592"
  },
  {
    "german": "Willkommen",
    "english": "welcome",
    "pos": "adjective",
    "imageSearch": "welcome mat",
    "id": "w0593"
  },
  {
    "german": "Tschüss",
    "english": "bye",
    "pos": "noun",
    "imageSearch": "goodbye waving",
    "id": "w0594"
  },
  {
    "german": "Hallo",
    "english": "hello",
    "pos": "noun",
    "imageSearch": "hello greeting wave",
    "id": "w0595"
  },
  {
    "german": "Prost",
    "english": "cheers",
    "pos": "noun",
    "imageSearch": "cheers toast drinks",
    "id": "w0596"
  },
  {
    "german": "Mahlzeit",
    "english": "enjoy your meal",
    "pos": "noun",
    "imageSearch": "meal lunch food",
    "id": "w0597"
  }
];
