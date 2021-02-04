const express = require('express');
const app = express();

app.get('/', (req,res) => {
	res.send('Pintou!!!')
})

app.listen( process.env.PORT || 8080 , () => {
	console.log('Ouvindo no porto 8080 ou noutro qq!!!')
})
