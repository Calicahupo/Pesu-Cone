/*function dataTowns() { var ret=[]; function t(name,pop,density) {var re={name:name,pop:pop,density:density};ret.push(re);}
	t("Rahpeso",500,180);t("Birkeo",500,100);t("Bureso",500,140);t("Urreto",503,143);t("Oroso",505,135);t("Geatge",518,110);t("Morganmaras",522,192);t("Nunas",524,104);t("Nuvvus-Ailigas",525,125);t("Varddo",528,173);t("Avzegaso",541,213);t("Gaisavarri",545,188);t("Ruohtir",548,203);t("Leäibeo",558,120);t("Stuorrabogeo",559,244);t("Kalgo",560,140);t("Njavgo",565,210);t("Rasso",568,128);t("Peäldo",568,208);t("Soabbegealdino",575,170);t("Duottarmavnna",585,145);t("Koarvikodds",590,265);t("Latnjo",592,287);t("Morgam-Viibus",601,306);t("Coreheapmi",605,135);t("Sauoiva",615,285);t("Kaimio",619,230);t("Ailigas",620,278);t("Vongoiva",630,125);t("Allacohkka",638,123);t("Cohkko",640,130);t("Guivi",640,363);t("Sarviso",655,145);t("Cukco",679,104);t("Kalkko",683,158);t("Latnjavarit",713,170);t("Outtakka",725,330);t("Caibma",782,152);t("Marso",805,145);t("Harro",825,105);t("Jorba-Cierti",844,169);t("Adjato",845,138);t("Stuorraviisseto",905,203);t("Goallarassa",928,152);t("Annjaloanji",950,115);t("Gohpevarri",950,155);t("Jeärdneo",1018,43);t("Láfol",1025,85);t("Jollano",1026,166);t("Toskal",1028,125);t("Tierbmes",1029,375);t("Aldovaggemuvra",1047,54);t("Godde",1048,48);t("Kuonjar",1065,85);t("Kodderassak",1073,38);t("Tuolljehuhput",1081,151);t("Pihtsosjunni",1083,43);t("Marfevarri",1102,102);t("Giedderassa",1125,25);t("Kieddo",1155,135);t("Loassonibba",1190,375);t("Kovddoskaisi",1227,440);t("Ruvdnaoi",1235,35);t("Kiedditsohkka",1285,165);t("Ridnitsohkka",1317,187);
	return ret; }*/
//pop=[22619,22184,20315,20179,19049,18437,18029,17451,17236,16239,16100,15043,14844,14638,14392,14325,14197,13921,13841,13362,12979,12747,12492,12445,12365,12189,11972,11159,11116,10858,10727,10700,10045,10018,10014,9990,9987,9895,9889,9734,9592,9590,9560,9229,9104,9070,8991,8930,8831,8691,8681,8580,8424,8420,8327,8327,8208,8183,8164,7992,7945,7930,7929,7758,7736,7647,7642,7640,7590,7573,7439,7337,7333,7305,7294,7238,7160,7067,7036,7034,7014,6967,6907,6896,6879,6854,6831,6727,6619,6618,6617,6546,6531,6459,6408,6383,6339,6293,6235,6106,6070,6063,6054,5982,5967,5956,5905,5888,5875,5811,5762,5753,5715,5646,5643,5638,5572,5536,5504,5490,5473,5465,5448,5423,5405,5269,5268,5246,5221,5147,5124,5078,5041,5026,5012,5006,4985,4980,4961,4946,4929,4888,4885,4843,4825,4794,4793,4751,4731,4694,4638,4607,4577,4569,4564,4558,4529,4480,4448,4447,4435,4433,4414,4397,4395,4357,4348,4347,4286,4251,4232,4180,4176,4132,4118,4097,4072,4057,4051,4039,3980,3960,3953,3927,3911,3901,3894,3880,3853,3841,3839,3839,3808,3804,3796,3780,3780,3770,3764,3759,3757,3757,3724,3697,3686,3680,3680,3671,3650,3649,3648,3616,3600,3585,3579,3567,3558,3555,3549,3549,3548,3537,3536,3529,3485,3475,3456,3446,3436,3394,3381,3379,3364,3344,3341,3326,3316,3307,3306,3296,3295,3294,3269,3262,3250,3241,3237,3231,3218,3208,3164,3164,3153,3147,3147,3130,3126,3118,3103,3100,3080,3079,3052,3020,2991,2988,2987,2964,2949,2945,2942,2942,2922,2916,2913,2906,2894,2885,2881,2875,2872,2860,2860,2859,2855,2850,2840,2837,2828,2823,2815,2814,2793,2789,2764,2763,2761,2751,2743,2739,2736,2727,2715,2714,2703,2702,2699,2693,2680,2673,2663,2643,2641,2625,2608,2608,2598,2593,2585,2583,2580,2579,2566,2563,2561,2560,2557,2548,2533,2508,2503,2493,2479,2466,2464,2454,2449,2443,2443,2433,2421,2414,2400,2382,2378,2369,2367,2365,2356,2354,2354,2352,2340,2337,2336,2334,2334,2318,2316,2315,2312,2303,2294,2292,2290,2287,2282,2278,2275,2257,2254,2252,2248,2248,2233,2233,2232,2231,2230,2218,2217,2206,2202,2193,2174,2173,2164,2163,2159,2157,2157,2157,2156,2151,2150,2150,2149,2139,2106,2105,2095,2093,2081,2076,2068,2063,2063,2051,2050,2049,2047,2040,2034,2027,2023,2019,2015,2014,2007,2001,1999,1991,1976,1975,1970,1966,1949,1941,1931,1928,1924,1922,1920,1916,1911,1907,1904,1903,1894,1891,1890,1884,1880,1875,1867,1865,1862,1859,1858,1858,1855,1851,1851,1845,1834,1834,1828,1827,1825,1824,1822,1822,1817,1817,1816,1812,1812,1809,1808,1803,1803,1798,1797,1791,1790,1787,1787,1786,1786,1782,1774,1772,1769,1763,1762,1761,1761,1758,1756,1754,1750,1747,1746,1743,1742,1737,1733,1731,1729,1724,1712,1706,1701,1697,1696,1684,1682,1680,1680,1677,1675,1674,1672,1666,1661,1655,1654,1653,1651,1650,1650,1647,1635,1633,1631,1630,1626,1623,1622,1621,1620,1619,1611,1608,1593,1589,1588,1588,1587,1583,1576,1573,1564,1564,1563,1557,1548,1547,1545,1544,1543,1540,1539,1538,1537,1536,1534,1534,1528,1525,1512,1507,1506,1503,1501,1501,1500,1497,1492,1492,1489,1487,1484,1484,1482,1480,1478,1476,1476,1473,1470,1469,1469,1466,1466,1464,1460,1459,1457,1456,1456,1456,1452,1449,1448,1437,1432,1432,1429,1426,1424,1424,1424,1423,1422,1421,1421,1416,1414,1411,1410,1407,1405,1405,1403,1403,1399,1398,1392,1389,1388,1384,1384,1382,1381,1381,1378,1376,1375,1374,1371,1371,1370,1370,1369,1369,1369,1365,1364,1364,1361,1359,1358,1357,1356,1356,1355,1355,1353,1352,1351,1351,1350,1345,1345,1345,1344,1342,1341,1340,1339,1338,1338,1334,1332,1331,1323,1319,1318,1317,1315,1313,1310,1308,1307,1307,1305,1304,1304,1301,1300,1299,1296,1295,1294,1294,1293,1293,1288,1288,1284,1284,1284,1284,1282,1282,1281,1281,1279,1275,1274,1274,1268,1267,1264,1260,1260,1259,1259,1257,1257,1256,1255,1251,1249,1248,1246,1243,1242,1242,1236,1236,1233,1230,1230,1230,1230,1227,1227,1226,1225,1223,1223,1216,1215,1214,1212,1212,1211,1211,1209,1205,1204,1204,1201,1197,1197,1196,1195,1191,1190,1190,1185,1184,1184,1183,1183,1182,1174,1174,1174,1169,1167,1165,1165,1164,1162,1160,1160,1157,1157,1156,1155,1155,1154,1153]; }

