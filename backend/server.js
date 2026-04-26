const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")

const app = express()
app.use(cors({ origin: "*" }))
app.use(express.json())

//  connect MongoDB
mongoose.connect("mongodb+srv://aicha:Aicha12345@cluster0.6b7pctn.mongodb.net/test?retryWrites=true&w=majority")
  .then(() => console.log("MongoDB connected successfully"))
  .catch(err => console.log("Mongo error:", err))

//  Product Model
const Product = mongoose.model("Product", {
  name: String,
  price: Number,
  image: String,
  category: String,
  colors: Array,
  fabric: String
})

app.get("/products", async (req, res) => {
  const products = await Product.find()
  res.json(products)
})

app.post("/products", async (req, res) => {
  const product = new Product(req.body)
  await product.save()
  res.json(product)
})

app.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id)
  res.json({ message: "deleted" })
})

app.listen(5000, () => console.log("Server running"))
