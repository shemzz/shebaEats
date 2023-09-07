import standard from "../Assets/specialimages/standard.jpg";
import deluxe from "../Assets/specialimages/deluxe.jpg";
import treatbox from "../Assets/packagesimg/treatbox.png";
import withlove from "../Assets/packagesimg/withlove.png";
import withlovesm from "../Assets/packagesimg/withlovesm.png";
import contentbox from "../Assets/packagesimg/contentbox.png";
import rolls from "../Assets/packagesimg/rolls.png";
import springrolls from "../Assets/packagesimg/springrolls.png";
import puff from "../Assets/packagesimg/puff.png";
import samosa from "../Assets/packagesimg/samosa.png";
import gizzard from "../Assets/packagesimg/gizzard.png";
import fish from "../Assets/packagesimg/fish.png";
import mosa from "../Assets/packagesimg/mosa.png";
import prawn from "../Assets/packagesimg/prawn.png";
import popcorn from "../Assets/packagesimg/popcorn.png";
import prawnrolls from "../Assets/packagesimg/prawnrolls.png";
import samosapack from "../Assets/packagesimg/samosapack.png";
import corndogs from "../Assets/packagesimg/corndogs.png";

const Packageslist = [
  {
    id: 0,
    pname: "Popcorn (Guguru)",
    pimg: popcorn,
    price: 250,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "Popcorn",
        img: popcorn,
        pieces: 1,
      },
    ],
  },
  {
    id: 1,
    pname: "spring roll mini pack",
    pimg: withlovesm,
    price: 500,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "Vegetable Spring Rolls",
        img: springrolls,
        pieces: 1,
      },
      {
        cname: "stick meat",
        pieces: 1,
      },
      {
        cname: "Puff puff",
        img: puff,
        pieces: 4,
      },
    ],
  },
  {
    id: 2,
    pname: "samosa mini pack",
    pimg: withlovesm,
    price: 500,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "beef samosas",
        img: samosa,
        pieces: 1,
      },
      {
        cname: "stick meat",
        pieces: 1,
      },
      {
        cname: "Puff puff",
        img: puff,
        pieces: 4,
      },
    ],
  },
  {
    id: 3,
    pname: "everybody pack",
    pimg: withlovesm,
    price: 950,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "Puff puff",
        img: puff,
        pieces: 4,
      },
      {
        cname: "Mosa",
        img: mosa,
        pieces: 3,
      },
      {
        cname: "Vegetable Spring Rolls",
        img: springrolls,
        pieces: 1,
      },
      {
        cname: "beef samosas",
        img: samosa,
        pieces: 1,
      },
      {
        cname: "grilled chicken cut",
        pieces: 12,
      },
    ],
  },
  {
    id: 4,
    pname: "Treat pack",
    pimg: withlovesm,
    price: 1500,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "Puff puff",
        img: puff,
        pieces: 5,
      },
      {
        cname: "Mosa",
        img: mosa,
        pieces: 3,
      },
      {
        cname: "corn dogs",
        img: corndogs,
        pieces: 1,
      },
      {
        cname: "Vegetable Spring Rolls",
        img: springrolls,
        pieces: 2,
      },
      {
        cname: "beef samosas",
        img: samosa,
        pieces: 1,
      },
      {
        cname: "stick meat",
        pieces: 1,
      },
      {
        cname: "grilled chicken cut",
        pieces: 1,
      },
    ],
  },
  {
    id: 5,
    pname: "urgent 2k pack",
    pimg: withlovesm,
    price: 2000,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "Mosa",
        img: mosa,
        pieces: 3,
      },
      {
        cname: "corn dogs",
        img: corndogs,
        pieces: 1,
      },
      {
        cname: "Puff puff",
        img: puff,
        pieces: 5,
      },
      {
        cname: "Vegetable Spring Rolls",
        img: springrolls,
        pieces: 2,
      },
      {
        cname: "Peppered Gizzard",
        img: gizzard,
        pieces: 1,
      },
      {
        cname: "beef samosas",
        img: samosa,
        pieces: 1,
      },
      {
        cname: "stick meat",
        pieces: 1,
      },
      {
        cname: "Grilled Sausage (Half)",
        pieces: 1,
      },
      {
        cname: "grilled chicken cut",
        pieces: 1,
      },
    ],
  },
  {
    id: 6,
    pname: "Raw Vegetable Spring Rolls",
    pimg: rolls,
    price: 2250,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "Vegetable Spring Rolls",
        img: springrolls,
        pieces: 12,
      },
    ],
  },
  {
    id: 7,
    pname: "Raw beef samosas",
    pimg: samosapack,
    price: 2250,
    unit: 0,
    total: 0,
    content: [
      {
        cname: " Beef Samosas",
        img: samosa,
        pieces: 12,
      },
    ],
  },
  {
    id: 8,
    pname: "Turkey Wing and Fries",
    pimg: withlovesm,
    price: 3000,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "BBQ Turkey (Large)",
        pieces: 1,
      },
      {
        cname: "French Fries (Large)",
        pieces: 1,
      },
    ],
  },
  {
    id: 9,
    pname: "akanna pack",
    pimg: withlovesm,
    price: 3000,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "Mosa",
        img: mosa,
        pieces: 5,
      },
      {
        cname: "corn dogs",
        img: corndogs,
        pieces: 1,
      },
      {
        cname: "Puff puff",
        img: puff,
        pieces: 7,
      },
      {
        cname: "Vegetable Spring Rolls",
        img: springrolls,
        pieces: 2,
      },
      {
        cname: "beef samosas",
        img: samosa,
        pieces: 2,
      },
      {
        cname: "stick meat",
        pieces: 1,
      },
      {
        cname: "BBQ Chicken Cut (Medium)",
        pieces: 1,
      },
      {
        cname: "Grilled Prawn Kebab",
        pieces: 1,
      },
    ],
  },
  {
    id: 10,
    pname: "Turkey Wing and Yam Fries",
    pimg: withlovesm,
    price: 3000,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "BBQ Turkey (Large)",
        pieces: 1,
      },
      {
        cname: "Yam Fries and Pepper Sauce",
        pieces: 1,
      },
    ],
  },
  {
    id: 11,
    pname: "Full Chicken Lap and Yam Fries",
    pimg: withlovesm,
    price: 3500,
    unit: 0,
    total: 0,
    content: [
      {
        cname: " BBQ Chicken Cut (Full Lap)",
        pieces: 1,
      },
      {
        cname: "Yam Fries and Pepper Sauce",
        pieces: 1,
      },
      {
        cname: " BBQ Chicken (Full Lap)",
        pieces: 1,
      },
    ],
  },
  {
    id: 12,
    pname: "Full Chicken Lap and Chips",
    pimg: withlovesm,
    price: 3500,
    unit: 0,
    total: 0,
    content: [
      {
        cname: " BBQ Chicken Cut (Full Lap)",
        pieces: 1,
      },
      {
        cname: "French Fries (large)",
        pieces: 1,
      },
      {
        cname: " BBQ Chicken (Full Lap)",
        pieces: 1,
      },
    ],
  },
  {
    id: 13,
    pname: "Standard Seafood Platter",
    pimg: withlove,
    price: 5000,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "Puff puff",
        img: puff,
        pieces: 10,
      },
      {
        cname: "Grilled Prawn Kebab",
        pieces: 1,
      },
      {
        cname: "Fish In Batter",
        pieces: 3,
      },
      {
        cname: "Grilled Corn",
        pieces: 2,
      },
    ],
  },
  {
    id: 14,
    pname: "standard treatbox",
    treatimg: standard,
    pimg: treatbox,
    price: 5500,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "Puff puff",
        img: puff,
        pieces: 30,
      },
      {
        cname: "Mosa",
        img: mosa,
        pieces: 20,
      },
      {
        cname: "Vegetable Spring Rolls",
        img: springrolls,
        pieces: 10,
      },
      {
        cname: "beef samosas",
        img: samosa,
        pieces: 10,
      },
      {
        cname: "grilled chicken cut",
        pieces: 10,
      },
    ],
  },
  {
    id: 15,
    pname: "deluxe treatbox",
    treatimg: deluxe,
    pimg: treatbox,
    price: 8000,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "Mosa",
        img: mosa,
        pieces: 10,
      },
      {
        cname: "corn dogs",
        img: corndogs,
        pieces: 4,
      },
      {
        cname: "Puff puff",
        img: puff,
        pieces: 15,
      },
      {
        cname: "Vegetable Spring Rolls",
        img: springrolls,
        pieces: 6,
      },
      {
        cname: "Peppered Gizzard",
        img: gizzard,
        pieces: 4,
      },
      {
        cname: "beef samosas",
        img: samosa,
        pieces: 6,
      },
      {
        cname: "stick meat",
        pieces: 4,
      },
      {
        cname: "fish in batter",
        img: fish,
        pieces: 2,
      },
      {
        cname: "grilled chicken cut",
        pieces: 5,
      },
    ],
  },
  {
    id: 16,
    pname: "deluxe seafood platter",
    pimg: withlove,
    price: 10000,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "puff puff",
        img: puff,
        pieces: 20,
      },
      {
        cname: "Grilled Croaker (Full)",
        pieces: 1,
      },
      {
        cname: "Grilled Corn",
        pieces: 3,
      },
      {
        cname: "Grilled Prawn Kebab",
        pieces: 2,
      },
    ],
  },
  {
    id: 17,
    pname: "standard tray",
    pimg: contentbox,
    price: 10000,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "Puff puff",
        img: puff,
        pieces: 30,
      },
      {
        cname: "Mosa",
        img: mosa,
        pieces: 20,
      },
      {
        cname: "Vegetable Spring Rolls",
        img: springrolls,
        pieces: 10,
      },
      {
        cname: "beef samosas",
        img: samosa,
        pieces: 6,
      },
      {
        cname: "grilled chicken cut",
        pieces: 10,
      },
    ],
  },
  {
    id: 18,
    pname: "midi tray",
    pimg: contentbox,
    price: 12500,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "Puff puff",
        img: puff,
        pieces: 30,
      },
      {
        cname: "Vegetable Spring Rolls",
        img: springrolls,
        pieces: 12,
      },
      {
        cname: "Peppered Gizzard",
        img: gizzard,
        pieces: 6,
      },
      {
        cname: "Mosa",
        img: mosa,
        pieces: 20,
      },
      {
        cname: "beef samosas",
        img: samosa,
        pieces: 12,
      },
      {
        cname: "stick meat",
        pieces: 4,
      },
      {
        cname: "grilled chicken cut",
        pieces: 12,
      },
    ],
  },
  {
    id: 19,
    pname: "deluxe tray",
    pimg: contentbox,
    price: 15000,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "Mosa",
        img: mosa,
        pieces: 20,
      },
      {
        cname: "Puff puff",
        img: puff,
        pieces: 30,
      },
      {
        cname: "Vegetable Spring Rolls",
        img: springrolls,
        pieces: 12,
      },
      {
        cname: "beef samosas",
        img: samosa,
        pieces: 12,
      },
      {
        cname: "Peppered Gizzard",
        img: gizzard,
        pieces: 10,
      },
      {
        cname: "corn dogs",
        img: corndogs,
        pieces: 6,
      },
      {
        cname: "grilled chicken cut",
        pieces: 12,
      },
      {
        cname: "Grilled Sausage (Half)",
        pieces: 6,
      },
    ],
  },
  {
    id: 20,
    pname: "midi treatbox",
    pimg: treatbox,
    price: 6500,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "Mosa",
        img: mosa,
        pieces: 10,
      },
      {
        cname: "corn dogs",
        img: corndogs,
        pieces: 4,
      },
      {
        cname: "Puff puff",
        img: puff,
        pieces: 15,
      },
      {
        cname: "Vegetable Spring Rolls",
        img: springrolls,
        pieces: 4,
      },
      {
        cname: "Peppered Gizzard",
        img: gizzard,
        pieces: 2,
      },
      {
        cname: "beef samosas",
        img: samosa,
        pieces: 4,
      },
      {
        cname: "stick meat",
        pieces: 4,
      },
      {
        cname: "BBQ Chicken Cut (Medium)",
        pieces: 4,
      },
    ],
  },
  {
    id: 21,
    pname: "Raw Shrimp Rolls",
    pimg: prawnrolls,
    price: 5500,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "Prawn Rolls (x5)",
        img: prawn,
        pieces: 12,
      },
    ],
  },
  {
    id: 22,
    pname: "Full Grilled Croaker and Yam Chips",
    pimg: withlovesm,
    price: 6000,
    unit: 0,
    total: 0,
    content: [
      {
        cname: "Grilled Croaker (Full)",
        pieces: 1,
      },
      {
        cname: "Yam Fries and Pepper Sauce",
        pieces: 1,
      },
    ],
  },
];

export default Packageslist;
