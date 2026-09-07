/**
 * Die Buchten, die als Hintergrund durchlaufen.
 *
 * Alle Fotos stammen von Wikimedia Commons und stehen unter einer
 * Creative-Commons-Lizenz. Die Namensnennung ist Pflicht — sie wird
 * unten links auf der Seite eingeblendet (siehe BuchtenHintergrund).
 */

export type Bucht = {
  name: string;
  ort: string;
  bild: string;
  autor: string;
  lizenz: string;
  lizenzUrl: string;
  quelle: string;
};

export const BUCHTEN: Bucht[] = [
  {
    name: "Cala Mondragó",
    ort: "Santanyí",
    bild: "/buchten/cala-mondrago.jpg",
    autor: "Xxlstier",
    lizenz: "CC BY-SA 4.0",
    lizenzUrl: "https://creativecommons.org/licenses/by-sa/4.0",
    quelle: "https://commons.wikimedia.org/wiki/File:Cala_Mondrag%C3%B3_09.jpg",
  },
  {
    name: "Cala Torta",
    ort: "Artà",
    bild: "/buchten/cala-torta.jpg",
    autor: "Dronepicr",
    lizenz: "CC BY 3.0",
    lizenzUrl: "https://creativecommons.org/licenses/by/3.0",
    quelle:
      "https://commons.wikimedia.org/wiki/File:Mallorca_Sch%C3%B6nste_Str%C3%A4nde_Cala_Torta_(190269345).jpeg",
  },
  {
    name: "Cala s'Amarador",
    ort: "Mondragó, Santanyí",
    bild: "/buchten/cala-samarador.jpg",
    autor: "dronepicr",
    lizenz: "CC BY 2.0",
    lizenzUrl: "https://creativecommons.org/licenses/by/2.0",
    quelle:
      "https://commons.wikimedia.org/wiki/File:Mallorca_sch%C3%B6nste_Str%C3%A4nde_Cala_S%27Amarador_(31135413753).jpg",
  },
  {
    name: "Torrent de Pareis",
    ort: "Sa Calobra, Escorca",
    bild: "/buchten/sa-calobra.jpg",
    autor: "Isiwal",
    lizenz: "CC BY-SA 3.0",
    lizenzUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    quelle:
      "https://commons.wikimedia.org/wiki/File:Mallorca_Sa_Calobra_Torrent_de_Pareis_beach.jpg",
  },
  {
    name: "Cala Llombards",
    ort: "Santanyí",
    bild: "/buchten/cala-llombards.jpg",
    autor: "Dronepicr",
    lizenz: "CC BY 3.0",
    lizenzUrl: "https://creativecommons.org/licenses/by/3.0",
    quelle:
      "https://commons.wikimedia.org/wiki/File:Mallorca_Bucht_Cala_Llombards_(190269461).jpeg",
  },
  {
    name: "Es Trenc",
    ort: "Campos",
    bild: "/buchten/es-trenc.jpg",
    autor: "Bogdan Giuşcă",
    lizenz: "CC BY-SA 3.0",
    lizenzUrl: "https://creativecommons.org/licenses/by-sa/3.0",
    quelle: "https://commons.wikimedia.org/wiki/File:Es_Trenc,_Mallorca,_the_beach.jpg",
  },
  {
    name: "Cala Mitjana",
    ort: "Artà",
    bild: "/buchten/cala-mitjana.jpg",
    autor: "dronepicr",
    lizenz: "CC BY 2.0",
    lizenzUrl: "https://creativecommons.org/licenses/by/2.0",
    quelle:
      "https://commons.wikimedia.org/wiki/File:Mallorca_sch%C3%B6nste_Str%C3%A4nde_Cala_Mitjana_(31571467270).jpg",
  },
];
