import { nanoid } from "nanoid";
import img from "../image/img.svg";
const data = [
  {
    id: nanoid(),
    img: img,
    title: "Card title",
    descr:
      "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    id: nanoid(),
    title: "Special title treatment",
    descr:
      "With supporting text below as a natural lead-in to additional content.",
  },
];
export default data;