AL.Names={
	Fxsw1: 	["Elsa","Alice","Maja","Agnes","Lilly","Olivia","Julia","Ebba","Linnea","Molly","Fatima","Wilma","Klara","Stella","Freja","Alicia","Alva","Alma","Isabelle","Ellen","Saga","Ellie","Astrid","Emma","Nellie","Emilia","Vera","Signe","Elvira","Nova","Selma","Ester","Leah","Felicia","Sara","Sofia","Elise","Ines","Tyra","Amanda","Elin","Ida","Moa","Meja","Isabella","Tuva","Nora","Siri","Matilda","Sigrid","Edith","Lovisa","Juni","Liv","Lova","Hanna","Tilde","Iris","Thea","Emelie","Melissa","Cornelia","Leia","Ingrid","Livia","Jasmine","Nathalie","Greta","Stina","Joline","Filippa","Emmy","Svea","Märta","Tilda","Hilda","Majken","Celine","Ellinor","Lykke","Novalie","Linn","Tindra","My","Mira","Rut","Ronja","Hilma","Lisa","Maria","Elina","Lovis","Minna","Hedda","Amelia","Sally","Nicole","Victoria","Luna","Anna","Elisa"],
	fxsw1: 	["Lucas","William","Oscar","Oliver","Liam","Elias","Hugo","Vincent","Charlie","Alexander","Axel","Ludvig","Elliot","Noah","Leo","Viktor","Filip","Arvid","Alfred","Nils","Isak","Emil","Theo","Theodor","Edvin","Melvin","Gustav","Sixten","Adam","Anton","Benjamin","Olle","Valter","Erik","Adrian","Albin","Leon","Harry","Max","Gabriel","Malte","Melker","Josef","Donald","Viggo","Ebbe","Wilmer","Alvin","Casper","Love","Jacob","Jack","Kevin","Felix","August","Loke","Carl","Milo","Sigge","Noel","Jonathan","Vidar","Sebastian","Ville","Colin","Milton","Simon","Sam","Frank","Elton","Loui","Rasmus","David","Samuel","Joel","Henry","Wilhelm","Linus","Tage","Matteo","Elis","Vilgot","Elvin","Ivar","Aron","Alex","Otto","John","Maximilian","Eddie","Neo","Daniel","Julian","Mio","Hjalmar","Dante","Ali","Edward","Hampus","Svante"],
	xxsx2: 	"Hejssan",
	FKSw1: 	["Pilveriina","Herkku-Herinä","Pilkki","Vaani","Biisi","Tili","Korvis","Liima","Omasome","Voi","Kesä","Miksi","Herja","Talulee","Jippappaa-Ispaspipaa","Kasvimaa","Filminauha","Lauhkea","Lauha-Lauhkea","Silkka","Sokrukala","One-Enne","Kaksinais","Jakama","Mafia","Kaunis","Hinko","Roska","Etkömuista","Reipas","Aavikkotuuli","Masu","Katkaistu","Haavakasa","Panotuuli","Tulikose","Lopeensa","Sikrana","Sokka","Fukoo","Caledonia","Sula","Tabuuna","Valehden","Pikkari","Paikka","Pillava","Kasato","Mumaja","Balima","Cucu","Palosade","Taivaanvuoh","Minävai","Hosuma","Taliva","Homoona","Ulkkana","Miettiny","Mitämillonki","Huoka","Synkkis","Takavi","Tauki","Ainasä","Luontoihme","Aivotar","Semitä","Palovalmis","Sytykkä-Manteli","Taluuta","Ulkoma","Loppu"],
	FkSw1: 	["Venla","Sofia","Aada","Aino","Elsa","Helmi","Emma","Eevi","Fatima","Emilia","Vilma","Elli","Lilja","Enni","Amanda","Mila","Isla","Olivia","Iida","Kerttu","Pihla","Anni","Ellen","Sara","Linnea","Oona","Hilla","Minea","Aava","Siiri","Nella","Veera","Minttu","Viivi","Alisa","Iina","Loviisa","Vilja","Alma","Sanni","Ronja","Matilda","Ilona","Nelli","Viola","Lumi","Seela","Hilda","Iiris","Juuli","Maria","Sofia","Emilia","Aurora","Amanda","Olivia","Aino","Mona","Jelena","Sandra","Linnea","Annika","Marika","Helena","Venla","Kristiina","Noora","Eveliina","Lilja","Krista","Ansku","Aleksandra","Emma","Anna","Elina","Susanna","Anu","Johanna","Lotta","Inkeri","Alina","Alisa","Heidi","Alexandra","Isla","Katariina","Heta","Kaarina","Isabella","Asta","Miia","Aura","Laura","Elisabeth","Karita","Julia","Mila","Sabrina","Josefiina","Suvi"],
	FxxW1: 	["Tahrajoutsen","Pajukko","Kyssy","Avoinkirja","Vaateaate-Raastesaaste","Tsadaa","Foxennus","Kertsi","Louse","Iinapi","Nuumi","Kirja","Tauriina","Julu","Titti","Tepsu","Maamiina","Merimiina","Kikke","Hippis","Miimu","Meeli","Manna","Hitsi","Kanta","Kantta","Kannetta","Vakkana","Pusina","Kosima","Kilena","Ennukka","Iini","Oka","Nunnuka","Ispaspipaa","Ippappaa","Lauha","Sikka","Kakara","Kersa","Enne","Oone","Kora","Kirtta","Rosak","Mullati","Isule","Lumeeni","Kandela","Masuuni","Leve","Virvedaal","Kaleena","Tokaleena","Kepa","Ruusuma","Jau","Faara","Vinkula","Gumi","Kiva","Hapsima","Haciende","Pella","Pella-Pillava","Kaura","Voliisa","Sieni-Sima","Simosa","Aahu","Marli","Palikka","Linttulanttu","Piio","Piiko","Sapikka","Saami","Suteli","Tapikka","Kausi","Normaal","Eise","Spai","Sytykkä","Maso","Fais","Kupikka","Pinna","Potukka","Skuko","Julefa"],
	fKSw1: 	["Konstipete","Dino","Rapea","Tepistö","Spykis","Toffo","Lykopeeni","Tontto","Totto","Samppe","Miketski","Kehveli","Pyhis","Äkkis","Jiipee","Kimble","Tuke","Äsdee","Hartsa","Tetris","Mukku","Aksumasa","Dopi","Bööle","Jorman","Morkku","Nals","Nigels","Gigels","Koppi","Jupu","Jutukka","Jupu-Jutukka","Juntus","Köntti","Spede","Litti","Pöperö","Tepe","Tepuska","Pusu","Hittis","Kepu","Tippi","Lunssi","Händi","Limpo","Torvis","Nämöinen","Puju","Palju","Gristobal","Kalikka","Kolon","Riski","Satku","Sakkeus","Lampio","Hatse","Kontus","Ylpee","Pipe","Tilppi","Kulmio","Ylppi","Ylermö","Skinneri","Perna","Naama","Hevos","Kolpis","Pilvo","Jopukka","Japsunapsu","Ceppe","Iivee","Mes","Äjä","Äläjä","Mastu","Tomppa","Teemis","Heppi","Kuvio","Busse","Kasku","Happi","Vety","Haukola","Tikkar","Ikäri","Topelius","Tuse","Liuska","Matikka","Parvis","Havit","Season","Leikari","Eljas","Leino","Lafka","Kierre","Tajaus","Sive","Sekuri","Polvis","Tähkis","Tupo","Enver","Kolvi","Tulus","Bera","Pailis","Aksa","Heksi","Ehtor"],
	fkSw1: 	["Leo","Elias","Onni","Eino","Oliver","Niilo","Väinö","Eetu","Leevi","Daniel","Veeti","Joel","Noel","Aleksi","Mikael","Lenni","Hugo","Matias","Vilho","Joona","Emil","Eemeli","Nooa","Viljami","Julius","Luka","Eeli","Eemil","Niklas","Lauri","Rasmus","Aapo","Peetu","Toivo","Benjamin","Samuel","Akseli","Jooa","Veikko","Valtteri","Kasper","Jimi","Eelis","Miro","Aaron","Eemi","Roope","Vili","Anton","Aatu","Juhani","Johannes","Olavi","Harri","Oliver","Ilmari","Antti","Matias","Olli","Antero","Viljo","Eino","Sampo","Oskari","Tapani","Miikka","Tapio","Sauli","Kristian","Teemu","Samuli","Veikko","Rainer","Valtteri","Samuel","Kalle","Simo","Iiro","Niko","Armas","Sakari","Elmeri","Justus","Leif","Reinhold","Henri","Vilho","Kalevi","Taneli","Henrik","Matti","Janne","Jukka","Samuli","Aatos","Petteri","Ville","Aaron","Markus","Juho"],
	fxxW1: 	["Hyyliö","Sarspeneerattu","Jaalio","Eripursion","Tilipitappi","Pelikone","Pupukka","Kovasä","Karting","Palkkisade","Eikannata","Panone","Kodak","Mausoleum","Äärimmäis","Välileuka","Painekattila","Zirk","Eeppis","Tottakai","Poju","Tuliukko","Haistana","Jaahans","Jä","Kama","Behje","Veli-Vehje","Remuni","Matikka-Leonardo","Ferdinand","Kivisterttu","Tungsteen","Paras","Ihavi","Kätevä","Kunkku","Seliseli","Seo","Halvaraado","Eikoskaan","Odinme","Myyttinen","Leukamies","Kultti","Kelttikeisari-Kertosäe","Hokki","Holkki-Salpaaja","Ihme","Takametsän","Hävisit","Epä","Epäkesko","Luomu","Tuote","Miksi","Selvästi","Telomeeri","Sektori","Tutti","Fidelkastro","Pisto","Ihava","Tasapaksu","Uusirotu","Töpinä","Tähkä-Turska","Kampiakseli","Tykki","Kiintiö","Lepimp","Amisviiksi","Nöyrä","Tupo-Enver","Metaani-Raider","Mulkero","Kynäri","Penari","Silmitön","Ikäsaurus","Läpikaadu","Jäävi"],
 	xxSx2: 	["Korhonen","Virtanen","Mäkinen","Nieminen","Mäkelä","Hämäläinen","Laine","Heikkinen","Koskinen","Järvinen","Lehtonen","Lehtinen","Saarinen","Salminen","Heinonen","Niemi","Heikkilä","Kinnunen","Salonen","Turunen","Salo","Laitinen","Tuominen","Rantanen","Karjalainen","Jokinen","Mattila","Savolainen","Lahtinen","Ahonen","Ojala","Leppänen","Väisänen","Leinonen","Hiltunen","Miettinen","Kallio","Pitkänen","Aaltonen","Manninen","Anttila","Hakala","Koivisto","Laaksonen","Räsänen","Hirvonen","Lehto","Laakso","Toivonen","Rantala","Mustonen","Aalto","Nurmi","Peltonen","Moilanen","Niemelä","Seppälä","Pulkkinen","Hänninen","Lappalainen","Partanen","Saari","Kettunen","Kauppinen","Kemppainen","Koskela","Seppänen","Lahti","Salmi","Ahola","Huttunen","Suominen","Ikonen","Aho","Kärkkäinen","Pesonen","Halonen","Mikkonen","Nyman","Johansson","Koponen","Peltola","Oksanen","Lindholm","Vainio","Niskanen","Heiskanen","Mikkola","Koski","Immonen","Honkanen","Nurminen","Vuorinen","Harju","Kokkonen","Rissanen","Määttä","Karppinen","Mäki","Laukkanen","Rajala","Heino","Juntunen","Rautiainen","Jääskeläinen","Parviainen","Kangas","Keränen","Hartikainen","Paananen","Leino","Karlsson","Mäenpää","Martikainen","Lindström","Ruotsalainen","Hakkarainen","Hyvärinen","Uusitalo","Laurila","Kokko","Toivanen","Tikkanen","Viitanen","Nevalainen","Salmela","Leskinen","Nykänen","Makkonen","Häkkinen","Holopainen","Kuusisto","Tamminen","Eriksson","Andersson","Hietala","Härkönen","Korpela","Ranta","Kukkonen","Hyvönen","Jaakkola","Karvonen","Pasanen","Jokela","Karhu","Tiainen","Väänänen","Kosonen","Saarela","Sillanpää","Malinen","Kujala","Rautio","Virta","Lindroos","Timonen","Autio","Lindqvist","Valtonen","Hokkanen","Kivelä","Kolehmainen","Lampinen","Räisänen","Jussila","Rinne","Tolonen","Nissinen","Nousiainen","Huhtala","Eskelinen","Vartiainen","Koivula","Laakkonen","Asikainen","Koistinen","Lepistö","Lindberg","Kuusela","Liimatainen","Pelkonen","Luoma","Tolvanen","Hautala","Kyllönen","Kulmala","Tuovinen","Koivunen","Penttinen","Helenius","Pietilä","Viljanen","Pennanen","Voutilainen","Huotari","Luukkonen","Hietanen","Riikonen","Hyttinen","Marttila","Suhonen","Pakarinen","Repo","Karttunen","Järvenpää","Takala","Ketola","Haavisto","Kumpulainen","Nuutinen","Eronen","Ronkainen","Lindgren","Eskola","Saastamoinen","Eklund","Haapala","Huovinen","Myllymäki","Auvinen","Kainulainen","Lehtimäki","Penttilä","Vuori","Liukkonen","Paavola","Helin","Juvonen","Komulainen","Keskinen","Hautamäki","Viitala","Taskinen","Ollikainen","Markkanen","Kivimäki","Ollila","Silvennoinen","Lähteenmäki","Suomalainen","Tuomi","Rintala","Perälä","Välimäki","Sipilä","Kähkönen","Kuosmanen","Gustafsson","Halme","Blomqvist","Nylund","Kortelainen","Lehtola","Tanskanen","Turpeinen","Matilainen","Hannula","Hytönen","Kantola","Lindfors","Meriläinen","Matikainen","Jalonen","Jansson","Holm","Helminen","Kivistö","Rytkönen","Ylitalo","Kanerva","Varis","Väyrynen","Alatalo","Soininen","Tervo","Puhakka","Henriksson","Erkkilä","Pääkkönen","Kiviniemi","Ojanen","Tarvainen","Pajunen","Karvinen","Rauhala","Kurki","Puustinen","Nyberg","Taipale","Laiho","Kilpeläinen","Mäntylä","Berg","Oinonen","Mattsson","Kuisma","Lassila","Lehikoinen","Kankaanpää","Piirainen","Backman","Tikka","Peltoniemi","Haapanen","Räty","Pirinen","Niiranen","Jaatinen","Jauhiainen","Kivinen","Lipponen","Haverinen","Korpi","Moisio","Parkkinen","Kärki","Pohjola","Venäläinen","Keinänen","Kauppila","Vesterinen","Kaikkonen","Ruuskanen","Ylönen","Jäntti","Valkonen","Raatikainen","Mononen","Sainio","Haataja","Holmberg","Anttonen","Järvelä","Rossi","Kovanen","Syrjälä","Nikula","Tirkkonen","Holmström","Ahokas","Pehkonen","Pekkala","Huuskonen","Palomäki","Karhunen","Vuorela","Männistö","Lilja","Kuronen","Tiihonen","Sallinen","Seppä","Muhonen","Oikarinen","Latvala","Valkama","Konttinen","Alanko","Elo","Sirén","Alanen","Ryynänen","Sjöblom","Kämäräinen","Simola","Linna","Reinikainen","Rönkkö","Soini","Pekkarinen","Salomaa","Pöllänen","Riihimäki","Eloranta","Lammi","Keskitalo","Kiuru","Sirviö","Marttinen","Kari","Forsman","Airaksinen","Nevala","Järvi","Antikainen","Haapaniemi","Sutinen","Grönroos","Lankinen","Puranen","Uotila","Sihvonen","Holappa","Aro","Ylinen","Simonen","Ihalainen","Tähtinen","Paavilainen","Kauppi","Toivola","Aarnio","Kauhanen","Lehti","Joensuu","Kiiskinen","Virolainen","Snellman","Sivonen","Sundström","Luoto","Sormunen","Koivuniemi","Kalliokoski","Luostarinen","Eerola","Friman","Ruohonen","Hassinen","Törmänen","Westerlund","Kotilainen","Tuomisto","Nordström","Suvanto","Nenonen","Ruuska","Sorsa","Laamanen","Sinkkonen","Koljonen","Tervonen","Kiiski","Pietikäinen","Nygård","Björklund","Piiroinen","Sinisalo","Pikkarainen","Rajamäki","Tenhunen","Ukkonen","Antila","Nyström","Suomela","Paajanen","Suomi","Forsström","Siitonen","Lämsä","Kuokkanen","Vuorio","Ekman","Laitila","Neuvonen","Kekkonen","Huusko","Pöyhönen","Vainionpää","Leppälä","Lind","Junttila","Saarelainen","Lyytikäinen","Alho","Hyytiäinen","Bergman","Tahvanainen","Kujanpää","Vanhanen","Vepsäläinen","Jantunen","Jylhä","Arola","Lempinen","Mäkitalo","Suutari","Wikström","Sandberg","Hynninen","Kontio","Nyholm","Hakanen","Tapio","Helander","Honkala","Närhi","Pakkanen","Tuomainen","Kosunen","Kääriäinen","Inkinen","Saukkonen","Hurme","Ekholm","Palonen","Minkkinen","Kaartinen","Pirhonen","Tauriainen","Pyykkö","Lukkarinen","Piironen","Rintamäki","Nurmela","Puttonen","Nummela","Söderlund","Remes","Tukiainen","Itkonen","Määttänen","Kautto","Romppanen","Tiilikainen","Grönlund","Selin","Halttunen","Harjula","Kananen","Nikkanen","Välimaa","Pekkanen","Vanhala","Tossavainen","Tammi","Ryhänen","Mäkilä","Kalliomäki","Koivu","Santala","Myllylä","Pyykkönen","Setälä","Koivumäki","Kuitunen","Piispanen","Tuomaala","Saukko","Ahtiainen","Lintunen","Happonen","Ketonen","Lindeman","Tuomela","Nyyssönen","Hovi","Kivioja","Kataja","Valtanen","Sundqvist","Hellsten","Tyni","Siekkinen","Pietiläinen","Siltanen","Tuhkanen","Vesala","Poutanen","Hakola","Mäntynen","Haapalainen","Hakulinen","Kuusinen","Rämö","Toikka","Päivärinta","Kangasniemi","Piipponen","Hellman","Sivula","Syrjänen","Turtiainen","Montonen","Vänskä","Pellinen","Kuivalainen","Peltomäki","Vaittinen","Mykkänen","Honkonen","Stenberg","Piippo","Torvinen","Kuittinen","Wallenius","Pettersson","Jalkanen","Jäppinen","Parkkonen","Salin","Kärnä","Kuikka","Valli","Utriainen","Nikkilä","Sandström","Lindén","Räihä","Hallikainen","Hynynen","Talvitie","Soikkeli","Grönholm","Sippola","Sjöberg","Kuparinen","Jaakola","Pursiainen","Mähönen","Pulli","Herranen","Iivonen","Nikkinen","Sairanen","Orava","Lönnqvist","Männikkö","Palosaari","Raunio","Kakko","Lamberg","Puumalainen","Kankkunen","Ojanperä","Kekäläinen","Suni","Tuomola","Vatanen","Putkonen","Rahkonen","Annala","Lappi","Pellikka","Reijonen","Vuorenmaa","Nordlund","Pynnönen","Tynkkynen","Kervinen","Peltomaa","Savela","Olkkonen","Hukkanen","Juutilainen","Naukkarinen","Numminen","Öhman","Vehviläinen","Isotalo","Kaukonen","Kukkola","Kaunisto","Niskala","Viljakainen","Salovaara","Katajamäki","Sundberg","Saikkonen","Leivo","Suokas","Vauhkonen","Pohjonen","Nordman","Sipola","Väätäinen","Manner","Heimonen","Pihlajamäki","Jämsä","Haikonen","Virkkunen","Mutanen","Kohonen","Nissilä","Siltala","Huhta","Malmberg","Palmu","Kurvinen","Päivinen","Oja","Ervasti","Pylkkänen","Reponen","Kaipainen","Vainikka","Mäkeläinen","Roos","Elomaa","Haanpää","Mannila","Poutiainen","Ovaskainen","Pihlaja","Huhtanen","Lähde","Vanhatalo","Holma","Kilpinen","Wallin","Lintula","Kupiainen","Vikman","Rouhiainen","Säkkinen","Hurskainen","Mielonen","Kovalainen","Lindell","Söderholm","Mohamed","Suuronen","Blom","Kuoppala","Ovaska","Viinikainen","Murto","Perttula","Klemetti","Kumpula","Raitanen","Fagerström","Himanen","Janhunen","Nguyen","Rekola","Vainikainen","Jokelainen","Haapakoski","Kiviranta","Tarkiainen","Pietarinen","Tuononen","Kivi","Hintikka","Saarenpää","Siivonen","Veijalainen","Ek","Ruokonen","Liikanen","Lundberg","Julkunen","Haapamäki","Ripatti","Rantamäki","Leskelä","Marjamäki","Bergström","Parikka","Sarkkinen","Kirjavainen","Sundell","Jalava","Saario","Laatikainen","Gröhn","Kekki","Nikander","Kemppi","Rahikainen","Ratilainen","Ström","Varjonen","Saarikoski","Palo","Tanninen","Kesti","Paasonen","Vesa","Reunanen","Westerholm","Vänttinen","Kannisto"]};
