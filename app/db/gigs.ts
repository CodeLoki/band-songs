import { collection, addDoc, doc, Timestamp, type DocumentReference } from 'firebase/firestore';
import { SongNames } from 'band-songs/songs';

import type FirestoreService from 'band-songs/services/firestore';
import type { Song } from './songs';

export type Gig = {
    date: Timestamp;
    venue: DocumentReference<{ description: string }>;
    one: DocumentReference<Song>[];
    two: DocumentReference<Song>[];
    pocket: DocumentReference<Song>[];
};

export async function seedDb(firestore: FirestoreService) {
    const { db } = firestore,
        fnGetSong = (id: SongNames) => doc(db, 'songs', id);

    try {
        await Promise.all(
            gigData.map(async ({ date, venue, one, two, pocket }) => {
                const ref = await addDoc(collection(db, 'gigs'), {
                    date: Timestamp.fromDate(date),
                    venue: doc(db, 'venues', venue),
                    one: await Promise.all(one.map(fnGetSong)),
                    two: await Promise.all(two.map(fnGetSong)),
                    pocket: await Promise.all(pocket.map(fnGetSong))
                });

                console.log('created', ref.id);
            })
        );
    } catch (ex) {
        console.error(ex);
    }
}

const gigData = [
    {
        date: new Date('2024-05-04T12:00:00.000Z'),
        venue: 'JHuzFkEnXbV3vGQzmUtR',
        one: [
            SongNames.HardToHandle,
            SongNames.FloatOn,
            SongNames.HeyHeyWhatCanIDo,
            SongNames.HonkyTonkWoman,
            SongNames.JealousAgain,
            SongNames.IWillFollow,
            SongNames.LonelyBoy,
            SongNames.MaryJanesLastDance,
            SongNames.Plush,
            SongNames.RingOfFire,
            SongNames.LipsLikeSugar,
            SongNames.StacysMom,
            SongNames.Shine
        ],
        two: [
            SongNames.StuckInTheMiddleWithYou,
            SongNames.WantedDeadOrAlive,
            SongNames.Banditos,
            SongNames.LearnToFly,
            SongNames.EnterSandman,
            SongNames.Godzilla,
            SongNames.Alive,
            SongNames.JustLikeHeaven,
            SongNames.SheSellsSanctuary,
            SongNames.Jenny8675309,
            SongNames.TheMiddle,
            SongNames.AmericanGirl,
            SongNames.WhatILikeAboutYou,
            SongNames.Song2,
            SongNames.YouShookMeAllNightLong
        ],
        pocket: [SongNames.Everlong, SongNames.JustWhatINeeded, SongNames.PossumKingdom, SongNames.GalwayGirl]
    },
    {
        date: new Date('2023-12-09T12:00:00.000Z'),
        venue: 'JHuzFkEnXbV3vGQzmUtR',
        one: [
            SongNames.Shine,
            SongNames.LonelyBoy,
            SongNames.Everlong,
            SongNames.JealousAgain,
            SongNames.HeyHeyWhatCanIDo,
            SongNames.LearnToFly,
            SongNames.HonkyTonkWoman,
            SongNames.BallChain,
            SongNames.MaryJanesLastDance,
            SongNames.PossumKingdom,
            SongNames.IWillFollow,
            SongNames.Good,
            SongNames.StacysMom,
            SongNames.PumpItUp,
            SongNames.Alive,
            SongNames.Plush
        ],
        two: [
            SongNames.StuckInTheMiddleWithYou,
            SongNames.Banditos,
            SongNames.WantedDeadOrAlive,
            SongNames.GalwayGirl,
            SongNames.AmericanGirl,
            SongNames.Godzilla,
            SongNames.WhatsUp,
            SongNames.EnterSandman,
            SongNames.SheSellsSanctuary,
            SongNames.ShouldIStayOrShouldIGo,
            SongNames.Vertigo,
            SongNames.TheMiddle,
            SongNames.WerewolvesOfLondon,
            SongNames.Jenny8675309,
            SongNames.JustLikeHeaven,
            SongNames.Song2,
            SongNames.WhatILikeAboutYou,
            SongNames.YouShookMeAllNightLong
        ],
        pocket: []
    },
    {
        date: new Date('2023-10-27T12:00:00.000Z'),
        venue: 'xuHe8p3AnSiojk2nZhoI',
        one: [
            SongNames.AboutAGirl,
            SongNames.Good,
            SongNames.LearnToFly,
            SongNames.FlagpoleSitter,
            SongNames.Plush,
            SongNames.IslandInTheSun,
            SongNames.GalwayGirl,
            SongNames.RunningDownADream,
            SongNames.RadioFreeEurope,
            SongNames.Vertigo,
            SongNames.JealousAgain,
            SongNames.MaryJanesLastDance,
            SongNames.MyOwnWorstEnemy
        ],
        two: [
            SongNames.HeyHeyWhatCanIDo,
            SongNames.BallChain,
            SongNames.Alive,
            SongNames.JustLikeHeaven,
            SongNames.TheMiddle,
            SongNames.Banditos,
            SongNames.HeyYa,
            SongNames.Godzilla,
            SongNames.SheSellsSanctuary,
            SongNames.DancingWithMyself,
            SongNames.WhatILikeAboutYou,
            SongNames.WerewolvesOfLondon,
            SongNames.ShouldIStayOrShouldIGo,
            SongNames.AmericanGirl,
            SongNames.YouShookMeAllNightLong
        ],
        pocket: [SongNames.SnowDay, SongNames.Malibu, SongNames.IWillFollow, SongNames.YouWreckMe]
    },
    {
        date: new Date('2023-08-19T12:00:00.000Z'),
        venue: 'JHuzFkEnXbV3vGQzmUtR',
        one: [
            SongNames.AboutAGirl,
            SongNames.RadioFreeEurope,
            SongNames.HeyHeyWhatCanIDo,
            SongNames.Plush,
            SongNames.Everlong,
            SongNames.PossumKingdom,
            SongNames.IWillFollow,
            SongNames.LonelyBoy,
            SongNames.IslandInTheSun,
            SongNames.PrettyInPink,
            SongNames.JealousAgain,
            SongNames.MyOwnWorstEnemy,
            SongNames.WantedDeadOrAlive
        ],
        two: [
            SongNames.Alive,
            SongNames.LearnToFly,
            SongNames.Shine,
            SongNames.Peaches,
            SongNames.Vertigo,
            SongNames.JustLikeHeaven,
            SongNames.EnterSandman,
            SongNames.GalwayGirl,
            SongNames.TheMiddle,
            SongNames.MaryJanesLastDance,
            SongNames.Good,
            SongNames.Song2,
            SongNames.Banditos,
            SongNames.Jenny8675309,
            SongNames.AmericanGirl,
            SongNames.WhatILikeAboutYou
        ],
        pocket: [SongNames.December, SongNames.YouWreckMe, SongNames.SaveItForLater, SongNames.RunningDownADream]
    }
];
