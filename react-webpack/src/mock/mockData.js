const devices = [
  {
    id: 1,
    name: "High Performance Laptop",
    slug: "high-performance-laptop",
    category: "Computers"
  },
  {
    id: 2,
    name: "Smartphone with Great Camera",
    slug: "smartphone-great-camera",
    category: "Mobile"
  },
  {
    id: 3,
    name: "Lightweight Tablet",
    slug: "lightweight-tablet",
    category: "Tablets"
  },
  {
    id: 4,
    name: "Gaming Desktop",
    slug: "gaming-desktop",
    category: "Computers"
  },
];
  
  const categories = [
    { id: 1, name: "Computers" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Tablets" }
  ];
  
  const newDevice = {
    id: null,
    name: "",
    categoryId: 0,
  };
  
  // Using CommonJS style export so we can consume via Node (without using Babel-node)
  module.exports = {
    newDevice,
    devices,
    categories
  };
  