AL.Names.Fxsw1L=AL.Names.Fxsw1.length; AL.Names.fxsw1L=AL.Names.fxsw1.length; AL.Names.xxsx2L=AL.Names.xxsx2.length; AL.Names.FKSw1L=AL.Names.FKSw1.length; AL.Names.FkSw1L=AL.Names.FkSw1.length; AL.Names.FxxW1L=AL.Names.FxxW1.length; AL.Names.fKSw1L=AL.Names.fKSw1.length; AL.Names.fkSw1L=AL.Names.fkSw1.length; AL.Names.fxxW1L=AL.Names.fxxW1.length; AL.Names.xxSx2L=AL.Names.xxSx2.length;
function mkName( fem,kid,fin,weird,last,s){ var n=null;
	if(!s.nM){ var n =new Name( fem,kid,fin,weird,last,s); return n}}
function Name(fem,kid,fin,weird,last,s){ mkName2( this,fem,kid,fin,weird,last,s)}
function mkName2(o,fem,kid,fin,weird,last,s){ o.fem =fem; o.kid=kid; o.fin=fin; o.weird=weird;
	if 		(!fem && 		 fin &&  weird) { o.first =AL.Names.fxxW1[Math.floor(Math.random()*AL.Names.fxxW1L)]}
	else if (!fem && !kid && fin && !weird) { o.first =AL.Names.fkSw1[Math.floor(Math.random()*AL.Names.fkSw1L)]}
	else if (!fem &&  kid && fin && !weird) { o.first =AL.Names.fKSw1[Math.floor(Math.random()*AL.Names.fKSw1L)]}
 	else if (!fem &&  		!fin &&  weird) { o.first =AL.Names.fxxW1[Math.floor(Math.random()*AL.Names.fxxW1L)]}
 	else if (!fem &&   		!fin && !weird) { o.first =AL.Names.fxsw1[Math.floor(Math.random()*AL.Names.fxsw1L)]}
 	else if ( fem && 		 fin &&  weird) { o.first =AL.Names.FxxW1[Math.floor(Math.random()*AL.Names.FxxW1L)]}
	else if ( fem && !kid && fin && !weird) { o.first =AL.Names.FkSw1[Math.floor(Math.random()*AL.Names.FkSw1L)]}
	else if ( fem &&  kid && fin && !weird) { o.first =AL.Names.FKSw1[Math.floor(Math.random()*AL.Names.FKSw1L)]}
 	else if ( fem &&  		!fin &&  weird) { o.first =AL.Names.FxxW1[Math.floor(Math.random()*AL.Names.FxxW1L)]}
 	else if ( fem &&   		!fin && !weird) { o.first =AL.Names.Fxsw1[Math.floor(Math.random()*AL.Names.Fxsw1L)]}
 	if(last){ o.last =last}else{if(fin){ 	o.last  =AL.Names.xxSx2[Math.floor(Math.random()*AL.Names.xxSx2L)]}
 								else{ 		o.last 	=AL.Names.xxsx2}}
	o.full 	=o.first+" "+o.last; if( s){ s.nMs.push( o)} return o}

	
