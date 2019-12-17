// 0 : sima
// 1 : A sima
// 2 : tárgyeset
// 3 : A tárgyeset
// 4 : valvel
// 5 : A valvel
// 6 : naknek
// 7 : A naknek
// 8 : banben
// 9 : A banben
// 10 : tobbes
// 11 : A tobbes
// 12 : birtokos ( e/1 )
// 13 : A birtokos

var blackCards = [
  ["_! csukd már be _!", [0, 3]],
  ["_! tolni kéne!", [0]],
  ["_, gyere má'!", [0]],
  ["_ mi van?", [5]],
  ["_ biztos mondtam!", [7]],
  ["_ azért jobban ki kéne tesztelni!", [3]],
  ["_ még ellenőrizni kell!", [3]],
  ["_ ne kommitáljunk már fel!", [2]],
  ["_ végig tudnám vezetni rajta!", [3]],
  ["_ se húznának be oda!", [4]],
  ["_ mit adnak?", [9]],
  ["_ ne másoljuk!", [3]],
  ["_ elbírja!", [1]],
  ["_ sokkal nagyobb cég!", [1]],
  ["az a jó _, hogy _ is!", [9, 0]],
  ["_ nem _!", [1, 0]],
  ["_ van amúgy _!", [9, 0]],
  ["elvesztettem _!", [3]],
  ["ez _ is el lett baszva!", [1]],
  ["ez amúgy _, BTW!", [0]],
  ["ezek _!", [10]],
  ["ezek _ mindent ellopnak!", [11]],
  ["ezt _ eszed?", [3]],
  ["ezt lehet _ is hívni, de... de...", [6]],
  ["használtál már _?", [2]],
  ["hát ez _-related!", [0]],
  ["hát így legyen _!", [12]],
  ["hozz egy _!", [2]],
  ["itt _ folyik!", [0]],
  ["kié _?", [1]],
  ["le kéne vinni _!", [3]],
  ["megnézem, mit csinálnak _!", [11]],
  ["mennyire áll közel hozzád _?", [1]],
  ["mocsok _!", [10]],
  ["most épp _ vannak nálam!", [10]],
  ["nem is értem, mi az _?!", [1]],
  ["nincs egy szem _ se!", [0]],
  ["nincs meg _!", [1]],
  ["no, _!", [10]],
  ["öt ilyen _ van!", [0]],
  ["szóljatok _ is!", [7]],
  ["ülj le! hoztál _ és _?", [2, 2]],
  ["tapossátok _!", [3]],
  ["ti szeretitek _? pfff!", [3]],
  ["tudnék szerezni _, de akkor kirúgnának!", [2]],
  ["van egy _ a Mentor-nál!", [12]],
  ["van egy _ az ST-nél!", [12]],
  ["verjük őket, mint _!", [3]],
];