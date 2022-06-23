
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 3.15.2
 * Query Engine version: 2b0c12756921c891fec4f68d9444e18c7d5d4a6a
 */
Prisma.prismaVersion = {
  client: "3.15.2",
  engine: "2b0c12756921c891fec4f68d9444e18c7d5d4a6a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = 'DbNull'
Prisma.JsonNull = 'JsonNull'
Prisma.AnyNull = 'AnyNull'

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.CollectionScalarFieldEnum = makeEnum({
  id: 'id',
  kpHdCollectionId: 'kpHdCollectionId',
  image: 'image',
  title: 'title',
  sortRange: 'sortRange',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  movieIds: 'movieIds'
});

exports.Prisma.VideoScalarFieldEnum = makeEnum({
  id: 'id',
  kpId: 'kpId',
  name: 'name',
  url: 'url',
  size: 'size',
  source: 'source',
  type: 'type',
  movieId: 'movieId'
});

exports.Prisma.ImageScalarFieldEnum = makeEnum({
  id: 'id',
  movieKpId: 'movieKpId',
  url: 'url',
  language: 'language',
  previewUrl: 'previewUrl',
  kpMovieId: 'kpMovieId',
  height: 'height',
  width: 'width',
  type: 'type',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  movieId: 'movieId'
});

exports.Prisma.SeasonScalarFieldEnum = makeEnum({
  id: 'id',
  movieKpId: 'movieKpId',
  episodesCount: 'episodesCount',
  number: 'number',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  movieId: 'movieId'
});

exports.Prisma.ReviewScalarFieldEnum = makeEnum({
  id: 'id',
  kpMovieId: 'kpMovieId',
  author: 'author',
  review: 'review',
  title: 'title',
  reviewDislikes: 'reviewDislikes',
  reviewLikes: 'reviewLikes',
  userRating: 'userRating',
  date: 'date',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  movieId: 'movieId'
});

exports.Prisma.PersonScalarFieldEnum = makeEnum({
  id: 'id',
  kpId: 'kpId',
  enName: 'enName',
  name: 'name',
  photo: 'photo',
  sex: 'sex',
  birthPlace: 'birthPlace',
  deathPlace: 'deathPlace',
  age: 'age',
  countAwards: 'countAwards',
  growth: 'growth',
  profession: 'profession',
  birthday: 'birthday',
  death: 'death',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt'
});

exports.Prisma.MovieOnPersonScalarFieldEnum = makeEnum({
  id: 'id',
  kpId: 'kpId',
  kpMovieId: 'kpMovieId',
  description: 'description',
  profession: 'profession',
  assignedAt: 'assignedAt',
  updatedAt: 'updatedAt',
  movieId: 'movieId',
  personId: 'personId'
});

exports.Prisma.PersonFactScalarFieldEnum = makeEnum({
  id: 'id',
  personKpId: 'personKpId',
  value: 'value',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  personId: 'personId'
});

exports.Prisma.MovieFactScalarFieldEnum = makeEnum({
  id: 'id',
  movieKpId: 'movieKpId',
  spoiler: 'spoiler',
  type: 'type',
  value: 'value',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  movieId: 'movieId'
});

exports.Prisma.MovieScalarFieldEnum = makeEnum({
  id: 'id',
  kpId: 'kpId',
  name: 'name',
  names: 'names',
  enName: 'enName',
  alternativeName: 'alternativeName',
  description: 'description',
  ratingMpaa: 'ratingMpaa',
  shortDescription: 'shortDescription',
  slogan: 'slogan',
  year: 'year',
  movieLength: 'movieLength',
  ageRating: 'ageRating',
  type: 'type',
  status: 'status',
  genres: 'genres',
  countries: 'countries',
  spokenLanguages: 'spokenLanguages',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  collectionIds: 'collectionIds'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});
exports.VideoSource = makeEnum({
  YOUTUBE: 'YOUTUBE',
  YANDEX: 'YANDEX'
});

exports.VideoType = makeEnum({
  TRAILER: 'TRAILER',
  TEASER: 'TEASER'
});

exports.ImageType = makeEnum({
  BACKDROP: 'BACKDROP',
  POSTER: 'POSTER',
  FRAME: 'FRAME',
  LOGO: 'LOGO'
});

exports.PersonSex = makeEnum({
  Male: 'Male',
  Female: 'Female'
});

exports.ProfessionType = makeEnum({
  ACTOR: 'ACTOR',
  NOT_LISTED_IN_THE_CREDITS: 'NOT_LISTED_IN_THE_CREDITS',
  BAND_CHRONICLE: 'BAND_CHRONICLE',
  BAND_PLAYING_THEMSELVES: 'BAND_PLAYING_THEMSELVES',
  DIRECTOR: 'DIRECTOR',
  COMPOSER: 'COMPOSER',
  EDITOR: 'EDITOR',
  VOICE_DIRECTOR: 'VOICE_DIRECTOR',
  OPERATOR: 'OPERATOR',
  TRANSLATOR: 'TRANSLATOR',
  PRODUCER: 'PRODUCER',
  WRITER: 'WRITER',
  PRODUCTION_DESIGNER: 'PRODUCTION_DESIGNER',
  PRODUCER_USSR: 'PRODUCER_USSR'
});

exports.MovieType = makeEnum({
  ANIMATED_SERIES: 'ANIMATED_SERIES',
  ANIME: 'ANIME',
  CARTOON: 'CARTOON',
  MINI_SERIES: 'MINI_SERIES',
  MOVIE: 'MOVIE',
  TV_SERIES: 'TV_SERIES',
  TV_SHOW: 'TV_SHOW',
  VIDEO: 'VIDEO'
});

exports.MovieStatus = makeEnum({
  ANNOUNCED: 'ANNOUNCED',
  CANCELLED: 'CANCELLED',
  COMPLETED: 'COMPLETED',
  CONTINUES: 'CONTINUES',
  FILMING: 'FILMING',
  IN_PRODUCTION: 'IN_PRODUCTION',
  PILOT: 'PILOT',
  POST_PRODUCTION: 'POST_PRODUCTION',
  PRE_PRODUCTION: 'PRE_PRODUCTION',
  RUMORS: 'RUMORS'
});

exports.MovieGenre = makeEnum({
  ACTION: 'ACTION',
  ADULT: 'ADULT',
  ADVENTURE: 'ADVENTURE',
  ANIME: 'ANIME',
  BIOGRAPHY: 'BIOGRAPHY',
  CARTOON: 'CARTOON',
  CEREMONY: 'CEREMONY',
  CHILDREN: 'CHILDREN',
  COMEDY: 'COMEDY',
  CONCERT: 'CONCERT',
  CRIME: 'CRIME',
  DETECTIVE: 'DETECTIVE',
  DOCUMENTARY: 'DOCUMENTARY',
  DRAMA: 'DRAMA',
  FAMILY: 'FAMILY',
  FANTASY: 'FANTASY',
  FICTION: 'FICTION',
  FILM_NOIR: 'FILM_NOIR',
  GAME: 'GAME',
  HORROR: 'HORROR',
  MELODRAMA: 'MELODRAMA',
  MILITARY: 'MILITARY',
  MUSIC: 'MUSIC',
  MUSICAL: 'MUSICAL',
  NEWS: 'NEWS',
  REAL_TV: 'REAL_TV',
  SHORT_FILM: 'SHORT_FILM',
  SPORTS: 'SPORTS',
  STORY: 'STORY',
  TALK_SHOW: 'TALK_SHOW',
  THRILLER: 'THRILLER',
  WESTERN: 'WESTERN'
});

exports.Country = makeEnum({
  AUSTRALIA: 'AUSTRALIA',
  AUSTRIA: 'AUSTRIA',
  AZERBAIJAN: 'AZERBAIJAN',
  ALBANIA: 'ALBANIA',
  ALGERIA: 'ALGERIA',
  US_VIRGIN_ISLANDS: 'US_VIRGIN_ISLANDS',
  AMERICAN_SAMOA: 'AMERICAN_SAMOA',
  ANGOLA: 'ANGOLA',
  ANDORRA: 'ANDORRA',
  ANTARCTICA: 'ANTARCTICA',
  ANTIGUA_AND_BARBUDA: 'ANTIGUA_AND_BARBUDA',
  ANTILLES: 'ANTILLES',
  ARGENTINA: 'ARGENTINA',
  ARMENIA: 'ARMENIA',
  ARUBA: 'ARUBA',
  AFGHANISTAN: 'AFGHANISTAN',
  BAHAMAS: 'BAHAMAS',
  BANGLADESH: 'BANGLADESH',
  BARBADOS: 'BARBADOS',
  BAHRAIN: 'BAHRAIN',
  BELARUS: 'BELARUS',
  BELIZE: 'BELIZE',
  BELGIUM: 'BELGIUM',
  BENIN: 'BENIN',
  BERMUDA: 'BERMUDA',
  BURMA: 'BURMA',
  BULGARIA: 'BULGARIA',
  BOLIVIA: 'BOLIVIA',
  BOSNIA: 'BOSNIA',
  BOSNIA_AND_HERZEGOVINA: 'BOSNIA_AND_HERZEGOVINA',
  BOTSWANA: 'BOTSWANA',
  BRAZIL: 'BRAZIL',
  BRUNEI_DARUSSALAM: 'BRUNEI_DARUSSALAM',
  BURKINA_FASO: 'BURKINA_FASO',
  BURUNDI: 'BURUNDI',
  BHUTAN: 'BHUTAN',
  VANUATU: 'VANUATU',
  VATICAN: 'VATICAN',
  CITY_UNITED_KINGDOM: 'CITY_UNITED_KINGDOM',
  HUNGARY: 'HUNGARY',
  VENEZUELA: 'VENEZUELA',
  VIRGIN_ISLANDS_UK: 'VIRGIN_ISLANDS_UK',
  VIRGIN_ISLANDS_USA: 'VIRGIN_ISLANDS_USA',
  OUTER_SMALL_ISLANDS_OF_THE_USA: 'OUTER_SMALL_ISLANDS_OF_THE_USA',
  VIETNAM: 'VIETNAM',
  VIETNAM_NORTH: 'VIETNAM_NORTH',
  GABON: 'GABON',
  HAITI: 'HAITI',
  GUYANA: 'GUYANA',
  GAMBIA: 'GAMBIA',
  GHANA: 'GHANA',
  GUADELOUPE: 'GUADELOUPE',
  GUATEMALA: 'GUATEMALA',
  GUINEA: 'GUINEA',
  GUINEA_BISSAU: 'GUINEA_BISSAU',
  GERMANY: 'GERMANY',
  GERMANY_GDR: 'GERMANY_GDR',
  GERMANY_FRG: 'GERMANY_FRG',
  GIBRALTAR: 'GIBRALTAR',
  HONDURAS: 'HONDURAS',
  HONG_KONG: 'HONG_KONG',
  GRENADA: 'GRENADA',
  GREENLAND: 'GREENLAND',
  GREECE: 'GREECE',
  GEORGIA: 'GEORGIA',
  GUAM: 'GUAM',
  DENMARK: 'DENMARK',
  DOMINIKA: 'DOMINIKA',
  DOMINICANA: 'DOMINICANA',
  EGYPT: 'EGYPT',
  ZAIRE: 'ZAIRE',
  ZAMBIA: 'ZAMBIA',
  WESTERN_SAHARA: 'WESTERN_SAHARA',
  ZIMBABWE: 'ZIMBABWE',
  ISRAEL: 'ISRAEL',
  INDIA: 'INDIA',
  INDONESIA: 'INDONESIA',
  JORDAN: 'JORDAN',
  IRAQ: 'IRAQ',
  IRAN: 'IRAN',
  IRISH: 'IRISH',
  ICELAND: 'ICELAND',
  SPAIN: 'SPAIN',
  ITALY: 'ITALY',
  YEMEN: 'YEMEN',
  CAPE_VERDE: 'CAPE_VERDE',
  KAZAKHSTAN: 'KAZAKHSTAN',
  CAYMAN_ISLANDS: 'CAYMAN_ISLANDS',
  CAMBODIA: 'CAMBODIA',
  CAMEROON: 'CAMEROON',
  CANADA: 'CANADA',
  QATAR: 'QATAR',
  KENYA: 'KENYA',
  CYPRUS: 'CYPRUS',
  KYRGYZSTAN: 'KYRGYZSTAN',
  KIRIBATI: 'KIRIBATI',
  CHINA: 'CHINA',
  COLOMBIA: 'COLOMBIA',
  KOMORS: 'KOMORS',
  CONGO: 'CONGO',
  CONGO_DRC: 'CONGO_DRC',
  KOREA: 'KOREA',
  NORTH_KOREA: 'NORTH_KOREA',
  SOUTH_KOREA: 'SOUTH_KOREA',
  KOSOVO: 'KOSOVO',
  COSTA_RICA: 'COSTA_RICA',
  IVORY_COAST: 'IVORY_COAST',
  CUBA: 'CUBA',
  KUWAIT: 'KUWAIT',
  LAOS: 'LAOS',
  LATVIA: 'LATVIA',
  LESOTHO: 'LESOTHO',
  LIBERIA: 'LIBERIA',
  LEBANON: 'LEBANON',
  LIBYA: 'LIBYA',
  LITHUANIA: 'LITHUANIA',
  LIECHTENSTEIN: 'LIECHTENSTEIN',
  LUXEMBOURG: 'LUXEMBOURG',
  MAURITIUS: 'MAURITIUS',
  MAURITANIA: 'MAURITANIA',
  MADAGASCAR: 'MADAGASCAR',
  MACAU: 'MACAU',
  MACEDONIA: 'MACEDONIA',
  MALAWI: 'MALAWI',
  MALAYSIA: 'MALAYSIA',
  MALI: 'MALI',
  MALDIVES: 'MALDIVES',
  MALTA: 'MALTA',
  MOROCCO: 'MOROCCO',
  MARTINIQUE: 'MARTINIQUE',
  MARSHALL_ISLANDS: 'MARSHALL_ISLANDS',
  MEXICO: 'MEXICO',
  MOZAMBIQUE: 'MOZAMBIQUE',
  MOLDOVA: 'MOLDOVA',
  MONACO: 'MONACO',
  MONGOLIA: 'MONGOLIA',
  MONTSERRAT: 'MONTSERRAT',
  MYANMAR: 'MYANMAR',
  NAMIBIA: 'NAMIBIA',
  NEPAL: 'NEPAL',
  NIGER: 'NIGER',
  NIGERIA: 'NIGERIA',
  NETHERLANDS: 'NETHERLANDS',
  NICARAGUA: 'NICARAGUA',
  NEW_ZEALAND: 'NEW_ZEALAND',
  NEW_CALEDONIA: 'NEW_CALEDONIA',
  NORWAY: 'NORWAY',
  UAE: 'UAE',
  OCCUPIED_PALESTINIAN_TERRITORY: 'OCCUPIED_PALESTINIAN_TERRITORY',
  OMAN: 'OMAN',
  ISLE: 'ISLE',
  OF_MAN_COOK_ISLANDS: 'OF_MAN_COOK_ISLANDS',
  PAKISTAN: 'PAKISTAN',
  PALAU: 'PALAU',
  PALESTINE: 'PALESTINE',
  PANAMA_HAT: 'PANAMA_HAT',
  PAPUA_NEW_GUINEA: 'PAPUA_NEW_GUINEA',
  PARAGUAY: 'PARAGUAY',
  PERU: 'PERU',
  POLAND: 'POLAND',
  PORTUGAL: 'PORTUGAL',
  PUERTO_RICO: 'PUERTO_RICO',
  REUNION: 'REUNION',
  THE_RUSSIAN_EMPIRE: 'THE_RUSSIAN_EMPIRE',
  RUSSIA: 'RUSSIA',
  RWANDA: 'RWANDA',
  ROMANIA: 'ROMANIA',
  USSR: 'USSR',
  USA: 'USA',
  EL_SALVADOR: 'EL_SALVADOR',
  SAMOA: 'SAMOA',
  SAN_MARINO: 'SAN_MARINO',
  SAUDI_ARABIA: 'SAUDI_ARABIA',
  SWAZILAND: 'SWAZILAND',
  NORTHERN_MACEDONIA: 'NORTHERN_MACEDONIA',
  SEYCHELLES: 'SEYCHELLES',
  SENEGAL: 'SENEGAL',
  SAINT_VINCENT_AND_THE_GRENADINES: 'SAINT_VINCENT_AND_THE_GRENADINES',
  SAINT_LUCIA: 'SAINT_LUCIA',
  SERBIA: 'SERBIA',
  SERBIA_AND_MONTENEGRO: 'SERBIA_AND_MONTENEGRO',
  SIAM: 'SIAM',
  SINGAPORE: 'SINGAPORE',
  SYRIA: 'SYRIA',
  SLOVAKIA: 'SLOVAKIA',
  SLOVENIA: 'SLOVENIA',
  SOMALIA: 'SOMALIA',
  SUDAN: 'SUDAN',
  SURINAME: 'SURINAME',
  SIERRA_LEONE: 'SIERRA_LEONE',
  TAJIKISTAN: 'TAJIKISTAN',
  THAILAND: 'THAILAND',
  TAIWAN: 'TAIWAN',
  TANZANIA: 'TANZANIA',
  TIMOR_LESTE: 'TIMOR_LESTE',
  TOGO: 'TOGO',
  TONGA: 'TONGA',
  TRINIDAD_AND_TOBAGO: 'TRINIDAD_AND_TOBAGO',
  TUVALU: 'TUVALU',
  TUNISIA: 'TUNISIA',
  TURKMENISTAN: 'TURKMENISTAN',
  TURKEY: 'TURKEY',
  UGANDA: 'UGANDA',
  UZBEKISTAN: 'UZBEKISTAN',
  UKRAINE: 'UKRAINE',
  URUGUAY: 'URUGUAY',
  FAROE_ISLANDS: 'FAROE_ISLANDS',
  FEDERATED_STATES_OF_MICRONESIA: 'FEDERATED_STATES_OF_MICRONESIA',
  FIJI: 'FIJI',
  PHILIPPINES: 'PHILIPPINES',
  FINLAND: 'FINLAND',
  FRANCE: 'FRANCE',
  FRENCH_GUIANA: 'FRENCH_GUIANA',
  FRENCH_POLYNESIA: 'FRENCH_POLYNESIA',
  CROATIA: 'CROATIA',
  TSAR: 'TSAR',
  CHAD: 'CHAD',
  MONTENEGRO: 'MONTENEGRO',
  CZECH: 'CZECH',
  CZECHOSLOVAKIA: 'CZECHOSLOVAKIA',
  CHILE: 'CHILE',
  SWITZERLAND: 'SWITZERLAND',
  SWEDEN: 'SWEDEN',
  SRI_LANKA: 'SRI_LANKA',
  ECUADOR: 'ECUADOR',
  EQUATORIAL_GUINEA: 'EQUATORIAL_GUINEA',
  ERITREA: 'ERITREA',
  ESTONIA: 'ESTONIA',
  ETHIOPIA: 'ETHIOPIA',
  SOUTH_AFRICA: 'SOUTH_AFRICA',
  YUGOSLAVIA: 'YUGOSLAVIA',
  YUGOSLAVIA_FR: 'YUGOSLAVIA_FR',
  JAMAICA: 'JAMAICA',
  JAPAN: 'JAPAN'
});

exports.Language = makeEnum({
  AFAR: 'AFAR',
  ABKHAZIAN: 'ABKHAZIAN',
  AFRIKAANS: 'AFRIKAANS',
  AKAN: 'AKAN',
  ALBANIAN: 'ALBANIAN',
  AMHARIC: 'AMHARIC',
  ARABIC: 'ARABIC',
  ARAGONESE: 'ARAGONESE',
  ARMENIAN: 'ARMENIAN',
  ASSAMESE: 'ASSAMESE',
  AVARIC: 'AVARIC',
  AYMARA: 'AYMARA',
  AZERBAIJANI: 'AZERBAIJANI',
  BAMBARA: 'BAMBARA',
  BASHKIR: 'BASHKIR',
  BASQUE: 'BASQUE',
  BELARUSIAN: 'BELARUSIAN',
  BENGALI: 'BENGALI',
  BISLAMA: 'BISLAMA',
  BOSNIAN: 'BOSNIAN',
  BRETON: 'BRETON',
  BULGARIAN: 'BULGARIAN',
  BURMESE: 'BURMESE',
  CANTONESE: 'CANTONESE',
  CATALAN: 'CATALAN',
  CHAMORRO: 'CHAMORRO',
  CHECHEN: 'CHECHEN',
  CHICHEWA_NYANJA: 'CHICHEWA_NYANJA',
  CORNISH: 'CORNISH',
  CORSICAN: 'CORSICAN',
  CREE: 'CREE',
  CROATIAN: 'CROATIAN',
  CZECH: 'CZECH',
  DANISH: 'DANISH',
  DIVEHI: 'DIVEHI',
  DUTCH: 'DUTCH',
  DZONGKHA: 'DZONGKHA',
  ENGLISH: 'ENGLISH',
  ESPERANTO: 'ESPERANTO',
  ESTONIAN: 'ESTONIAN',
  FAROESE: 'FAROESE',
  FIJIAN: 'FIJIAN',
  FINNISH: 'FINNISH',
  FRENCH: 'FRENCH',
  FRISIAN: 'FRISIAN',
  FULAH: 'FULAH',
  GAELIC: 'GAELIC',
  GALICIAN: 'GALICIAN',
  GANDA: 'GANDA',
  GEORGIAN: 'GEORGIAN',
  GERMAN: 'GERMAN',
  GREEK: 'GREEK',
  GUARANI: 'GUARANI',
  GUJARATI: 'GUJARATI',
  HAITIAN_HAITIAN_CREOLE: 'HAITIAN_HAITIAN_CREOLE',
  HAUSA: 'HAUSA',
  HEBREW: 'HEBREW',
  HERERO: 'HERERO',
  HINDI: 'HINDI',
  HIRI_MOTU: 'HIRI_MOTU',
  HUNGARIAN: 'HUNGARIAN',
  ICELANDIC: 'ICELANDIC',
  IGBO: 'IGBO',
  INDONESIAN: 'INDONESIAN',
  INTERLINGUA: 'INTERLINGUA',
  INTERLINGUE: 'INTERLINGUE',
  INUKTITUT: 'INUKTITUT',
  INUPIAQ: 'INUPIAQ',
  IRISH: 'IRISH',
  ITALIAN: 'ITALIAN',
  JAPANESE: 'JAPANESE',
  JAVANESE: 'JAVANESE',
  KALAALLISUT: 'KALAALLISUT',
  KANNADA: 'KANNADA',
  KASHMIRI: 'KASHMIRI',
  KAZAKH: 'KAZAKH',
  KHMER: 'KHMER',
  KIKUYU: 'KIKUYU',
  KINYARWANDA: 'KINYARWANDA',
  KIRGHIZ: 'KIRGHIZ',
  KOREAN: 'KOREAN',
  KURDISH: 'KURDISH',
  LAO: 'LAO',
  LATIN: 'LATIN',
  LATVIAN: 'LATVIAN',
  LETZEBURGESCH: 'LETZEBURGESCH',
  LINGALA: 'LINGALA',
  LITHUANIAN: 'LITHUANIAN',
  MACEDONIAN: 'MACEDONIAN',
  MALAGASY: 'MALAGASY',
  MALAY: 'MALAY',
  MALAYALAM: 'MALAYALAM',
  MALTESE: 'MALTESE',
  MANDARIN: 'MANDARIN',
  MAORI: 'MAORI',
  MARATHI: 'MARATHI',
  MARSHALL: 'MARSHALL',
  MOLDAVIAN: 'MOLDAVIAN',
  MONGOLIAN: 'MONGOLIAN',
  NAURU: 'NAURU',
  NAVAJO: 'NAVAJO',
  NEPALI: 'NEPALI',
  NO_LANGUAGE: 'NO_LANGUAGE',
  NORTHERN_SAMI: 'NORTHERN_SAMI',
  NORWEGIAN: 'NORWEGIAN',
  NORWEGIAN_BOKMAL: 'NORWEGIAN_BOKMAL',
  NORWEGIAN_NYNORSK: 'NORWEGIAN_NYNORSK',
  OCCITAN: 'OCCITAN',
  OJIBWA: 'OJIBWA',
  ORIYA: 'ORIYA',
  OROMO: 'OROMO',
  OSSETIAN_OSSETIC: 'OSSETIAN_OSSETIC',
  PALI: 'PALI',
  PERSIAN: 'PERSIAN',
  POLISH: 'POLISH',
  PORTUGUESE: 'PORTUGUESE',
  PUNJABI: 'PUNJABI',
  PUSHTO: 'PUSHTO',
  QUECHUA: 'QUECHUA',
  RAETO_ROMANCE: 'RAETO_ROMANCE',
  ROMANIAN: 'ROMANIAN',
  RUNDI: 'RUNDI',
  RUSSIAN: 'RUSSIAN',
  SAMOAN: 'SAMOAN',
  SANGO: 'SANGO',
  SANSKRIT: 'SANSKRIT',
  SARDINIAN: 'SARDINIAN',
  SERBIAN: 'SERBIAN',
  SERBO_CROATIAN: 'SERBO_CROATIAN',
  SHONA: 'SHONA',
  SINDHI: 'SINDHI',
  SINHALESE: 'SINHALESE',
  SLAVIC: 'SLAVIC',
  SLOVAK: 'SLOVAK',
  SLOVENIAN: 'SLOVENIAN',
  SOMALI: 'SOMALI',
  SOTHO: 'SOTHO',
  SPANISH: 'SPANISH',
  SUNDANESE: 'SUNDANESE',
  SWAHILI: 'SWAHILI',
  SWATI: 'SWATI',
  SWEDISH: 'SWEDISH',
  TAGALOG: 'TAGALOG',
  TAHITIAN: 'TAHITIAN',
  TAJIK: 'TAJIK',
  TAMIL: 'TAMIL',
  TATAR: 'TATAR',
  TELUGU: 'TELUGU',
  THAI: 'THAI',
  TIBETAN: 'TIBETAN',
  TIGRINYA: 'TIGRINYA',
  TONGA: 'TONGA',
  TSWANA: 'TSWANA',
  TURKISH: 'TURKISH',
  TURKMEN: 'TURKMEN',
  TWI: 'TWI',
  UIGHUR: 'UIGHUR',
  UKRAINIAN: 'UKRAINIAN',
  URDU: 'URDU',
  UZBEK: 'UZBEK',
  VENDA: 'VENDA',
  VIETNAMESE: 'VIETNAMESE',
  WALLOON: 'WALLOON',
  WELSH: 'WELSH',
  WOLOF: 'WOLOF',
  XHOSA: 'XHOSA',
  YI: 'YI',
  YIDDISH: 'YIDDISH',
  YORUBA: 'YORUBA',
  ZULU: 'ZULU'
});

exports.DivorcedReason = makeEnum({
  ANNULLED: 'ANNULLED',
  DIVORCE: 'DIVORCE',
  DIED: 'DIED'
});

exports.PersonRelation = makeEnum({
  HUSBAND: 'HUSBAND',
  WIFE: 'WIFE'
});

exports.Prisma.ModelName = makeEnum({
  Collection: 'Collection',
  Video: 'Video',
  Image: 'Image',
  Season: 'Season',
  Review: 'Review',
  Person: 'Person',
  MovieOnPerson: 'MovieOnPerson',
  PersonFact: 'PersonFact',
  MovieFact: 'MovieFact',
  Movie: 'Movie'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
