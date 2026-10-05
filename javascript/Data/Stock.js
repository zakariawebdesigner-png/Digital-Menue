
// Every record takes id: nextId++, so ids start at Date.now() and never repeat.
let nextId = Date.now();

export   const cafe = [
  { id: nextId++, name: "Americano", price: 450, img: "" },
  { id: nextId++, name: "Café Filtre", price: 700, img: "" },
  { id: nextId++, name: "Ristretto", price: 350, img: "" },
  { id: nextId++, name: "Espresso", price: 450, img: "" },
];

export  const cafeAuLait = [
  { id: nextId++, name: "Cappuccino", price: 550, img: "" },
  { id: nextId++, name: "Macchiato", price: 550, img: "" },
  { id: nextId++, name: "Caffé Latte", price: 550, img: "" },
  { id: nextId++, name: "Flat white", price: 500, img: "" },
  { id: nextId++, name: "Mochaccino", price: 600, img: "" },
  { id: nextId++, name: "Affogato", price: 700, img: "" },
  { id: nextId++, name: "Cortado", price: 500, img: "" },
];

export const jus = [
  { id: nextId++, name: "Smoothie1", price: 500, img: "" },
  { id: nextId++, name: "Smoothie2", price: 600, img: "" },
  { id: nextId++, name: "Smoothie3", price: 700, img: "" },
  { id: nextId++, name: "Jus de fruit de saison", price: 600, img: "" },
  { id: nextId++, name: "Green vitality", price: 450, img: "" },
  { id: nextId++, name: "Sunshine Punch", price: 450, img: "" },
  { id: nextId++, name: "Purple Glow", price: 500, img: "" },
];

export const theEtTisane = [
  { id: nextId++, name: "Thé maison", price: 300, img: "" },
  { id: nextId++, name: "Thé vert/noir/rouge", price: 350, img: "" },
];

export const tisane = [
  { id: nextId++, name: "Camomille", price: 300, img: "" },
  { id: nextId++, name: "Vervaine", price: 300, img: "" },
  { id: nextId++, name: "Menthe", price: 300, img: "" },
];

export const dessertSucre = [
  { id: nextId++, name: "Tarte au citron", price: 600, img: "" },
  { id: nextId++, name: "Banana Bread", price: 400, img: "" },
  { id: nextId++, name: "Japanese cheesecake", price: 700, img: "" },
  { id: nextId++, name: "Cookie", price: 250, img: "" },
];

export const sandwich = [
  { id: nextId++, name: "Le Proust Prestige", price: 600, img: "" },
  { id: nextId++, name: "Jardin de Jane", price: 500, img: "" },
  { id: nextId++, name: "Verdure de Voltaire", price: 450, img: "" },
];