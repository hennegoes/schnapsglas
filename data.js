// data.js – Schnapsglas-Sammlung
// Zuletzt aktualisiert: 20.2.2026
// 90 Gläser gespeichert

const GLAESER = [
  {
    id:        3,
    name:      "Rio de Janeiro",
    land:      "Brasilien",
    lat:       -22.9111,
    lng:       -43.2056,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Sugarloaf_Sunrise_2.jpg/1280px-Sugarloaf_Sunrise_2.jpg",
    text:      "Erstes Glas meiner Sammlung – Souvenir vom Stadtbummel.",
    datum:     "2024-06-15",
    kategorie: "gekauft"
  },

  {
    id:        4,
    name:      "Foz do Iguaçu",
    land:      "Brasilien",
    lat:       -25.54,
    lng:       -54.5875,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Parque_Nacional_do_Igua%C3%A7u_-_Ulises_Cabrera_da_Silva_15.jpg/1280px-Parque_Nacional_do_Igua%C3%A7u_-_Ulises_Cabrera_da_Silva_15.jpg",
    text:      "Schönes Glasl vom Naschmarkt.",
    datum:     "2024-08-20",
    kategorie: "gekauft"
  },

  {
    id:        5,
    name:      "Olinda",
    land:      "Brasilien",
    lat:       -8.0089,
    lng:       -34.855,
    foto:      null,
    fotoUrl:   "https://enter.travel/portodegalinhas/wp-content/uploads/sites/2/2018/08/olinda-pernambuco-e1535746093652.jpg",
    text:      ".",
    datum:     "2024-08-21",
    kategorie: "gekauft"
  },

  {
    id:        6,
    name:      "Recife",
    land:      "Brasilien",
    lat:       -8.0539,
    lng:       -34.8808,
    foto:      null,
    fotoUrl:   "https://www.brasiloo.de/sites/default/files/images/location/recife-brasilien.jpg",
    text:      ".",
    datum:     "2024-08-22",
    kategorie: "gekauft"
  },

  {
    id:        7,
    name:      "Paraty",
    land:      "Brasilien",
    lat:       -23.2194,
    lng:       -44.7147,
    foto:      null,
    fotoUrl:   "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/56/b6/7d/caption.jpg?w=900&h=500&s=1",
    text:      ".",
    datum:     "2024-08-23",
    kategorie: "gekauft"
  },

  {
    id:        8,
    name:      "Pipa Beach",
    land:      "Brasilien",
    lat:       -6.2276,
    lng:       -35.0476,
    foto:      null,
    fotoUrl:   "https://www.thehotelguru.com/_images/6d/0d/6d0d8c09222b79dddab2316c50a85461/s1180x560.jpg",
    text:      ".",
    datum:     "2024-08-24",
    kategorie: "gekauft"
  },

  {
    id:        9,
    name:      "São Miguel do Gostoso",
    land:      "Brasilien",
    lat:       -5.125,
    lng:       -35.6389,
    foto:      null,
    fotoUrl:   "https://focoturismo.com.br/dicas/wp-content/uploads/2019/08/s%C3%A3o-miguel-do-gostoso-rn-1.jpg",
    text:      ".",
    datum:     "2024-08-25",
    kategorie: "gekauft"
  },

  {
    id:        10,
    name:      "Natal",
    land:      "Brasilien",
    lat:       -5.795,
    lng:       -35.2089,
    foto:      null,
    fotoUrl:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ38j7mEfmY-mBFxpkTogQ-WSF-JfHIZhbS_A&s",
    text:      ".",
    datum:     "2024-08-26",
    kategorie: "gekauft"
  },

  {
    id:        11,
    name:      "São Paulo",
    land:      "Brasilien",
    lat:       -23.5504,
    lng:       -46.6339,
    foto:      null,
    fotoUrl:   "https://d3h1lg3ksw6i6b.cloudfront.net/media/image/2025/08/13/772b641c3edc4d24a968eef4a4bf512a_So_Paulo_iStock-1419903977_%281%29.jpg",
    text:      ".",
    datum:     "2024-08-27",
    kategorie: "gekauft"
  },

  {
    id:        12,
    name:      "Großer Aber",
    land:      "Deutschland",
    lat:       49.1125,
    lng:       13.1359,
    foto:      null,
    fotoUrl:   "https://www.mywintop.de/topbook/p.do?p=6&l=de&i=3087",
    text:      ".",
    datum:     "2024-08-28",
    kategorie: "gekauft"
  },

  {
    id:        13,
    name:      "Mittenwald",
    land:      "Deutschland",
    lat:       47.4419,
    lng:       11.2603,
    foto:      null,
    fotoUrl:   "https://content.r9cdn.net/rimg/dimg/49/16/46f11db3-city-46102-169968657c7.jpg?width=1366&height=768&xhint=1307&yhint=1237&crop=true",
    text:      ".",
    datum:     "2024-08-29",
    kategorie: "gekauft"
  },

  {
    id:        14,
    name:      "Kloster Andechs",
    land:      "Deutschland",
    lat:       47.9719,
    lng:       11.1834,
    foto:      null,
    fotoUrl:   "https://image.tourinfra.com/crop?stripmeta=true&width=1220&height=610&type=jpeg&url=https%3A%2F%2Fdam.destination.one%2F103784%2Fdf977c33d4a9e811b1b97f3513f68cffd85d4bc20cbf2458fe656fa4fdbb1de4%2Fluftaufnahme-des-klosters.jpg",
    text:      ".",
    datum:     "2024-08-30",
    kategorie: "gekauft"
  },

  {
    id:        15,
    name:      "Cinque Terre",
    land:      "Italien",
    lat:       44.1206,
    lng:       9.7229,
    foto:      null,
    fotoUrl:   "https://www.visitcinqueterre.eu/wp-content/uploads/2020/05/riomaggiore-banner.jpg",
    text:      ".",
    datum:     "2024-08-31",
    kategorie: "gekauft"
  },

  {
    id:        16,
    name:      "Berlin",
    land:      "Deutschland",
    lat:       52.5162,
    lng:       13.3769,
    foto:      null,
    fotoUrl:   "https://img.flytrippers.com/wp-content/uploads/2021/03/08212840/berlin-favorite-spots-scaled.jpg",
    text:      ".",
    datum:     "2024-09-01",
    kategorie: "gekauft"
  },

  {
    id:        17,
    name:      "Florenz",
    land:      "Italien",
    lat:       43.7714,
    lng:       11.2542,
    foto:      null,
    fotoUrl:   "https://assets.adac.de/image/upload/ar_16:9,c_fill,f_auto,g_auto,q_auto:eco,w_1500/v1/ADAC-eV/KOR/Bilder/RF/florenz-aufmacher-2211_pwfym5.jpeg",
    text:      ".",
    datum:     "2024-09-02",
    kategorie: "gekauft"
  },

  {
    id:        18,
    name:      "Helsinki",
    land:      "Finnland",
    lat:       60.1708,
    lng:       24.9375,
    foto:      null,
    fotoUrl:   "https://www.civitatis.com/blog/wp-content/uploads/2024/11/que-ver-helsinki.jpg",
    text:      ".",
    datum:     "2024-09-03",
    kategorie: "gekauft"
  },

  {
    id:        19,
    name:      "Sirmione",
    land:      "Italien",
    lat:       45.4694,
    lng:       10.6061,
    foto:      null,
    fotoUrl:   "https://www.enjoygardahotel.com/wp-content/uploads/sirmione.jpg",
    text:      ".",
    datum:     "2024-09-04",
    kategorie: "gekauft"
  },

  {
    id:        20,
    name:      "Oberstdorf",
    land:      "Deutschland",
    lat:       47.4097,
    lng:       10.2792,
    foto:      null,
    fotoUrl:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCWkNu0l5XEL5agrWjshIfODDYdPj4ijjbCg&s",
    text:      ".",
    datum:     "2024-09-05",
    kategorie: "gekauft"
  },

  {
    id:        21,
    name:      "Ribe",
    land:      "Dänemark",
    lat:       55.3272,
    lng:       8.7631,
    foto:      null,
    fotoUrl:   "https://files.guidedanmark.org/files/450/302465_Ribe_Domkirke.jpg",
    text:      ".",
    datum:     "2024-09-06",
    kategorie: "gekauft"
  },

  {
    id:        22,
    name:      "Friedrichstadt",
    land:      "Deutschland",
    lat:       54.377,
    lng:       9.0925,
    foto:      null,
    fotoUrl:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7OoXAyu4H6dIWusIBDr8C3Hm4UYXzU9ptGA&s",
    text:      ".",
    datum:     "2024-09-07",
    kategorie: "gekauft"
  },

  {
    id:        23,
    name:      "Berchtesgaden",
    land:      "Deutschland",
    lat:       47.6314,
    lng:       13.0042,
    foto:      null,
    fotoUrl:   "https://vcdn.bergfex.at/images/resized/e8/7b8d82be8eb888e8_66f055c2cbfd3963@2x.jpg",
    text:      ".",
    datum:     "2024-09-08",
    kategorie: "gekauft"
  },

  {
    id:        24,
    name:      "Garmisch-Partenkirchen",
    land:      "Deutschland",
    lat:       47.5,
    lng:       11.0833,
    foto:      null,
    fotoUrl:   "https://www.ab-in-den-urlaub.de/magazin/wp-content/uploads/2025/05/1747922961_Garmisch-Partenkirchen-Stadt.jpg",
    text:      ".",
    datum:     "2024-09-09",
    kategorie: "gekauft"
  },

  {
    id:        25,
    name:      "Wien",
    land:      "Österreich",
    lat:       48.2083,
    lng:       16.3731,
    foto:      null,
    fotoUrl:   "https://i0.wp.com/homeoftravel.de/wp-content/uploads/2022/12/Der-Stephansdom-in-Wien.jpg?resize=1024%2C734&quality=89&ssl=1",
    text:      ".",
    datum:     "2024-09-10",
    kategorie: "gekauft"
  },

  {
    id:        26,
    name:      "Mailand",
    land:      "Italien",
    lat:       45.4669,
    lng:       9.19,
    foto:      null,
    fotoUrl:   "https://content.skyscnr.com/m/439fed06896da73a/original/shutterstock_700247896.jpg?resize=1224%3Aauto",
    text:      ".",
    datum:     "2024-09-11",
    kategorie: "gekauft"
  },

  {
    id:        27,
    name:      "Frankfurt am Main",
    land:      "Deutschland",
    lat:       50.1106,
    lng:       8.6822,
    foto:      null,
    fotoUrl:   "https://img.static-kl.com/transform/385c6b11-04d9-4c00-9a90-439075db90fc/",
    text:      ".",
    datum:     "2024-09-12",
    kategorie: "gekauft"
  },

  {
    id:        28,
    name:      "Ronda",
    land:      "Spanien",
    lat:       36.7372,
    lng:       -5.1647,
    foto:      null,
    fotoUrl:   "https://media-cdn.tripadvisor.com/media/photo-s/17/19/8e/22/wwwcar2tripcom.jpg",
    text:      "Ein schönes Geschenk von Marlene.",
    datum:     "2024-09-13",
    kategorie: "geschenkt"
  },

  {
    id:        29,
    name:      "Shanghai",
    land:      "China",
    lat:       31.2325,
    lng:       121.4692,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Huangpu_Park_20124-Shanghai_%2832208802494%29.jpg/1280px-Huangpu_Park_20124-Shanghai_%2832208802494%29.jpg",
    text:      ".",
    datum:     "2024-09-14",
    kategorie: "gekauft"
  },

  {
    id:        30,
    name:      "Loffeld - Bad Staffelstein",
    land:      "Deutschland",
    lat:       50.099,
    lng:       10.9962,
    foto:      null,
    fotoUrl:   "https://bad-staffelstein.de/de-wAssets/img/stadt/stadtteile/weblication/wThumbnails/loffeld_1-e7f3601a-924f645a@652ll.jpg",
    text:      ".",
    datum:     "2024-09-15",
    kategorie: "gekauft"
  },

  {
    id:        31,
    name:      "Singapur",
    land:      "Singapur",
    lat:       1.36491,
    lng:       103.8228,
    foto:      null,
    fotoUrl:   "https://www.dreamlines.de/wp-blog/uploads/2018/09/13125640/Singapur_1.png",
    text:      ".",
    datum:     "2024-09-16",
    kategorie: "gekauft"
  },

  {
    id:        32,
    name:      "Guadalajara",
    land:      "Mexico",
    lat:       20.6767,
    lng:       -103.3475,
    foto:      null,
    fotoUrl:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBCYfVNlpP6rILt-4qgJ9bRSqDr3Zhb9Rt3Q&s",
    text:      "Ein schönes Geschenk von Alberto.",
    datum:     "2024-09-17",
    kategorie: "geschenkt"
  },

  {
    id:        33,
    name:      "Leipzig",
    land:      "Deutschland",
    lat:       51.34,
    lng:       12.375,
    foto:      null,
    fotoUrl:   "https://hotel-leipzig.dorint.com/fileadmin/_processed_/b/1/csm_LPZ_Sehenswuerdigkeiten_Hero_2facd54165.jpg",
    text:      ".",
    datum:     "2024-09-18",
    kategorie: "gekauft"
  },

  {
    id:        34,
    name:      "Spreewald",
    land:      "Deutschland",
    lat:       51.862,
    lng:       13.961,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Spreewald_04-2016_img03_Spree_near_Luebbenau.jpg/1280px-Spreewald_04-2016_img03_Spree_near_Luebbenau.jpg",
    text:      ".",
    datum:     "2024-09-19",
    kategorie: "gekauft"
  },

  {
    id:        35,
    name:      "Spitzingsee",
    land:      "Deutschland",
    lat:       47.6645,
    lng:       11.8854,
    foto:      null,
    fotoUrl:   "https://i0.wp.com/homeoftravel.de/wp-content/uploads/2024/12/Spitzingssee-im-Winter-edited.jpg?fit=1200%2C1199&quality=89&ssl=1",
    text:      ".",
    datum:     "2024-09-20",
    kategorie: "gekauft"
  },

  {
    id:        36,
    name:      "St. Anton am Arlberg",
    land:      "Österreich",
    lat:       47.1167,
    lng:       10.2667,
    foto:      null,
    fotoUrl:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSsjF2Dl6BaU5SjZqLGHtOxlD5YJ4iHQ3VGUg&s",
    text:      ".",
    datum:     "2024-09-21",
    kategorie: "gekauft"
  },

  {
    id:        37,
    name:      "Verona",
    land:      "Italien",
    lat:       45.4386,
    lng:       10.9928,
    foto:      null,
    fotoUrl:   "https://www.ab-in-den-urlaub.de/magazin/wp-content/uploads/2022/05/1651480458_Blick-ueber-Verona.jpg",
    text:      ".",
    datum:     "2024-09-22",
    kategorie: "gekauft"
  },

  {
    id:        38,
    name:      "Walchensee",
    land:      "Deutschland",
    lat:       47.5939,
    lng:       11.3461,
    foto:      null,
    fotoUrl:   "https://www.dein-toelzer-land.de/data/_naturschutz/mediadb/cms_pictures/%7B10dbfd8c-c1ac-3196-80c5-abdd645cf12d%7D.jpg",
    text:      ".",
    datum:     "2024-09-23",
    kategorie: "gekauft"
  },

  {
    id:        39,
    name:      "Meran",
    land:      "Italien",
    lat:       46.6696,
    lng:       11.1594,
    foto:      null,
    fotoUrl:   "https://vcdn.bergfex.at/images/resized/e6/bb018489a31115e6_43d1ca0be436ceb6.jpg",
    text:      ".",
    datum:     "2024-09-24",
    kategorie: "gekauft"
  },

  {
    id:        40,
    name:      "Oybin",
    land:      "Deutschland",
    lat:       50.8422,
    lng:       14.7428,
    foto:      null,
    fotoUrl:   "https://img.dampfbahn-route.de/rubrik_xl/1920x1080/bahn_401_2.jpg",
    text:      ".",
    datum:     "2024-09-25",
    kategorie: "gekauft"
  },

  {
    id:        41,
    name:      "Stilfser Joch",
    land:      "Italien",
    lat:       46.53,
    lng:       10.454,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Stilfserjoch_Strasse.jpg/1920px-Stilfserjoch_Strasse.jpg",
    text:      ".",
    datum:     "2024-09-26",
    kategorie: "gekauft"
  },

  {
    id:        42,
    name:      "Velden am Wörther See",
    land:      "Österreich",
    lat:       46.6125,
    lng:       14.0419,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Velden_Schloss_05.jpg/330px-Velden_Schloss_05.jpg",
    text:      ".",
    datum:     "2024-09-27",
    kategorie: "gekauft"
  },

  {
    id:        43,
    name:      "Blue Mountains",
    land:      "Australien",
    lat:       -33.7181,
    lng:       150.3106,
    foto:      null,
    fotoUrl:   "https://assets.atdw-online.com.au/images/f2d611395c4325200e237f9bc5f3d092.jpeg?rect=142%2C0%2C2163%2C1622&w=2048&h=1536&rot=360&q=eyJ0eXBlIjoibGlzdGluZyIsImxpc3RpbmdJZCI6IjU2YjI0ODBlZDI3MDE1NGI0NTU0OWNmYyIsImRpc3RyaWJ1dG9ySWQiOiI1NmIxZWI5MzQ0ZmVjYTNkZjJlMzIwYzgiLCJhcGlrZXlJZCI6IjU2YjFlZTU5MGNmMjEzYWQyMGRjNTgxOSJ9",
    text:      ".",
    datum:     "2024-09-28",
    kategorie: "gekauft"
  },

  {
    id:        44,
    name:      "Kloster Ettal",
    land:      "Deutschland",
    lat:       48,
    lng:       11,
    foto:      null,
    fotoUrl:   "https://dam.destination.one/1416874/03cd811c413d94b604a2de8fafbd3b4613bb0a476917670b7c42c9741577eaf8/kloster_ettal001-c-ammergauer-alpen-foto-julian-leitenstorfer-2-jpg.jpg",
    text:      ".",
    datum:     "2024-09-29",
    kategorie: "gekauft"
  },

  {
    id:        45,
    name:      "Hamburg",
    land:      "Deutschland",
    lat:       53.5503,
    lng:       10.0006,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Elbphilharmonie%2C_Hamburg.jpg/1280px-Elbphilharmonie%2C_Hamburg.jpg",
    text:      "Meine Stadt mein Zuhause.",
    datum:     "2024-09-30",
    kategorie: "gekauft"
  },

  {
    id:        46,
    name:      "Alsfeld",
    land:      "Deutschland",
    lat:       50.7511,
    lng:       9.2711,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Rathaus_Alsfeld01.jpg/960px-Rathaus_Alsfeld01.jpg",
    text:      ".",
    datum:     "2024-10-01",
    kategorie: "gekauft"
  },

  {
    id:        47,
    name:      "Hamburg",
    land:      "Deutschland",
    lat:       53.5503,
    lng:       10.0006,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Elbphilharmonie%2C_Hamburg.jpg/1280px-Elbphilharmonie%2C_Hamburg.jpg",
    text:      "Ein schönes Geschenk von Laura.",
    datum:     "2024-10-02",
    kategorie: "gekauft"
  },

  {
    id:        48,
    name:      "Schloss Neuschwanstein",
    land:      "Deutschland",
    lat:       47.5571,
    lng:       10.7485,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Schloss_Neuschwanstein_2013.jpg/1280px-Schloss_Neuschwanstein_2013.jpg",
    text:      ".",
    datum:     "2024-10-03",
    kategorie: "gekauft"
  },

  {
    id:        49,
    name:      "Venedig",
    land:      "Italien",
    lat:       45.4397,
    lng:       12.3319,
    foto:      null,
    fotoUrl:   "https://loving-travel.com/wp-content/uploads/2020/06/venedig-200612153139001.jpg",
    text:      ".",
    datum:     "2024-10-04",
    kategorie: "gekauft"
  },

  {
    id:        50,
    name:      "Bozen",
    land:      "Italien",
    lat:       46.4981,
    lng:       11.3548,
    foto:      null,
    fotoUrl:   "https://assets.adac.de/image/upload/ar_16:9,c_fill,f_auto,g_auto,q_auto:eco,w_1500/v1/ADAC-eV/KOR/Bilder/RM/highlights-bozen-dom-gesamt-2309_xohiyr.jpeg",
    text:      ".",
    datum:     "2024-10-06",
    kategorie: "geschenkt"
  },

  {
    id:        51,
    name:      "Gardasee",
    land:      "Italien",
    lat:       45.6624,
    lng:       10.6861,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Benacus_creino.jpg/1280px-Benacus_creino.jpg",
    text:      ".",
    datum:     "2024-10-07",
    kategorie: "gekauft"
  },

  {
    id:        52,
    name:      "Bad Gastein",
    land:      "Deutschland",
    lat:       47.1147,
    lng:       13.1356,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Hotel_de_l%27Europe%2C_Bad_Gastein_6.jpg/250px-Hotel_de_l%27Europe%2C_Bad_Gastein_6.jpg",
    text:      ".",
    datum:     "2024-10-08",
    kategorie: "gekauft"
  },

  {
    id:        53,
    name:      "Weimar",
    land:      "Deutschland",
    lat:       50.9811,
    lng:       11.3294,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Goethe_Schiller_Weimar.jpg/960px-Goethe_Schiller_Weimar.jpg",
    text:      ".",
    datum:     "2024-10-09",
    kategorie: "gekauft"
  },

  {
    id:        54,
    name:      "Sankt Peter-Ording",
    land:      "Deutschland",
    lat:       54.3042,
    lng:       8.6511,
    foto:      null,
    fotoUrl:   "https://www.hamburg-tourism.de/images/qtaDuXg3HBw/rs:fill-down:2500:974/sharpen:1.2/cb:/gravity:fp:0.43533333333333:0.493/aHR0cHM6Ly9pbXhwbGF0Zm9ybS1jdXN0LWhodC5mc24xLnlvdXItb2JqZWN0c3RvcmFnZS5jb20vbWVkaWEvaW1hZ2VzL3N0LXBldGVyLW9yZGluZ19jX2RlbWlhaGxfcGl4YWJheS5qcGc",
    text:      ".",
    datum:     "2024-10-10",
    kategorie: "gekauft"
  },

  {
    id:        55,
    name:      "Koblenz",
    land:      "Deutschland",
    lat:       50.3597,
    lng:       7.5978,
    foto:      null,
    fotoUrl:   "https://www.romantic-cities.com/fileadmin/_processed_/6/9/csm_Koblenz_DeutschesEck_Ketz_382_2f07754ce0.jpg",
    text:      ".",
    datum:     "2024-10-11",
    kategorie: "gekauft"
  },

  {
    id:        56,
    name:      "Oberaudorf",
    land:      "Deutschland",
    lat:       47.6475,
    lng:       12.1719,
    foto:      null,
    fotoUrl:   "https://bayern-online.de/fileadmin/_processed_/1/d/csm_Oberaudorf_001_CS_03cce87aa0.jpg",
    text:      ".",
    datum:     "2024-10-12",
    kategorie: "gekauft"
  },

  {
    id:        57,
    name:      "Eisenach",
    land:      "Deutschland",
    lat:       50.9747,
    lng:       10.3244,
    foto:      null,
    fotoUrl:   "https://cdn.indebergen.nl/media/i4oh3rpz/eisenach.jpg?anchor=center&mode=crop&width=1080&height=608&format=webp&quality=80",
    text:      ".",
    datum:     "2024-10-13",
    kategorie: "gekauft"
  },

  {
    id:        58,
    name:      "Brügge",
    land:      "Belgien",
    lat:       51.2089,
    lng:       3.2242,
    foto:      null,
    fotoUrl:   "https://assets.adac.de/image/upload/c_scale,f_auto,q_auto,t_2:1-default,w_1500/v1/ADAC-eV/KOR/Bilder/RF/sehenswuerdigkeiten-bruegge-stadtansicht-2502_nb9fj1",
    text:      ".",
    datum:     "2024-10-14",
    kategorie: "gekauft"
  },

  {
    id:        59,
    name:      "Mumbai",
    land:      "Indien",
    lat:       19.0758,
    lng:       72.8775,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Mumbai_03-2016_30_Gateway_of_India.jpg/960px-Mumbai_03-2016_30_Gateway_of_India.jpg",
    text:      ".",
    datum:     "2024-10-15",
    kategorie: "gekauft"
  },

  {
    id:        60,
    name:      "Großglockner",
    land:      "Österreich",
    lat:       47.0745,
    lng:       12.6938,
    foto:      null,
    fotoUrl:   "https://img2.oastatic.com/img2/10611078/max/variant.jpg",
    text:      ".",
    datum:     "2024-10-16",
    kategorie: "gekauft"
  },

  {
    id:        61,
    name:      "Soorts-Hossegor",
    land:      "Frankreich",
    lat:       43.6583,
    lng:       -1.4272,
    foto:      null,
    fotoUrl:   "https://d34-a.sdn.cz/d_34/c_img_gR_e/iZPGBX.jpeg?fl=res,400,225,3",
    text:      ".",
    datum:     "2024-10-17",
    kategorie: "gekauft"
  },

  {
    id:        62,
    name:      "Biarritz",
    land:      "Frankreich",
    lat:       43.4806,
    lng:       -1.5572,
    foto:      null,
    fotoUrl:   "https://www.sea-lifts.com/app/uploads/2018/03/biarritz-4013618_1920.jpg",
    text:      ".",
    datum:     "2024-10-18",
    kategorie: "gekauft"
  },

  {
    id:        63,
    name:      "Nürnberg",
    land:      "Deutschland",
    lat:       49.4539,
    lng:       11.0775,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/N%C3%BCrnberger_Burg_im_Herbst_2013.jpg/1280px-N%C3%BCrnberger_Burg_im_Herbst_2013.jpg",
    text:      ".",
    datum:     "2024-10-19",
    kategorie: "gekauft"
  },

  {
    id:        64,
    name:      "Brüssel",
    land:      "Belgien",
    lat:       50.8467,
    lng:       4.3525,
    foto:      null,
    fotoUrl:   "https://i0.wp.com/homeoftravel.de/wp-content/uploads/2025/01/Grand-Place-Grote-Markt-in-Bruessel-Belgien.jpg?resize=1024%2C683&quality=89&ssl=1",
    text:      ".",
    datum:     "2024-10-20",
    kategorie: "gekauft"
  },

  {
    id:        65,
    name:      "Bremen",
    land:      "Deutschland",
    lat:       53.0758,
    lng:       8.8072,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/RathausDomBuergerschaft-01.jpg/1280px-RathausDomBuergerschaft-01.jpg",
    text:      ".",
    datum:     "2024-10-21",
    kategorie: "gekauft"
  },

  {
    id:        66,
    name:      "Cochem",
    land:      "Deutschland",
    lat:       50.1469,
    lng:       7.1667,
    foto:      null,
    fotoUrl:   "https://images.musement.com/cover/0004/54/cochem-cover-jpg_header-353766.jpeg?w=1200&h=630&q=95&fit=crop",
    text:      ".",
    datum:     "2024-10-22",
    kategorie: "gekauft"
  },

  {
    id:        67,
    name:      "Europa",
    land:      "Europa",
    lat:       49.7153,
    lng:       6.0814,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b7/Flag_of_Europe.svg/1280px-Flag_of_Europe.svg.png",
    text:      ".",
    datum:     "2024-10-23",
    kategorie: "gekauft"
  },

  {
    id:        68,
    name:      "Bernkastel-Kues",
    land:      "Deutschland",
    lat:       49.9161,
    lng:       7.0694,
    foto:      null,
    fotoUrl:   "https://resc.deskline.net/images/RPT/1/e24cf387-254a-4807-845c-21239f3dc568/99/image.jpg",
    text:      ".",
    datum:     "2024-10-24",
    kategorie: "gekauft"
  },

  {
    id:        69,
    name:      "No Kangoroos in Austria",
    land:      "Österreich",
    lat:       47.5939,
    lng:       14.1245,
    foto:      null,
    fotoUrl:   "https://m.media-amazon.com/images/I/61aeFsozFWL._AC_UF894,1000_QL80_.jpg",
    text:      ".",
    datum:     "2024-10-25",
    kategorie: "gekauft"
  },

  {
    id:        70,
    name:      "Schottland",
    land:      "Schottland",
    lat:       56.7861,
    lng:       -4.57,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Flag_of_Scotland.svg/1920px-Flag_of_Scotland.svg.png",
    text:      ".",
    datum:     "2024-10-26",
    kategorie: "gekauft"
  },

  {
    id:        71,
    name:      "Bad Tölz",
    land:      "Deutschland",
    lat:       47.7603,
    lng:       11.5567,
    foto:      null,
    fotoUrl:   "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/0e/f4/45/3a.jpg",
    text:      ".",
    datum:     "2024-10-27",
    kategorie: "gekauft"
  },

  {
    id:        72,
    name:      "Amsterdam",
    land:      "Niederlande",
    lat:       52.3667,
    lng:       4.8833,
    foto:      null,
    fotoUrl:   "https://blog.airbaltic.com/wp-content/uploads/2025/02/the-ultimate-amsterdam-travel-guide-by-the-airbaltic-blog.jpg",
    text:      ".",
    datum:     "2024-10-28",
    kategorie: "gekauft"
  },

  {
    id:        73,
    name:      "Motovun",
    land:      "Kroatien",
    lat:       45.3358,
    lng:       13.8278,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Aerial_view_to_Motovun.jpg/1280px-Aerial_view_to_Motovun.jpg",
    text:      ".",
    datum:     "2024-10-29",
    kategorie: "gekauft"
  },

  {
    id:        74,
    name:      "Kopenhagen",
    land:      "Dänemark",
    lat:       55.6761,
    lng:       12.5689,
    foto:      null,
    fotoUrl:   "https://images.prod.bumorca.cloud.fcse.io/OdGF_9fX7Nh7XapBDXLvrzNLsGU=/1790x1060/filters:focal(1281x634:1291x644)/storage.googleapis.com%2Fbumorca-bum-prod%2Fbum-cms%2FGeo%2FEuropa%2FD%C3%A4nemark%2Feuropa-daenemark-kopenhagen-haeser-fluss.jpg",
    text:      ".",
    datum:     "2024-10-30",
    kategorie: "gekauft"
  },

  {
    id:        75,
    name:      "Zadar",
    land:      "Kroatien",
    lat:       44.117,
    lng:       15.2355,
    foto:      null,
    fotoUrl:   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEyuomckj8AnIw-u34V2_zWMdOYGBs4W3WrQ&s",
    text:      ".",
    datum:     "2024-11-01",
    kategorie: "gekauft"
  },

  {
    id:        76,
    name:      "Rovinj",
    land:      "Kroatien",
    lat:       45.0833,
    lng:       13.6333,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/5/5b/Rovinj%2C_Croatia.jpg",
    text:      ".",
    datum:     "2024-11-02",
    kategorie: "gekauft"
  },

  {
    id:        77,
    name:      "Moskau",
    land:      "Russland",
    lat:       56,
    lng:       38,
    foto:      null,
    fotoUrl:   "https://reisenexclusiv.com/wp-content/uploads/2017/10/Basilius-Kathedrale-Moskau-Foto-Reidl-e1508927198828.jpg",
    text:      "Ein schönes Geschenk von Alexander Gassner.",
    datum:     "2024-11-04",
    kategorie: "geschenkt"
  },

  {
    id:        78,
    name:      "Lübeck",
    land:      "Deutschland",
    lat:       53.8697,
    lng:       10.6864,
    foto:      null,
    fotoUrl:   "https://musermeku.org/wp-content/uploads/2021/03/a.schoder-musermeku-luebeck_museen.jpeg",
    text:      ".",
    datum:     "2024-11-05",
    kategorie: "gekauft"
  },

  {
    id:        79,
    name:      "Kuala Lumpur",
    land:      "Malaysia",
    lat:       3.1516,
    lng:       101.6942,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/The_Twins_SE_Asia_2019_%2849171985716%29.jpg/1280px-The_Twins_SE_Asia_2019_%2849171985716%29.jpg",
    text:      ".",
    datum:     "2024-11-06",
    kategorie: "gekauft"
  },

  {
    id:        80,
    name:      "Mostar",
    land:      "Bosnien und Herzegowina",
    lat:       43.3436,
    lng:       17.8075,
    foto:      null,
    fotoUrl:   "https://media.cntraveller.com/photos/650c037b9a4941357e144469/4:3/w_1884,h_1413,c_limit/Mostar,%20Bosnia%20and%20Herzegovina-GettyImages-909655800.jpeg",
    text:      ".",
    datum:     "2024-11-07",
    kategorie: "gekauft"
  },

  {
    id:        81,
    name:      "Kiew",
    land:      "Ukraine",
    lat:       50.45,
    lng:       30.5241,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/en/3/36/17-07-02-Maidan_Nezalezhnosti_RR74397.jpg",
    text:      "Ein schönes Geschenk von Alexander Gassner.",
    datum:     "2024-11-08",
    kategorie: "geschenkt"
  },

  {
    id:        82,
    name:      "Königstein",
    land:      "Deutschland",
    lat:       50.9189,
    lng:       14.0714,
    foto:      null,
    fotoUrl:   "https://www.saechsische-schweiz.de/fileadmin/_processed_/b/1/csm_AdobeStock_Koenigstein-Sliver-232176249-WEB_7224a1fed4.jpg",
    text:      ".",
    datum:     "2024-11-09",
    kategorie: "gekauft"
  },

  {
    id:        83,
    name:      "Triest",
    land:      "Italien",
    lat:       45.6503,
    lng:       13.7703,
    foto:      null,
    fotoUrl:   "https://assets.adac.de/image/upload/ar_16:9,c_fill,f_auto,g_auto,q_auto:eco,w_1500/v1/ADAC-eV/KOR/Bilder/RF/triest-canal-grande-2102_efdzce.webp",
    text:      ".",
    datum:     "2024-11-10",
    kategorie: "gekauft"
  },

  {
    id:        84,
    name:      "Istanbul",
    land:      "Türkei",
    lat:       41.01,
    lng:       28.9603,
    foto:      null,
    fotoUrl:   "https://media.cntraveller.com/photos/68ff3db8e7084c26e7744dee/1:1/w_2160,h_2160,c_limit/1480863367",
    text:      ".",
    datum:     "2024-11-11",
    kategorie: "gekauft"
  },

  {
    id:        85,
    name:      "Barcelona",
    land:      "Spanien",
    lat:       41.3825,
    lng:       2.1769,
    foto:      null,
    fotoUrl:   "https://www.royalcaribbean.com/media-assets/pmc/content/dam/shore-x/barcelona-bcn/br05-barcelona-city-and-city-center-transfer/stock-photo-view-of-barcelona-from-the-park-at-sunrise-734963035.jpg?w=1440",
    text:      ".",
    datum:     "2024-11-12",
    kategorie: "gekauft"
  },

  {
    id:        86,
    name:      "Split",
    land:      "Kroatien",
    lat:       43.51,
    lng:       16.44,
    foto:      null,
    fotoUrl:   "https://cdn.kroati.de/images/uploads/reisefuehrer/kroatien/mitteldalmatien/split/split.jpg",
    text:      ".",
    datum:     "2024-11-13",
    kategorie: "gekauft"
  },

  {
    id:        87,
    name:      "Salamanca",
    land:      "Spanien",
    lat:       40.965,
    lng:       -5.6642,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Reflejos_de_la_Catedrales_de_Salamanca_edited.jpg/1920px-Reflejos_de_la_Catedrales_de_Salamanca_edited.jpg",
    text:      "Ein schönes Geschenk von Marlene.",
    datum:     "2024-11-14",
    kategorie: "geschenkt"
  },

  {
    id:        88,
    name:      "Dubrovnik",
    land:      "Kroatien",
    lat:       42.6403,
    lng:       18.1083,
    foto:      null,
    fotoUrl:   "https://www.sea-help.eu/wp-content/uploads/2023-05-04_seahelp_dubrovnik_respect-the-cty_tourismus_as802609059.jpg",
    text:      ".",
    datum:     "2024-11-15",
    kategorie: "gekauft"
  },

  {
    id:        89,
    name:      "Bamberg",
    land:      "Deutschland",
    lat:       49.8917,
    lng:       10.8917,
    foto:      null,
    fotoUrl:   "https://i0.wp.com/homeoftravel.de/wp-content/uploads/2022/10/Altes-Rathaus-Bamberg.jpg?resize=1024%2C712&quality=89&ssl=1",
    text:      ".",
    datum:     "2024-11-16",
    kategorie: "gekauft"
  },

  {
    id:        90,
    name:      "Plitvička Jezera",
    land:      "Kroatien",
    lat:       44.8805,
    lng:       15.616,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9d/Plitvice_Lakes_National_Park_%282%29.jpg/1280px-Plitvice_Lakes_National_Park_%282%29.jpg",
    text:      ".",
    datum:     "2024-11-17",
    kategorie: "gekauft"
  },

  {
    id:        91,
    name:      "Lwiw",
    land:      "Ukraine",
    lat:       49.8425,
    lng:       24.0322,
    foto:      null,
    fotoUrl:   "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/%D0%9B%D0%B0%D1%82%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%28%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%29_16.jpg/1280px-%D0%9B%D0%B0%D1%82%D0%B8%D0%BD%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%BA%D0%B0%D1%84%D0%B5%D0%B4%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D0%B8%D0%B9_%D1%81%D0%BE%D0%B1%D0%BE%D1%80_%28%D0%9B%D1%8C%D0%B2%D1%96%D0%B2%29_16.jpg",
    text:      "Ein schönes Geschenk von Alexander Gassner.",
    datum:     "2024-11-19",
    kategorie: "geschenkt"
  },

  {
    id:        92,
    name:      "Taipei",
    land:      "Taiwan",
    lat:       25.0384,
    lng:       121.5637,
    foto:      null,
    fotoUrl:   "https://cdn.sanity.io/images/nxpteyfv/goguides/8073613adf9cb2bfcdc7672e654a38ff2892dd15-1600x1067.jpg",
    text:      "Auf Sir Yama einmal über die gesamte Insel.",
    datum:     "2024-11-20",
    kategorie: "gekauft"
  }
];