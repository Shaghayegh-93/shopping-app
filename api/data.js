import bcrypt from "bcryptjs";

export const products = [
  {
    discount: 0,
    categories: ["jeans"],
    size: ["S", "M", "L"],
    color: ["yellow", "blue"],
    inStock: true,
    title: "Winter jeans",
    price: 120,
    offPrice: 120,
    img: "https://i.ibb.co/YZC6n90/coat1.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and ...",
  },
  {
    discount: 8,
    categories: ["jeans", "coat"],
    size: ["S"],
    color: ["red", "blue"],
    inStock: true,
    title: "Adidas",
    price: 110,
    offPrice: 100,
    img: "https://i.ibb.co/J39QRFz/coat3.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and ...",
  },
  {
    discount: 10,
    categories: ["jeans", "coat", "woman"],
    size: ["M"],
    color: ["white", "blue", "red", "green"],
    inStock: true,
    title: "Vans",
    price: 99,
    offPrice: 89,
    img: "https://i.ibb.co/54RmbZC/shoe1.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and ...",
  },
  {
    discount: 15,
    categories: ["jean", "woman"],
    size: ["S", "M", "L"],
    color: ["black"],
    inStock: true,
    title: "White",
    price: 260,
    offPrice: 220,
    img: "https://i.ibb.co/3z5Y4dV/shoe4.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and ...",
  },
  {
    discount: 0,
    categories: ["woman"],
    size: ["L", "M"],
    color: ["white"],
    inStock: true,
    title: "Croopped-shoe",
    price: 150,
    offPrice: 150,
    img: "https://i.ibb.co/kqj2pPD/shORT1.png",
    desc: "Lorem Ipsum is simply dummy text of the printing and ...",
  },
  {
    discount: 13,
    categories: ["jean", "coat", "woman"],
    size: ["L"],
    color: ["blue"],
    inStock: true,
    title: "Blues",
    price: 220,
    offPrice: 200,
    img: "https://s4.uupload.ir/files/item6_7jfy.jpg",
    desc: "Lorem Ipsum is simply dummy text of the printing and ...",
  },
];

export const users = [
  {
    name: "Saheb ",
    // lastName:"mohammadi",
    email: "saheb.ex@gmail.com",
    password: bcrypt.hashSync("12345", 8),
    phoneNumber: "09180000000",
    isAdmin: true,
  },
  {
    name: "John",
    // lastName:"shdsjhds",
    email: "user@example.com",
    password: bcrypt.hashSync("1234", 8),
    isAdmin: false,
    phoneNumber: "09181230000",
  },
];
