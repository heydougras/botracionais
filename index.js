require('dotenv').config();
const Twit = require('twit');
const frase = require('./frases')     

//credenciais do twitter dev
const Bot = new Twit({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET, 
    access_token: process.env.ACCESS_TOKEN,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET,
    timeout_ms: 60 * 1000,
})

console.log('Bot iniciado')  


const botInit = () => {
    const randomNumber = Math.floor(Math.random() * frase.length)       

    Bot.post('statuses/update',
        {
            status: frase[randomNumber]    
        },
        function (err, data, response) {
            console.log(data)  

            if (err) {
                console.log(err)  
            }
        }
    );
}

setInterval(botInit, 7200000); 
