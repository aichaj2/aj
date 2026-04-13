// src/data/products.js
export const products = [
  // Clothing
  { 
    id: 1, 
    name: "Soft Beige Abaya", 
    price: 349, 
    fabric: "Premium Crepe", 
    category: "clothing",
    
    colors: [
    { name: "a1", code: "#36a9a78a", image:`${import.meta.env.BASE_URL}img/a1.jpeg`},
    { name: "a2", code: "#9d56be", image: `${import.meta.env.BASE_URL}img/a2.jpeg`},
    { name: "a3", code: "#6e182e", image: `${import.meta.env.BASE_URL}img/a3.jpeg`}
    ] 
  },
  { 
    id: 2, 
    name: "Dusty Rose Kimono", 
    price: 399, 
    fabric: "Luxury Chiffon", 
    category: "clothing",
    colors: [
    { name: "b1", code: "#111b648a", image:`${import.meta.env.BASE_URL}img/ab1.jpeg`},
    { name: "b2", code: "#ceb396", image: `${import.meta.env.BASE_URL}img/ab2.jpeg`}
    ]
  },
  { 
    id: 3, 
    name: "Olive Elegance Set", 
    price: 449, 
    fabric: "Soft Linen Blend", 
    category: "clothing",
    colors: [
    { name: "c1", code: "#2d141cef", image:`${import.meta.env.BASE_URL}img/ac1.jpeg`},
    { name: "c2", code: "#090909", image: `${import.meta.env.BASE_URL}img/ac2.jpeg`},
    { name: "c3", code: "#5e3811", image: `${import.meta.env.BASE_URL}img/ac3.jpeg`}
    ]
  },
  { 
    id: 4, 
    name: "Cream Pearl Abaya", 
    price: 379, 
    fabric: "Silk Touch Crepe", 
    category: "clothing",
    colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/ad1.jpeg`},
    { name: "d2", code: "#21145b", image: `${import.meta.env.BASE_URL}img/ad2.jpeg`},
    { name: "d3", code: "#5e3811", image: `${import.meta.env.BASE_URL}img/ad3.jpeg`}
    ]
  },
  { 
    id: 5, 
    name: "Mocha Dream Dress", 
    price: 329, 
    fabric: "Flowy Georgette", 
    category: "clothing",
    colors: [
    { name: "e1", code: "#052e19f0", image:`${import.meta.env.BASE_URL}img/ae1.jpeg`},
    { name: "e2", code: "#935378", image: `${import.meta.env.BASE_URL}img/ae2.jpeg`},
    { name: "e3", code: "#5e3811", image: `${import.meta.env.BASE_URL}img/ae3.jpeg`}
    ]
  },
  { 
    id: 6, 
    name: "Blush Pink Set", 
    price: 419, 
    fabric: "Premium Medina Silk", 
    category: "clothing",
    colors: [
    { name: "f1", code: "#6e182e", image:`${import.meta.env.BASE_URL}img/af1.jpeg`},
    { name: "f2", code: "#271907", image: `${import.meta.env.BASE_URL}img/af2.jpeg`},
    { name: "f3", code: "#08ae13a3", image: `${import.meta.env.BASE_URL}img/af3.jpeg`}
    ]
  },
  
  
  // Shoes
  { 
    id: 7, 
    name: "Elegant Flats", 
    price: 199, 
    fabric: "Faux Leather", 
    category: "shoes",
    colors: [
      { name: "ba2", code: "#90ba7e", image: `${import.meta.env.BASE_URL}img/ba2.jpeg`},
      { name: "ba3", code: "#9e7e5e", image: `${import.meta.env.BASE_URL}img/ba3.jpeg`},
      { name: "ba4", code: "#3b6199", image: `${import.meta.env.BASE_URL}img/ba4.jpeg`}
    ]
  },
  { 
    id: 8, 
    name: "Elegant Flats", 
    price: 199, 
    fabric: "Faux Leather", 
    category: "shoes",
    colors: [
      { name: "bb1", code: "#3c2308", image:`${import.meta.env.BASE_URL}img/bb1.jpeg`},
      { name: "bb2", code: "#c8ab9a", image: `${import.meta.env.BASE_URL}img/bb2.jpeg`},
      { name: "bb3", code: "#070707", image: `${import.meta.env.BASE_URL}img/bb3.jpeg`}
    ]
  },
  { 
    id: 9, 
    name: "Elegant Flats", 
    price: 199, 
    fabric: "Faux Leather", 
    category: "shoes",
     colors: [
    { name: "d1", code: "#080808", image:`${import.meta.env.BASE_URL}img/bc1.jpeg`},
    { name: "d2", code: "#f2f2f2", image: `${import.meta.env.BASE_URL}img/bc2.jpeg`},
    { name: "d3", code: "#7e6144", image: `${import.meta.env.BASE_URL}img/bc3.jpeg`}
    ]
  },
  { 
    id: 10, 
    name: "Elegant Flats", 
    price: 199, 
    fabric: "Faux Leather", 
    category: "shoes",
     colors: [
    { name: "d1", code: "#e693d3", image:`${import.meta.env.BASE_URL}img/bd1.jpeg`},
    { name: "d2", code: "#c6b170", image: `${import.meta.env.BASE_URL}img/bd2.jpeg`},
    { name: "d3", code: "#78a944", image: `${import.meta.env.BASE_URL}img/bd3.jpeg`},
    { name: "d3", code: "#dbcdbf", image: `${import.meta.env.BASE_URL}img/bd4.jpeg`}
    ]
  },
  { 
    id: 11, 
    name: "Elegant Flats", 
    price: 199, 
    fabric: "Faux Leather", 
    category: "shoes",
     colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/be1.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/be2.jpeg`}
    ]
  },
  { 
    id: 12, 
    name: "Elegant Flats", 
    price: 199, 
    fabric: "Faux Leather", 
    category: "shoes",
     colors: [
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/bf1.jpeg`},
    { name: "d2", code: "#956543", image: `${import.meta.env.BASE_URL}img/bf2.jpeg`},
    { name: "d3", code: "#1372ad", image: `${import.meta.env.BASE_URL}img/bf3.jpeg`}
    ]
  },
  
  // Accessories
  { 
    id: 13, 
    name: "Pearl Hijab Pin Set", 
    price: 49,  
    category: "accessories",
    colors: [
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/ca1.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/ca2.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/ca3.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/ca4.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/ca5.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/ca6.jpeg`}
    ]
  },
  { 
    id: 14, 
    name: "Pearl Hijab Pin Set", 
    price: 49,  
    category: "accessories",
    colors: [
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cb1.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cb2.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cb3.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cb4.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cb5.jpeg`}
    ]
  },
  { 
    id: 15, 
    name: "Pearl Hijab Pin Set", 
    price: 49,  
    category: "accessories",
    colors: [
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cc1.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cc2.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cc3.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cc4.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cc5.jpeg`}
    ]
  },
  { 
    id: 16, 
    name: "Pearl Hijab Pin Set", 
    price: 49,  
    category: "accessories",
    colors: [
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cd3.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cd2.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cd1.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cd4.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cd5.jpeg`}
    ] 
  },
  { 
    id: 17, 
    name: "Pearl Hijab Pin Set", 
    price: 49,  
    category: "accessories",
    colors: [
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/ce1.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/ce2.jpeg`}
    ]
  },
  { 
    id: 18, 
    name: "Pearl Hijab Pin Set", 
    price: 49,
    category: "accessories",
    colors: [
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cf1.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cf2.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cf3.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cf4.jpeg`},
    { name: "d1", code: "#faf7f4", image:`${import.meta.env.BASE_URL}img/cf5.jpeg`}
    ] 
  },
  
  // Bags
  { 
    id: 19, 
    name: "Elegant Shoulder Bag", 
    price: 249, 
    fabric: "Faux Leather", 
    category: "bags",
     colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/da1.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/da2.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/da3.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/da4.jpeg`}
    ]
  },
   { 
    id: 20, 
    name: "Elegant Shoulder Bag", 
    price: 249, 
    fabric: "Faux Leather", 
    category: "bags",
     colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/db1.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/db2.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/db3.jpeg`}
    ] 
  },
   { 
    id: 21, 
    name: "Elegant Shoulder Bag", 
    price: 249, 
    fabric: "Faux Leather", 
    category: "bags",
     colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/dc1.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/dc2.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/dc3.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/dc4.jpeg`}
    ] 
  },
   { 
    id: 22, 
    name: "Elegant Shoulder Bag", 
    price: 249, 
    fabric: "Faux Leather", 
    category: "bags",
     colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/dd1.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/dd2.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/dd3.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/dd4.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/dd5.jpeg`}
  ]
  },
   { 
    id: 23, 
    name: "Elegant Shoulder Bag", 
    price: 249, 
    fabric: "Faux Leather", 
    category: "bags",
     colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/de1.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/de2.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/de3.jpeg`}
    ]
  },
  
  // Hijab
  { 
    id: 24, 
    name: "Luxury Chiffon Hijab", 
    price: 79, 
    fabric: "Chiffon", 
    category: "hijab",
     colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/ea1.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ea2.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ea3.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ea4.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ea5.jpeg`},
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/ea6.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ea7.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ea8.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ea9.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ea10.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ea11.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ea12.jpeg`}
  
  ]
  },
   { 
    id: 25, 
    name: "Luxury Chiffon Hijab", 
    price: 79, 
    fabric: "Chiffon", 
    category: "hijab",
     colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/eb1.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/eb2.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/eb3.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/eb4.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/eb5.jpeg`},
     { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/eb6.jpeg`},
      { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/eb7.jpeg`}
  ]
  },
   { 
    id: 26, 
    name: "Luxury Chiffon Hijab", 
    price: 79, 
    fabric: "Chiffon", 
    category: "hijab",
     colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/ec1.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ec2.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ec3.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ec4.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ec5.jpeg`}
  ] 
  },
   { 
    id: 27, 
    name: "Luxury Chiffon Hijab", 
    price: 79, 
    fabric: "Chiffon", 
    category: "hijab",
     colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/ed1.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ed2.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ed3.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ed4.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ed5.jpeg`},
     { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ed6.jpeg`},
      { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ed7.jpeg`},
  ] 
  },
   { 
    id: 28, 
    name: "Luxury Chiffon Hijab", 
    price: 79, 
    fabric: "Chiffon", 
    category: "hijab",
     colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/ee1.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ee2.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ee3.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ee4.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ee5.jpeg`}
  ] 
  },
   { 
    id: 29, 
    name: "Luxury Chiffon Hijab", 
    price: 79, 
    fabric: "Chiffon", 
    category: "hijab",
     colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/ef1.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ef2.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ef3.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ef4.jpeg`}
  ]
  },
  //makeup
    { 
    id: 30, 
    name: "Matte Liquid Lipstick", 
    price: 89, 
    fabric: "Liquid Lipstick", 
    category: "makeup",
     colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/fa1.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/fa2.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/fa3.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/fa4.jpeg`}
  ]
  },
    { 
    id: 31, 
    name: "Matte Liquid Lipstick", 
    price: 89, 
    fabric: "Liquid Lipstick", 
    category: "makeup",
     colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/fb1.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/fb2.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/fb3.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/fb4.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/fb5.jpeg`}
  ]
  },
    { 
    id: 32, 
    name: "Matte Liquid Lipstick", 
    price: 89, 
    fabric: "Liquid Lipstick", 
    category: "makeup",
     colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/fc1.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/fc2.jpeg`}
  ] 
  },
    { 
    id: 33, 
    name: "Matte Liquid Lipstick", 
    price: 89, 
    fabric: "Liquid Lipstick", 
    category: "makeup",
     colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/fd1.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/fd2.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/fd3.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/fd4.jpeg`}
  ]
  },
    { 
    id: 34, 
    name: "Matte Liquid Lipstick", 
    price: 89, 
    fabric: "Liquid Lipstick", 
    category: "makeup",
     colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/fe1.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/fe2.jpeg`}
  ] 
  },
    { 
    id: 35, 
    name: "Matte Liquid Lipstick", 
    price: 89, 
    fabric: "Liquid Lipstick", 
    category: "makeup",
     colors: [
    { name: "d1", code: "#ceb396", image:`${import.meta.env.BASE_URL}img/ff1.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ff2.jpeg`},
    { name: "d3", code: "#854baf", image: `${import.meta.env.BASE_URL}img/ff3.jpeg`}
  ]
  },

]