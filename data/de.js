const WORDS = [
  {
    "target": "Zeit",
    "base": "time",
    "pos": "noun",
    "imageSearch": "clock time",
    "id": "w0000",
    "imageable": false
  },
  {
    "target": "Jahr",
    "base": "year",
    "pos": "noun",
    "imageSearch": "calendar year",
    "id": "w0001",
    "imageable": true
  },
  {
    "target": "Mensch",
    "base": "human",
    "pos": "noun",
    "imageSearch": "person human",
    "id": "w0002",
    "imageable": true
  },
  {
    "target": "Tag",
    "base": "day",
    "pos": "noun",
    "imageSearch": "sunny day",
    "id": "w0003",
    "imageable": true
  },
  {
    "target": "Welt",
    "base": "world",
    "pos": "noun",
    "imageSearch": "earth globe",
    "id": "w0004",
    "imageable": true
  },
  {
    "target": "Hand",
    "base": "hand",
    "pos": "noun",
    "imageSearch": "human hand",
    "id": "w0005",
    "imageable": true
  },
  {
    "target": "Teil",
    "base": "part",
    "pos": "noun",
    "imageSearch": "puzzle piece",
    "id": "w0006",
    "imageable": false
  },
  {
    "target": "Kind",
    "base": "child",
    "pos": "noun",
    "imageSearch": "child playing",
    "id": "w0007",
    "imageable": true
  },
  {
    "target": "Auge",
    "base": "eye",
    "pos": "noun",
    "imageSearch": "human eye close up",
    "id": "w0008",
    "imageable": true
  },
  {
    "target": "Kopf",
    "base": "head",
    "pos": "noun",
    "imageSearch": "head portrait",
    "id": "w0009",
    "imageable": true
  },
  {
    "target": "Wort",
    "base": "word",
    "pos": "noun",
    "imageSearch": "letters words",
    "id": "w0010",
    "imageable": false
  },
  {
    "target": "Frau",
    "base": "woman",
    "pos": "noun",
    "imageSearch": "woman portrait",
    "id": "w0011",
    "imageable": true
  },
  {
    "target": "Mann",
    "base": "man",
    "pos": "noun",
    "imageSearch": "man portrait",
    "id": "w0012",
    "imageable": true
  },
  {
    "target": "Geld",
    "base": "money",
    "pos": "noun",
    "imageSearch": "money coins",
    "id": "w0013",
    "imageable": true
  },
  {
    "target": "Freund",
    "base": "friend",
    "pos": "noun",
    "imageSearch": "friends together",
    "id": "w0014",
    "imageable": true
  },
  {
    "target": "Frage",
    "base": "question",
    "pos": "noun",
    "imageSearch": "question mark",
    "id": "w0015",
    "imageable": true
  },
  {
    "target": "Haus",
    "base": "house",
    "pos": "noun",
    "imageSearch": "house building",
    "id": "w0016",
    "imageable": true
  },
  {
    "target": "Land",
    "base": "country",
    "pos": "noun",
    "imageSearch": "countryside landscape",
    "id": "w0017",
    "imageable": true
  },
  {
    "target": "Leute",
    "base": "people",
    "pos": "noun",
    "imageSearch": "crowd people",
    "id": "w0018",
    "imageable": true
  },
  {
    "target": "Arbeit",
    "base": "work",
    "pos": "noun",
    "imageSearch": "office work",
    "id": "w0019",
    "imageable": false
  },
  {
    "target": "Nacht",
    "base": "night",
    "pos": "noun",
    "imageSearch": "night sky stars",
    "id": "w0020",
    "imageable": true
  },
  {
    "target": "Stadt",
    "base": "city",
    "pos": "noun",
    "imageSearch": "city skyline",
    "id": "w0021",
    "imageable": true
  },
  {
    "target": "Wasser",
    "base": "water",
    "pos": "noun",
    "imageSearch": "water drop",
    "id": "w0022",
    "imageable": true
  },
  {
    "target": "Buch",
    "base": "book",
    "pos": "noun",
    "imageSearch": "open book",
    "id": "w0023",
    "imageable": true
  },
  {
    "target": "Schule",
    "base": "school",
    "pos": "noun",
    "imageSearch": "school building",
    "id": "w0024",
    "imageable": true
  },
  {
    "target": "Mutter",
    "base": "mother",
    "pos": "noun",
    "imageSearch": "mother child",
    "id": "w0025",
    "imageable": true
  },
  {
    "target": "Vater",
    "base": "father",
    "pos": "noun",
    "imageSearch": "father family",
    "id": "w0026",
    "imageable": true
  },
  {
    "target": "Bild",
    "base": "picture",
    "pos": "noun",
    "imageSearch": "picture frame",
    "id": "w0027",
    "imageable": true
  },
  {
    "target": "Leben",
    "base": "life",
    "pos": "noun",
    "imageSearch": "life nature",
    "id": "w0028",
    "imageable": false
  },
  {
    "target": "Stunde",
    "base": "hour",
    "pos": "noun",
    "imageSearch": "clock hour",
    "id": "w0029",
    "imageable": false
  },
  {
    "target": "Weg",
    "base": "way/path",
    "pos": "noun",
    "imageSearch": "path road",
    "id": "w0030",
    "imageable": false
  },
  {
    "target": "Platz",
    "base": "place/square",
    "pos": "noun",
    "imageSearch": "town square",
    "id": "w0031",
    "imageable": false
  },
  {
    "target": "Grund",
    "base": "reason/ground",
    "pos": "noun",
    "imageSearch": "ground earth",
    "id": "w0032",
    "imageable": false
  },
  {
    "target": "Seite",
    "base": "side/page",
    "pos": "noun",
    "imageSearch": "book page",
    "id": "w0033",
    "imageable": false
  },
  {
    "target": "Ende",
    "base": "end",
    "pos": "noun",
    "imageSearch": "road end",
    "id": "w0034",
    "imageable": false
  },
  {
    "target": "Stimme",
    "base": "voice",
    "pos": "noun",
    "imageSearch": "microphone singing",
    "id": "w0035",
    "imageable": false
  },
  {
    "target": "Sache",
    "base": "thing/matter",
    "pos": "noun",
    "imageSearch": "objects things",
    "id": "w0036",
    "imageable": false
  },
  {
    "target": "Kraft",
    "base": "strength/force",
    "pos": "noun",
    "imageSearch": "strong muscle",
    "id": "w0037",
    "imageable": false
  },
  {
    "target": "Auto",
    "base": "car",
    "pos": "noun",
    "imageSearch": "car automobile",
    "id": "w0038",
    "imageable": true
  },
  {
    "target": "Straße",
    "base": "street",
    "pos": "noun",
    "imageSearch": "street road",
    "id": "w0039",
    "imageable": true
  },
  {
    "target": "Tür",
    "base": "door",
    "pos": "noun",
    "imageSearch": "door entrance",
    "id": "w0040",
    "imageable": true
  },
  {
    "target": "Sprache",
    "base": "language",
    "pos": "noun",
    "imageSearch": "languages speech",
    "id": "w0041",
    "imageable": false
  },
  {
    "target": "Milch",
    "base": "milk",
    "pos": "noun",
    "imageSearch": "milk glass",
    "id": "w0042",
    "imageable": true
  },
  {
    "target": "Brot",
    "base": "bread",
    "pos": "noun",
    "imageSearch": "bread loaf",
    "id": "w0043",
    "imageable": true
  },
  {
    "target": "Tisch",
    "base": "table",
    "pos": "noun",
    "imageSearch": "wooden table",
    "id": "w0044",
    "imageable": true
  },
  {
    "target": "Stuhl",
    "base": "chair",
    "pos": "noun",
    "imageSearch": "chair furniture",
    "id": "w0045",
    "imageable": true
  },
  {
    "target": "Fenster",
    "base": "window",
    "pos": "noun",
    "imageSearch": "window light",
    "id": "w0046",
    "imageable": true
  },
  {
    "target": "Herz",
    "base": "heart",
    "pos": "noun",
    "imageSearch": "heart love",
    "id": "w0047",
    "imageable": true
  },
  {
    "target": "Bruder",
    "base": "brother",
    "pos": "noun",
    "imageSearch": "brothers siblings",
    "id": "w0048",
    "imageable": true
  },
  {
    "target": "Schwester",
    "base": "sister",
    "pos": "noun",
    "imageSearch": "sisters siblings",
    "id": "w0049",
    "imageable": true
  },
  {
    "target": "Hund",
    "base": "dog",
    "pos": "noun",
    "imageSearch": "dog pet",
    "id": "w0050",
    "imageable": true
  },
  {
    "target": "Katze",
    "base": "cat",
    "pos": "noun",
    "imageSearch": "cat pet",
    "id": "w0051",
    "imageable": true
  },
  {
    "target": "Baum",
    "base": "tree",
    "pos": "noun",
    "imageSearch": "tree nature",
    "id": "w0052",
    "imageable": true
  },
  {
    "target": "Blume",
    "base": "flower",
    "pos": "noun",
    "imageSearch": "flower blossom",
    "id": "w0053",
    "imageable": true
  },
  {
    "target": "Berg",
    "base": "mountain",
    "pos": "noun",
    "imageSearch": "mountain peak",
    "id": "w0054",
    "imageable": true
  },
  {
    "target": "Sonne",
    "base": "sun",
    "pos": "noun",
    "imageSearch": "sun sunshine",
    "id": "w0055",
    "imageable": true
  },
  {
    "target": "Mond",
    "base": "moon",
    "pos": "noun",
    "imageSearch": "moon night",
    "id": "w0056",
    "imageable": true
  },
  {
    "target": "Stern",
    "base": "star",
    "pos": "noun",
    "imageSearch": "star night sky",
    "id": "w0057",
    "imageable": true
  },
  {
    "target": "Feuer",
    "base": "fire",
    "pos": "noun",
    "imageSearch": "fire flames",
    "id": "w0058",
    "imageable": true
  },
  {
    "target": "Luft",
    "base": "air",
    "pos": "noun",
    "imageSearch": "air breeze wind",
    "id": "w0059",
    "imageable": true
  },
  {
    "target": "Erde",
    "base": "earth",
    "pos": "noun",
    "imageSearch": "earth soil",
    "id": "w0060",
    "imageable": true
  },
  {
    "target": "Meer",
    "base": "sea",
    "pos": "noun",
    "imageSearch": "sea ocean",
    "id": "w0061",
    "imageable": true
  },
  {
    "target": "Fluss",
    "base": "river",
    "pos": "noun",
    "imageSearch": "river flowing",
    "id": "w0062",
    "imageable": true
  },
  {
    "target": "Brücke",
    "base": "bridge",
    "pos": "noun",
    "imageSearch": "bridge architecture",
    "id": "w0063",
    "imageable": true
  },
  {
    "target": "Kirche",
    "base": "church",
    "pos": "noun",
    "imageSearch": "church building",
    "id": "w0064",
    "imageable": true
  },
  {
    "target": "Garten",
    "base": "garden",
    "pos": "noun",
    "imageSearch": "garden flowers",
    "id": "w0065",
    "imageable": true
  },
  {
    "target": "Küche",
    "base": "kitchen",
    "pos": "noun",
    "imageSearch": "kitchen cooking",
    "id": "w0066",
    "imageable": true
  },
  {
    "target": "Zimmer",
    "base": "room",
    "pos": "noun",
    "imageSearch": "room interior",
    "id": "w0067",
    "imageable": true
  },
  {
    "target": "Bett",
    "base": "bed",
    "pos": "noun",
    "imageSearch": "bed bedroom",
    "id": "w0068",
    "imageable": true
  },
  {
    "target": "Schlüssel",
    "base": "key",
    "pos": "noun",
    "imageSearch": "key lock",
    "id": "w0069",
    "imageable": true
  },
  {
    "target": "Uhr",
    "base": "clock/watch",
    "pos": "noun",
    "imageSearch": "clock watch",
    "id": "w0070",
    "imageable": true
  },
  {
    "target": "Telefon",
    "base": "telephone",
    "pos": "noun",
    "imageSearch": "telephone phone",
    "id": "w0071",
    "imageable": true
  },
  {
    "target": "Brief",
    "base": "letter",
    "pos": "noun",
    "imageSearch": "letter envelope",
    "id": "w0072",
    "imageable": true
  },
  {
    "target": "Zeitung",
    "base": "newspaper",
    "pos": "noun",
    "imageSearch": "newspaper reading",
    "id": "w0073",
    "imageable": true
  },
  {
    "target": "Musik",
    "base": "music",
    "pos": "noun",
    "imageSearch": "music notes",
    "id": "w0074",
    "imageable": true
  },
  {
    "target": "Film",
    "base": "film/movie",
    "pos": "noun",
    "imageSearch": "movie cinema",
    "id": "w0075",
    "imageable": true
  },
  {
    "target": "Spiel",
    "base": "game",
    "pos": "noun",
    "imageSearch": "board game",
    "id": "w0076",
    "imageable": true
  },
  {
    "target": "Zug",
    "base": "train",
    "pos": "noun",
    "imageSearch": "train railway",
    "id": "w0077",
    "imageable": true
  },
  {
    "target": "Flugzeug",
    "base": "airplane",
    "pos": "noun",
    "imageSearch": "airplane flying",
    "id": "w0078",
    "imageable": true
  },
  {
    "target": "Schiff",
    "base": "ship",
    "pos": "noun",
    "imageSearch": "ship boat",
    "id": "w0079",
    "imageable": true
  },
  {
    "target": "Fahrrad",
    "base": "bicycle",
    "pos": "noun",
    "imageSearch": "bicycle bike",
    "id": "w0080",
    "imageable": true
  },
  {
    "target": "Arzt",
    "base": "doctor",
    "pos": "noun",
    "imageSearch": "doctor medical",
    "id": "w0081",
    "imageable": true
  },
  {
    "target": "Krankenhaus",
    "base": "hospital",
    "pos": "noun",
    "imageSearch": "hospital building",
    "id": "w0082",
    "imageable": true
  },
  {
    "target": "Apotheke",
    "base": "pharmacy",
    "pos": "noun",
    "imageSearch": "pharmacy drugstore",
    "id": "w0083",
    "imageable": true
  },
  {
    "target": "Geschäft",
    "base": "shop/business",
    "pos": "noun",
    "imageSearch": "shop store",
    "id": "w0084",
    "imageable": true
  },
  {
    "target": "Markt",
    "base": "market",
    "pos": "noun",
    "imageSearch": "market stall",
    "id": "w0085",
    "imageable": true
  },
  {
    "target": "Restaurant",
    "base": "restaurant",
    "pos": "noun",
    "imageSearch": "restaurant dining",
    "id": "w0086",
    "imageable": true
  },
  {
    "target": "Kaffee",
    "base": "coffee",
    "pos": "noun",
    "imageSearch": "coffee cup",
    "id": "w0087",
    "imageable": true
  },
  {
    "target": "Tee",
    "base": "tea",
    "pos": "noun",
    "imageSearch": "tea cup",
    "id": "w0088",
    "imageable": true
  },
  {
    "target": "Bier",
    "base": "beer",
    "pos": "noun",
    "imageSearch": "beer glass",
    "id": "w0089",
    "imageable": true
  },
  {
    "target": "Wein",
    "base": "wine",
    "pos": "noun",
    "imageSearch": "wine glass",
    "id": "w0090",
    "imageable": true
  },
  {
    "target": "Fleisch",
    "base": "meat",
    "pos": "noun",
    "imageSearch": "meat steak",
    "id": "w0091",
    "imageable": true
  },
  {
    "target": "Fisch",
    "base": "fish",
    "pos": "noun",
    "imageSearch": "fish seafood",
    "id": "w0092",
    "imageable": true
  },
  {
    "target": "Obst",
    "base": "fruit",
    "pos": "noun",
    "imageSearch": "fruit basket",
    "id": "w0093",
    "imageable": true
  },
  {
    "target": "Gemüse",
    "base": "vegetables",
    "pos": "noun",
    "imageSearch": "vegetables fresh",
    "id": "w0094",
    "imageable": true
  },
  {
    "target": "Apfel",
    "base": "apple",
    "pos": "noun",
    "imageSearch": "red apple",
    "id": "w0095",
    "imageable": true
  },
  {
    "target": "Kartoffel",
    "base": "potato",
    "pos": "noun",
    "imageSearch": "potato",
    "id": "w0096",
    "imageable": true
  },
  {
    "target": "Reis",
    "base": "rice",
    "pos": "noun",
    "imageSearch": "rice bowl",
    "id": "w0097",
    "imageable": true
  },
  {
    "target": "Zucker",
    "base": "sugar",
    "pos": "noun",
    "imageSearch": "sugar cubes",
    "id": "w0098",
    "imageable": true
  },
  {
    "target": "Salz",
    "base": "salt",
    "pos": "noun",
    "imageSearch": "salt shaker",
    "id": "w0099",
    "imageable": true
  },
  {
    "target": "Ei",
    "base": "egg",
    "pos": "noun",
    "imageSearch": "egg chicken",
    "id": "w0100",
    "imageable": true
  },
  {
    "target": "Butter",
    "base": "butter",
    "pos": "noun",
    "imageSearch": "butter",
    "id": "w0101",
    "imageable": true
  },
  {
    "target": "Käse",
    "base": "cheese",
    "pos": "noun",
    "imageSearch": "cheese",
    "id": "w0102",
    "imageable": true
  },
  {
    "target": "Kuchen",
    "base": "cake",
    "pos": "noun",
    "imageSearch": "cake dessert",
    "id": "w0103",
    "imageable": true
  },
  {
    "target": "Eis",
    "base": "ice cream/ice",
    "pos": "noun",
    "imageSearch": "ice cream cone",
    "id": "w0104",
    "imageable": true
  },
  {
    "target": "Kleid",
    "base": "dress",
    "pos": "noun",
    "imageSearch": "dress clothing",
    "id": "w0105",
    "imageable": true
  },
  {
    "target": "Hemd",
    "base": "shirt",
    "pos": "noun",
    "imageSearch": "shirt clothing",
    "id": "w0106",
    "imageable": true
  },
  {
    "target": "Hose",
    "base": "pants",
    "pos": "noun",
    "imageSearch": "pants trousers",
    "id": "w0107",
    "imageable": true
  },
  {
    "target": "Schuh",
    "base": "shoe",
    "pos": "noun",
    "imageSearch": "shoe footwear",
    "id": "w0108",
    "imageable": true
  },
  {
    "target": "Hut",
    "base": "hat",
    "pos": "noun",
    "imageSearch": "hat",
    "id": "w0109",
    "imageable": true
  },
  {
    "target": "Tasche",
    "base": "bag/pocket",
    "pos": "noun",
    "imageSearch": "bag handbag",
    "id": "w0110",
    "imageable": true
  },
  {
    "target": "Regenschirm",
    "base": "umbrella",
    "pos": "noun",
    "imageSearch": "umbrella rain",
    "id": "w0111",
    "imageable": true
  },
  {
    "target": "Brille",
    "base": "glasses",
    "pos": "noun",
    "imageSearch": "eyeglasses",
    "id": "w0112",
    "imageable": true
  },
  {
    "target": "Haar",
    "base": "hair",
    "pos": "noun",
    "imageSearch": "hair hairstyle",
    "id": "w0113",
    "imageable": true
  },
  {
    "target": "Gesicht",
    "base": "face",
    "pos": "noun",
    "imageSearch": "face portrait",
    "id": "w0114",
    "imageable": true
  },
  {
    "target": "Mund",
    "base": "mouth",
    "pos": "noun",
    "imageSearch": "mouth lips",
    "id": "w0115",
    "imageable": true
  },
  {
    "target": "Nase",
    "base": "nose",
    "pos": "noun",
    "imageSearch": "nose face",
    "id": "w0116",
    "imageable": true
  },
  {
    "target": "Ohr",
    "base": "ear",
    "pos": "noun",
    "imageSearch": "ear listening",
    "id": "w0117",
    "imageable": true
  },
  {
    "target": "Finger",
    "base": "finger",
    "pos": "noun",
    "imageSearch": "finger hand",
    "id": "w0118",
    "imageable": true
  },
  {
    "target": "Fuß",
    "base": "foot",
    "pos": "noun",
    "imageSearch": "foot barefoot",
    "id": "w0119",
    "imageable": true
  },
  {
    "target": "Arm",
    "base": "arm",
    "pos": "noun",
    "imageSearch": "arm body",
    "id": "w0120",
    "imageable": true
  },
  {
    "target": "Bein",
    "base": "leg",
    "pos": "noun",
    "imageSearch": "leg running",
    "id": "w0121",
    "imageable": true
  },
  {
    "target": "Rücken",
    "base": "back",
    "pos": "noun",
    "imageSearch": "back body",
    "id": "w0122",
    "imageable": true
  },
  {
    "target": "Zahn",
    "base": "tooth",
    "pos": "noun",
    "imageSearch": "tooth smile",
    "id": "w0123",
    "imageable": true
  },
  {
    "target": "Blut",
    "base": "blood",
    "pos": "noun",
    "imageSearch": "blood red",
    "id": "w0124",
    "imageable": true
  },
  {
    "target": "Körper",
    "base": "body",
    "pos": "noun",
    "imageSearch": "human body",
    "id": "w0125",
    "imageable": true
  },
  {
    "target": "Schnee",
    "base": "snow",
    "pos": "noun",
    "imageSearch": "snow winter",
    "id": "w0126",
    "imageable": true
  },
  {
    "target": "Regen",
    "base": "rain",
    "pos": "noun",
    "imageSearch": "rain drops",
    "id": "w0127",
    "imageable": true
  },
  {
    "target": "Wind",
    "base": "wind",
    "pos": "noun",
    "imageSearch": "wind blowing",
    "id": "w0128",
    "imageable": true
  },
  {
    "target": "Wolke",
    "base": "cloud",
    "pos": "noun",
    "imageSearch": "cloud sky",
    "id": "w0129",
    "imageable": true
  },
  {
    "target": "Himmel",
    "base": "sky/heaven",
    "pos": "noun",
    "imageSearch": "blue sky",
    "id": "w0130",
    "imageable": true
  },
  {
    "target": "Wald",
    "base": "forest",
    "pos": "noun",
    "imageSearch": "forest trees",
    "id": "w0131",
    "imageable": true
  },
  {
    "target": "Feld",
    "base": "field",
    "pos": "noun",
    "imageSearch": "green field",
    "id": "w0132",
    "imageable": true
  },
  {
    "target": "See",
    "base": "lake",
    "pos": "noun",
    "imageSearch": "lake calm water",
    "id": "w0133",
    "imageable": true
  },
  {
    "target": "Insel",
    "base": "island",
    "pos": "noun",
    "imageSearch": "island tropical",
    "id": "w0134",
    "imageable": true
  },
  {
    "target": "Strand",
    "base": "beach",
    "pos": "noun",
    "imageSearch": "beach sand",
    "id": "w0135",
    "imageable": true
  },
  {
    "target": "Tier",
    "base": "animal",
    "pos": "noun",
    "imageSearch": "animal wildlife",
    "id": "w0136",
    "imageable": true
  },
  {
    "target": "Vogel",
    "base": "bird",
    "pos": "noun",
    "imageSearch": "bird flying",
    "id": "w0137",
    "imageable": true
  },
  {
    "target": "Pferd",
    "base": "horse",
    "pos": "noun",
    "imageSearch": "horse running",
    "id": "w0138",
    "imageable": true
  },
  {
    "target": "Kuh",
    "base": "cow",
    "pos": "noun",
    "imageSearch": "cow farm",
    "id": "w0139",
    "imageable": true
  },
  {
    "target": "Schwein",
    "base": "pig",
    "pos": "noun",
    "imageSearch": "pig farm",
    "id": "w0140",
    "imageable": true
  },
  {
    "target": "Maus",
    "base": "mouse",
    "pos": "noun",
    "imageSearch": "mouse animal",
    "id": "w0141",
    "imageable": true
  },
  {
    "target": "Schmetterling",
    "base": "butterfly",
    "pos": "noun",
    "imageSearch": "butterfly colorful",
    "id": "w0142",
    "imageable": true
  },
  {
    "target": "Farbe",
    "base": "color",
    "pos": "noun",
    "imageSearch": "colors rainbow",
    "id": "w0143",
    "imageable": true
  },
  {
    "target": "Licht",
    "base": "light",
    "pos": "noun",
    "imageSearch": "light beam",
    "id": "w0144",
    "imageable": true
  },
  {
    "target": "Schatten",
    "base": "shadow",
    "pos": "noun",
    "imageSearch": "shadow silhouette",
    "id": "w0145",
    "imageable": true
  },
  {
    "target": "Morgen",
    "base": "morning",
    "pos": "noun",
    "imageSearch": "morning sunrise",
    "id": "w0146",
    "imageable": true
  },
  {
    "target": "Abend",
    "base": "evening",
    "pos": "noun",
    "imageSearch": "evening sunset",
    "id": "w0147",
    "imageable": true
  },
  {
    "target": "Mittag",
    "base": "noon",
    "pos": "noun",
    "imageSearch": "noon midday sun",
    "id": "w0148",
    "imageable": true
  },
  {
    "target": "Woche",
    "base": "week",
    "pos": "noun",
    "imageSearch": "weekly calendar",
    "id": "w0149",
    "imageable": true
  },
  {
    "target": "Monat",
    "base": "month",
    "pos": "noun",
    "imageSearch": "calendar month",
    "id": "w0150",
    "imageable": true
  },
  {
    "target": "Sommer",
    "base": "summer",
    "pos": "noun",
    "imageSearch": "summer beach",
    "id": "w0151",
    "imageable": true
  },
  {
    "target": "Winter",
    "base": "winter",
    "pos": "noun",
    "imageSearch": "winter snow",
    "id": "w0152",
    "imageable": true
  },
  {
    "target": "Frühling",
    "base": "spring",
    "pos": "noun",
    "imageSearch": "spring flowers",
    "id": "w0153",
    "imageable": true
  },
  {
    "target": "Herbst",
    "base": "autumn",
    "pos": "noun",
    "imageSearch": "autumn leaves",
    "id": "w0154",
    "imageable": true
  },
  {
    "target": "Geburtstag",
    "base": "birthday",
    "pos": "noun",
    "imageSearch": "birthday cake candles",
    "id": "w0155",
    "imageable": true
  },
  {
    "target": "Geschenk",
    "base": "gift",
    "pos": "noun",
    "imageSearch": "gift present",
    "id": "w0156",
    "imageable": true
  },
  {
    "target": "Fest",
    "base": "festival/party",
    "pos": "noun",
    "imageSearch": "festival celebration",
    "id": "w0157",
    "imageable": true
  },
  {
    "target": "Urlaub",
    "base": "vacation",
    "pos": "noun",
    "imageSearch": "vacation travel",
    "id": "w0158",
    "imageable": true
  },
  {
    "target": "Reise",
    "base": "journey/trip",
    "pos": "noun",
    "imageSearch": "travel journey",
    "id": "w0159",
    "imageable": true
  },
  {
    "target": "Flughafen",
    "base": "airport",
    "pos": "noun",
    "imageSearch": "airport terminal",
    "id": "w0160",
    "imageable": true
  },
  {
    "target": "Bahnhof",
    "base": "train station",
    "pos": "noun",
    "imageSearch": "train station",
    "id": "w0161",
    "imageable": true
  },
  {
    "target": "Hotel",
    "base": "hotel",
    "pos": "noun",
    "imageSearch": "hotel building",
    "id": "w0162",
    "imageable": true
  },
  {
    "target": "Museum",
    "base": "museum",
    "pos": "noun",
    "imageSearch": "museum art",
    "id": "w0163",
    "imageable": true
  },
  {
    "target": "Kino",
    "base": "cinema",
    "pos": "noun",
    "imageSearch": "cinema movie theater",
    "id": "w0164",
    "imageable": true
  },
  {
    "target": "Theater",
    "base": "theater",
    "pos": "noun",
    "imageSearch": "theater stage",
    "id": "w0165",
    "imageable": true
  },
  {
    "target": "Park",
    "base": "park",
    "pos": "noun",
    "imageSearch": "park nature",
    "id": "w0166",
    "imageable": true
  },
  {
    "target": "Bibliothek",
    "base": "library",
    "pos": "noun",
    "imageSearch": "library books",
    "id": "w0167",
    "imageable": true
  },
  {
    "target": "Universität",
    "base": "university",
    "pos": "noun",
    "imageSearch": "university campus",
    "id": "w0168",
    "imageable": true
  },
  {
    "target": "Lehrer",
    "base": "teacher",
    "pos": "noun",
    "imageSearch": "teacher classroom",
    "id": "w0169",
    "imageable": true
  },
  {
    "target": "Schüler",
    "base": "student",
    "pos": "noun",
    "imageSearch": "student studying",
    "id": "w0170",
    "imageable": true
  },
  {
    "target": "Aufgabe",
    "base": "task/assignment",
    "pos": "noun",
    "imageSearch": "homework task",
    "id": "w0171",
    "imageable": false
  },
  {
    "target": "Prüfung",
    "base": "exam",
    "pos": "noun",
    "imageSearch": "exam test",
    "id": "w0172",
    "imageable": false
  },
  {
    "target": "Antwort",
    "base": "answer",
    "pos": "noun",
    "imageSearch": "answer response",
    "id": "w0173",
    "imageable": false
  },
  {
    "target": "Problem",
    "base": "problem",
    "pos": "noun",
    "imageSearch": "problem solving",
    "id": "w0174",
    "imageable": false
  },
  {
    "target": "Lösung",
    "base": "solution",
    "pos": "noun",
    "imageSearch": "solution idea",
    "id": "w0175",
    "imageable": false
  },
  {
    "target": "Idee",
    "base": "idea",
    "pos": "noun",
    "imageSearch": "idea lightbulb",
    "id": "w0176",
    "imageable": false
  },
  {
    "target": "Erfahrung",
    "base": "experience",
    "pos": "noun",
    "imageSearch": "experience adventure",
    "id": "w0177",
    "imageable": false
  },
  {
    "target": "Beispiel",
    "base": "example",
    "pos": "noun",
    "imageSearch": "example demonstration",
    "id": "w0178",
    "imageable": false
  },
  {
    "target": "Geschichte",
    "base": "story/history",
    "pos": "noun",
    "imageSearch": "story book",
    "id": "w0179",
    "imageable": false
  },
  {
    "target": "Anfang",
    "base": "beginning",
    "pos": "noun",
    "imageSearch": "beginning start",
    "id": "w0180",
    "imageable": false
  },
  {
    "target": "Ziel",
    "base": "goal/target",
    "pos": "noun",
    "imageSearch": "target goal",
    "id": "w0181",
    "imageable": false
  },
  {
    "target": "Erfolg",
    "base": "success",
    "pos": "noun",
    "imageSearch": "success achievement",
    "id": "w0182",
    "imageable": false
  },
  {
    "target": "Fehler",
    "base": "mistake/error",
    "pos": "noun",
    "imageSearch": "mistake error",
    "id": "w0183",
    "imageable": false
  },
  {
    "target": "Hilfe",
    "base": "help",
    "pos": "noun",
    "imageSearch": "helping hand",
    "id": "w0184",
    "imageable": false
  },
  {
    "target": "Angst",
    "base": "fear",
    "pos": "noun",
    "imageSearch": "fear scared",
    "id": "w0185",
    "imageable": false
  },
  {
    "target": "Freude",
    "base": "joy",
    "pos": "noun",
    "imageSearch": "joy happiness",
    "id": "w0186",
    "imageable": false
  },
  {
    "target": "Liebe",
    "base": "love",
    "pos": "noun",
    "imageSearch": "love heart",
    "id": "w0187",
    "imageable": false
  },
  {
    "target": "Glück",
    "base": "luck/happiness",
    "pos": "noun",
    "imageSearch": "four leaf clover luck",
    "id": "w0188",
    "imageable": false
  },
  {
    "target": "Hoffnung",
    "base": "hope",
    "pos": "noun",
    "imageSearch": "hope light",
    "id": "w0189",
    "imageable": false
  },
  {
    "target": "Traum",
    "base": "dream",
    "pos": "noun",
    "imageSearch": "dream clouds",
    "id": "w0190",
    "imageable": false
  },
  {
    "target": "Wahrheit",
    "base": "truth",
    "pos": "noun",
    "imageSearch": "truth honesty",
    "id": "w0191",
    "imageable": false
  },
  {
    "target": "Freiheit",
    "base": "freedom",
    "pos": "noun",
    "imageSearch": "freedom bird flying",
    "id": "w0192",
    "imageable": false
  },
  {
    "target": "Frieden",
    "base": "peace",
    "pos": "noun",
    "imageSearch": "peace dove",
    "id": "w0193",
    "imageable": false
  },
  {
    "target": "Krieg",
    "base": "war",
    "pos": "noun",
    "imageSearch": "war conflict",
    "id": "w0194",
    "imageable": false
  },
  {
    "target": "Polizei",
    "base": "police",
    "pos": "noun",
    "imageSearch": "police officer",
    "id": "w0195",
    "imageable": true
  },
  {
    "target": "Regierung",
    "base": "government",
    "pos": "noun",
    "imageSearch": "government building",
    "id": "w0196",
    "imageable": false
  },
  {
    "target": "Gesetz",
    "base": "law",
    "pos": "noun",
    "imageSearch": "law justice",
    "id": "w0197",
    "imageable": false
  },
  {
    "target": "Gesellschaft",
    "base": "society",
    "pos": "noun",
    "imageSearch": "society community",
    "id": "w0198",
    "imageable": false
  },
  {
    "target": "Familie",
    "base": "family",
    "pos": "noun",
    "imageSearch": "family together",
    "id": "w0199",
    "imageable": true
  },
  {
    "target": "Eltern",
    "base": "parents",
    "pos": "noun",
    "imageSearch": "parents family",
    "id": "w0200",
    "imageable": true
  },
  {
    "target": "Sohn",
    "base": "son",
    "pos": "noun",
    "imageSearch": "son boy",
    "id": "w0201",
    "imageable": true
  },
  {
    "target": "Tochter",
    "base": "daughter",
    "pos": "noun",
    "imageSearch": "daughter girl",
    "id": "w0202",
    "imageable": true
  },
  {
    "target": "Baby",
    "base": "baby",
    "pos": "noun",
    "imageSearch": "baby infant",
    "id": "w0203",
    "imageable": true
  },
  {
    "target": "Nachbar",
    "base": "neighbor",
    "pos": "noun",
    "imageSearch": "neighbor house",
    "id": "w0204",
    "imageable": true
  },
  {
    "target": "Chef",
    "base": "boss",
    "pos": "noun",
    "imageSearch": "boss manager office",
    "id": "w0205",
    "imageable": true
  },
  {
    "target": "Kollege",
    "base": "colleague",
    "pos": "noun",
    "imageSearch": "colleague coworker",
    "id": "w0206",
    "imageable": true
  },
  {
    "target": "Computer",
    "base": "computer",
    "pos": "noun",
    "imageSearch": "computer laptop",
    "id": "w0207",
    "imageable": true
  },
  {
    "target": "Internet",
    "base": "internet",
    "pos": "noun",
    "imageSearch": "internet wifi",
    "id": "w0208",
    "imageable": true
  },
  {
    "target": "Handy",
    "base": "cellphone",
    "pos": "noun",
    "imageSearch": "smartphone mobile",
    "id": "w0209",
    "imageable": true
  },
  {
    "target": "Nachricht",
    "base": "message/news",
    "pos": "noun",
    "imageSearch": "message notification",
    "id": "w0210",
    "imageable": false
  },
  {
    "target": "Foto",
    "base": "photo",
    "pos": "noun",
    "imageSearch": "camera photo",
    "id": "w0211",
    "imageable": true
  },
  {
    "target": "Lied",
    "base": "song",
    "pos": "noun",
    "imageSearch": "song music",
    "id": "w0212",
    "imageable": true
  },
  {
    "target": "Tanz",
    "base": "dance",
    "pos": "noun",
    "imageSearch": "dance dancing",
    "id": "w0213",
    "imageable": true
  },
  {
    "target": "Kunst",
    "base": "art",
    "pos": "noun",
    "imageSearch": "art painting",
    "id": "w0214",
    "imageable": true
  },
  {
    "target": "Sport",
    "base": "sport",
    "pos": "noun",
    "imageSearch": "sport athletics",
    "id": "w0215",
    "imageable": true
  },
  {
    "target": "Fußball",
    "base": "soccer/football",
    "pos": "noun",
    "imageSearch": "soccer ball",
    "id": "w0216",
    "imageable": true
  },
  {
    "target": "Schwimmbad",
    "base": "swimming pool",
    "pos": "noun",
    "imageSearch": "swimming pool",
    "id": "w0217",
    "imageable": true
  },
  {
    "target": "Messer",
    "base": "knife",
    "pos": "noun",
    "imageSearch": "knife kitchen",
    "id": "w0218",
    "imageable": true
  },
  {
    "target": "Gabel",
    "base": "fork",
    "pos": "noun",
    "imageSearch": "fork silverware",
    "id": "w0219",
    "imageable": true
  },
  {
    "target": "Löffel",
    "base": "spoon",
    "pos": "noun",
    "imageSearch": "spoon",
    "id": "w0220",
    "imageable": true
  },
  {
    "target": "Teller",
    "base": "plate",
    "pos": "noun",
    "imageSearch": "plate dish",
    "id": "w0221",
    "imageable": true
  },
  {
    "target": "Glas",
    "base": "glass",
    "pos": "noun",
    "imageSearch": "drinking glass",
    "id": "w0222",
    "imageable": true
  },
  {
    "target": "Flasche",
    "base": "bottle",
    "pos": "noun",
    "imageSearch": "bottle water",
    "id": "w0223",
    "imageable": true
  },
  {
    "target": "Topf",
    "base": "pot",
    "pos": "noun",
    "imageSearch": "cooking pot",
    "id": "w0224",
    "imageable": true
  },
  {
    "target": "Kühlschrank",
    "base": "refrigerator",
    "pos": "noun",
    "imageSearch": "refrigerator fridge",
    "id": "w0225",
    "imageable": true
  },
  {
    "target": "Ofen",
    "base": "oven",
    "pos": "noun",
    "imageSearch": "oven kitchen",
    "id": "w0226",
    "imageable": true
  },
  {
    "target": "Spiegel",
    "base": "mirror",
    "pos": "noun",
    "imageSearch": "mirror reflection",
    "id": "w0227",
    "imageable": true
  },
  {
    "target": "Treppe",
    "base": "stairs",
    "pos": "noun",
    "imageSearch": "stairs staircase",
    "id": "w0228",
    "imageable": true
  },
  {
    "target": "Dach",
    "base": "roof",
    "pos": "noun",
    "imageSearch": "roof house",
    "id": "w0229",
    "imageable": true
  },
  {
    "target": "Wand",
    "base": "wall",
    "pos": "noun",
    "imageSearch": "wall brick",
    "id": "w0230",
    "imageable": true
  },
  {
    "target": "Boden",
    "base": "floor/ground",
    "pos": "noun",
    "imageSearch": "floor wooden",
    "id": "w0231",
    "imageable": true
  },
  {
    "target": "Decke",
    "base": "ceiling/blanket",
    "pos": "noun",
    "imageSearch": "blanket warm",
    "id": "w0232",
    "imageable": true
  },
  {
    "target": "Lampe",
    "base": "lamp",
    "pos": "noun",
    "imageSearch": "lamp light",
    "id": "w0233",
    "imageable": true
  },
  {
    "target": "Sofa",
    "base": "sofa/couch",
    "pos": "noun",
    "imageSearch": "sofa couch",
    "id": "w0234",
    "imageable": true
  },
  {
    "target": "Schrank",
    "base": "closet/cabinet",
    "pos": "noun",
    "imageSearch": "closet wardrobe",
    "id": "w0235",
    "imageable": true
  },
  {
    "target": "Bad",
    "base": "bathroom",
    "pos": "noun",
    "imageSearch": "bathroom",
    "id": "w0236",
    "imageable": true
  },
  {
    "target": "Dusche",
    "base": "shower",
    "pos": "noun",
    "imageSearch": "shower bathroom",
    "id": "w0237",
    "imageable": true
  },
  {
    "target": "Seife",
    "base": "soap",
    "pos": "noun",
    "imageSearch": "soap bar",
    "id": "w0238",
    "imageable": true
  },
  {
    "target": "Handtuch",
    "base": "towel",
    "pos": "noun",
    "imageSearch": "towel",
    "id": "w0239",
    "imageable": true
  },
  {
    "target": "Zahnarzt",
    "base": "dentist",
    "pos": "noun",
    "imageSearch": "dentist",
    "id": "w0240",
    "imageable": true
  },
  {
    "target": "Medizin",
    "base": "medicine",
    "pos": "noun",
    "imageSearch": "medicine pills",
    "id": "w0241",
    "imageable": true
  },
  {
    "target": "Schmerz",
    "base": "pain",
    "pos": "noun",
    "imageSearch": "pain headache",
    "id": "w0242",
    "imageable": false
  },
  {
    "target": "Gesundheit",
    "base": "health",
    "pos": "noun",
    "imageSearch": "health wellness",
    "id": "w0243",
    "imageable": false
  },
  {
    "target": "Krankheit",
    "base": "illness",
    "pos": "noun",
    "imageSearch": "sick illness",
    "id": "w0244",
    "imageable": false
  },
  {
    "target": "Unfall",
    "base": "accident",
    "pos": "noun",
    "imageSearch": "car accident",
    "id": "w0245",
    "imageable": true
  },
  {
    "target": "Nummer",
    "base": "number",
    "pos": "noun",
    "imageSearch": "numbers",
    "id": "w0246",
    "imageable": false
  },
  {
    "target": "Name",
    "base": "name",
    "pos": "noun",
    "imageSearch": "name tag",
    "id": "w0247",
    "imageable": false
  },
  {
    "target": "Adresse",
    "base": "address",
    "pos": "noun",
    "imageSearch": "address mailbox",
    "id": "w0248",
    "imageable": false
  },
  {
    "target": "Geheimnis",
    "base": "secret",
    "pos": "noun",
    "imageSearch": "secret whisper",
    "id": "w0249",
    "imageable": false
  },
  {
    "target": "Überraschung",
    "base": "surprise",
    "pos": "noun",
    "imageSearch": "surprise party",
    "id": "w0250",
    "imageable": false
  },
  {
    "target": "Witz",
    "base": "joke",
    "pos": "noun",
    "imageSearch": "joke laughing",
    "id": "w0251",
    "imageable": false
  },
  {
    "target": "Spaß",
    "base": "fun",
    "pos": "noun",
    "imageSearch": "fun happy",
    "id": "w0252",
    "imageable": false
  },
  {
    "target": "Ruhe",
    "base": "quiet/calm",
    "pos": "noun",
    "imageSearch": "calm quiet nature",
    "id": "w0253",
    "imageable": false
  },
  {
    "target": "Lärm",
    "base": "noise",
    "pos": "noun",
    "imageSearch": "noise loud",
    "id": "w0254",
    "imageable": false
  },
  {
    "target": "Stück",
    "base": "piece",
    "pos": "noun",
    "imageSearch": "puzzle piece",
    "id": "w0255",
    "imageable": false
  },
  {
    "target": "Form",
    "base": "shape/form",
    "pos": "noun",
    "imageSearch": "geometric shapes",
    "id": "w0256",
    "imageable": false
  },
  {
    "target": "Größe",
    "base": "size",
    "pos": "noun",
    "imageSearch": "size comparison",
    "id": "w0257",
    "imageable": false
  },
  {
    "target": "Preis",
    "base": "price",
    "pos": "noun",
    "imageSearch": "price tag",
    "id": "w0258",
    "imageable": false
  },
  {
    "target": "Gruppe",
    "base": "group",
    "pos": "noun",
    "imageSearch": "group people",
    "id": "w0259",
    "imageable": false
  },
  {
    "target": "Mannschaft",
    "base": "team",
    "pos": "noun",
    "imageSearch": "team sports",
    "id": "w0260",
    "imageable": false
  },
  {
    "target": "Gewicht",
    "base": "weight",
    "pos": "noun",
    "imageSearch": "weight scale",
    "id": "w0261",
    "imageable": false
  },
  {
    "target": "Richtung",
    "base": "direction",
    "pos": "noun",
    "imageSearch": "direction arrow sign",
    "id": "w0262",
    "imageable": false
  },
  {
    "target": "Zukunft",
    "base": "future",
    "pos": "noun",
    "imageSearch": "future technology",
    "id": "w0263",
    "imageable": false
  },
  {
    "target": "Vergangenheit",
    "base": "past",
    "pos": "noun",
    "imageSearch": "vintage old photo",
    "id": "w0264",
    "imageable": false
  },
  {
    "target": "Gegenwart",
    "base": "present",
    "pos": "noun",
    "imageSearch": "present moment now",
    "id": "w0265",
    "imageable": false
  },
  {
    "target": "Unterschied",
    "base": "difference",
    "pos": "noun",
    "imageSearch": "difference contrast",
    "id": "w0266",
    "imageable": false
  },
  {
    "target": "Meinung",
    "base": "opinion",
    "pos": "noun",
    "imageSearch": "opinion speech bubble",
    "id": "w0267",
    "imageable": false
  },
  {
    "target": "Wunsch",
    "base": "wish",
    "pos": "noun",
    "imageSearch": "wish star",
    "id": "w0268",
    "imageable": false
  },
  {
    "target": "Gefühl",
    "base": "feeling",
    "pos": "noun",
    "imageSearch": "feeling emotion",
    "id": "w0269",
    "imageable": false
  },
  {
    "target": "Sorge",
    "base": "worry/concern",
    "pos": "noun",
    "imageSearch": "worry anxious",
    "id": "w0270",
    "imageable": false
  },
  {
    "target": "Interesse",
    "base": "interest",
    "pos": "noun",
    "imageSearch": "curiosity interest",
    "id": "w0271",
    "imageable": false
  },
  {
    "target": "Geduld",
    "base": "patience",
    "pos": "noun",
    "imageSearch": "patience waiting",
    "id": "w0272",
    "imageable": false
  },
  {
    "target": "Mut",
    "base": "courage",
    "pos": "noun",
    "imageSearch": "courage brave",
    "id": "w0273",
    "imageable": false
  },
  {
    "target": "Vertrauen",
    "base": "trust",
    "pos": "noun",
    "imageSearch": "trust handshake",
    "id": "w0274",
    "imageable": false
  },
  {
    "target": "Respekt",
    "base": "respect",
    "pos": "noun",
    "imageSearch": "respect bow",
    "id": "w0275",
    "imageable": false
  },
  {
    "target": "Wissen",
    "base": "knowledge",
    "pos": "noun",
    "imageSearch": "knowledge books",
    "id": "w0276",
    "imageable": false
  },
  {
    "target": "Bildung",
    "base": "education",
    "pos": "noun",
    "imageSearch": "education learning",
    "id": "w0277",
    "imageable": false
  },
  {
    "target": "Wissenschaft",
    "base": "science",
    "pos": "noun",
    "imageSearch": "science laboratory",
    "id": "w0278",
    "imageable": false
  },
  {
    "target": "Technik",
    "base": "technology",
    "pos": "noun",
    "imageSearch": "technology",
    "id": "w0279",
    "imageable": false
  },
  {
    "target": "Energie",
    "base": "energy",
    "pos": "noun",
    "imageSearch": "energy power",
    "id": "w0280",
    "imageable": false
  },
  {
    "target": "Umwelt",
    "base": "environment",
    "pos": "noun",
    "imageSearch": "environment nature",
    "id": "w0281",
    "imageable": false
  },
  {
    "target": "Natur",
    "base": "nature",
    "pos": "noun",
    "imageSearch": "nature landscape",
    "id": "w0282",
    "imageable": false
  },
  {
    "target": "Verkehr",
    "base": "traffic",
    "pos": "noun",
    "imageSearch": "traffic cars",
    "id": "w0283",
    "imageable": true
  },
  {
    "target": "Ampel",
    "base": "traffic light",
    "pos": "noun",
    "imageSearch": "traffic light",
    "id": "w0284",
    "imageable": true
  },
  {
    "target": "Haltestelle",
    "base": "bus stop",
    "pos": "noun",
    "imageSearch": "bus stop",
    "id": "w0285",
    "imageable": true
  },
  {
    "target": "Fahrkarte",
    "base": "ticket",
    "pos": "noun",
    "imageSearch": "ticket transit",
    "id": "w0286",
    "imageable": true
  },
  {
    "target": "Gepäck",
    "base": "luggage",
    "pos": "noun",
    "imageSearch": "luggage suitcase",
    "id": "w0287",
    "imageable": true
  },
  {
    "target": "Pass",
    "base": "passport",
    "pos": "noun",
    "imageSearch": "passport travel",
    "id": "w0288",
    "imageable": true
  },
  {
    "target": "Grenze",
    "base": "border",
    "pos": "noun",
    "imageSearch": "border crossing",
    "id": "w0289",
    "imageable": true
  },
  {
    "target": "Schritt",
    "base": "step",
    "pos": "noun",
    "imageSearch": "footstep walk",
    "id": "w0290",
    "imageable": false
  },
  {
    "target": "Bewegung",
    "base": "movement",
    "pos": "noun",
    "imageSearch": "movement motion",
    "id": "w0291",
    "imageable": false
  },
  {
    "target": "Entscheidung",
    "base": "decision",
    "pos": "noun",
    "imageSearch": "crossroads decision",
    "id": "w0292",
    "imageable": false
  },
  {
    "target": "Möglichkeit",
    "base": "possibility",
    "pos": "noun",
    "imageSearch": "open door possibility",
    "id": "w0293",
    "imageable": false
  },
  {
    "target": "Bedeutung",
    "base": "meaning",
    "pos": "noun",
    "imageSearch": "meaning symbol",
    "id": "w0294",
    "imageable": false
  },
  {
    "target": "Entwicklung",
    "base": "development",
    "pos": "noun",
    "imageSearch": "growth development",
    "id": "w0295",
    "imageable": false
  },
  {
    "target": "Beziehung",
    "base": "relationship",
    "pos": "noun",
    "imageSearch": "couple relationship",
    "id": "w0296",
    "imageable": false
  },
  {
    "target": "Gespräch",
    "base": "conversation",
    "pos": "noun",
    "imageSearch": "conversation talking",
    "id": "w0297",
    "imageable": false
  },
  {
    "target": "Vertrag",
    "base": "contract",
    "pos": "noun",
    "imageSearch": "contract signing",
    "id": "w0298",
    "imageable": false
  },
  {
    "target": "Rechnung",
    "base": "bill/invoice",
    "pos": "noun",
    "imageSearch": "bill receipt",
    "id": "w0299",
    "imageable": false
  },
  {
    "target": "Konto",
    "base": "account",
    "pos": "noun",
    "imageSearch": "bank account",
    "id": "w0300",
    "imageable": false
  },
  {
    "target": "Steuer",
    "base": "tax",
    "pos": "noun",
    "imageSearch": "tax money",
    "id": "w0301",
    "imageable": false
  },
  {
    "target": "Miete",
    "base": "rent",
    "pos": "noun",
    "imageSearch": "apartment rent",
    "id": "w0302",
    "imageable": false
  },
  {
    "target": "Wohnung",
    "base": "apartment",
    "pos": "noun",
    "imageSearch": "apartment building",
    "id": "w0303",
    "imageable": true
  },
  {
    "target": "Gebäude",
    "base": "building",
    "pos": "noun",
    "imageSearch": "building architecture",
    "id": "w0304",
    "imageable": true
  },
  {
    "target": "Fabrik",
    "base": "factory",
    "pos": "noun",
    "imageSearch": "factory industrial",
    "id": "w0305",
    "imageable": true
  },
  {
    "target": "Büro",
    "base": "office",
    "pos": "noun",
    "imageSearch": "office desk",
    "id": "w0306",
    "imageable": true
  },
  {
    "target": "Beruf",
    "base": "profession",
    "pos": "noun",
    "imageSearch": "career profession",
    "id": "w0307",
    "imageable": false
  },
  {
    "target": "Gehalt",
    "base": "salary",
    "pos": "noun",
    "imageSearch": "salary paycheck",
    "id": "w0308",
    "imageable": false
  },
  {
    "target": "Termin",
    "base": "appointment",
    "pos": "noun",
    "imageSearch": "appointment calendar",
    "id": "w0309",
    "imageable": false
  },
  {
    "target": "Pause",
    "base": "break/pause",
    "pos": "noun",
    "imageSearch": "coffee break",
    "id": "w0310",
    "imageable": false
  },
  {
    "target": "sein",
    "base": "to be",
    "pos": "verb",
    "imageSearch": "being existence",
    "id": "w0311",
    "imageable": false
  },
  {
    "target": "haben",
    "base": "to have",
    "pos": "verb",
    "imageSearch": "having holding",
    "id": "w0312",
    "imageable": false
  },
  {
    "target": "werden",
    "base": "to become",
    "pos": "verb",
    "imageSearch": "transformation growing",
    "id": "w0313",
    "imageable": false
  },
  {
    "target": "können",
    "base": "can/to be able",
    "pos": "verb",
    "imageSearch": "ability strength",
    "id": "w0314",
    "imageable": false
  },
  {
    "target": "müssen",
    "base": "must/to have to",
    "pos": "verb",
    "imageSearch": "obligation rules",
    "id": "w0315",
    "imageable": false
  },
  {
    "target": "sagen",
    "base": "to say",
    "pos": "verb",
    "imageSearch": "speaking talking",
    "id": "w0316",
    "imageable": true
  },
  {
    "target": "machen",
    "base": "to make/do",
    "pos": "verb",
    "imageSearch": "making creating",
    "id": "w0317",
    "imageable": true
  },
  {
    "target": "geben",
    "base": "to give",
    "pos": "verb",
    "imageSearch": "giving present",
    "id": "w0318",
    "imageable": true
  },
  {
    "target": "kommen",
    "base": "to come",
    "pos": "verb",
    "imageSearch": "arriving coming",
    "id": "w0319",
    "imageable": true
  },
  {
    "target": "wollen",
    "base": "to want",
    "pos": "verb",
    "imageSearch": "wanting desire",
    "id": "w0320",
    "imageable": false
  },
  {
    "target": "gehen",
    "base": "to go/walk",
    "pos": "verb",
    "imageSearch": "walking going",
    "id": "w0321",
    "imageable": true
  },
  {
    "target": "wissen",
    "base": "to know",
    "pos": "verb",
    "imageSearch": "knowing thinking",
    "id": "w0322",
    "imageable": false
  },
  {
    "target": "sehen",
    "base": "to see",
    "pos": "verb",
    "imageSearch": "seeing eyes",
    "id": "w0323",
    "imageable": true
  },
  {
    "target": "lassen",
    "base": "to let/leave",
    "pos": "verb",
    "imageSearch": "letting go releasing",
    "id": "w0324",
    "imageable": false
  },
  {
    "target": "stehen",
    "base": "to stand",
    "pos": "verb",
    "imageSearch": "standing person",
    "id": "w0325",
    "imageable": true
  },
  {
    "target": "finden",
    "base": "to find",
    "pos": "verb",
    "imageSearch": "finding treasure",
    "id": "w0326",
    "imageable": false
  },
  {
    "target": "bleiben",
    "base": "to stay",
    "pos": "verb",
    "imageSearch": "staying home",
    "id": "w0327",
    "imageable": false
  },
  {
    "target": "liegen",
    "base": "to lie/be located",
    "pos": "verb",
    "imageSearch": "lying down",
    "id": "w0328",
    "imageable": false
  },
  {
    "target": "heißen",
    "base": "to be called",
    "pos": "verb",
    "imageSearch": "name tag",
    "id": "w0329",
    "imageable": false
  },
  {
    "target": "denken",
    "base": "to think",
    "pos": "verb",
    "imageSearch": "thinking person",
    "id": "w0330",
    "imageable": false
  },
  {
    "target": "nehmen",
    "base": "to take",
    "pos": "verb",
    "imageSearch": "taking grabbing",
    "id": "w0331",
    "imageable": true
  },
  {
    "target": "halten",
    "base": "to hold/stop",
    "pos": "verb",
    "imageSearch": "holding hands",
    "id": "w0332",
    "imageable": true
  },
  {
    "target": "bringen",
    "base": "to bring",
    "pos": "verb",
    "imageSearch": "bringing carrying",
    "id": "w0333",
    "imageable": true
  },
  {
    "target": "leben",
    "base": "to live",
    "pos": "verb",
    "imageSearch": "living life",
    "id": "w0334",
    "imageable": false
  },
  {
    "target": "fahren",
    "base": "to drive/travel",
    "pos": "verb",
    "imageSearch": "driving car",
    "id": "w0335",
    "imageable": true
  },
  {
    "target": "fragen",
    "base": "to ask",
    "pos": "verb",
    "imageSearch": "asking question",
    "id": "w0336",
    "imageable": true
  },
  {
    "target": "kennen",
    "base": "to know (person)",
    "pos": "verb",
    "imageSearch": "knowing recognizing",
    "id": "w0337",
    "imageable": false
  },
  {
    "target": "sprechen",
    "base": "to speak",
    "pos": "verb",
    "imageSearch": "speaking talking",
    "id": "w0338",
    "imageable": true
  },
  {
    "target": "spielen",
    "base": "to play",
    "pos": "verb",
    "imageSearch": "playing children",
    "id": "w0339",
    "imageable": true
  },
  {
    "target": "arbeiten",
    "base": "to work",
    "pos": "verb",
    "imageSearch": "working office",
    "id": "w0340",
    "imageable": true
  },
  {
    "target": "brauchen",
    "base": "to need",
    "pos": "verb",
    "imageSearch": "needing essential",
    "id": "w0341",
    "imageable": false
  },
  {
    "target": "lernen",
    "base": "to learn",
    "pos": "verb",
    "imageSearch": "learning studying",
    "id": "w0342",
    "imageable": true
  },
  {
    "target": "beginnen",
    "base": "to begin",
    "pos": "verb",
    "imageSearch": "starting beginning",
    "id": "w0343",
    "imageable": false
  },
  {
    "target": "verstehen",
    "base": "to understand",
    "pos": "verb",
    "imageSearch": "understanding idea",
    "id": "w0344",
    "imageable": false
  },
  {
    "target": "bekommen",
    "base": "to receive",
    "pos": "verb",
    "imageSearch": "receiving package",
    "id": "w0345",
    "imageable": false
  },
  {
    "target": "tragen",
    "base": "to carry/wear",
    "pos": "verb",
    "imageSearch": "carrying box",
    "id": "w0346",
    "imageable": true
  },
  {
    "target": "laufen",
    "base": "to run",
    "pos": "verb",
    "imageSearch": "running jogging",
    "id": "w0347",
    "imageable": true
  },
  {
    "target": "lesen",
    "base": "to read",
    "pos": "verb",
    "imageSearch": "reading book",
    "id": "w0348",
    "imageable": true
  },
  {
    "target": "schreiben",
    "base": "to write",
    "pos": "verb",
    "imageSearch": "writing pen",
    "id": "w0349",
    "imageable": true
  },
  {
    "target": "essen",
    "base": "to eat",
    "pos": "verb",
    "imageSearch": "eating food",
    "id": "w0350",
    "imageable": true
  },
  {
    "target": "trinken",
    "base": "to drink",
    "pos": "verb",
    "imageSearch": "drinking water",
    "id": "w0351",
    "imageable": true
  },
  {
    "target": "schlafen",
    "base": "to sleep",
    "pos": "verb",
    "imageSearch": "sleeping bed",
    "id": "w0352",
    "imageable": true
  },
  {
    "target": "kaufen",
    "base": "to buy",
    "pos": "verb",
    "imageSearch": "shopping buying",
    "id": "w0353",
    "imageable": true
  },
  {
    "target": "verkaufen",
    "base": "to sell",
    "pos": "verb",
    "imageSearch": "selling store",
    "id": "w0354",
    "imageable": true
  },
  {
    "target": "kochen",
    "base": "to cook",
    "pos": "verb",
    "imageSearch": "cooking kitchen",
    "id": "w0355",
    "imageable": true
  },
  {
    "target": "waschen",
    "base": "to wash",
    "pos": "verb",
    "imageSearch": "washing hands",
    "id": "w0356",
    "imageable": true
  },
  {
    "target": "öffnen",
    "base": "to open",
    "pos": "verb",
    "imageSearch": "opening door",
    "id": "w0357",
    "imageable": true
  },
  {
    "target": "schließen",
    "base": "to close",
    "pos": "verb",
    "imageSearch": "closing door",
    "id": "w0358",
    "imageable": true
  },
  {
    "target": "sitzen",
    "base": "to sit",
    "pos": "verb",
    "imageSearch": "sitting chair",
    "id": "w0359",
    "imageable": true
  },
  {
    "target": "ziehen",
    "base": "to pull/move",
    "pos": "verb",
    "imageSearch": "pulling rope",
    "id": "w0360",
    "imageable": true
  },
  {
    "target": "fallen",
    "base": "to fall",
    "pos": "verb",
    "imageSearch": "falling autumn leaves",
    "id": "w0361",
    "imageable": true
  },
  {
    "target": "steigen",
    "base": "to climb/rise",
    "pos": "verb",
    "imageSearch": "climbing mountain",
    "id": "w0362",
    "imageable": true
  },
  {
    "target": "fliegen",
    "base": "to fly",
    "pos": "verb",
    "imageSearch": "flying airplane",
    "id": "w0363",
    "imageable": true
  },
  {
    "target": "schwimmen",
    "base": "to swim",
    "pos": "verb",
    "imageSearch": "swimming pool",
    "id": "w0364",
    "imageable": true
  },
  {
    "target": "tanzen",
    "base": "to dance",
    "pos": "verb",
    "imageSearch": "dancing couple",
    "id": "w0365",
    "imageable": true
  },
  {
    "target": "singen",
    "base": "to sing",
    "pos": "verb",
    "imageSearch": "singing microphone",
    "id": "w0366",
    "imageable": true
  },
  {
    "target": "lachen",
    "base": "to laugh",
    "pos": "verb",
    "imageSearch": "laughing happy",
    "id": "w0367",
    "imageable": true
  },
  {
    "target": "weinen",
    "base": "to cry",
    "pos": "verb",
    "imageSearch": "crying tears",
    "id": "w0368",
    "imageable": true
  },
  {
    "target": "lächeln",
    "base": "to smile",
    "pos": "verb",
    "imageSearch": "smiling face",
    "id": "w0369",
    "imageable": true
  },
  {
    "target": "hören",
    "base": "to hear",
    "pos": "verb",
    "imageSearch": "listening headphones",
    "id": "w0370",
    "imageable": true
  },
  {
    "target": "fühlen",
    "base": "to feel",
    "pos": "verb",
    "imageSearch": "feeling touching",
    "id": "w0371",
    "imageable": true
  },
  {
    "target": "warten",
    "base": "to wait",
    "pos": "verb",
    "imageSearch": "waiting clock",
    "id": "w0372",
    "imageable": true
  },
  {
    "target": "suchen",
    "base": "to search",
    "pos": "verb",
    "imageSearch": "searching magnifying glass",
    "id": "w0373",
    "imageable": true
  },
  {
    "target": "versuchen",
    "base": "to try",
    "pos": "verb",
    "imageSearch": "trying attempt",
    "id": "w0374",
    "imageable": false
  },
  {
    "target": "vergessen",
    "base": "to forget",
    "pos": "verb",
    "imageSearch": "forgetting memory",
    "id": "w0375",
    "imageable": false
  },
  {
    "target": "erinnern",
    "base": "to remember",
    "pos": "verb",
    "imageSearch": "remembering memories",
    "id": "w0376",
    "imageable": false
  },
  {
    "target": "helfen",
    "base": "to help",
    "pos": "verb",
    "imageSearch": "helping hand",
    "id": "w0377",
    "imageable": true
  },
  {
    "target": "zeigen",
    "base": "to show",
    "pos": "verb",
    "imageSearch": "showing pointing",
    "id": "w0378",
    "imageable": true
  },
  {
    "target": "erklären",
    "base": "to explain",
    "pos": "verb",
    "imageSearch": "explaining teaching",
    "id": "w0379",
    "imageable": true
  },
  {
    "target": "lieben",
    "base": "to love",
    "pos": "verb",
    "imageSearch": "love couple",
    "id": "w0380",
    "imageable": true
  },
  {
    "target": "hoffen",
    "base": "to hope",
    "pos": "verb",
    "imageSearch": "hope light sunrise",
    "id": "w0381",
    "imageable": false
  },
  {
    "target": "glauben",
    "base": "to believe",
    "pos": "verb",
    "imageSearch": "believe faith",
    "id": "w0382",
    "imageable": false
  },
  {
    "target": "wünschen",
    "base": "to wish",
    "pos": "verb",
    "imageSearch": "wishing star",
    "id": "w0383",
    "imageable": false
  },
  {
    "target": "entscheiden",
    "base": "to decide",
    "pos": "verb",
    "imageSearch": "deciding choice",
    "id": "w0384",
    "imageable": false
  },
  {
    "target": "ändern",
    "base": "to change",
    "pos": "verb",
    "imageSearch": "changing transformation",
    "id": "w0385",
    "imageable": false
  },
  {
    "target": "benutzen",
    "base": "to use",
    "pos": "verb",
    "imageSearch": "using tool",
    "id": "w0386",
    "imageable": false
  },
  {
    "target": "bezahlen",
    "base": "to pay",
    "pos": "verb",
    "imageSearch": "paying money",
    "id": "w0387",
    "imageable": true
  },
  {
    "target": "bestellen",
    "base": "to order",
    "pos": "verb",
    "imageSearch": "ordering restaurant",
    "id": "w0388",
    "imageable": true
  },
  {
    "target": "bauen",
    "base": "to build",
    "pos": "verb",
    "imageSearch": "building construction",
    "id": "w0389",
    "imageable": true
  },
  {
    "target": "putzen",
    "base": "to clean",
    "pos": "verb",
    "imageSearch": "cleaning house",
    "id": "w0390",
    "imageable": true
  },
  {
    "target": "reisen",
    "base": "to travel",
    "pos": "verb",
    "imageSearch": "traveling airplane",
    "id": "w0391",
    "imageable": true
  },
  {
    "target": "ankommen",
    "base": "to arrive",
    "pos": "verb",
    "imageSearch": "arriving destination",
    "id": "w0392",
    "imageable": true
  },
  {
    "target": "einladen",
    "base": "to invite",
    "pos": "verb",
    "imageSearch": "invitation party",
    "id": "w0393",
    "imageable": true
  },
  {
    "target": "besuchen",
    "base": "to visit",
    "pos": "verb",
    "imageSearch": "visiting friends",
    "id": "w0394",
    "imageable": true
  },
  {
    "target": "anrufen",
    "base": "to call (phone)",
    "pos": "verb",
    "imageSearch": "phone call",
    "id": "w0395",
    "imageable": true
  },
  {
    "target": "schicken",
    "base": "to send",
    "pos": "verb",
    "imageSearch": "sending package",
    "id": "w0396",
    "imageable": true
  },
  {
    "target": "teilen",
    "base": "to share",
    "pos": "verb",
    "imageSearch": "sharing food",
    "id": "w0397",
    "imageable": true
  },
  {
    "target": "schenken",
    "base": "to give (gift)",
    "pos": "verb",
    "imageSearch": "giving gift",
    "id": "w0398",
    "imageable": true
  },
  {
    "target": "danken",
    "base": "to thank",
    "pos": "verb",
    "imageSearch": "thanking grateful",
    "id": "w0399",
    "imageable": true
  },
  {
    "target": "vorstellen",
    "base": "to introduce",
    "pos": "verb",
    "imageSearch": "introducing handshake",
    "id": "w0400",
    "imageable": false
  },
  {
    "target": "versprechen",
    "base": "to promise",
    "pos": "verb",
    "imageSearch": "promise pinky",
    "id": "w0401",
    "imageable": false
  },
  {
    "target": "gewinnen",
    "base": "to win",
    "pos": "verb",
    "imageSearch": "winning trophy",
    "id": "w0402",
    "imageable": true
  },
  {
    "target": "verlieren",
    "base": "to lose",
    "pos": "verb",
    "imageSearch": "losing sad",
    "id": "w0403",
    "imageable": true
  },
  {
    "target": "wachsen",
    "base": "to grow",
    "pos": "verb",
    "imageSearch": "growing plant seedling",
    "id": "w0404",
    "imageable": true
  },
  {
    "target": "tun",
    "base": "to do",
    "pos": "verb",
    "imageSearch": "doing action",
    "id": "w0405",
    "imageable": false
  },
  {
    "target": "werfen",
    "base": "to throw",
    "pos": "verb",
    "imageSearch": "throwing ball",
    "id": "w0406",
    "imageable": true
  },
  {
    "target": "fangen",
    "base": "to catch",
    "pos": "verb",
    "imageSearch": "catching ball",
    "id": "w0407",
    "imageable": true
  },
  {
    "target": "schneiden",
    "base": "to cut",
    "pos": "verb",
    "imageSearch": "cutting scissors",
    "id": "w0408",
    "imageable": true
  },
  {
    "target": "zeichnen",
    "base": "to draw",
    "pos": "verb",
    "imageSearch": "drawing pencil",
    "id": "w0409",
    "imageable": true
  },
  {
    "target": "malen",
    "base": "to paint",
    "pos": "verb",
    "imageSearch": "painting brush art",
    "id": "w0410",
    "imageable": true
  },
  {
    "target": "rennen",
    "base": "to run (fast)",
    "pos": "verb",
    "imageSearch": "sprinting running",
    "id": "w0411",
    "imageable": true
  },
  {
    "target": "springen",
    "base": "to jump",
    "pos": "verb",
    "imageSearch": "jumping high",
    "id": "w0412",
    "imageable": true
  },
  {
    "target": "klettern",
    "base": "to climb",
    "pos": "verb",
    "imageSearch": "climbing rock",
    "id": "w0413",
    "imageable": true
  },
  {
    "target": "atmen",
    "base": "to breathe",
    "pos": "verb",
    "imageSearch": "breathing meditation",
    "id": "w0414",
    "imageable": true
  },
  {
    "target": "träumen",
    "base": "to dream",
    "pos": "verb",
    "imageSearch": "dreaming sleeping",
    "id": "w0415",
    "imageable": true
  },
  {
    "target": "aufwachen",
    "base": "to wake up",
    "pos": "verb",
    "imageSearch": "waking up morning",
    "id": "w0416",
    "imageable": true
  },
  {
    "target": "anziehen",
    "base": "to put on (clothes)",
    "pos": "verb",
    "imageSearch": "getting dressed",
    "id": "w0417",
    "imageable": true
  },
  {
    "target": "duschen",
    "base": "to shower",
    "pos": "verb",
    "imageSearch": "showering",
    "id": "w0418",
    "imageable": true
  },
  {
    "target": "frühstücken",
    "base": "to have breakfast",
    "pos": "verb",
    "imageSearch": "breakfast morning",
    "id": "w0419",
    "imageable": true
  },
  {
    "target": "rufen",
    "base": "to call/shout",
    "pos": "verb",
    "imageSearch": "shouting calling",
    "id": "w0420",
    "imageable": true
  },
  {
    "target": "erzählen",
    "base": "to tell/narrate",
    "pos": "verb",
    "imageSearch": "storytelling narrating",
    "id": "w0421",
    "imageable": true
  },
  {
    "target": "übersetzen",
    "base": "to translate",
    "pos": "verb",
    "imageSearch": "translating languages",
    "id": "w0422",
    "imageable": true
  },
  {
    "target": "üben",
    "base": "to practice",
    "pos": "verb",
    "imageSearch": "practicing piano",
    "id": "w0423",
    "imageable": true
  },
  {
    "target": "gut",
    "base": "good",
    "pos": "adjective",
    "imageSearch": "thumbs up good",
    "id": "w0424",
    "imageable": false
  },
  {
    "target": "schlecht",
    "base": "bad",
    "pos": "adjective",
    "imageSearch": "thumbs down bad",
    "id": "w0425",
    "imageable": false
  },
  {
    "target": "groß",
    "base": "big/tall",
    "pos": "adjective",
    "imageSearch": "big large",
    "id": "w0426",
    "imageable": true
  },
  {
    "target": "klein",
    "base": "small/short",
    "pos": "adjective",
    "imageSearch": "small tiny",
    "id": "w0427",
    "imageable": true
  },
  {
    "target": "neu",
    "base": "new",
    "pos": "adjective",
    "imageSearch": "new shiny",
    "id": "w0428",
    "imageable": false
  },
  {
    "target": "alt",
    "base": "old",
    "pos": "adjective",
    "imageSearch": "old vintage",
    "id": "w0429",
    "imageable": false
  },
  {
    "target": "lang",
    "base": "long",
    "pos": "adjective",
    "imageSearch": "long road",
    "id": "w0430",
    "imageable": true
  },
  {
    "target": "kurz",
    "base": "short",
    "pos": "adjective",
    "imageSearch": "short small",
    "id": "w0431",
    "imageable": true
  },
  {
    "target": "schön",
    "base": "beautiful",
    "pos": "adjective",
    "imageSearch": "beautiful landscape",
    "id": "w0432",
    "imageable": true
  },
  {
    "target": "schnell",
    "base": "fast",
    "pos": "adjective",
    "imageSearch": "fast speed",
    "id": "w0433",
    "imageable": true
  },
  {
    "target": "langsam",
    "base": "slow",
    "pos": "adjective",
    "imageSearch": "slow snail",
    "id": "w0434",
    "imageable": true
  },
  {
    "target": "stark",
    "base": "strong",
    "pos": "adjective",
    "imageSearch": "strong muscle",
    "id": "w0435",
    "imageable": true
  },
  {
    "target": "schwach",
    "base": "weak",
    "pos": "adjective",
    "imageSearch": "weak fragile",
    "id": "w0436",
    "imageable": true
  },
  {
    "target": "jung",
    "base": "young",
    "pos": "adjective",
    "imageSearch": "young person",
    "id": "w0437",
    "imageable": false
  },
  {
    "target": "schwer",
    "base": "heavy/difficult",
    "pos": "adjective",
    "imageSearch": "heavy weight",
    "id": "w0438",
    "imageable": true
  },
  {
    "target": "leicht",
    "base": "light/easy",
    "pos": "adjective",
    "imageSearch": "light feather",
    "id": "w0439",
    "imageable": true
  },
  {
    "target": "warm",
    "base": "warm",
    "pos": "adjective",
    "imageSearch": "warm cozy fire",
    "id": "w0440",
    "imageable": true
  },
  {
    "target": "kalt",
    "base": "cold",
    "pos": "adjective",
    "imageSearch": "cold ice frozen",
    "id": "w0441",
    "imageable": true
  },
  {
    "target": "heiß",
    "base": "hot",
    "pos": "adjective",
    "imageSearch": "hot summer heat",
    "id": "w0442",
    "imageable": true
  },
  {
    "target": "nass",
    "base": "wet",
    "pos": "adjective",
    "imageSearch": "wet rain drops",
    "id": "w0443",
    "imageable": true
  },
  {
    "target": "trocken",
    "base": "dry",
    "pos": "adjective",
    "imageSearch": "dry desert",
    "id": "w0444",
    "imageable": true
  },
  {
    "target": "hell",
    "base": "bright/light",
    "pos": "adjective",
    "imageSearch": "bright light",
    "id": "w0445",
    "imageable": true
  },
  {
    "target": "dunkel",
    "base": "dark",
    "pos": "adjective",
    "imageSearch": "dark night",
    "id": "w0446",
    "imageable": true
  },
  {
    "target": "laut",
    "base": "loud",
    "pos": "adjective",
    "imageSearch": "loud speaker",
    "id": "w0447",
    "imageable": true
  },
  {
    "target": "leise",
    "base": "quiet",
    "pos": "adjective",
    "imageSearch": "quiet silence",
    "id": "w0448",
    "imageable": true
  },
  {
    "target": "süß",
    "base": "sweet",
    "pos": "adjective",
    "imageSearch": "sweet candy",
    "id": "w0449",
    "imageable": true
  },
  {
    "target": "sauer",
    "base": "sour",
    "pos": "adjective",
    "imageSearch": "sour lemon",
    "id": "w0450",
    "imageable": true
  },
  {
    "target": "scharf",
    "base": "spicy/sharp",
    "pos": "adjective",
    "imageSearch": "spicy chili pepper",
    "id": "w0451",
    "imageable": true
  },
  {
    "target": "weich",
    "base": "soft",
    "pos": "adjective",
    "imageSearch": "soft pillow",
    "id": "w0452",
    "imageable": true
  },
  {
    "target": "hart",
    "base": "hard",
    "pos": "adjective",
    "imageSearch": "hard rock stone",
    "id": "w0453",
    "imageable": true
  },
  {
    "target": "rund",
    "base": "round",
    "pos": "adjective",
    "imageSearch": "round circle ball",
    "id": "w0454",
    "imageable": true
  },
  {
    "target": "breit",
    "base": "wide",
    "pos": "adjective",
    "imageSearch": "wide road panorama",
    "id": "w0455",
    "imageable": true
  },
  {
    "target": "eng",
    "base": "narrow/tight",
    "pos": "adjective",
    "imageSearch": "narrow alley",
    "id": "w0456",
    "imageable": true
  },
  {
    "target": "voll",
    "base": "full",
    "pos": "adjective",
    "imageSearch": "full glass",
    "id": "w0457",
    "imageable": true
  },
  {
    "target": "leer",
    "base": "empty",
    "pos": "adjective",
    "imageSearch": "empty room",
    "id": "w0458",
    "imageable": true
  },
  {
    "target": "offen",
    "base": "open",
    "pos": "adjective",
    "imageSearch": "open door",
    "id": "w0459",
    "imageable": true
  },
  {
    "target": "richtig",
    "base": "correct/right",
    "pos": "adjective",
    "imageSearch": "correct checkmark green",
    "id": "w0460",
    "imageable": false
  },
  {
    "target": "falsch",
    "base": "wrong/false",
    "pos": "adjective",
    "imageSearch": "wrong cross red",
    "id": "w0461",
    "imageable": false
  },
  {
    "target": "wichtig",
    "base": "important",
    "pos": "adjective",
    "imageSearch": "important exclamation",
    "id": "w0462",
    "imageable": false
  },
  {
    "target": "einfach",
    "base": "simple/easy",
    "pos": "adjective",
    "imageSearch": "simple minimal",
    "id": "w0463",
    "imageable": false
  },
  {
    "target": "schwierig",
    "base": "difficult",
    "pos": "adjective",
    "imageSearch": "difficult puzzle",
    "id": "w0464",
    "imageable": false
  },
  {
    "target": "möglich",
    "base": "possible",
    "pos": "adjective",
    "imageSearch": "possible check",
    "id": "w0465",
    "imageable": false
  },
  {
    "target": "frei",
    "base": "free",
    "pos": "adjective",
    "imageSearch": "free bird flying",
    "id": "w0466",
    "imageable": false
  },
  {
    "target": "fertig",
    "base": "finished/ready",
    "pos": "adjective",
    "imageSearch": "finished done",
    "id": "w0467",
    "imageable": false
  },
  {
    "target": "bereit",
    "base": "ready",
    "pos": "adjective",
    "imageSearch": "ready set go",
    "id": "w0468",
    "imageable": false
  },
  {
    "target": "müde",
    "base": "tired",
    "pos": "adjective",
    "imageSearch": "tired sleepy",
    "id": "w0469",
    "imageable": true
  },
  {
    "target": "gesund",
    "base": "healthy",
    "pos": "adjective",
    "imageSearch": "healthy food",
    "id": "w0470",
    "imageable": false
  },
  {
    "target": "krank",
    "base": "sick",
    "pos": "adjective",
    "imageSearch": "sick ill",
    "id": "w0471",
    "imageable": false
  },
  {
    "target": "hungrig",
    "base": "hungry",
    "pos": "adjective",
    "imageSearch": "hungry food",
    "id": "w0472",
    "imageable": true
  },
  {
    "target": "durstig",
    "base": "thirsty",
    "pos": "adjective",
    "imageSearch": "thirsty water",
    "id": "w0473",
    "imageable": true
  },
  {
    "target": "glücklich",
    "base": "happy",
    "pos": "adjective",
    "imageSearch": "happy smiling",
    "id": "w0474",
    "imageable": true
  },
  {
    "target": "traurig",
    "base": "sad",
    "pos": "adjective",
    "imageSearch": "sad crying",
    "id": "w0475",
    "imageable": true
  },
  {
    "target": "böse",
    "base": "angry/evil",
    "pos": "adjective",
    "imageSearch": "angry face",
    "id": "w0476",
    "imageable": true
  },
  {
    "target": "freundlich",
    "base": "friendly",
    "pos": "adjective",
    "imageSearch": "friendly smiling",
    "id": "w0477",
    "imageable": false
  },
  {
    "target": "nett",
    "base": "nice",
    "pos": "adjective",
    "imageSearch": "nice kind person",
    "id": "w0478",
    "imageable": false
  },
  {
    "target": "lustig",
    "base": "funny",
    "pos": "adjective",
    "imageSearch": "funny laughing",
    "id": "w0479",
    "imageable": false
  },
  {
    "target": "langweilig",
    "base": "boring",
    "pos": "adjective",
    "imageSearch": "bored yawning",
    "id": "w0480",
    "imageable": false
  },
  {
    "target": "interessant",
    "base": "interesting",
    "pos": "adjective",
    "imageSearch": "interesting curious",
    "id": "w0481",
    "imageable": false
  },
  {
    "target": "gefährlich",
    "base": "dangerous",
    "pos": "adjective",
    "imageSearch": "dangerous warning",
    "id": "w0482",
    "imageable": false
  },
  {
    "target": "sicher",
    "base": "safe/sure",
    "pos": "adjective",
    "imageSearch": "safe secure lock",
    "id": "w0483",
    "imageable": false
  },
  {
    "target": "billig",
    "base": "cheap",
    "pos": "adjective",
    "imageSearch": "cheap sale discount",
    "id": "w0484",
    "imageable": false
  },
  {
    "target": "teuer",
    "base": "expensive",
    "pos": "adjective",
    "imageSearch": "expensive luxury",
    "id": "w0485",
    "imageable": false
  },
  {
    "target": "reich",
    "base": "rich",
    "pos": "adjective",
    "imageSearch": "rich wealthy gold",
    "id": "w0486",
    "imageable": false
  },
  {
    "target": "sauber",
    "base": "clean",
    "pos": "adjective",
    "imageSearch": "clean sparkling",
    "id": "w0487",
    "imageable": true
  },
  {
    "target": "schmutzig",
    "base": "dirty",
    "pos": "adjective",
    "imageSearch": "dirty muddy",
    "id": "w0488",
    "imageable": true
  },
  {
    "target": "frisch",
    "base": "fresh",
    "pos": "adjective",
    "imageSearch": "fresh vegetables",
    "id": "w0489",
    "imageable": true
  },
  {
    "target": "rot",
    "base": "red",
    "pos": "adjective",
    "imageSearch": "red color",
    "id": "w0490",
    "imageable": true
  },
  {
    "target": "blau",
    "base": "blue",
    "pos": "adjective",
    "imageSearch": "blue ocean sky",
    "id": "w0491",
    "imageable": true
  },
  {
    "target": "grün",
    "base": "green",
    "pos": "adjective",
    "imageSearch": "green nature grass",
    "id": "w0492",
    "imageable": true
  },
  {
    "target": "gelb",
    "base": "yellow",
    "pos": "adjective",
    "imageSearch": "yellow sunflower",
    "id": "w0493",
    "imageable": true
  },
  {
    "target": "schwarz",
    "base": "black",
    "pos": "adjective",
    "imageSearch": "black dark",
    "id": "w0494",
    "imageable": true
  },
  {
    "target": "weiß",
    "base": "white",
    "pos": "adjective",
    "imageSearch": "white snow clean",
    "id": "w0495",
    "imageable": true
  },
  {
    "target": "grau",
    "base": "gray",
    "pos": "adjective",
    "imageSearch": "gray fog",
    "id": "w0496",
    "imageable": true
  },
  {
    "target": "braun",
    "base": "brown",
    "pos": "adjective",
    "imageSearch": "brown chocolate wood",
    "id": "w0497",
    "imageable": true
  },
  {
    "target": "dick",
    "base": "thick/fat",
    "pos": "adjective",
    "imageSearch": "thick book",
    "id": "w0498",
    "imageable": true
  },
  {
    "target": "dünn",
    "base": "thin",
    "pos": "adjective",
    "imageSearch": "thin slim",
    "id": "w0499",
    "imageable": true
  },
  {
    "target": "tief",
    "base": "deep",
    "pos": "adjective",
    "imageSearch": "deep ocean water",
    "id": "w0500",
    "imageable": true
  },
  {
    "target": "hoch",
    "base": "high/tall",
    "pos": "adjective",
    "imageSearch": "high mountain tall",
    "id": "w0501",
    "imageable": true
  },
  {
    "target": "nah",
    "base": "near/close",
    "pos": "adjective",
    "imageSearch": "close nearby",
    "id": "w0502",
    "imageable": false
  },
  {
    "target": "weit",
    "base": "far/wide",
    "pos": "adjective",
    "imageSearch": "far distance",
    "id": "w0503",
    "imageable": false
  },
  {
    "target": "früh",
    "base": "early",
    "pos": "adjective",
    "imageSearch": "early morning sunrise",
    "id": "w0504",
    "imageable": false
  },
  {
    "target": "spät",
    "base": "late",
    "pos": "adjective",
    "imageSearch": "late night clock",
    "id": "w0505",
    "imageable": false
  },
  {
    "target": "bekannt",
    "base": "well-known",
    "pos": "adjective",
    "imageSearch": "famous celebrity",
    "id": "w0506",
    "imageable": false
  },
  {
    "target": "besonder",
    "base": "special",
    "pos": "adjective",
    "imageSearch": "special unique star",
    "id": "w0507",
    "imageable": false
  },
  {
    "target": "verschieden",
    "base": "different",
    "pos": "adjective",
    "imageSearch": "different variety",
    "id": "w0508",
    "imageable": false
  },
  {
    "target": "gleich",
    "base": "same/equal",
    "pos": "adjective",
    "imageSearch": "same equal identical",
    "id": "w0509",
    "imageable": false
  },
  {
    "target": "wunderbar",
    "base": "wonderful",
    "pos": "adjective",
    "imageSearch": "wonderful amazing",
    "id": "w0510",
    "imageable": false
  },
  {
    "target": "perfekt",
    "base": "perfect",
    "pos": "adjective",
    "imageSearch": "perfect score",
    "id": "w0511",
    "imageable": false
  },
  {
    "target": "schrecklich",
    "base": "terrible",
    "pos": "adjective",
    "imageSearch": "terrible storm",
    "id": "w0512",
    "imageable": false
  },
  {
    "target": "verrückt",
    "base": "crazy",
    "pos": "adjective",
    "imageSearch": "crazy wild fun",
    "id": "w0513",
    "imageable": false
  },
  {
    "target": "ruhig",
    "base": "calm/quiet",
    "pos": "adjective",
    "imageSearch": "calm peaceful lake",
    "id": "w0514",
    "imageable": false
  },
  {
    "target": "lecker",
    "base": "delicious",
    "pos": "adjective",
    "imageSearch": "delicious food",
    "id": "w0515",
    "imageable": false
  },
  {
    "target": "gemütlich",
    "base": "cozy",
    "pos": "adjective",
    "imageSearch": "cozy room fireplace",
    "id": "w0516",
    "imageable": false
  },
  {
    "target": "pünktlich",
    "base": "punctual",
    "pos": "adjective",
    "imageSearch": "punctual clock time",
    "id": "w0517",
    "imageable": false
  },
  {
    "target": "fleißig",
    "base": "hardworking",
    "pos": "adjective",
    "imageSearch": "hardworking studying",
    "id": "w0518",
    "imageable": false
  },
  {
    "target": "faul",
    "base": "lazy",
    "pos": "adjective",
    "imageSearch": "lazy sleeping cat",
    "id": "w0519",
    "imageable": false
  },
  {
    "target": "höflich",
    "base": "polite",
    "pos": "adjective",
    "imageSearch": "polite gentleman",
    "id": "w0520",
    "imageable": false
  },
  {
    "target": "klug",
    "base": "smart/clever",
    "pos": "adjective",
    "imageSearch": "smart clever brain",
    "id": "w0521",
    "imageable": false
  },
  {
    "target": "mutig",
    "base": "brave",
    "pos": "adjective",
    "imageSearch": "brave courageous lion",
    "id": "w0522",
    "imageable": false
  },
  {
    "target": "neugierig",
    "base": "curious",
    "pos": "adjective",
    "imageSearch": "curious exploring",
    "id": "w0523",
    "imageable": false
  },
  {
    "target": "stolz",
    "base": "proud",
    "pos": "adjective",
    "imageSearch": "proud achievement",
    "id": "w0524",
    "imageable": false
  },
  {
    "target": "dankbar",
    "base": "grateful",
    "pos": "adjective",
    "imageSearch": "grateful thankful",
    "id": "w0525",
    "imageable": false
  },
  {
    "target": "zufrieden",
    "base": "satisfied/content",
    "pos": "adjective",
    "imageSearch": "satisfied content happy",
    "id": "w0526",
    "imageable": false
  },
  {
    "target": "sehr",
    "base": "very",
    "pos": "adverb",
    "imageSearch": "very much extreme",
    "id": "w0527",
    "imageable": false
  },
  {
    "target": "auch",
    "base": "also/too",
    "pos": "adverb",
    "imageSearch": "also plus addition",
    "id": "w0528",
    "imageable": false
  },
  {
    "target": "schon",
    "base": "already",
    "pos": "adverb",
    "imageSearch": "already done finished",
    "id": "w0529",
    "imageable": false
  },
  {
    "target": "noch",
    "base": "still/yet",
    "pos": "adverb",
    "imageSearch": "still waiting",
    "id": "w0530",
    "imageable": false
  },
  {
    "target": "immer",
    "base": "always",
    "pos": "adverb",
    "imageSearch": "always forever infinity",
    "id": "w0531",
    "imageable": false
  },
  {
    "target": "nie",
    "base": "never",
    "pos": "adverb",
    "imageSearch": "never stop sign",
    "id": "w0532",
    "imageable": false
  },
  {
    "target": "oft",
    "base": "often",
    "pos": "adverb",
    "imageSearch": "often frequently repeat",
    "id": "w0533",
    "imageable": false
  },
  {
    "target": "manchmal",
    "base": "sometimes",
    "pos": "adverb",
    "imageSearch": "sometimes occasional",
    "id": "w0534",
    "imageable": false
  },
  {
    "target": "selten",
    "base": "rarely",
    "pos": "adverb",
    "imageSearch": "rare diamond",
    "id": "w0535",
    "imageable": false
  },
  {
    "target": "hier",
    "base": "here",
    "pos": "adverb",
    "imageSearch": "here pin location",
    "id": "w0536",
    "imageable": false
  },
  {
    "target": "dort",
    "base": "there",
    "pos": "adverb",
    "imageSearch": "there pointing far",
    "id": "w0537",
    "imageable": false
  },
  {
    "target": "heute",
    "base": "today",
    "pos": "adverb",
    "imageSearch": "today calendar",
    "id": "w0538",
    "imageable": false
  },
  {
    "target": "gestern",
    "base": "yesterday",
    "pos": "adverb",
    "imageSearch": "yesterday past",
    "id": "w0539",
    "imageable": false
  },
  {
    "target": "morgen",
    "base": "tomorrow",
    "pos": "adverb",
    "imageSearch": "tomorrow future",
    "id": "w0540",
    "imageable": false
  },
  {
    "target": "jetzt",
    "base": "now",
    "pos": "adverb",
    "imageSearch": "now present moment",
    "id": "w0541",
    "imageable": false
  },
  {
    "target": "bald",
    "base": "soon",
    "pos": "adverb",
    "imageSearch": "soon upcoming",
    "id": "w0542",
    "imageable": false
  },
  {
    "target": "wieder",
    "base": "again",
    "pos": "adverb",
    "imageSearch": "again repeat",
    "id": "w0543",
    "imageable": false
  },
  {
    "target": "zusammen",
    "base": "together",
    "pos": "adverb",
    "imageSearch": "together hands",
    "id": "w0544",
    "imageable": false
  },
  {
    "target": "allein",
    "base": "alone",
    "pos": "adverb",
    "imageSearch": "alone lonely",
    "id": "w0545",
    "imageable": false
  },
  {
    "target": "draußen",
    "base": "outside",
    "pos": "adverb",
    "imageSearch": "outside nature outdoors",
    "id": "w0546",
    "imageable": false
  },
  {
    "target": "drinnen",
    "base": "inside",
    "pos": "adverb",
    "imageSearch": "inside house cozy",
    "id": "w0547",
    "imageable": false
  },
  {
    "target": "oben",
    "base": "above/upstairs",
    "pos": "adverb",
    "imageSearch": "above sky up",
    "id": "w0548",
    "imageable": false
  },
  {
    "target": "unten",
    "base": "below/downstairs",
    "pos": "adverb",
    "imageSearch": "below down under",
    "id": "w0549",
    "imageable": false
  },
  {
    "target": "links",
    "base": "left",
    "pos": "adverb",
    "imageSearch": "left arrow direction",
    "id": "w0550",
    "imageable": false
  },
  {
    "target": "rechts",
    "base": "right",
    "pos": "adverb",
    "imageSearch": "right arrow direction",
    "id": "w0551",
    "imageable": false
  },
  {
    "target": "geradeaus",
    "base": "straight ahead",
    "pos": "adverb",
    "imageSearch": "straight road ahead",
    "id": "w0552",
    "imageable": false
  },
  {
    "target": "vielleicht",
    "base": "maybe/perhaps",
    "pos": "adverb",
    "imageSearch": "maybe uncertain",
    "id": "w0553",
    "imageable": false
  },
  {
    "target": "bestimmt",
    "base": "certainly",
    "pos": "adverb",
    "imageSearch": "certain sure",
    "id": "w0554",
    "imageable": false
  },
  {
    "target": "wahrscheinlich",
    "base": "probably",
    "pos": "adverb",
    "imageSearch": "probably likely",
    "id": "w0555",
    "imageable": false
  },
  {
    "target": "wirklich",
    "base": "really",
    "pos": "adverb",
    "imageSearch": "really truly",
    "id": "w0556",
    "imageable": false
  },
  {
    "target": "genau",
    "base": "exactly",
    "pos": "adverb",
    "imageSearch": "exact precise target",
    "id": "w0557",
    "imageable": false
  },
  {
    "target": "sofort",
    "base": "immediately",
    "pos": "adverb",
    "imageSearch": "immediately instant fast",
    "id": "w0558",
    "imageable": false
  },
  {
    "target": "endlich",
    "base": "finally",
    "pos": "adverb",
    "imageSearch": "finally done celebration",
    "id": "w0559",
    "imageable": false
  },
  {
    "target": "plötzlich",
    "base": "suddenly",
    "pos": "adverb",
    "imageSearch": "suddenly surprise lightning",
    "id": "w0560",
    "imageable": false
  },
  {
    "target": "trotzdem",
    "base": "nevertheless",
    "pos": "adverb",
    "imageSearch": "nevertheless perseverance",
    "id": "w0561",
    "imageable": false
  },
  {
    "target": "überall",
    "base": "everywhere",
    "pos": "adverb",
    "imageSearch": "everywhere all around",
    "id": "w0562",
    "imageable": false
  },
  {
    "target": "nirgendwo",
    "base": "nowhere",
    "pos": "adverb",
    "imageSearch": "nowhere empty desert",
    "id": "w0563",
    "imageable": false
  },
  {
    "target": "irgendwo",
    "base": "somewhere",
    "pos": "adverb",
    "imageSearch": "somewhere mystery",
    "id": "w0564",
    "imageable": false
  },
  {
    "target": "gern",
    "base": "gladly",
    "pos": "adverb",
    "imageSearch": "gladly happy willing",
    "id": "w0565",
    "imageable": false
  },
  {
    "target": "leider",
    "base": "unfortunately",
    "pos": "adverb",
    "imageSearch": "unfortunately sad",
    "id": "w0566",
    "imageable": false
  },
  {
    "target": "natürlich",
    "base": "of course/naturally",
    "pos": "adverb",
    "imageSearch": "naturally obvious",
    "id": "w0567",
    "imageable": false
  },
  {
    "target": "besonders",
    "base": "especially",
    "pos": "adverb",
    "imageSearch": "especially special star",
    "id": "w0568",
    "imageable": false
  },
  {
    "target": "ziemlich",
    "base": "quite/fairly",
    "pos": "adverb",
    "imageSearch": "quite fairly",
    "id": "w0569",
    "imageable": false
  },
  {
    "target": "fast",
    "base": "almost",
    "pos": "adverb",
    "imageSearch": "almost nearly close",
    "id": "w0570",
    "imageable": false
  },
  {
    "target": "genug",
    "base": "enough",
    "pos": "adverb",
    "imageSearch": "enough sufficient",
    "id": "w0571",
    "imageable": false
  },
  {
    "target": "zuerst",
    "base": "first/at first",
    "pos": "adverb",
    "imageSearch": "first number one",
    "id": "w0572",
    "imageable": false
  },
  {
    "target": "danach",
    "base": "afterwards",
    "pos": "adverb",
    "imageSearch": "afterwards then next",
    "id": "w0573",
    "imageable": false
  },
  {
    "target": "gleichzeitig",
    "base": "simultaneously",
    "pos": "adverb",
    "imageSearch": "simultaneous parallel",
    "id": "w0574",
    "imageable": false
  },
  {
    "target": "null",
    "base": "zero",
    "pos": "noun",
    "imageSearch": "zero number",
    "id": "w0575",
    "imageable": false
  },
  {
    "target": "eins",
    "base": "one",
    "pos": "noun",
    "imageSearch": "one single",
    "id": "w0576",
    "imageable": false
  },
  {
    "target": "zwei",
    "base": "two",
    "pos": "noun",
    "imageSearch": "two pair",
    "id": "w0577",
    "imageable": false
  },
  {
    "target": "drei",
    "base": "three",
    "pos": "noun",
    "imageSearch": "three trio",
    "id": "w0578",
    "imageable": false
  },
  {
    "target": "vier",
    "base": "four",
    "pos": "noun",
    "imageSearch": "four number",
    "id": "w0579",
    "imageable": false
  },
  {
    "target": "fünf",
    "base": "five",
    "pos": "noun",
    "imageSearch": "five hand fingers",
    "id": "w0580",
    "imageable": false
  },
  {
    "target": "sechs",
    "base": "six",
    "pos": "noun",
    "imageSearch": "six dice",
    "id": "w0581",
    "imageable": false
  },
  {
    "target": "sieben",
    "base": "seven",
    "pos": "noun",
    "imageSearch": "seven lucky",
    "id": "w0582",
    "imageable": false
  },
  {
    "target": "acht",
    "base": "eight",
    "pos": "noun",
    "imageSearch": "eight number",
    "id": "w0583",
    "imageable": false
  },
  {
    "target": "neun",
    "base": "nine",
    "pos": "noun",
    "imageSearch": "nine number",
    "id": "w0584",
    "imageable": false
  },
  {
    "target": "zehn",
    "base": "ten",
    "pos": "noun",
    "imageSearch": "ten number",
    "id": "w0585",
    "imageable": false
  },
  {
    "target": "hundert",
    "base": "hundred",
    "pos": "noun",
    "imageSearch": "hundred century",
    "id": "w0586",
    "imageable": false
  },
  {
    "target": "tausend",
    "base": "thousand",
    "pos": "noun",
    "imageSearch": "thousand many",
    "id": "w0587",
    "imageable": false
  },
  {
    "target": "ja",
    "base": "yes",
    "pos": "adverb",
    "imageSearch": "yes thumbs up",
    "id": "w0588",
    "imageable": false
  },
  {
    "target": "nein",
    "base": "no",
    "pos": "adverb",
    "imageSearch": "no stop hand",
    "id": "w0589",
    "imageable": false
  },
  {
    "target": "bitte",
    "base": "please",
    "pos": "adverb",
    "imageSearch": "please polite",
    "id": "w0590",
    "imageable": false
  },
  {
    "target": "danke",
    "base": "thank you",
    "pos": "adverb",
    "imageSearch": "thank you grateful",
    "id": "w0591",
    "imageable": false
  },
  {
    "target": "Entschuldigung",
    "base": "excuse me/sorry",
    "pos": "noun",
    "imageSearch": "sorry apology",
    "id": "w0592",
    "imageable": false
  },
  {
    "target": "Willkommen",
    "base": "welcome",
    "pos": "adjective",
    "imageSearch": "welcome mat",
    "id": "w0593",
    "imageable": false
  },
  {
    "target": "Tschüss",
    "base": "bye",
    "pos": "noun",
    "imageSearch": "goodbye waving",
    "id": "w0594",
    "imageable": false
  },
  {
    "target": "Hallo",
    "base": "hello",
    "pos": "noun",
    "imageSearch": "hello greeting wave",
    "id": "w0595",
    "imageable": false
  },
  {
    "target": "Prost",
    "base": "cheers",
    "pos": "noun",
    "imageSearch": "cheers toast drinks",
    "id": "w0596",
    "imageable": false
  },
  {
    "target": "Mahlzeit",
    "base": "enjoy your meal",
    "pos": "noun",
    "imageSearch": "meal lunch food",
    "id": "w0597",
    "imageable": false
  }
];
