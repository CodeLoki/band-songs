enum StartsWith {
    All,
    RhythmGuitar,
    Drums,
    DrumsAndKeys,
    LeadGuitar,
    LeadAndVocals,
    DrumsAndBass,
    DrumsAndGuitar,
    Bass,
    Guitars,
    Vocals,
    Keys,
    Trumpet
}

export enum DrumPad {
    None = -1,
    Cowbell,
    Claps,
    Tambourine,
    BellTree,
    China
}

export type Song = {
    artist: string;
    title: string;
    length: number;
    startsWith: StartsWith;
    groove?: string;
    notes?: string;
    pad?: DrumPad;
};

export enum SongNames {
    ThreeAm = 'j8yerF895U1c3emLxTC3',
    AboutAGirl = 'xNxsZBFG01nApypAeUMS',
    Alive = 'WXYO7ulD5e05FRgEyMQ1',
    AmericanGirl = 'cgAnNVyMZ4L3Os7NiEgR',
    BadLuck = 'RTTo3CbX25NArkYLJdUh',
    BallChain = 'g0DxICThf2LY8LaDhbm0',
    Banditos = '15lM4hURODPzNHSdBkAm',
    Birthday = 'MZ6lzWxvuOrkSp9HNUwZ',
    BoulevardOfBrokenDreams = 'RltKvbVrdyMeC2I3hvaP',
    ClosingTime = 'JOCtJYruYNoPcSEFwHNP',
    Creep = '5NIgEKD3I3OHIb5731nj',
    Cryin = 'oVCud0v6S7yYGTa81lKq',
    DancingWithMyself = 'HiBdjUoT5MWpPNSZ4ayk',
    December = 'FRnvC1RqPXQsqW2lOzRQ',
    DontChange = 'b6bZvVDBVzHmxvo9VSlu',
    DontGoBackToRockville = 'Q9lzgEnwesJKS7m8Ghip',
    EnterSandman = 'vk2uTTQadNJbHupGB3gC',
    Everlong = 'ygRI8N1bF1ediMQrF5qC',
    FlagpoleSitter = 'aNe9IQMtjtGC9xjemBEq',
    FloatOn = '0DA2VOOoBTKNmBVbkULX',
    GalwayGirl = '17yJ99awE2yRakS77hcS',
    GetOffThis = '2fmKSAJSQVSGZ27oHEjz',
    Godzilla = 'f53Ryw2whDkLxzL96u0Z',
    Good = 'FOmqBZcMP3xCE4JjAAHs',
    HardToHandle = 'qoKh6i7Rx44rRQmaFC0D',
    HashPipe = 'qY9zx3OOf1YVYVW8MeOl',
    HeyHeyWhatCanIDo = 'ZqoKUOTmwgUmWNCpFIjs',
    HeyJealousy = 'hc4ZyG2Tp7BND19uDdEo',
    HeyYa = 'mwo2imUh2XqUQ2Vyc50i',
    Holiday = 'EdenmM9y4rDCBgsTMT29',
    HonkyTonkWoman = 'bea1nwQcNtWlAVp5Hn4g',
    IGotYou = 'UtWW4hW2Ns9YRrOHDhdC',
    IWillFollow = 'OwQQiLvJAvSe3XIReweY',
    IWillSurvive = 'MXGaPBkBvJXsDCfuRndh',
    IWontBackDown = 'vI1UTVdRWlYukJsmDPwM',
    InsideOut = 'PRuymiIxV28fOrlqbTCZ',
    IntoYourArms = 'mrdfhUBgdwUdylLjvhTd',
    IslandInTheSun = 'GOnQBOBo6GB3thbsdGi0',
    JealousAgain = '6GxBCyPOIZB7avSwBhpX',
    Jenny8675309 = 'IrvkfRJ0BLQHeZXJ5Ae9',
    JessiesGirl = 'F4lyHfzQUyDOZIrHBmjk',
    Jumper = '9EsjwyUSQrZqscCSyzup',
    JustLikeHeaven = 'ZubsNIEQQJ5IOv3bwgUz',
    JustWhatINeeded = '9Aho5pofSoHMISkRVUYZ',
    KeepOnRockinInTheFreeWorld = 'vhRT2uHJBoIdfpE4ix6A',
    KeepYourHandsToYourself = 'KxLvuz4VZicnoNtvTh8A',
    Laid = 'gEAX4xguSYXii6G6GrU4',
    LearnToFly = '6fv0rWUJNxYq3EwZpk4S',
    LearningToFly = 'LUZH6kKd698y3zVYeCT7',
    Linger = '5Qpz6MXWrp4hg947vhRa',
    LipsLikeSugar = 'yB03VfgeJWFKXJj4Q5my',
    LonelyBoy = 'KXZYtgN5oPik5JHTEPiX',
    LongWayToTheTop = 'Yeny3VEXgiU5qnK4uVUj',
    Malibu = 'heHQc4susSXKQGFRZUtr',
    MaryJanesLastDance = 'ZknudyfwwsY4RZI1Ll9j',
    MustangSally = 'MX1KprJxdAQYZ8as4faJ',
    MyOwnWorstEnemy = '1KZFDYoyGO3G8m5YXzuf',
    NeverLetYouGo = 'A40uVJMPyN2zXOEdxB4q',
    Peaches = 'Q15lwAXVRNlab4i3phPZ',
    Plush = 'ktZ9gJEoyrZlzlq68GGc',
    PossumKingdom = 'kNPllOVztroEeYrbgKj9',
    PrettyInPink = 'z002g7lExwoNvIhEmfTE',
    PumpItUp = '5DldO4t2Ld7MXUi4CDtz',
    RadioFreeEurope = 'nxnNnZY0hbKmKuIM4ZjD',
    RaspberryBeret = 'TyQEUxthq4acGMQmUbtt',
    RingOfFire = 'JeXmL2njh1itf0nrfd3x',
    RunningDownADream = 'SdVDLFa09fgZGW2WKmLI',
    SaveItForLater = 'uwfltyf1KppXDQ8nddDy',
    SayItAintSo = '9NDnGJh939m45hrOqnLg',
    SheSellsSanctuary = 'f4C69Eo60lj2k5jSaPzX',
    Shine = 'v61sbtJ9R2nX9ccSTSaM',
    ShortSkirtLongJacket = 'Ar1mEx8HDggkX5uBMEkG',
    ShouldIStayOrShouldIGo = 'r9EtSZnbEVxGzYsI7DM6',
    SnowDay = 'jZ4g4VqdQ8a5srIXF2Of',
    SoLonely = 'swZknOTEqJ51K7lUweB6',
    SoWhatchaWant = 'XHdUseiHgIhkGNh8TKl8',
    Song2 = 'uaS3N3Mjg6VyGr1H1uMt',
    StacysMom = 'k3DiH9Lw1v48vcW8l4t5',
    SteadyAsSheGoes = '6wACShUAxMzZ1aFettWl',
    StuckInTheMiddleWithYou = 'rLqHBSvI3QIGQRsixFEU',
    SundayBloodySunday = '62wpujVdoiNKE39U7Hi8',
    SweetHomeAlabama = 'obyt4ljansYL54FVc7hg',
    TalkDirtyToMe = '5b4dIrS1WvqwmyOL83Ep',
    TeenAngst = '5osi0AKsYEXulbyrRoPb',
    TheMiddle = 'mELVfGdWNzhgVOtaZrer',
    TheOldApartment = 'ufwCzYwv7u7sM59NZ2xT',
    ThereSheGoes = 'wU7bH7yq9l4WdsBREANF',
    TrainInVain = 'XOJUalSC9tqMkLrzMi59',
    Vertigo = 'dFOOIDE4R1ddLMAzSbgs',
    WantedDeadOrAlive = 'djO1RzR8AoLMS9kWHffi',
    WerewolvesOfLondon = 'rdgEZSMkP3N0nAYd1gwU',
    WhatILikeAboutYou = 'nf1Q1UJG2LQQyLApohg4',
    WhatsUp = 'cumhLWPECMSUorsiOv9e',
    WhiskeyInTheJar = 'IzRMdEyUC3MSRHsl7rLk',
    YouDontKnowHowItFeels = 'AFLHHrpnS636VQi4K8wh',
    YouShookMeAllNightLong = 'm1oSJqy92hUTZjCwdUdp',
    YouWreckMe = 'RQtzddnBXP0blmrd2RoJ',
    ThreeStrangeDays = 'Y1Ruisr4wD7tjyxItJLy'
}

const AllSongs = new Map<SongNames, Song>();
export default AllSongs;

const fn = (id: SongNames, song: Song) => AllSongs.set(id, song);

fn(SongNames.AboutAGirl, {
    artist: 'Nirvana',
    title: 'About a Girl',
    startsWith: StartsWith.RhythmGuitar,
    length: 168,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=About%20a%20Girl&Author=Nirvana&Tempo=139&Measures=6&H=|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O---------O-|----O-------O---|----O---------O-|&K=|o-----o-o-----o-|o-----o-o-----o-|o-----o-o-----o-|o-----o---o-----|o-----o-o-------|o-o---o---o-----|'
});

