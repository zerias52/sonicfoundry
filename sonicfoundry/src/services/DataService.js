import axios from "axios";

export const catalog = [
  {
    title: "Guitar",
    image: "/images/guitar.webp",
    price: 1049.99,
    category: "Instrument",
    _id: "1",
  },
  {
    title: "Drums",
    image: "/images/drums.webp",
    price: 399.99,
    category: "Instrument",
    _id: "2",
  },
  {
    title: "Trumpet",
    image: "/images/trumpet.jpg",
    price: 892.49,
    category: "Instrument",
    _id: "3",
  },
  {
    title: "Guitar Strings",
    image: "/images/guitarstrings.webp",
    price: 19.99,
    category: "Maintenance",
    _id: "4",
  },
  {
    title: "Drumsticks",
    image: "/images/drumsticks.webp",
    price: 44.99,
    category: "Equipment",
    _id: "5",
  },
  {
    title: "Valve Oil",
    image: "/images/valveoil.jpg",
    price: 5.99,
    category: "Maintenance",
    _id: "6",
  },
  {
    title: "Microphone",
    image: "/images/microphone.jpg",
    price: 99,
    category: "Equipment",
    _id: "7",
  },
  {
    title: "XLR Cable",
    image: "/images/xlr.webp",
    price: 21.99,
    category: "Equipment",
    _id: "8",
  },
  {
    title: "Speaker",
    image: "/images/speaker.jpg",
    price: 699,
    category: "Equipment",
    _id: "9",
  },
  {
    title: "Staff Paper",
    image: "/images/staffpaper.webp",
    price: 4.99,
    category: "Accessory",
    _id: "10",
  },
  {
    title: "Music Stand",
    image: "/images/musicstand.webp",
    price: 49.99,
    category: "Accessory",
    _id: "11",
  },
];

export const categories = [
  "Instrument",
  "Maintenance",
  "Equipment",
  "Accessory",
];

class DataService {
  async getProducts() {
    let response = await axios.get("http://127.0.0.1:5000/api/products");
    return response.data;
  }

  async saveProduct(product) {
    let response = await axios.post(
      "http://127.0.0.1:5000/api/products",
      product,
    );
    return response.data;
  }

  async getCoupons() {
    let response = await axios.get("http://127.0.0.1:5000/api/coupons");
    return response.data;
  }

  async saveCoupon(coupon) {
    let response = await axios.post(
      "http://127.0.0.1:5000/api/coupons",
      coupon,
    );
    return response.data;
  }
}

export default new DataService();
