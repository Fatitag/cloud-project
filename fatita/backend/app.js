const express = require('express')
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const cors =require('cors')
const student=require('./models/student')
const app = express()
app.use(cors())
app.use (bodyParser.json())
mongoose.connect('mongodb://127.0.0.1:27017/test',
{ useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'))

app.post('/students/create-student',(req,res)=>{
    const pr = new student({
        ...req.body
    })
    pr.save()
      .then(p => res.status(200).json(p))
      .catch(error => res.status(500).json({ error }))
})
app.get('/students',async (req, res) => {
    const students= await student.find()
    res.json(students)
})
app.get('/students/update-student/:id', (req, res, next) => {
    student.findOne({ _id: req.params.id })
      .then(p => res.status(200).json(p))
      .catch(error => res.status(404).json({ error }));
  });
//   app.put('/api/products/:id', async (req, res) => {
//     const { name, description, price, inStock } = req.body
//     await product.findByIdAndUpdate(req.params.id, { name, description, price, inStock })
//     res.json({ message: 'Modified!' })
//   })
app.put('/students/update-student/:id ', (req, res, next) => {
    student.updateOne({ _id: req.params.id }, { 
      ...req.body
      /*
      "name": string,
      "description": string,
      "price": number,
      "inStock": boolean*/
      , _id: req.params.id })
      .then(() => res.status(200).json({ message: 'Modified !'}))
      .catch(error => res.status(400).json({ error }));
  });
  
  app.delete('/students/delete-student/:id', async (req, res) => {
    await student.findByIdAndDelete(req.params.id);
    res.json({ message: 'Deleted!' });
  });
    
    /*app.use((req, res, next) => {
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
      next();
    });*/
  
  
  
module.exports=app
