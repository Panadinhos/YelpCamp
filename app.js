const express = require('express');
const app = express();
const path = require('path');

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'))

app.get('/', (req,res) => {
	res.render('home')
})

app.listen( process.env.PORT || 8080 , () => {
	console.log('Ouvindo no porto 8080 ou noutro qq!!!')
})
