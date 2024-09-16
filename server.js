const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config()

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/dist', express.static(path.join(__dirname, 'dist')));


app.listen(port, () => {
    console.log(`📞 Le serveur écoute sur le port ${port}`);
    console.log(`API URL: ${process.env.API_URL}`);
})

//Route pour /api
app.get('/api', (req, res) => {
    res.json({ message: 'Bienvenue dans l\'API !'})
});