function precalcFamilies(a){ return a }
function mkSubjs(sim){	var r =[]; var b =null;	
	b =mkReSubj( "subj_A",sim,AT.sQr, 1,1,1);r.push( b);
	b =mkReSubj( "subj_a",sim,AT.sQr, 1,1,0);r.push( b);
	b =mkReSubj( "subj_B",sim,AT.sQr, 0,1,1);r.push( b);
	b =mkReSubj( "subj_b",sim,AT.sQr, 0,1,0);r.push( b);
	b =mkReSubj( "subj_C",sim,AT.sQr, 1,0,1);r.push( b);
	b =mkReSubj( "subj_c",sim,AT.sQr, 1,0,0);r.push( b);
	b =mkReSubj( "subj_D",sim,AT.sQr, 0,0,1);r.push( b);
	b =mkReSubj( "subj_d",sim,AT.sQr, 0,0,0);r.push( b);
	r =precalcFamilies( r);
	b =mkReSubj( "subj_E",sim,AT.sQr, 1,1,1);r.push( b);
	b =mkReSubj( "subj_e",sim,AT.sQr, 1,1,0);r.push( b);
	b =mkReSubj( "subj_F",sim,AT.sQr, 0,1,1);r.push( b);
	b =mkReSubj( "subj_f",sim,AT.sQr, 0,1,0);r.push( b);
	b =mkReSubj( "subj_G",sim,AT.sQr, 1,0,1);r.push( b);
	b =mkReSubj( "subj_g",sim,AT.sQr, 1,0,0);r.push( b);
	b =mkReSubj( "subj_H",sim,AT.sQr, 0,0,1);r.push( b);
	b =mkReSubj( "subj_h",sim,AT.sQr, 0,0,0);r.push( b);
	return r}
