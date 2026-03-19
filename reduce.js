const pc = [
  { id: 1, brand: "lenovo", ram: "8GB", price: 50000 },
  { id: 2, brand: "Hp", ram: "16GB", price: 80000 },
  { id: 3, brand: "Mac", ram: "8GB", price: 150000 },
  { id: 4, brand: "Dell", ram: "16GB", price: 65000 },
];
const laptops = pc.filter((p) => p.price < 60000);
console.log(laptops);
const reduction = pc.reduce((p, c) => p + c.price, 0);
console.log(reduction);
