import Product from "../models/Product.js"

export const createProduct = async (req, res) => {
  try {
    const { name, basePrice } = req.body

    const frontImage = req.files.front[0].path
    const backImage = req.files.back[0].path

    const product = await Product.create({
      name,
      basePrice,
      frontImage,
      backImage
    })

    res.status(201).json(product)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