function mkReSubj( 	ni,sim,pcReso,pcFem,pcKid,pcFin,pcTys,pcPms,pcPureBad,pcInvMor,pcPureGood,pcObj){ var b;
	if( !ni){ var ni=""}
	if( !pcReso){ 		var pcReso 	=AL.pcReso}
	if( !pcFem){ 		var pcFem 	=AL.pcFem} 	b =Math.random(); b <pcFem ? pcFem =true  : pcFem =false;
	if( !pcKid){ 		var pcKid 	=AL.pcKid} 	b =Math.random(); b <pcKid ? pcKid =true  : pcKid =false;
	if( !pcFin){ 		var pcFin 	=AL.pcFin} 	b =Math.random(); b <pcFin ? pcFin =true  : pcFin =false; 
	if( !pcFin){ b =Math.random();
		if( !pcPureBad){	var pcPureBad 	=AL.pcPureBad}
		if( !pcInvMor){		var pcInvMor 	=AL.pcPureBad +AL.pcInvMor}
		if( !pcPureGood){ 	var pcPureGood 	=AL.pcPureBad +AL.pcInvMor +AL.pcPureGood}
		if 		( b <pcPureBad){  pcPureBad=true; pcInvMor=false;pcPureGood=false}
		else if	( b <pcInvMor) {  pcPureBad=false;pcInvMor=true; pcPureGood=false}
		else if ( b <pcPureGood){ pcPureBad=false;pcInvMor=false;pcPureGood=true }
		else 					{ pcPureBad=false;pcInvMor=false;pcPureGood=false}}
	else 		{ b =Math.random();
		if( !pcPureGood){ 	var pcPureGood 	=AL.pcPureGood}
		if 		( b <pcPureGood){ pcPureBad=false;pcInvMor=false;pcPureGood=true }
		else 					{ pcPureBad=false;pcInvMor=false;pcPureGood=false}}

	if( !pcTys){ 			var pcTys 		=AL.pcTys}
	if( pcTys.length==0){ 	pcTys =AL.Sociotypes.seed}
	else{ 					pcTys =union( pcTys,AL.Sociotypes.seed)}
	pcTys =pcTys[Math.floor(Math.random() *pcTys.length)];

	if( !pcPms){ 			var pcPms 		=AL.pcPms}
		if( pcPms.length==0){ pcPms =AL.PrimalMoods.seed}
		else{ pcPms =union( pcPms,AL.PrimalMoods.seed); pcPms =pcPms[Math.floor(Math.random()*pcPms.length)]}
	if( !pcObj){ 		var pcObj	=AL.pcObj} 	b =Math.random(); b <pcObj ? pcObj =true  : pcObj =false;
	var o =new Subj( ni,sim,pcReso,pcFem,pcKid,pcFin,pcTys,pcPms,pcPureBad,pcInvMor,pcPureGood,pcObj);
	/*if( AL.sBTunes[2]==AL.sim.subjsL ){ AL.sBTunes[3] =AL.sim.subjs.length+1}*/
   	return o}