fn(SongNames.Good, {
    artist: 'Better Than Ezra',
    title: 'Good',
    startsWith: StartsWith.All,
    length: 184,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Good&Author=Better%20Than%20Ezra&Tempo=110&Measures=6&H=|r-r-r-r-r-r-r-r-|r-r-r-r-r-c-r-c-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|r-r-r-r-r-r-r-r-|r-r-r-r-r-c-r-c-|&S=|----O-------O---|----O-----O---O-|----O-------O---|----O-------O---|----O-------O---|----O-----O---O-|&K=|o-----o-o-------|o-----o-o---o---|o-o-----o-o-----|o-o-----o-o-----|o-o-----o-o-----|o-o-----o---o---|'
});

fn(SongNames.LearnToFly, {
    artist: 'Foo Fighters',
    title: 'Learn to Fly',
    startsWith: StartsWith.DrumsAndGuitar,
    length: 245,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Learn%20to%20Fly&Author=Foo%20Fighters&Tempo=149&Measures=4&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-o-s-x-|x-x-x-x-x-o-s-x-|&S=|----O-------O---|----O-------O---|----O-----O-----|----O-----O-----|&K=|o-----o---o---o-|o-----o---o---o-|o-----o-o-----o-|o-----o-o-----o-|',
    pad: DrumPad.Tambourine
});

fn(SongNames.FlagpoleSitter, {
    artist: 'Harvey Danger',
    title: 'Flagpole Sitter',
    startsWith: StartsWith.All,
    length: 218,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=12&Title=Flagpole%20Sitta&Author=Harvey%20Danger&Tempo=145&Measures=6&H=|------------|------------|o--o--o--o--|o--o--o--o--|------------|------------|&S=|------------|OOOOOOOOOOOO|---O-----O--|---O-----O-O|---O-O---O-O|---O-O---O-O|&K=|------------|------------|o-----o-o---|o-----o-o---|o--o--o--o--|o--o--o--o--|&T1=|------------|------------|------------|------------|------------|------------|&T4=|------------|------------|------------|------------|o-o---o-o---|o-o---o-o---|'
});

fn(SongNames.Plush, {
    artist: 'Stone Temple Pilots',
    title: 'Plush',
    startsWith: StartsWith.All,
    length: 314,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Plush&Author=Stone%20Temple%20Pilots&Comments=2x%2C%201x%2C%202x%20(silent)%2C%202x&Tempo=72&Measures=8&H=|c-o-o-o-o-o-o-o-|o-o-o-o-oss-o---|c-x-o-x-x-x-x-x-|x-x-o-x-x-x-o---|c-rrrrrcrrrrrrrr|c-rrrrrcrrrr----|c-x-o-x-x-x-o-x-|x-x-o-x-x-x-o---|&S=|----O-------O---|----O-------O-OO|----O-------O---|----O-------O-OO|----O-------O--O|----O-------O-OO|----O-------O---|----O-------O-OO|&K=|o-o---o--oo-----|o-o---o--oo-----|o-o---o---o-----|o-o---o--oo-----|o-o----o--o--o--|o-o----o--o--o--|o-oo--o-o-oo----|o-oo--o-o-oo----|&T1=|----------------|----------------|----------------|----------------|----------------|------------o-o-|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|',
    pad: DrumPad.China,
    notes: '2x, 1x, 2x (silent), 2x'
});

fn(SongNames.Alive, {
    artist: 'Pearl Jam',
    title: 'Alive',
    startsWith: StartsWith.LeadGuitar,
    length: 341,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Alive&Author=Pearl%20Jam&Tempo=76&Measures=8&H=|c-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|c-x-x-o-x-x-x-x-|x-x-x-o-x-x-x-x-|crrrrrrrrrrrrrrr|rrrrrrrrrrrrrrrr|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|O--O--O--O----O-|O--O--O--O----O-|&K=|o--o--o---oo---o|o--o--o---oo---o|o--o--o---oo---o|o--o--o---oo---o|o-o----oo-o----o|o-o----oo-o----o|-oo----oo---o--o|-oo----oo---o--o|'
});

fn(SongNames.BallChain, {
    artist: 'Social Distortion',
    title: 'Ball & Chain',
    startsWith: StartsWith.RhythmGuitar,
    length: 344,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=12&Title=Ball%20and%20Chain&Author=Social%20Distortion&Tempo=134&Measures=6&H=|------------|r-rr-rr-rr-r|r-rr-rr-rr-r|r-rr-rr-rr-r|c-rr-rr-rr-r|r-rr-rr-rr-r|&S=|---------f--|---O-----O--|---O-----O--|---O-----O-O|---O-----O--|---O-----O--|&K=|--------o---|o----o--o--o|o----o--o--o|o----o--o---|o----o--o--o|o----o--o--o|'
});

fn(SongNames.Banditos, {
    artist: 'The Refreshments',
    title: 'Banditos',
    startsWith: StartsWith.LeadAndVocals,
    length: 258,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Banditos&Author=The%20Refreshments&Tempo=147&Measures=6&H=|r-r-r-r-r-r-r-r-|x-x-x-x-x-x-x-x-|o---o---o---o---|o---o---o---o---|----------------|----------------|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-o-----o-o-----|o-o-----o-o-----|o---------o---o-|----------o---o-|o---o---o---o---|o---o---o---o---|&T1=|----------------|----------------|----------------|----------------|----------------|--------------oo|&T4=|----------------|----------------|----------------|----------------|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o---|'
});

