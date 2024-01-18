import express from 'express'
import cors from 'cors'
const app = express()
const port = 8000
app.use(cors())
app.use(express.json())

import mongoose from 'mongoose';
const { Schema } = mongoose;

const MenuSchema = new Schema({
  title: String, 
  desc: String,
 price:Number
});

const Menus = mongoose.model('menu', MenuSchema);
app.get('/', async (req, res) => {
 try {
    const menu=await Menus.find({})
    res.json(menu)
 } catch (error) {
    res.status(500).json(error)
 }
})
app.get('/:id', async (req, res) => {
    try {
       const {id}=req.params
       const menu=await Menus.findById(id)
       res.json(menu)
    } catch (error) {
       res.status(500).json(error)
    }
   })
   app.delete('/:id', async (req, res) => {
    try {
        const {id}=req.params
        const menu=await Menus.findByIdAndDelete(id)
        res.status(200).json("deleted")
    } catch (error) {
       res.status(500).json(error)
    }
   })
   app.post('/', async (req, res) => {
    try {
       const menu=new Menus({...req.body})
       await menu.save()
       res.status(200).json("created")
    } catch (error) {
       res.status(500).json(error)
    }
   })

mongoose.connect("mongodb+srv://nuranaisazade:nurana2004@cluster0.bnrclo9.mongodb.net/")

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})