function precalcDefaultPlaces(seed,par){ var ps=[]; var p =null;
	for(var n=0; n<AL.PlacesL; n++){ p=mkPlace(seed[n],par); ps.push(p)} return ps}
function mkPlace(ni,par){ var b =null; switch(ni){
	case "Sky" 			 	:b=new AL.Places.Sky(ni,12742000,12742000,0,10000,false,false,true,false,["Sea","Land"]); 				inhPl( b,par);return b;
	case "Sea" 		 		:b=new AL.Places.Sea(ni,12742000,12742000,-5000,0,false,false,true,false,["Sky","Land"]);				inhPl( b,par);return b;
	case "Land" 		 	:b=new AL.Places.Land(ni,7356597,7356597,-70000,5000,false,false,false,false,"Sea",["Sky","Sea"]);	inhPl( b,par);return b;
														//5385402
	case "Sandbox" 			:b=new AL.Places.Shelter(ni,ni,66,66,1,5,false,false,false,"Sandbox");									inhPl( b,par);return b; 			

	case "Beach" 		 	:b=new AL.Places.Area(ni,ni,300,75,-2,4,false,false,true,"Land");
	case "Market" 		 	:b=new AL.Places.Area(ni,ni,200,50,1,5,false,false,true,"Land",["Beach"]);								inhPl( b,par);return b;
	case "Inn" 				:b=new AL.Places.Shelter(ni,ni,25,25,1,5,false,false,false,"Land"); 										inhPl( b,par);return b;
	case "InnYard" 	 		:b=new AL.Places.Area(ni,ni,25,10,1,5,false,false,true,"Land",["Beach","Inn"]);							inhPl( b,par);return b;
	case "Esplanade" 		:b=new AL.Places.Way(ni,ni,25,5,1,5,false,false,true,"Land",["Market","InnYard","Beach"]); 				inhPl( b,par);return b;
	case "InnInterior" 		:b=new AL.Places.Room(ni,ni,24,9,0,4,true,false,false,"Inn"); 											inhPl( b,par);return b;
	case "InnDoor" 	 		:b=new AL.Places.Gate(ni,ni,0.4,0.8,0,2.5,false,false,false,"Inn",["InnYard","InnInterior"]);			inhPl( b,par);return b;

	case "ObeliskYard" 		:b=new AL.Places.Area(ni,ni,40,40,8,16,false,false,true,"Land"); 										inhPl( b,par);return b;
	case "Obelisk" 			:b=new AL.Places.Area(ni,ni,1,1,15140,15240,false,false,true,"ObeliskYard"); 							inhPl( b,par);return b;
	case "BoulevardBeach" 	:b=new AL.Places.Way(ni,ni,150,10,1,16,false,false,true,"Land",["Market","ObeliskYard"]); 				inhPl( b,par);return b;
	case "Garden" 		 	:b=new AL.Places.Area(ni,ni,200,200,16,25,false,false,true,"Land"); 										inhPl( b,par);return b;
	case "Temple" 	 	 	:b=new AL.Places.Shelter(ni,ni,88,66,21,25,false,false,true,"Garden"); 									inhPl( b,par);return b;
	case "TempleInterior"	:b=new AL.Places.Room(ni,ni,87,65,0,5,false,false,false,"Temple"); 										inhPl( b,par);return b;
	case "TempleDoor" 	 	:b=new AL.Places.Gate(ni,ni,0.5,1,0,3,false,false,false,"Temple",["Garden","TempleInterior"]); 			inhPl( b,par);return b;
	case "Intersection"  	:b=new AL.Places.Area(ni,ni,10,5,16,25,false,false,true,"Land",["Garden"]);								inhPl( b,par);return b;
	case "BoulevardInland" 	:b=new AL.Places.Way(ni,ni,90,10,16,25,false,false,true,"Land",["ObeliskYard","Intersection"]); 			inhPl( b,par);return b;

	case "FlatYard" 	 	:b=new AL.Places.Area(ni,ni,60,50,2,25,true,true,true,"Land",["ObeliskYard"]); 							inhPl( b,par);return b;
	case "Flat" 		 	:b=new AL.Places.Shelter(ni,ni,50,25,15,31,true,true,true,"FlatYard"); 									inhPl( b,par);return b;
	case "FlatClub" 	 	:b=new AL.Places.Room(ni,ni,18,18,0,2.5,true,true,false,"Flat"); 										inhPl( b,par);return b;
	case "FlatApt1" 	 	:b=new AL.Places.Room(ni,ni,10,5,0,2.5,true,true,false,"Flat"); 											inhPl( b,par);return b;
 	case "FlatApt2" 	 	:b=new AL.Places.Room(ni,ni,10,5,0,2.5,true,true,false,"Flat"); 											inhPl( b,par);return b;
 	case "FlatApt3" 	 	:b=new AL.Places.Room(ni,ni,10,5,0,2.5,true,true,false,"Flat"); 											inhPl( b,par);return b;
 	case "Flat2StoryTerrace":b=new AL.Places.Shelter(ni,ni,50,2,3,6,true,true,true,"Flat"); 											inhPl( b,par);return b;
 	case "Flat2StoryStairs" :b=new AL.Places.Way(ni,ni,4,6,0,6,true,true,true,"Flat",["FlatYard","Flat2StoryTerrace"]);				inhPl( b,par);return b;
 	case "FlatApt4" 	 	:b=new AL.Places.Room(ni,ni,10,5,3,5.5,true,true,false,"Flat",["Flat2StoryTerrace"]); 					inhPl( b,par);return b;
 	case "FlatApt5" 	 	:b=new AL.Places.Room(ni,ni,10,5,3,5.5,true,true,false,"Flat",["Flat2StoryTerrace"]);					inhPl( b,par);return b;
 	case "FlatApt6" 	 	:b=new AL.Places.Room(ni,ni,10,5,3,5.5,true,true,false,"Flat",["Flat2StoryTerrace"]); 					inhPl( b,par);return b;
 	case "FlatApt7" 	 	:b=new AL.Places.Room(ni,ni,10,5,3,5.5,true,true,false,"Flat",["Flat2StoryTerrace"]);					inhPl( b,par);return b;
 	case "FlatClubDoor"  	:b=new AL.Places.Gate(ni,ni,0.4,0.8,0,2.5,true,true,false,"Flat",["FlatYard","FlatClub"],false); 		inhPl( b,par);return b;
 	case "FlatApt1Door"  	:b=new AL.Places.Gate(ni,ni,0.4,0.8,0,2.5,true,true,false,"Flat",["FlatYard","FlatApt1"],true);			inhPl( b,par);return b;
 	case "FlatApt2Door"  	:b=new AL.Places.Gate(ni,ni,0.4,0.8,0,2.5,true,true,false,"Flat",["FlatYard","FlatApt2"],true); 			inhPl( b,par);return b;
 	case "FlatApt3Door"  	:b=new AL.Places.Gate(ni,ni,0.4,0.8,0,2.5,true,true,false,"Flat",["FlatYard","FlatApt3"],true); 			inhPl( b,par);return b;
 	case "FlatApt4Door"  	:b=new AL.Places.Gate(ni,ni,0.4,0.8,0,2.5,true,true,false,"Flat",["Flat2StoryTerrace","FlatApt4"],true); inhPl( b,par);return b;
 	case "FlatApt5Door"  	:b=new AL.Places.Gate(ni,ni,0.4,0.8,0,2.5,true,true,false,"Flat",["Flat2StoryTerrace","FlatApt5"],true); inhPl( b,par);return b;
 	case "FlatApt6Door"  	:b=new AL.Places.Gate(ni,ni,0.4,0.8,0,2.5,true,true,false,"Flat",["Flat2StoryTerrace","FlatApt6"],true); inhPl( b,par);return b;
 	case "FlatApt7Door"  	:b=new AL.Places.Gate(ni,ni,0.4,0.8,0,2.5,true,true,false,"Flat",["Flat2StoryTerrace","FlatApt7"],true); inhPl( b,par);return b;

	case "FinVilla" 	 	:b=new AL.Places.Area(ni,ni,100,120,3,33,true,true,true,"Land"); 										inhPl( b,par);return b;
	case "FinRoad" 	 		:b=new AL.Places.Way(ni,ni,50,5,3,33,false,false,true,"Land",["Intersection","FinVilla"]); 				inhPl( b,par);return b;
	case "FinHouse" 	 	:b=new AL.Places.Shelter(ni,ni,30,20,15,33,true,true,true,"FinVilla");									inhPl( b,par);return b;
	case "FinHall" 	 		:b=new AL.Places.Room(ni,ni,3,5,3,6,true,true,false,"FinHouse"); 										inhPl( b,par);return b;
	case "FinDownstairs"	:b=new AL.Places.Way(ni,ni,6,1.5,0,6,true,true,false,"FinHouse",["FinCellar"]);						inhPl( b,par);return b;
	case "FinCellar" 	 	:b=new AL.Places.Room(ni,ni,10,10,0,2.5,true,true,false,"FinHouse"); 									inhPl( b,par);return b;
	case "FinBedroom" 	 	:b=new AL.Places.Room(ni,ni,6,5,3,6,true,true,false,"FinHouse"); 										inhPl( b,par);return b;
	case "FinKidsRoom"  	:b=new AL.Places.Room(ni,ni,6,5,3,6,true,true,false,"FinHouse"); 										inhPl( b,par);return b;
	case "FinLivingRoom"	:b=new AL.Places.Room(ni,ni,6,5,3,6,true,true,false,"FinHouse"); 										inhPl( b,par);return b;
	case "FinFrontDoor" 	:b=new AL.Places.Gate(ni,ni,0.4,0.8,3,5.5,false,true,false,"FinHouse",["FinVilla","FinHall"],true);	inhPl( b,par);return b;
	case "FinCellarDoor"	:b=new AL.Places.Gate(ni,ni,0.4,0.8,3,5.5,false,true,false,"FinHouse",["FinHall","FinDownstairs"]); 	inhPl( b,par);return b;
	case "FinBedroomDoor"	:b=new AL.Places.Gate(ni,ni,0.4,0.8,3,5.5,false,true,false,"FinHouse",["FinHall","FinBedroom"]);		inhPl( b,par);return b;
	case "FinKidsRoomDoor"	:b=new AL.Places.Gate(ni,ni,0.4,0.8,3,5.5,false,true,false,"FinHouse",["FinHall","FinKidsRoom"]);		inhPl( b,par);return b;
	case "FinLivingRoomWay" :b=new AL.Places.Way(ni,ni,0.4,0.8,3,5.5,false,true,false,"FinHouse",["FinHall","FinLivingRoom"]); 	inhPl( b,par);return b;

	case "SweVilla" 	 	:b=new AL.Places.Area(ni,ni,100,120,3,33,true,true,true,"Land"); 										inhPl( b,par);return b;
	case "SweRoad" 	 	 	:b=new AL.Places.Way(ni,ni,50,5,3,33,false,false,true,"Land",["Intersection","SweVilla"]); 				inhPl( b,par);return b;
	case "SweHouse" 		:b=new AL.Places.Shelter(ni,ni,30,20,15,33,true,true,true,"SweVilla");									inhPl( b,par);return b;
	case "SweHall" 	 		:b=new AL.Places.Room(ni,ni,3,5,3,6,true,true,false,"SweHouse"); 										inhPl( b,par);return b;
	case "SweDownstairs"	:b=new AL.Places.Way(ni,ni,6,1.5,0,6,true,true,false,"SweHouse",["SweCellar"]);							inhPl( b,par);return b;
	case "SweCellar" 		:b=new AL.Places.Room(ni,ni,10,10,0,2.5,true,true,false,"SweHouse"); 									inhPl( b,par);return b;
	case "SweBedroom" 		:b=new AL.Places.Room(ni,ni,6,5,3,6,true,true,false,"SweHouse"); 										inhPl( b,par);return b;
	case "SweKidsRoom"  	:b=new AL.Places.Room(ni,ni,6,5,3,6,true,true,false,"SweHouse"); 										inhPl( b,par);return b;
	case "SweLivingRoom"	:b=new AL.Places.Room(ni,ni,6,5,3,6,true,true,false,"SweHouse"); 										inhPl( b,par);return b;
	case "SweFrontDoor" 	:b=new AL.Places.Gate(ni,ni,0.4,0.8,3,5.5,false,true,false,"SweHouse",["SweVilla","SweHall"],true);		inhPl( b,par);return b;
	case "SweCellarDoor"	:b=new AL.Places.Gate(ni,ni,0.4,0.8,3,5.5,false,true,false,"SweHouse",["SweHall","SweDownstairs"]);		inhPl( b,par);return b;
	case "SweBedroomDoor"	:b=new AL.Places.Gate(ni,ni,0.4,0.8,3,5.5,false,true,false,"SweHouse",["SweHall","SweBedroom"]);			inhPl( b,par);return b;
	case "SweKidsRoomDoor"	:b=new AL.Places.Gate(ni,ni,0.4,0.8,3,5.5,false,true,false,"SweHouse",["SweHall","SweKidsRoom"]); 		inhPl( b,par);return b;
	case "SweLivingRoomWay"	:b=new AL.Places.Way(ni,ni,0.4,0.8,3,5.5,false,true,false,"SweHouse",["SweHall","SweLivingRoom"]); 		inhPl(b,par);return b}}
