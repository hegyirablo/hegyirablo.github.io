var sections = [
	"a Bölcsőben nem adnak elvitelre semmit",
    "a footprint elbírja",
    "a Főzelékfalóban mit adnak (?)",
    "a Micron sokkal nagyobb cég",
    "a nyákterv elbírja",
    "AAAAAAAAAAJJJJJ",
    "az a jó a displayben, hogy gateway is",
    "ez az anyám lesz",
    "az egy szar",
    "az nem szimpatikus banda",
    "balfasz társaság",
    "clean checkout",
    "diszk",
    "dolgozni vagytok itt",
    "elvesztettem a törőt",
    "nem is értem mi az az egyenlő bánásmód",
    "én is ezzel a BKV jeggyel járok",
    "ez a barack parfümszagú",
    "ez a NYÁK is el lett baszva",
    "ez C-sín kalapsín",
    "ez cache related",
    "ez engem nem érint",
    "ez marketing szöveg",
    "ez nem szívügyem",
    "ez pikk-pakk megvan",
    "ezek a kínaiak mindent ellopnak",
    "ezek hegyirablók",
    "ezt a szart eszed (?)",
    "ezt azért jobban ki kéne tesztelni",
    "ezt lehet DIN sínnek is hívni",
    "ezt nem így szokták",
    "ezt így szokták",
    "ezt úgy szokták",
    "hova mentek kajálni (?)",
    "hozz egy széket",
    "huszonöt-ezer évente",
    "hát ezzel kezdtem",
    "hát így legyen lottó ötösöm",
    "hátháthát",
    "hívd ide Balázst is",
    "hülyeséget ne másoljuk",
    "Ildi majd beforrasztja",
    "itt komoly fejlesztő munka folyik",
    "jojojojojóóó",
    "kié ez a seed server (?)",
    "van egy androidos srác",
    "Kálmán gyere máááár",
    "Kínában ezért kitüntetnének",
    "Lacit előbb elengedjük",
    "le kéne vinni a szemetet",
    "már az elején tudtam, hogy el van baszva",
    "meg kell sózni",
    "megnézem mit csinálnak az Urak",
    "melyik a tied (?)",
    "mocsok Freescalesek",
    "mondtam, hogy kurvára ne engedjétek ki a Solid-ot a netre",
    "most clean-up-olok",
    "most épp vannak nálam",
    "na! Engedj ide",
    "nem tanulni vagytok itt",
    "nem tudod mi az a CRT nulla (?)",
    "nincs egy szem gyümölcs se",
    "nincs meg a technológiai fegyelem",
    "olyat nem rakok fel, ami nincs kipróbálva",
    "papír-ceruza",
    "szemetet ne komitáljunk fel",
    "szereti a könnyebbik végén megfogni a dolgokat",
    "száz lóval se húznának be oda",
    "Linuxon százhúsz mikroszek a taszkváltás",
    "szóljatok Ákosnak is",
    "tanulni vagytok itt",
    "tapossátok a lelküket",
    "ti szeretitek azt a helyet (?)",
    "tolni kéne",
    "tudnék szerezni, de akkor kirúgnának",
    "téged még ellenőrizni kell",
    "túl gyorsan akartam mondani",
    "valakinek biztos mondtam",
    "van egy kétezerhatos Solid licenszünk",
    "van egy haverom a Mentornál",
    "van egy haverom az ST-nél",
    "van egy haverom",
    "verjük őket mint a répát",
    "végig tudnálak vezetni rajta",
    "volt itt egy srác, de ... meghalt",
    "Zotya csukd már be az ablakot",
    "ZOTYAAAAAA",
    "Ákossal mi van (?)",
    "én negyven alatt nem megyek",
    "épp mondani akartam",
    "így kisebb zsákutcába megyünk be",
    "így kisebb öngólt rúgunk",
    "öt ilyen ember van",
    "( vedd fel a telefooooont )",
];

connectors = [
    "amúgy",
    "azaz",
    "azonban",
    "ámbár",
    "ámde",
    "bájdövéj",
    "bár",
    "de",
    "és egyébként is",
    "ezért",
    "és",
    "habár",
    "hiszen",
    "illetve",
    "illetőleg",
    "mert",
    "mindazonáltal",
    "mivel",
    "mivelhogy",
    "még annyit, hogy",
    "mégpedig",
    "pedig",
    "s",
    "sőt",
    "szóval",
    "tehát",
    "ugyanis",
    "úgyhogy",
    "viszont",
];

$(function() {

    function mix() {
        $("#content").text(
            "No, Urak, elmondom, hogy " +
            sections[Math.floor(Math.random() * sections.length)] + ", " +
            connectors[Math.floor(Math.random() * connectors.length)] + " " +
            sections[Math.floor(Math.random() * sections.length)] + ", " +
            connectors[Math.floor(Math.random() * connectors.length)] + " " +
            sections[Math.floor(Math.random() * sections.length)] + "." +
            "\n\nNa, innen már menni fog, nem?"
        );
    };

    function shuffle() {
        // Card out
        $("#card").toggle({
            effect: "slide",
            direction: "left",
            easing: "easeInExpo",
            duration: 400,
            complete: mix,
        });

        // Delay
        $("#card").delay(100);

        // Card in
        $("#card").toggle({
            effect: "slide",
            direction: "right",
            easing: "easeOutElastic",
            duration: 800,
        });
    };

    // Set effect from select menu value
    $("#card").on("click", function() {
        shuffle();
    });
});
