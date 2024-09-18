const express = require('express');
const dotenv = require('dotenv');
const path = require('path');
const Product = require('./models/Product');
const mongoose = require('mongoose');

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));
app.use(express.json());


app.listen(port, () => {
    console.log(`📞 Le serveur écoute sur le port ${port}`);
    console.log(`API URL: ${process.env.API_URL}`);
})

//Route pour /api
app.get('/api', (req, res) => {
    res.json({ message: 'Bienvenue dans l\'API !'})
});

//Route pour récupérer tous les produits
app.get('api/products',async (req, res) => {
    try {
        const products = await Product.find() //Récupère tous les produits
        res.json(products);
    } catch (error) {
        res.status(500).json({message: 'Erreur serveur'});
    }
});

// Route pour ajouter un produit
app.post('/api/products', async (req, res) => {
    const { name, price } = req.body;
  
    try {
      const newProduct = new Product({ name, price });
      await newProduct.save(); // Enregistrer le produit dans MongoDB
      res.status(201).json(newProduct);
    } catch (error) {
      res.status(500).json({ message: 'Erreur lors de l\'ajout du produit' });
    }
  });
  

// Connexion à MongoDB via Mongoose (sans les options dépréciées)
mongoose.connect(process.env.DATABASE)
  .then(() => {
    console.log('Connecté à MongoDB via Mongoose');
  })
  .catch((err) => {
    console.error('Erreur de connexion à MongoDB', err);
  });