function inhPl(){}
AL.Places = { seed: ["Sky","Sea","Land", 	"Sandbox",
	"Beach","Market","Inn","InnYard","Esplanade","InnInterior","InnDoor",
	"Garden","Temple","TempleInterior","TempleDoor","Intersection","Boulevard",
	"FinVilla","FinRoad","FinHouse","FinHall","FinDownstairs","FinCellar","FinBedroom","FinKidsRoom","FinLivingRoom",
	"FinFrontDoor","FinCellarDoor","FinBedroomDoor","FinKidsRoomDoor","FinLivingRoomWay",
	"SweVilla", "SweRoad", "SweHouse", "SweHall", "SweDownstairs", "SweCellar", "SweBedroom", "SweKidsRoom", "SweLivingRoom",
	"SweFrontDoor","SweCellarDoor","SweBedroomDoor","SweKidsRoomDoor","SweLivingRoomWay",
	"FlatYard","Flat","FlatClub","FlatApt1","FlatApt2","FlatApt3","FlatApt4","FlatApt5","FlatApt6","FlatApt7",
	"FlatClubDoor","FlatApt1Door","FlatApt2Door","FlatApt3Door","FlatApt4Door","FlatApt5Door","FlatApt6Door","FlatApt7Door"],
	Sky 	:function(ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj){
	   	   mkSky(this,ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj)},
	Sea 	:function(ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj){
	   	   mkSea(this,ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj)},
	Land 	:function(ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj){
	  	  mkLand(this,ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj)},
	Area 	:function(ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj,lit){
		 mkPlace2(this,ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj,lit)},
	Way 	:function(ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj,lit){
		 mkPlace2(this,ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj,lit)},
	Shelter :function(ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj,lit){
	   	 mkPlace2(this,ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj,lit)},
	Room 	:function(ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj,lit){
	   	 mkPlace2(this,ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj,lit)},
	Gate 	:function(ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj,lit,locked){
	   	  mkGate(this,ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj,lit,locked)}}