fn(SongNames.Creep, {
    artist: 'Radiohead',
    title: 'Creep',
    startsWith: StartsWith.All,
    length: 239,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Creep&Author=Radiohead&Tempo=92&Measures=10&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-c-|----------------|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|--O-O-----O-O---|O---O---OOOO----|----------------|----------------|----x-------x---|----x-------x---|&K=|o------oo-o---o-|o------oo-o-----|o------oo-o---o-|o------oo-o---o-|o-----o-o-------|----------------|o-------------o-|o-------------o-|o------oo-o---o-|o------oo-o---o-|&T1=|----------------|----------------|----------------|----------------|----------------|-o----o-----oooo|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.DancingWithMyself, {
    artist: 'Generation X',
    title: 'Dancing With Myself',
    startsWith: StartsWith.Drums,
    length: 291,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Dancing%20with%20Myself&Author=Generation%20X&Tempo=176&Measures=6&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-c-x-x-x-x-x-|x-x-c-x-x-x-x-x-|----------------|----------------|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|f---------------|------------f---|&K=|o-------o-------|o-------o-------|o-------o-------|o-------o-------|----------------|----------------|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.December, {
    artist: 'Collective Soul',
    title: 'December',
    startsWith: StartsWith.RhythmGuitar,
    length: 247,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=December&Author=Collective%20Soul&Tempo=122&Measures=8&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|----------------|----------------|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----------------|----------------|----------------|------------O---|----O-------O---|----O-------O---|&K=|o-------o-------|o-------o-----o-|----------------|----------------|o-------------o-|o---------------|o-------------o-|o-------------o-|&T1=|----------------|----------------|----o-----o-o---|----o-----o-o---|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|------o-o-------|------o-o-----o-|----------------|----------------|----------------|----------------|'
});

fn(SongNames.EnterSandman, {
    artist: 'Metallica',
    title: 'Enter Sandman',
    startsWith: StartsWith.DrumsAndGuitar,
    length: 332,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Enter%20Sandman%20&Author=Metallica&Comments=1x,%202x,%203x,%201x,%200x&Tempo=123&Measures=10&H=|----------------|----------------|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-c-|o-o-o-o-o-o-o-c-|o-o-o-o-o-o-o-c-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-c-|x-x-x-x-x-x-x-c-|&S=|----------------|----------------|----O-------O---|----O-------O---|--------O-------|--------O-------|----O-------O---|----O-------O---|----O---------O-|----O-------O---|&K=|o---o---o---o---|o---o---o---o---|o-------o-------|o-------o-----o-|--------------o-|--------------o-|--------o-------|o-------o-o-----|o-------o---o---|o-------o-o---o-|&T1=|----o-------o-o-|----o-------o-o-|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|',
    notes: '1x, 2x, 3x, 1x, 0x'
});

fn(SongNames.Everlong, {
    artist: 'Foo Fighters',
    title: 'Everlong',
    startsWith: StartsWith.RhythmGuitar,
    length: 251,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Everlong&Author=Foo%20Fighters&Tempo=158&Measures=6&H=|xxxxXxxxxxxxXxxx|xxxxXxxxxxxxXxxx|xxxx-xxxxxxx-xxx|xxxx-xxxxxxx-xxx|xxxx-xxxxxxx-xxx|xxxx-xxxxxxx-xxx|&S=|----------------|----------------|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|----------------|----o-------o---|o---o---o---o---|o---o---o-o-o---|o-------o-o---o-|--o-----o-o---o-|'
});

fn(SongNames.Godzilla, {
    artist: 'Blue Oyster Cult',
    title: 'Godzilla',
    startsWith: StartsWith.Drums,
    length: 222,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Godzilla&Author=Blue%20Oyster%20Cult&Tempo=92&Measures=8&H=|----------------|----------------|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----------------|----------OOOOOO|----O-------O---|----O--g-g--O---|----O-------O---|----O-------O---|----O----g--O---|----O----g--O---|&K=|o---o---o---o---|o---o---o---o---|o-------o-o-----|o-o-----o-o-----|o-o-----o-o-----|o-o-----o-o-----|o---------o-----|o-o-------o-----|'
});

fn(SongNames.HeyHeyWhatCanIDo, {
    artist: 'Led Zepplin',
    title: 'Hey, Hey, What Can I Do?',
    startsWith: StartsWith.LeadGuitar,
    length: 237,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Hey%2C%20Hey%2C%20What%20Can%20I%20Do&Author=Led%20Zeppelin&Tempo=78&Measures=6&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-c---|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O-O-|----O-------O---|----O-------O---|----O-------O-O-|----O-------O---|----O----O--O-O-|&K=|o--o---oo--o----|o--o---o-o-o----|o--o---o--o----o|o-o----o-o-o----|o--o---o--o----o|o-o----o---o----|'
});

fn(SongNames.HeyYa, {
    artist: 'Super Suckers',
    title: 'Hey Ya!',
    startsWith: StartsWith.Vocals,
    length: 247,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Hey%20Ya!&Author=OutKast&Tempo=160&Measures=4&H=|x---x---x---x---|x---x---x---x---|----------------|----------------|&S=|----O-------O---|----O-------O---|----f-------f---|----f-------f---|&K=|o-----o---o-----|o-----o---o-----|o-----o---o-----|o-----o---o-----|'
});

fn(SongNames.HonkyTonkWoman, {
    artist: 'The Rolling Stones',
    title: 'Honky Tonk Woman',
    startsWith: StartsWith.Drums,
    length: 180,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Honky%20Tonk%20Woman&Author=The%20Rolling%20Stones&Tempo=115&Measures=6&H=|----------------|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----------O-----|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|----------------|o---------o---o-|o---------o---o-|o---------o---o-|o-----o-o-----o-|o-----o-o-o---o-|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|--------------o-|----------------|----------------|----------------|----------------|----------------|',
    pad: DrumPad.Cowbell
});

fn(SongNames.IWillFollow, {
    artist: 'U2',
    title: 'I Will Follow',
    startsWith: StartsWith.LeadGuitar,
    length: 218,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=I%20Will%20Follow&Author=U2&Tempo=155&Measures=8&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x---------|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x---------|&S=|----O-------O---|----O-----O---O-|----O-------O---|----O---OOO-OOO-|O---O-------O---|O---O-------O---|O---O-------O---|----O---OOO-OOO-|&K=|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|'
});

fn(SongNames.InsideOut, {
    artist: 'Eve 6',
    title: 'Inside Out',
    startsWith: StartsWith.LeadAndVocals,
    length: 220,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Inside%20Out&Author=Eve%206&Tempo=88&Measures=10&H=|----------------|--------o---o---|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-o-|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|----------------|----------------|&S=|----------------|----------------|----O-------O---|----O-------OO--|----O-------O---|----O-------OO-O|----O--O-O--O--O|----O--O-O--O--O|----O-------O---|----O-------O---|&K=|----------------|----------------|o-o----oo-o-----|o-o----oo-o-----|o-o----oo-o-----|o------o--o-----|o-oo----o-oo----|o-oo----o-oo----|----------------|----------------|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|--o-o-----o-o---|--o-o-----o-o---|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|oo-o-ooooo-o-ooo|oo-o-ooooo-o-ooo|'
});

fn(SongNames.IntoYourArms, {
    artist: 'The Lemonheads',
    title: 'Into Your Arms',
    startsWith: StartsWith.RhythmGuitar,
    length: 165,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Into%20Your%20Arms&Author=The%20Lemonheads&Tempo=124&Measures=4&H=|----------------|----------------|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-o-----o-o-----|o-o-----o-o-----|o-o-----o-o-----|o-o-----o-o-----|&T1=|----------------|--------------oo|----------------|----------------|&T4=|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o---|----------------|----------------|'
});

fn(SongNames.JealousAgain, {
    artist: 'The Black Crowes',
    title: 'Jealous Again',
    startsWith: StartsWith.LeadGuitar,
    length: 276,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Jealous%20Again&Author=Black%20Crowes&Tempo=114&Measures=10&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-c-x-x-x-c-|x-x-x-c-x-x-x-c-|x-x-x-x-x-x-x-x-|x---x---x---x---|x---x---x---x---|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------f---|----------------|----O-----------|----O-------O---|----O-------O---|&K=|o-----o-o-------|o-----o-o-------|o-------o-o-----|o-o---o---o---o-|--o---o---o---o-|--o-----o-o---o-|o-------------o-|o-------------o-|o-------o-------|o-------o-------|'
});

fn(SongNames.Jenny8675309, {
    artist: 'Tommy Tutone',
    title: 'Jenny (867-5309)',
    startsWith: StartsWith.LeadGuitar,
    length: 227,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=867-5309%20%2F%20Jenny&Author=Tommy%20Tutone&Tempo=138&Measures=6&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-c-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-c-x-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-c-r-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-----o-o-------|o-----o-o-------|o-------o-o-----|o-------o-o-----|o-------o-o-----|o-------o-o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.JustLikeHeaven, {
    artist: 'The Cure',
    title: 'Just Like Heaven',
    startsWith: StartsWith.DrumsAndBass,
    length: 242,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Just%20Like%20Heaven&Author=The%20Cure&Tempo=151&Measures=10&H=|----------------|----c-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-c-x-x-c-c-x-|x-x-c-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x---|----c-x-x-x-x-x-|&S=|----------------|----O-------O---|----O-------O---|----O-------O---|----O-----O-O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|----------------|--o-----o-o---o-|--o-----o-o---o-|o-------o-o---o-|--o-----o-----o-|o-o-----o-o---o-|--o-----o-o---o-|o-------o-o---o-|--o-----o-o-----|--o-----o-o---o-|&T1=|--------------oo|----------------|----------------|----------------|----------------|----------------|----------------|----------------|--------------oo|----------------|&T4=|----------------|o---------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|o---------------|'
});

fn(SongNames.LonelyBoy, {
    artist: 'Black Keys',
    title: 'Lonely Boy',
    startsWith: StartsWith.LeadGuitar,
    length: 194,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=8&Title=Lonely%20Boy&Author=The%20Black%20Keys&Tempo=166&Measures=4&H=|--------|--------|xxxxxxxx|xxxxxxxx|&S=|--OO--O-|--OO--O-|--OO--O-|--OO--O-|&K=|o---o---|o---o---|o---o---|o---o---|&T1=|--------|--------|--------|--------|&T4=|oooooooo|oooooooo|--------|--------|'
});

fn(SongNames.Malibu, {
    artist: 'Hole',
    title: 'Malibu',
    startsWith: StartsWith.All,
    length: 231,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Malibu&Author=Hole&Tempo=122&Measures=10&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|----c-r-r-r-r-c-|r-r-r-r-r-r-r-r-|c-r-r-r-r-r-r-c-|r-r-r-r-r-r-r-r-|x-x-x-x-x-x---x-|x-x-x-x-x-x---x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O--OO---O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-----------|----O-----------|&K=|o-------o-o---o-|--o-----o-o---o-|o-------o-o---o-|--o-------------|o-o-----o-o---o-|--o-----o-o---o-|o-------o-o---o-|--o-----o-o---o-|o-------o-o---o-|o-------o-o---o-|&T1=|----------------|----------------|----------------|----------o-----|----------------|----------------|----------------|----------------|------------o---|------------o---|&T4=|----------------|----------------|----------------|--------------o-|----------------|----------------|----------------|----------------|------------o---|------------o---|'
});

fn(SongNames.MaryJanesLastDance, {
    artist: 'Tom Petty',
    title: 'Mary Janes Last Dance',
    startsWith: StartsWith.LeadGuitar,
    length: 274,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Mary%20Jane%27s%20Last%20Dance&Author=Tom%20Petty&Tempo=85&Measures=2&H=|o-x-x-x-x-o-x-x-|o-x-x-x-x-o-x-x-|&S=|----O-------O---|----O-------O---|&K=|o-------o-o-----|o-------o-o-----|'
});

fn(SongNames.MyOwnWorstEnemy, {
    artist: 'Lit',
    title: 'My Own Worst Enemy',
    startsWith: StartsWith.LeadGuitar,
    length: 170,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=My%20Own%20Worst%20Enemy&Author=Lit&Tempo=103&Measures=8&H=|o---o---o---o---|o---o---o---o---|x---x---x---x---|x---x---x-c-c---|x---x---x---x---|x---x---x---x---|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|&S=|----O--O----O--O|----O--O--f---f-|----O--O----O--O|----O--O--------|----O--O----O--O|----O--O--f---f-|----O-------O---|----O-------O---|&K=|o-o-----o-o-----|o-o-----o---o---|o-o-----o-o-----|o-o-----o-o-o---|o-o-----o-o-----|o-o-----o---o---|o-------o-o-----|o-------o-o-----|'
});

fn(SongNames.Peaches, {
    artist: 'Presidents of the United States',
    title: 'Peaches',
    startsWith: StartsWith.LeadGuitar,
    length: 172,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Peaches&Author=Presidents%20of%20the%20United%20States&Tempo=94&Measures=6&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O--O----O--O|----O--O----O--O|----O-------O---|----O-------O---|----O-------O-b-|----O-------O-b-|&K=|o-oo----o-oo----|o-oo----o-oo----|o-o----o--o-----|o-o----o--o-----|o-o---o-o-o-----|o-o---o-o-o-----|'
});

fn(SongNames.PossumKingdom, {
    artist: 'The Toadies',
    title: 'Possum Kingdom',
    startsWith: StartsWith.RhythmGuitar,
    length: 309,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Possum%20Kingdom&Author=Toadies&Tempo=101&Measures=9&H=|x-x-x-x-x-x-x-x-|x-x-x-x-c-x-----|x-x-x-x-x-x-x-x-|x-x-x-x-c-x-c-x-|x-x-c-x-x-x-c-x-|x-x-c-x-x-x-c-x-|x-x-x-x-x-x-x-x-|x-x-x-x-o-x-----|c---c---c---c---|&S=|----O-------O---|----O-----O-----|----O-------O---|----O-----O---O-|----O--O----O--O|----O--O----O--O|-O--O----O--O---|-O--O-----O-----|O---O---O---O---|&K=|o-o-----o-o-----|o-o-----o-------|o-o-----o-o-----|o-o-----o---o---|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|o-oo----o-oo----|o-oo----o-------|--o---o---o---o-|'
});

fn(SongNames.PrettyInPink, {
    artist: 'Psychedelic Furs',
    title: 'Pretty In Pink',
    startsWith: StartsWith.Drums,
    length: 239,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Pretty%20in%20Pink&Author=The%20Psychedelic%20Furs&Tempo=136&Measures=6&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|----------------|----------------|----------------|c---------------|&S=|----O-------O---|----O-------O---|----f-----------|----f-----------|f---f---f-------|----------------|&K=|o-------o-o-----|o-------o-o-----|o-----o-o-------|o-----o-o-------|--o---o---o-----|----------------|&T1=|----------------|----------------|------------o---|------------o---|------------o---|----------------|&T4=|----------------|----------------|------------o---|------------o---|------------o---|----------------|'
});

fn(SongNames.RadioFreeEurope, {
    artist: 'REM',
    title: 'Radio Free Europe',
    startsWith: StartsWith.Drums,
    length: 246,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Radio%20Free%20Europe&Author=REM&Tempo=155&Measures=10&H=|x---x---x---c---|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-o-x-o-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-b-x-x-|x-x-x-x-x-b-x-x-|&S=|O---O---O---O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|--O-O---O---O-O-|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o---o---o---o---|o-------o-------|o-------o-------|o-------o-------|o-------o-------|o-------o-------|o-------o-o-----|o-------o-o-----|o-----o---o-----|o-----o---o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.SheSellsSanctuary, {
    artist: 'Cult',
    title: 'She Sells Sanctuary',
    startsWith: StartsWith.LeadGuitar,
    length: 253,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=She%20Sells%20Sanctuary&Author=The%20Cult&Tempo=139&Measures=6&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-----|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|----------------|&S=|----O-------O---|----O-----OO--OO|----------------|----------------|----------------|f-----f-----f---|&K=|o-------o-------|o-------o-------|o---o---o---o---|o---o---o---o---|o---o---o---o---|--o-o---o-o-----|'
});

fn(SongNames.Shine, {
    artist: 'Collective Soul',
    title: 'Shine',
    startsWith: StartsWith.RhythmGuitar,
    length: 307,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Shine&Author=Collective%20Soul&Tempo=150&Measures=10&H=|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x-------|x---x---x---x---|x---x---x---c---|c---r---r---r---|r---r---r---r---|&S=|--------O-------|--------O-------|--------O-------|--------O---O---|--------O-------|----O---O-------|--------O-------|----O---O-------|--------O-------|--------O-------|&K=|o-------------o-|--o-------------|o-------------o-|--o-------------|o-------------o-|----------------|o-------------o-|------------o---|o-------------o-|--------------o-|'
});

fn(SongNames.ShouldIStayOrShouldIGo, {
    artist: 'The Clash',
    title: 'Should I Stay, or Should I Go?',
    startsWith: StartsWith.LeadGuitar,
    length: 189,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Should%20I%20Stay%20or%20Should%20I%20Go&Author=The%20Clash&Tempo=113&Measures=6&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|----------------|----------------|&S=|----O-------O---|----O-------O---|--O---O---O---O-|--O---O---O---O-|--O---f---O---f-|--O---f---O---f-|&K=|o-----o-o-------|o-----o-o-----o-|o----o--o----o--|o----o--o----o--|o----o--o----o--|o----o--o----o--|&T1=|----------------|----------------|----------------|----------------|oo-o----oo-o----|oo-o----oo-o----|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.Song2, {
    artist: 'Blur',
    title: 'Song 2',
    startsWith: StartsWith.Drums,
    length: 122,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Song%202&Author=Blur&Tempo=130&Measures=6&H=|x-x-x-x-x-x-x---|x-x-x-x-x-x-x---|c-o-o-o-o-o-o-o-|o-o-o-o-o-o-c---|c---o-o-o-o-o-o-|o-o-o-o-o-o-c---|&S=|----O-------O---|----O-------O-O-|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-------o-o-----|o-o---o---o-----|o-------o-o-----|o-o---o---o-----|o-------o-o-----|o-o---o---o-----|&T1=|--------------o-|--------------o-|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.StacysMom, {
    artist: 'Fountains of Wayne',
    title: "Stacy's Mom",
    startsWith: StartsWith.LeadGuitar,
    length: 198,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Stacy%27s%20Mom&Author=Fountains%20of%20Wayne&Tempo=118&Measures=8&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|x-x-x-x-x-x-x-x-|x-x-x-x-x-------|c-o-o-o-o-o-o-o-|c-c-c-c-c---X---|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|&S=|----O-------O---|----O-------O-O-|----O-------O---|----O--O----f---|----O-------O---|----------------|----O-------O---|----O-------O---|&K=|o-------o-------|o-------o-------|o-o-----o-o-----|o-o-----o-o---o-|o-------o-o-----|o-o-o-o-o-------|o-o---o---o---o-|--o-----o-o-----|',
    pad: DrumPad.Claps
});

fn(SongNames.TheMiddle, {
    artist: 'Jimmy Eat World',
    title: 'The Middle',
    startsWith: StartsWith.LeadGuitar,
    length: 226,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=The%20Middle&Author=Jimmy%20Eat%20World&Tempo=162&Measures=10&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x---|----c-x-x-x-x-x-|x-x-x-x-x-x-x---|----c-x-x-x-x-x-|x-x-x-x-x-x-x---|----c-------c---|----c-----------|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-----O-O-O-|&K=|o-------o-------|o-------o-----o-|o-------o-------|o-------o-------|o-------o-----o-|--o-----o-o-----|o-o-----o-----o-|--o-----o-o-----|o-o-----o-o-----|o-o-----o-------|&T1=|----------------|----------------|----------------|--------------oo|----------------|--------------oo|----------------|--------------oo|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.TrainInVain, {
    artist: 'The Clash',
    title: 'Train in Vain',
    startsWith: StartsWith.Drums,
    length: 195,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Train%20in%20Vain&Author=The%20Clash&Tempo=123&Measures=6&H=|x-x-x-x-x-x-x-o-|x-x-x-x-x-x-x-o-|c-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|c---------------|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|------------f---|&K=|o-------o-o-----|o-------o-o-----|o-------o-o-----|o-------o-o-----|o-------o-o-----|o---------o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.Vertigo, {
    artist: 'U2',
    title: 'Vertigo',
    startsWith: StartsWith.Drums,
    length: 194,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Vertigo&Author=U2&Tempo=140&Measures=8&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|----------------|----------------|c-x-x-x-x-x-x-c-|x-x-x-x-x-x-x-x-|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O-O-|----O-------O---|----O-------O---|O-----O-----O---|--O-----O---O---|&K=|o-------o-o-----|o-------o-o-----|o-----o-o-------|o-----o-o-------|o-------o-o---o-|--o-----o-o---o-|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|----------------|----------------|----------------|----------------|'
});

fn(SongNames.WantedDeadOrAlive, {
    artist: 'Bon Jovi',
    title: 'Wanted, Dead or Alive',
    startsWith: StartsWith.DrumsAndKeys,
    length: 309,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Wanted%20Dead%20or%20Alive&Author=Bon%20Jovi&Tempo=150&Measures=6&H=|----------r-r---|----------r-r---|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|c-x-x-c-x-x-x-x-|x-x-x-c-x-x-x-x-|&S=|----------------|----------------|----x-------x---|----x-------x---|----O-------O---|----O-------O---|&K=|o-----o-o-------|o-----o-o-------|o-----o---o-----|o-----o---o-----|o-----o---o-----|o-----o---o---oo|',
    pad: DrumPad.BellTree
});

fn(SongNames.WerewolvesOfLondon, {
    artist: 'Warren Zevon',
    title: 'Werewolves of London',
    startsWith: StartsWith.Drums,
    length: 219,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Werewolves%20of%20London&Author=Warren%20Zevon&Tempo=104&Measures=4&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-------o-----o-|o-----o---o---o-|o-o-----o-o-----|o-o-----o-o-----|&T1=|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|'
});

fn(SongNames.WhatILikeAboutYou, {
    artist: 'The Romantics',
    title: 'What I Like About You',
    startsWith: StartsWith.LeadGuitar,
    length: 176,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=What%20I%20Like%20About%20You&Author=The%20Romantis&Tempo=160&Measures=4&H=|x---x---x---x---|x---x---x---x---|c---r---r---r---|r---r---r---r---|&S=|----O-------O---|----O-------O---|----O-O-----O---|----O-O-----O---|&K=|o-----o-o-----o-|o-----o-o-----o-|o-------o-------|o-------o-------|',
    pad: DrumPad.Claps
});

fn(SongNames.YouShookMeAllNightLong, {
    artist: 'AC/DC',
    title: 'You Shook Me All Night Long',
    startsWith: StartsWith.LeadGuitar,
    length: 211,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=You%20Shook%20Me%20All%20Night%20Long&Author=AC%2FDC&Tempo=127&Measures=10&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c---c-x-x-x-x-x-|x-x-c---x-------|x-x-x-x-x---x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-c-|x-o-x-c-x-o-x-c-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-----f-----|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O---O-------|----O-------O---|&K=|o---------o-----|o---------o-----|o-------o-------|o-------o-------|o-------o-o-----|------o-------o-|--o-----o-----o-|------o-------o-|--o-------o---o-|--o---o---o---o-|&T1=|----------------|----------------|----------------|------------o---|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|--------------o-|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.AmericanGirl, {
    artist: 'Tom Petty',
    title: 'American Girl',
    startsWith: StartsWith.LeadGuitar,
    length: 215,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=American%20Girl&Author=Tom%20Petty&Tempo=114&Measures=4&H=|x-x-x-x-x-x-o-x-|x-x-x-x-x-x-o-x-|x-x-x-x-x-o-x-x-|x-x-x-x-x-o-x-x-|&S=|--O---O---O---O-|--O---O---O---O-|------------O---|------------O---|&K=|o--o-o------o---|o--o-o------o---|o--o--o---------|o--o--o---------|'
});

fn(SongNames.IWontBackDown, {
    artist: 'Tom Petty',
    title: "I Won't Back Down",
    startsWith: StartsWith.All,
    length: 179,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=I%20Won%27t%20Back%20Down&Author=Tom%20Petty&Tempo=114&Measures=4&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-c-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|O-O-O-O-----O---|&K=|o-------o-------|o-------o-------|o-------o-------|o-o-o-o-o-------|&T1=|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|'
});

fn(SongNames.RunningDownADream, {
    artist: 'Tom Petty',
    title: 'Running Down a Dream',
    startsWith: StartsWith.LeadGuitar,
    length: 292,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Running%20Down%20a%20Dream&Author=Tom%20Petty&Tempo=168&Measures=4&H=|x---x---x---x---|x---x---x---x---|x---x---x---x---|x---x---x---x---|&S=|----O-------O---|----O-------O---|O-----O-----O---|--O-----O---O-O-|&K=|o-------o-------|o-------o-------|----o-----o-----|o-----o---------|&T1=|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|'
});

fn(SongNames.YouDontKnowHowItFeels, {
    artist: 'Tom Petty',
    title: "You Don't Know How it Feels",
    startsWith: StartsWith.All,
    length: 290,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=You%20Don%27t%20Know%20How%20it%20Feels&Author=Tom%20Petty&Tempo=80&Measures=6&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-o-----o-o-----|o-o-----o-o-----|o-------o-------|o-------o-------|o-------o-o-----|o-------o-o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.YouWreckMe, {
    artist: 'Tom Petty',
    title: 'You Wreck Me',
    startsWith: StartsWith.LeadGuitar,
    length: 203,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=You%20Wreck%20Me&Author=Tom%20Petty&Tempo=164&Measures=4&H=|x---x---x---x---|x---x---x---x---|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----------------|------------f---|----O-------O---|----O-------O---|&K=|----------------|----------------|o-------o-------|o-------o-------|&T1=|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|'
});

fn(SongNames.HashPipe, {
    artist: 'Weezer',
    title: 'Hash Pipe',
    startsWith: StartsWith.All,
    length: 187,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Hash%20Pipe&Author=Weezer&Tempo=126&Measures=10&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|c---c---c---c---|c---c---c---c---|c---c---c---c---|c---c---c---c---|c---c---x---x---|x---x---x---x---|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r---|&S=|----O-------O---|----O-------O---|----O---O-O-----|--O-----O---O---|----O--O----O--O|----O--O----O--O|----O---O---O---|O---O---O---O---|----O--o-o--O---|----O--O-O--O---|&K=|o-o-----o-o-----|o-o-----o-o-----|o-o---------o-o-|----o-o---------|o-o-----o-o-----|o-o-----o-o-----|o-o---o---o---o-|--o---o---o---o-|o-o-----o-o-----|o-o-----o-o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|--------------oo|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.IslandInTheSun, {
    artist: 'Weezer',
    title: 'Island in the Sun',
    startsWith: StartsWith.Bass,
    length: 201,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Island%20in%20the%20Sun&Author=Weezer&Tempo=115&Measures=8&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-c-x-|c---c---c---c---|c---c---c---c---|c---c---c---c---|c---c---c---c---|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-------o-------|o-------o-o---o-|o-------o-------|o-------o-o---o-|o-------o-------|o-------o-o-----|o-------o-------|o-------o-o-----|'
});

fn(SongNames.SayItAintSo, {
    artist: 'Weezer',
    title: "Say it Ain't So",
    startsWith: StartsWith.LeadGuitar,
    length: 259,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Say%20It%20Ain%27t%20So&Author=Weezer&Tempo=77&Measures=10&H=|r---r---r---r---|r---r---r---r---|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-c---------|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----------------|----------------|----O-------O---|----O-------O---|----O-------O---|----O-----------|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|----------------|----------------|o-----o---o-----|o-----o---o-----|o-----o---o-----|o-----o---------|o-----o---o-----|o-----o---o-----|o-----o---o-----|o-----o---o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.GalwayGirl, {
    artist: 'Steve Earle',
    title: 'Galway Girl',
    startsWith: StartsWith.Guitars,
    length: 305
});

fn(SongNames.SnowDay, {
    artist: 'Convertible Jerk',
    title: 'Snow Day',
    startsWith: StartsWith.LeadGuitar,
    length: 240
});

fn(SongNames.SaveItForLater, {
    artist: 'English Beat',
    title: 'Save it for Later',
    startsWith: StartsWith.LeadGuitar,
    length: 214
});

fn(SongNames.ThreeAm, {
    artist: 'Matchbox 20',
    title: '3AM',
    startsWith: StartsWith.RhythmGuitar,
    length: 226,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=3AM&Author=Matchbox%2020&Tempo=108&Measures=10&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----x---x---x---|x---x---x---x---|----O-------O---|----O-------O---|------------O---|------------O---|----O-------O---|----O-------O---|&K=|o--o--o---o---o-|o--o--o---o---o-|o-------------o-|o---------------|o--o--o---o---o-|o--o--o---o---o-|o-----o---------|o-----o---------|o-------o-o---o-|--------o-o---o-|'
});

fn(SongNames.BadLuck, {
    artist: 'Social Distortion',
    title: 'Bad Luck',
    startsWith: StartsWith.RhythmGuitar,
    length: 265,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Bad%20Luck&Author=Social%20Distortion&Tempo=125&Measures=8&H=|----------------|----------------|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|c-x-x-x-x-x-x-x-|x-x-c-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x---------|&S=|----------------|----O-------f---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O---f---f---|&K=|----------------|o-o-o-o-o-o---o-|o-----o-o-----o-|o-----o-o-o---o-|o-----o-o-----o-|o-----o-o-o---o-|o-----o-o-----o-|o-----o---o---o-|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.Birthday, {
    artist: 'The Beatles',
    title: 'Birthday',
    startsWith: StartsWith.Drums,
    length: 164,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Birthday&Author=The%20Beatles&Tempo=139&Measures=4&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|O---O---O---O---|O---O---O---O---|O-O-O-O-O-O-O-O-|&K=|o-------o-o-----|o---o---o---o---|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|'
});

fn(SongNames.BoulevardOfBrokenDreams, {
    artist: 'Greenday',
    title: 'Boulevard of Broken Dreams',
    startsWith: StartsWith.Drums,
    length: 164,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Boulevard%20of%20Broken%20Dreams&Author=Green%20Day&Tempo=84&Measures=8&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|----------------|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----------------|----O-------O---|----O-------O---|----O-------O---|&K=|o-------o-o-----|o-------o-o-----|o-o-----o-o-----|o-o-----o-o-----|o-o-----o-o-----|o-o---o-o-o---o-|o-o---o-o-o---o-|o-o---o-o-o---o-|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|o-o-----o-o-----|----------------|----------------|----------------|'
});

fn(SongNames.ClosingTime, {
    artist: 'Semisonic',
    title: 'Closing Time',
    startsWith: StartsWith.RhythmGuitar,
    length: 274,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Closing%20Time&Author=Semisonic&Tempo=92&Measures=6&H=|c-x-x-x-x-o-x-x-|c-x-x-x-x-o-x-x-|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|&S=|----O--g-g--O---|----O--g-g--O---|----O--g-g--O---|----O--g-g--O---|----x-------x---|----x-------x---|&K=|o---------o-----|o---------o-----|o---------o-----|o---------o-----|o--o--o--oo---o-|o--o--o--oo---o-|'
});

fn(SongNames.DontGoBackToRockville, {
    artist: 'REM',
    title: "Don't go back to Rockville",
    startsWith: StartsWith.Drums,
    length: 274,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Don%27t%20Go%20Back%20to%20Rockville&Author=REM&Tempo=152&Measures=8&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-o-x-o-|c---r---r-r---r-|r---r---r-r---c-|c---------------|--------------o-|x-x-o-x-x-x-o-x-|x-x-o-x-x-x-o-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----------------|----------------|----------------|----O---O-O-O-O-|&K=|o-----o-o-------|o-----o-o-------|o-----o-o-------|o-----o-o-------|o-----o-o-------|o-----o-o-------|o-----o-o-------|o-----o-o-------|'
});

fn(SongNames.FloatOn, {
    artist: 'Modest Mouse',
    title: 'Float On',
    startsWith: StartsWith.DrumsAndKeys,
    length: 209,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Float%20On&Author=Modest%20Mouse&Tempo=101&Measures=10&H=|x-x-o-x-x-x-o-x-|x-x-o-x-x-x-o-x-|xxxxxxxxxxxxxxxx|xxxxxxxxxxox-xxx|xxxxxxxxxxxxxxxx|xxxxxxxxxxox-xox|xxxxxxxxxxxxxxxx|xxxxxxxxxxxxxxxx|xxxxxxxxxxxxxxxx|xxxxxxxx-xx-xx--|&S=|----O-------O---|----O-------O---|----------------|------------O---|----------------|------------O---|----------------|----------------|----------------|--------O--O--OO|&K=|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o-----o-o-------|o-----o-o-------|o-----o-o-------|o-----o-o-------|'
});

fn(SongNames.GetOffThis, {
    artist: 'Cracker',
    title: 'Get Off This',
    startsWith: StartsWith.All,
    length: 266,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Get%20Off%20This&Author=Cracker&Tempo=108&Measures=1&H=|x-x-x-x-x-x-x-x-|&S=|----O-------O---|&K=|o-o----o-o------|'
});

fn(SongNames.Holiday, {
    artist: 'Greenday',
    title: 'Holiday',
    startsWith: StartsWith.LeadGuitar,
    length: 240,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=12&Title=Holiday&Author=Green%20Day&Tempo=147&Measures=10&H=|------------|------------|------------|c--c--------|c--x--x--x--|x--x--x--x--|x--x--x--x--|x--x--x--x--|x--x--x--x--|------------|&S=|---O-----O--|---O-----O--|---O-----O--|O--O--OOOOOO|---O-O---O-O|---O-O---O-O|---O-O---O-O|---O----O--O|---O-O---O-O|f--------O--|&K=|o--o--o--o--|o--o--o--o--|o--o--o--o--|o--o--o--o--|o--o--o--o--|o--o--o--o--|o--o--o--o--|o--o--o--o--|o--o--o-oo--|------------|&T1=|------------|------------|------------|------------|------------|------------|------------|------------|------------|------------|&T4=|o--o-oo--o-o|o--o-oooo-oo|o--o-oo--o-o|------------|------------|------------|------------|------------|------------|------------|'
});

fn(SongNames.IGotYou, {
    artist: 'Split Enz',
    title: 'I Got You',
    startsWith: StartsWith.RhythmGuitar,
    length: 210,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=I%20Got%20You&Author=Split%20Enz&Tempo=126&Measures=6&H=|----------------|--------------o-|----------------|----------------|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|&S=|----------------|O-O-O-O-O-O-O-O-|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o---o---o---o---|o---o---o---o---|o-------o-------|o-------o-------|o-o-----o-o-----|o-o-----o-o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|----------------|----------------|'
});

fn(SongNames.IWillSurvive, {
    artist: 'Cake',
    title: 'I Will Survive',
    startsWith: StartsWith.LeadGuitar,
    length: 310,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=I%20Will%20Survive&Author=Cake&Tempo=96&Measures=4&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-o-----o-o-----|o-o-----o-o-----|o-o-----o-o-----|o-o-----o-o-----|'
});

fn(SongNames.JessiesGirl, {
    artist: 'Rick Springfield',
    title: "Jessie's Girl",
    startsWith: StartsWith.LeadGuitar,
    length: 195,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Jessies%20Girl&Author=Rick%20Springfield&Tempo=132&Measures=10&MetronomeFreq=4&H=|----------------|----------------|----------------|----------------|c-x-x-x-x-x-x-x-|x-x-x-x-x-------|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|x-------x-------|x-------x-------|&S=|----------------|----------------|----------------|----------------|----O-------O---|----O---O-------|----O-------O---|----O-----O-O---|----------------|----------------|&K=|----------------|o-------o-------|o-------o-------|o-o-o-o-o-o-o-o-|o-------o-o-----|o-------o-------|o-------o-------|o-------o-------|----------------|----------------|&T1=|----------o-o---|----o-------o-o-|----o-----o-o---|----------------|----o-------o---|----o---o-------|----------------|----------------|----o-------o-o-|----o-------o-o-|&T4=|--------------o-|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|----------------|----------------|----------------|----------------|----o-------o-o-|----o-------o-o-|'
});

fn(SongNames.JustWhatINeeded, {
    artist: 'The Cars',
    title: 'Just What I Needed',
    startsWith: StartsWith.LeadGuitar,
    length: 226,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Just%20What%20I%20Needed&Author=The%20Cars&Tempo=127&Measures=8&H=|----------------|----------------|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-c-x-x-x-x-|c-x-x-c-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----f-------f---|----f-------f---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|O-------O-------|O-------O---O---|&K=|----------------|----------------|o-o-----o-o-----|o-o-----o-o-----|o-o---o-------o-|o-----o-------o-|--o-o-o---o-o-o-|--o-o-o---o-o-o-|'
});

fn(SongNames.KeepYourHandsToYourself, {
    artist: 'The Georgia Satellites',
    title: 'Keep Your Hands to Yourself',
    startsWith: StartsWith.LeadGuitar,
    length: 205,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=8&Title=Keep%20Your%20Hands%20to%20Yourself&Author=The%20Georgia%20Satellites&Tempo=115&Measures=4&H=|xxxxxxxx|xxxxxxxx|xxxxxxxx|xxxxxxxx|&S=|--O---O-|--O---O-|--O---O-|--O---O-|&K=|o---oo--|o---oo-o|o---oo--|o---oo-o|'
});

fn(SongNames.Laid, {
    artist: 'James',
    title: 'Laid',
    startsWith: StartsWith.Guitars,
    length: 157,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Laid&Author=James&Tempo=116&Measures=6&H=|----------------|----------------|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x---|x-x-x-x-x-x-x-x-|x-o-x-o-x-o-x-o-|&S=|OOOOOOOOOOOOOOOO|OOOOOOOOOOOOOOOO|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|&T1=|----------------|----------------|----------------|--------------o-|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.LearningToFly, {
    artist: 'Foo Fighters',
    title: 'Learning to Fly',
    startsWith: StartsWith.LeadGuitar,
    length: 183,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Learning%20to%20Fly&Author=Tom%20Petty&Tempo=117&Measures=8&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-------|x-x-x-x---------|----------------|xxxxx-----------|--xxxx----------|&S=|----O-------O---|----O-------O---|----O-------O---|----O-----O-O-O-|----O-------O---|----O-------O---|------OO--OO--OO|O---------O-O-O-|&K=|o-------o-------|o-------o-------|o-------o-------|o-------o-------|o-------o-------|o-------o-------|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|--------o---o---|----------------|&T4=|----------------|----------------|----------------|----------------|--------o-o-o-o-|o-o-o-o-o-o-o-o-|----------------|----------------|'
});

fn(SongNames.LongWayToTheTop, {
    artist: 'AC/DC',
    title: 'Long Way to the Top',
    startsWith: StartsWith.LeadGuitar,
    length: 302,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Long%20Way%20to%20the%20Top&Author=AC%2FDC&Tempo=136&Measures=7&H=|----------------|----------------|c-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|----x-------x---|----------------|x-x-x-x-x-x-x-x-|&S=|----------------|-----------OO---|----O-------O---|----O-------O---|----------------|----f-------f---|----O-------O---|&K=|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|----------------|----------------|o---o---o---o---|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.NeverLetYouGo, {
    artist: 'Third Eye Blind',
    title: 'Never Let You Go',
    startsWith: StartsWith.RhythmGuitar,
    length: 238,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Never%20Let%20You%20Go&Author=Third%20Eye%20Blind&Tempo=113&Measures=10&H=|----------------|--------c-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-------|&S=|--------------O-|O---O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----------------|----------O-O-O-|&K=|----------------|--------o-o-----|o-------o-o-----|o------oo-o-----|o-------o-o-----|o------oo-o-----|o-------o-o---o-|o------oo-o-----|o---o---o---o---|o---o---o---o---|&T1=|----------------|--o-------------|----------------|----------------|--------------o-|----------------|----------------|----------------|----------------|----------o-o-o-|&T4=|----------------|------o---------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.PumpItUp, {
    artist: 'Elvis Costello',
    title: 'Pump it Up',
    startsWith: StartsWith.All,
    length: 197,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Pump%20It%20Up&Author=Elvis%20Costello&Tempo=139&Measures=4&H=|----------------|----------------|c-c-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|O---O---O---O---|O---O---O---O---|&K=|o-------o-o-----|o-------o-o-----|--o---o---o---o-|--o---o---o---o-|&T1=|----------------|----------------|----------------|----------------|&T4=|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|----------------|----------------|'
});

fn(SongNames.RaspberryBeret, {
    artist: 'Hindu Love Gods',
    title: 'Raspberry Beret',
    startsWith: StartsWith.Drums,
    length: 235,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Raspberry%20Beret&Author=Hindu%20Love%20Gods&Tempo=125&Measures=10&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-c-x-c-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|O---O---O---O---|O---O---O---O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-------o-o-----|o-------o-o-----|o---------o---o-|o---------o---o-|o-------o-o-----|o-------o-o-----|o-------o-o-----|o-------o-o-----|o-----o-o-------|o-----o-o-------|'
});

fn(SongNames.KeepOnRockinInTheFreeWorld, {
    artist: 'Neil Young',
    title: "Keep on Rockin' in the Free World",
    startsWith: StartsWith.All,
    length: 282,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Rockin%27%20in%20the%20Free%20World&Author=Neil%20Young&Tempo=132&Measures=10&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-c-|c-r-r-r-r-r-r-r-|r-r-r-r-r-r-r---|----------------|----------------|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-----O-O---|----------------|----------------|&K=|o-------o-o-----|o-------o-o-----|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|----------------|----------------|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.ShortSkirtLongJacket, {
    artist: 'Cake',
    title: 'Short Skirt / Long Jacket',
    startsWith: StartsWith.Trumpet,
    length: 205,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Short%20Skirt%20%2F%20Long%20Jacket&Author=Cake&Tempo=120&Measures=8&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-------|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|m---m---m---m---|m---m---m---m---|m---------------|----------------|&S=|----O-------O---|----O-----------|----O-------O---|----O-------O---|----O-------O---|----O-------O---|O---------------|----------------|&K=|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o-----o---o---o-|o---------------|----------------|&T1=|----------------|----------ooo-o-|----------------|----------------|----------------|----------------|----------------|----------ooo-o-|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.SteadyAsSheGoes, {
    artist: 'The Raconteurs',
    title: 'Steady as She Goes',
    startsWith: StartsWith.Drums,
    length: 206,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Steady%20as%20She%20Goes&Author=The%20Raconteurs&Tempo=124&Measures=10&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-o-x-|x-x-x-x-x-x-o-x-|c---c---c---c---|c---c---c---c---|&S=|----O-------O---|----O-------O---|----------------|----------------|----O-------O---|----O-------O---|----O-----O-----|----O-----O-----|----O--g----O---|----O--g----O---|&K=|----------------|----------------|o-----o-o-----o-|o-----o-o---o---|o-----o-o-----o-|o-----o-o---o---|o-----o-o-----o-|o-----o-o-----o-|o-------o-o---o-|o-------o-o-----|'
});

fn(SongNames.StuckInTheMiddleWithYou, {
    artist: 'Steelers Wheel',
    title: 'Stuck in the Middle With You',
    startsWith: StartsWith.RhythmGuitar,
    length: 209,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Stuck%20in%20the%20Middle%20with%20You&Author=Stealers%20Wheel&Tempo=124&Measures=8&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|xxxxxxxxxxxxxxxx|xxxxxxxxxxxxxxxx|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|----b-------b---|----b-------b---|&S=|----O-------O-O-|----O-------O-O-|----O-------O-O-|----O-------O-O-|----O-------O-O-|----O-------O-O-|----------------|----------------|&K=|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|----------------|----------------|',
    pad: DrumPad.Cowbell
});

fn(SongNames.TalkDirtyToMe, {
    artist: 'Poison',
    title: 'Talk Dirty to Me',
    startsWith: StartsWith.LeadGuitar,
    length: 224,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=24&Title=Talk%20Dirty%20To%20Me&Author=Poison&Tempo=158&Measures=10&H=|------------------------|c-----x-----x-----x-----|x-----x-----x-----x-----|x-----x-----x-----x-----|x-----x-----x-----x-----|x-----c-----x-----x-----|x-----x-----x-----x-----|x-----x-----x-----x-----|x-----x-----x-----c-----|c-----------------------|&S=|f--------f--------f-----|------O-----------O-----|------O-----------O-----|------O-----------O-----|------O-----------O-----|------O-----------O-----|------O-----------O-----|------O-----------O-----|------O-----------O-----|------f-----------f-----|&K=|---o--o-----o--o--------|o--------o-----o--------|o--------o-----o--------|o--o--------o--o--------|o--o-----o-----o--------|o--------------o--------|o--------------o--------|o--o-----------o-----o--|o--------------o--------|o-----------------------|&T1=|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|&T4=|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|------------------------|'
});

fn(SongNames.TeenAngst, {
    artist: 'Cracker',
    title: 'Teen Angst',
    startsWith: StartsWith.DrumsAndGuitar,
    length: 224,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Teen%20Angst&Author=Cracker&Tempo=157&Measures=4&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-----O-O-O-|&K=|o-------o-o-----|o-------o-o-----|o-------o-o-----|o-------o-------|'
});

fn(SongNames.TheOldApartment, {
    artist: 'Barenaked Ladies',
    title: 'The Old Apartment',
    startsWith: StartsWith.All,
    length: 210,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=The%20Old%20Apartment&Author=Barenaked%20Ladies&Tempo=80&Measures=8&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|r-r-r-r-r-r-r-r-|r-r-r-r-r-r-r-r-|x-x-x-x-x-o-x-x-|x-x-x-x-x-o-x-x-|x-x-x-x-x-x-x-x-|x-x-----x-x-----|&S=|----O-------O---|----O-------O---|----O--O----O--O|----O--O----O--O|----O----O--O---|----O----O--O---|----O-------O---|----OOOO----f---|&K=|o-o-----o-o-----|o-o-----o-o-----|o-o------oo-----|o-o------oo-----|o-oo----o-o-----|o-oo----o-o-----|o-o-----o-o-----|o-o-----o-o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|-------------oo-|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|----------------|---------------o|'
});

fn(SongNames.ThereSheGoes, {
    artist: "The La's",
    title: 'There She Goes',
    startsWith: StartsWith.RhythmGuitar,
    length: 163,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=There%20She%20Goes&Author=The%20La%27s&Tempo=123&Measures=6&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|x-x-x-x-x-x-x-o-|&S=|----O-O-----O---|----O-O-----O---|----O-O-----O---|--O-O-O-O-O-O-O-|----O-------O---|----O-------O---|&K=|o-------o-----o-|o-------o-----o-|o-------o-----o-|--o-o-o-o-o-o-o-|o-----o-o-------|o-----o-o-------|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----------------|'
});

fn(SongNames.WhiskeyInTheJar, {
    artist: 'Metallica',
    title: 'Whiskey in the Jar',
    startsWith: StartsWith.RhythmGuitar,
    length: 305,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Whiskey%20in%20the%20Jar&Author=Metallica&Tempo=133&Measures=7&H=|c-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|c---o-o-o-o-o-o-|--o---o---o-----|o-o-o-o-o-o-c---|o-o-o-o-o-o-c---|--------c---c---|&S=|----O-------O---|----O-------O---|----O-O-----O---|----------------|------------O---|------------O---|O---O-----------|&K=|o-------o-------|o-------o-----o-|o-------o-----o-|--o---o---o---o-|o-o-----o-o-----|o-o-----o-o-----|--o---o-o---o---|&T1=|----------------|----------------|----------------|----------------|----o-o---------|----------------|----------------|&T4=|----------------|----------------|----------------|----------------|----------------|----o-o---------|----------------|'
});

fn(SongNames.SoWhatchaWant, {
    artist: 'The Record Company',
    title: "So What'cha Want",
    startsWith: StartsWith.RhythmGuitar,
    length: 212,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=24&Title=So%20What%27cha%20Want&Author=The%20Record%20Company&Tempo=85&Measures=2&H=|------------------------|------c-----------------|&S=|------O-----------O-----|------O-----------O-----|&K=|o--o--------o--o--------|o--o--------o--o--------|&T1=|--o--o--------o--o------|--o--o--------o--o------|&T4=|o--o--o--o--o--o--o--o--|o--o-----o--o--o--o--o--|'
});

fn(SongNames.WhatsUp, {
    artist: '4 Non Blondes',
    title: "What's Up?",
    startsWith: StartsWith.RhythmGuitar,
    length: 296,
    groove: `https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=What's%20Up&Author=4%20Non%20Blondes&Tempo=67&Measures=4&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-rrrrrrrrrrrrrr|rrrrrrrrrrrrrrrr|&S=|----x-------x---|----x-------x---|----O-------O---|----O-------O---|&K=|o--o---oo--o---o|o--o---oo--o---o|o-o----oo-oo---o|o-o----oo-oo---o|`
});

fn(SongNames.LipsLikeSugar, {
    artist: 'Echo and the Bunnymen',
    title: 'Lips Like Sugar',
    startsWith: StartsWith.DrumsAndGuitar,
    length: 292,
    groove: `https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Lips%20Like%20Sugar&Author=Echo%20and%20the%20Bunnymen&Comments=bell%20tree&Tempo=130&Measures=6&H=|----------------|----------------|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|c-x-x-x-x-x-x-x-|x-x-x-x-x-------|&S=|----------------|----------O-O-O-|----O-------O---|----O-------O---|----O-------O---|----O-----OOOOOO|&K=|o---o---o---o---|o---o---o---o---|o-------o-------|o-------o-o---o-|o-------o-o-----|o-------o-o-----|&T1=|----------------|----------------|----------------|----------------|----------------|----------------|&T4=|o-o-o-o-o-o-o-o-|o-o-o-o-o-o-o-o-|----------------|----------------|----------------|----------------|`,
    pad: DrumPad.BellTree
});

fn(SongNames.HeyJealousy, {
    artist: 'Gin Blossoms',
    title: 'Hey Jealousy',
    startsWith: StartsWith.Bass,
    length: 237,
    groove: `https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Hey%20Jealousy&Author=Gin%20Blossoms&Tempo=153&Measures=4&H=|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o---------o---o-|--o-------o---o-|o---------o---o-|----------o---o-|`
});

fn(SongNames.MustangSally, {
    artist: 'Wilson Picket',
    title: 'Mustang Sally',
    startsWith: StartsWith.All,
    length: 185,
    groove: `https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Mustang%20Sally&Author=Wilson%20Pickett&Tempo=110&Measures=4&MetronomeFreq=4&H=|x-x-x-x-x-o-x-x-|x-x-x-x-x-o-x-x-|x-x-x-x-x-o-x-x-|x-x-x-x-x-o-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-------o-o-----|o---------o-----|o---------o-----|o-o-------o---o-|`
});

fn(SongNames.SundayBloodySunday, {
    artist: 'U2',
    title: 'Sunday, Bloody Sunday',
    startsWith: StartsWith.Drums,
    length: 279,
    groove: `https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Sunday%20Bloody%20Sunday&Author=U2&Tempo=100&Measures=8&MetronomeFreq=4&H=|--xx-xxxxxxxxx--|xxxxxx--xxxxxx--|xxxxxxxxxxxxxx-x|xxxxxxxxxxxxxx--|c-xxxxxxxxxxxx-x|c-xxxxxxxxxxxx--|--xx-xxxxxxx-x--|xxxx-x---xxx-x--|&S=|OO--O---------OO|------OO------OO|--------------O-|--------------OO|--------------O-|--------------OO|OO--O-------O-OO|----O-OOO---O-OO|&K=|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|o---o---o---o---|`
});

fn(SongNames.Linger, {
    artist: 'The Cranberries',
    title: 'Linger',
    startsWith: StartsWith.RhythmGuitar,
    length: 277,
    groove: `https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Linger&Author=The%20Cranberries&Tempo=94&Measures=6&MetronomeFreq=4&H=|XxxxXxxxXxxxoooo|Xxxx-xx-xx-xx---|c---------------|----------------|xxxxxxxxxxxxoooo|rrrrrrrrrr-r-r-r|&S=|----------------|----O--O--O--OOO|--ooOoooooooOooo|ooooOoooooooOooo|----------------|----------------|&K=|o-----o---------|o-----o---------|o------o--o-----|o------o--o-----|o-----o---------|o---------------|`
});

fn(SongNames.HardToHandle, {
    artist: 'The Black Crowes',
    title: 'Hard to handle',
    startsWith: StartsWith.Drums,
    length: 188,
    groove: `https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Hard%20to%20Handle&Author=The%20Black%20Crowes&Tempo=104&Measures=10&H=%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cc-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cc-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x---%7Cc---------------%7C----------------%7Cc-o-o-o-o-o-o-o-%7Cc--c--c---------%7C&S=%7C----O--O----O---%7C----O--O----O---%7C----O--O----O---%7C----O-------O---%7C----O-------O---%7C----O-------O-OO%7C----------------%7C-----------O----%7C----O-------O---%7C--O--O----------%7C&K=%7Co---------o-----%7Co---------o-----%7Co---------o-----%7Co------o--o-----%7Co-------o-o-----%7Co-------o-o-----%7Co---------------%7C----------------%7Co-------o-------%7Co--o--o---------%7C&T1=%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C------------o---%7C----------------%7C----------ooo---%7C&T4=%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C--------------oo%7C----------------%7C-------------oo-%7C`
});

fn(SongNames.RingOfFire, {
    artist: 'Social Distortion',
    title: 'Ring of Fire',
    startsWith: StartsWith.Guitars,
    length: 300,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Ring%20of%20Fire&Author=Social%20Distortion&Tempo=180&Measures=6&H=%7Cc---x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-c-----c---c---%7C----c-x-x-x-x-x-%7Cx-x-c-x-x-x-x-x-%7C&S=%7C----O-------O---%7C----O-------O---%7C----O-------O---%7C--O-----O---O---%7C----O-------O---%7C----O-------O---%7C&K=%7Co-------o-o-----%7Co-------o-o-----%7Co-------o-o-----%7Co---o-o---o-----%7Co-------o-o-----%7Co-------o-o---o-%7C'
});

fn(SongNames.DontChange, {
    artist: 'INXS',
    title: `Don't Change`,
    startsWith: StartsWith.Keys,
    length: 267,
    groove: "https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Don't%20Change&Author=INXS&Tempo=162&Measures=6&H=%7Cc-x-x-x-x-x-x-x-%7Cx-x-o-c-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7C&S=%7C----O-------O---%7C----O-O-----O---%7C------------O---%7C------------O---%7C----------------%7C----------------%7C&K=%7Co-------o-------%7Co-------o-------%7Co-------o-------%7Co-------o-------%7C----o-o-----o---%7C----o-o-----o---%7C&T1=%7C----------------%7C----------------%7C----o-o---------%7C----o-o---------%7C----------------%7C----------------%7C&T4=%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C"
});

fn(SongNames.Jumper, {
    artist: 'Third Eye Blind',
    title: 'Jumper',
    startsWith: StartsWith.RhythmGuitar,
    length: 277,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Jumper&Author=Third%20Eye%20Blind&Tempo=91&Measures=6&H=%7Cc---------------%7C----------------%7Cc-r-r-r-r-r-r-r-%7Cr-r-r-r-r-r-r-r-%7C----------------%7C----------------%7C&S=%7C----------------%7C----------------%7C----O-------O---%7C----O--g----O---%7C------------O---%7C------------O---%7C&K=%7Co---o---o---o---%7Co---o---o---o---%7Co---------o-----%7Co---------o-----%7Co---o---o---o---%7Co---o---o---o---%7C&T1=%7C-------------o--%7Co--------o--o---%7C----------------%7C----------------%7C-------o--------%7C-------o--------%7C&T4=%7C--o-o-o-o-o-o--o%7Co-o-o-o-o--oo--o%7C----------------%7C----------------%7Co-oo------oo-ooo%7Co-oo-----ooo-ooo%7C'
});

fn(SongNames.SoLonely, {
    artist: 'The Police',
    title: 'So Lonely',
    startsWith: StartsWith.Drums,
    length: 301,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=So%20Lonely&Author=The%20Police&Tempo=154&Measures=6&H=%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-x-x-%7Cx-x-x-x-x-x-c---%7Cc-r-r-r-r-r-r-r-%7C--c-------c-----%7C&S=%7C--------O-------%7C--------O-------%7C--------O-------%7C--O-----O---O---%7C----O-------O---%7CO-------f-------%7C&K=%7Co-------------o-%7Co-------------o-%7Co-------------o-%7Co---o-------o---%7Co-o---o-o-o---o-%7C--o---o---o---o-%7C&T1=%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C&T4=%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C----------------%7C'
});

fn(SongNames.SweetHomeAlabama, {
    artist: 'Lynyrd Skynyrd',
    title: 'Sweet Home Alabama',
    startsWith: StartsWith.RhythmGuitar,
    length: 290,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=16&Title=Sweet%20Home%20Alabama&Author=Lynyrd%20Skynyrd&Tempo=98&Measures=6&H=|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-o-|c-x-x-x-x-x-x-x-|x-x-x-x-x-x-xc--|x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-|&S=|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|----O-------O---|&K=|o-o----oo-o-----|o-o----oo-o-----|o-o-----o-o-----|o-o---o---o--o--|o-o-----o-o-----|o-o---o---o---o-|'
});

fn(SongNames.Cryin, {
    artist: 'Aerosmith',
    title: "Cryin'",
    startsWith: StartsWith.All,
    length: 302,
    groove: 'https://www.mikeslessons.com/groove/?Mode=view&TimeSig=4/4&Div=24&Title=Cryin%27&Author=Aerosmith&Tempo=86&Measures=4&H=|x-x-x-x-xxx-x-x-x-x-xxx-|x-x-x-x-xxx-x-x-x-x-xxx-|c-x-x-x-x-x-x-x-x-x-x-x-|x-x-x-x-x-x-x-x-x-x-x-x-|&S=|------O-----------O-----|------O-----------O-----|------O-----------O-----|------O-----------O-----|&K=|o---------o-o-----------|o---------o-o-----------|o---------o-o---------o-|o---------o-o---o-----o-|',
    pad: DrumPad.Tambourine
});
