import cam from "../../assets/cam.jpg";
import tao from "../../assets/tao.jpg";
import chuoi from "../../assets/chuoi.jpg";
import dua from "../../assets/dua.jpg";
import dau from "../../assets/dau.jpg";
import salad from "../../assets/salad.jpg";
import dogBiscuit from "../../assets/dog_biscuit.jpg";
import tomato from "../../assets/tomato.jpg";
import chicken from "../../assets/chicken.png";

const data = [
  {
    id: 1,
    name: "Orange",
    price: 200,
    img: cam,
    discount: 0.5,
    rate: 4.3,
    countRate: 45,
    favorites: true,
    categories: "fruits",
    countOder: 0,
  },
  {
    id: 2,
    name: "Apple",
    price: 10,
    img: tao,
    discount: 0,
    rate: 5.0,
    countRate: 20,
    favorites: true,
    categories: "fruits",
    countOder: 0,
  },
  {
    id: 3,
    name: "Banana",
    price: 180,
    img: chuoi,
    discount: 0.5,
    rate: 4,
    countRate: 30,
    favorites: true,
    categories: "fruits",
    countOder: 0,
  },
  {
    id: 4,
    name: "Coconut",
    price: 100,
    img: dua,
    discount: 0.5,
    rate: 3,
    countRate: 20,
    favorites: false,
    categories: "fruits",
    countOder: 0,
  },
  {
    id: 5,
    name: "Strawberry",
    price: 39,
    img: dau,
    discount: 0.3,
    rate: 3.8,
    countRate: 32,
    favorites: true,
    categories: "fruits",
    countOder: 0,
  },
  {
    id: 6,
    name: "Fresh Salad",
    price: 30,
    img: salad,
    discount: 0.3,
    rate: 3.3,
    countRate: 29,
    favorites: false,
    categories: "fresh",
    countOder: 0,
  },
  {
    id: 7,
    name: "Dog Biscuit",
    price: 150,
    img: dogBiscuit,
    discount: 0,
    rate: 5,
    countRate: 12,
    favorites: false,
    categories: "dairy",
    countOder: 0,
  },
  {
    id: 8,
    name: "Tomato",
    price: 10,
    img: tomato,
    discount: 0,
    rate: 2.8,
    countRate: 20,
    favorites: false,
    categories: "fruits",
    countOder: 0,
  },
  {
    id: 9,
    name: "Fresh Chicken",
    price: 80,
    img: chicken,
    discount: 0.5,
    rate: 4.2,
    countRate: 99,
    favorites: false,
    categories: "chicken",
    countOder: 0,
  },
];

export default data;