function mkSky 	   (o,ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj){ o.ni=ni; o.nI=nI; o.length=length; o.width=width;
	o.minAlt=minAlt; o.maxAlt=maxAlt; o.of=of; o.home=home; o.out=out; o.at=at;
	if(o.adj){ o.adj=adj} else{ o.adj =[]} o.sunny=1; o.cloudy=0.5; o.rainy=0}
function mkSea 	   (o,ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj){ o.ni=ni; o.nI=nI; o.length=length; o.width=width;
	o.minAlt=minAlt; o.maxAlt=maxAlt; o.of=of; o.home=home; o.out=out; o.at=at;
	if(o.adj){ o.adj=adj} else{ o.adj =[]}}
function mkLand    (o,ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj){ o.ni=ni; o.nI=nI; o.length=length; o.width=width;
	o.minAlt=minAlt; o.maxAlt=maxAlt; o.of=of; o.home=home; o.out=out; o.at=at;
	if(o.adj){ o.adj=adj} else{ o.adj =[]}}
function mkPlace2(   o,ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj,lit){ o.subjs=[];
	o.ni=ni;o.nI=nI;o.length=length;o.width=width;o.minAlt=minAlt;o.maxAlt=maxAlt; o.of=of; o.home=home; o.out=out; o.at=at;
	if(adj){ o.adj=adj} else{ o.adj =[]} if(lit){ o.lit=lit}}
function mkGate(   o,ni,nI,length,width,minAlt,maxAlt,of,home,out,at,adj,lit,locked){
	o.ni=ni;o.nI=nI;o.length=length;o.width=width;o.minAlt=minAlt;o.maxAlt=maxAlt; o.of=of; o.home=home; o.out=out; o.at=at;
	if(adj){ o.adj=adj} else{ o.adj =[]} if(lit){ o.lit=lit} if(locked){ o.locked=locked}}

function isSubjSafe(s,p){ if(p.ni=="Sandbox"){ return true}}
function putDefaultSubjsToDefaultPlaces(S,P){
	var p =P.find(o => o.ni =="Sandbox");
	S.forEach( function(s){ s.at =p; s.safe =isSubjSafe( s,p); p.subjs.push(s)})}

function precalcDefaultPatterns(seed,par){ var p=null; var ps=[];
	for(var n=0; n<AL.pattsL; n++){ p=mkPattern(seed[n],par); ps.push(p)}return ps}
function mkPattern( ni,par,subj){ var b=null; switch(ni){
	case "Time" 		:b=new Time( ni,ni,7,0,0,0); 			b=inhPatt( b,par,subj);return b;
	case "Day" 			:b=new Period( ni,ni,24,0,0,0,0,0,0,0); b=inhPatt( b,par,subj);return b;
	case "Night" 		:b=new Period( ni,ni,6,0,0,0,18,0,0,0); b=inhPatt( b,par,subj);return b;
	case "Sleep" 		:b=new Period( ni,ni,8,0,0,0,12,0,0,0); b=inhPatt( b,par,subj);return b;
	case "Sleeping" 	:b=new mkVq( "O_need");
		b.time =getPatt("Time"); b.day =getPatt("Day");
		b.night =getPatt("Night"); b.sleep =getPatt("Sleep"); 	b=inhPatt( b,par,subj);return b;
	case "Skylight" 	:b=new MkVq( "O_body"); b.s=1;  		b=inhPatt( b,par,subj);return b;
	case "Tiredness"	:b=new MkVq( "O_pain"); b.s=0;			b=inhPatt( b,par,subj);return b;
	case "Stamina" 		:b=new MkVq( "O_life"); b.s=1; 			b=inhPatt( b,par,subj);return b;

	case "Light" 		:b=new Pattern( ni,ni);
	case "Sun" 			:b=new Pattern( ni,ni,["SunLight"]);
	case "Moon" 		:b=new Pattern( ni,ni,["MoodLight"]);
	case "Clouds" 		:b=new Pattern( ni,ni,["CloudShade","Rain"]);
	case "Wind" 		:b=new Pattern( ni,ni,[])
}}



/*
function precalcDefaultPossessions( male,adult,pure,weird,kids){ var r=[];
	if( male &&  adult &&  )}*/
