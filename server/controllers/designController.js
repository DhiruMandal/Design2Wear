import Design from "../models/Design.js"

export const saveDesign = async (req, res) => {
  try {
    const design = new Design(req.body)
    await design.save()
    res.status(201).json({ message: "Design saved", design })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
}
