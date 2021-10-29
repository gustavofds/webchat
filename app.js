const express = require('express');
const cors = require('cors');
const randomString = require('randomstring');

const app = express();

app.use(cors());
app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './views');

app.get('/', async (_req, res) => {
  const randomNickname = randomString.generate({
    length: 16,
    charset: 'alphanumeric',
  });

  res.status(200).render('index', {
    messages: [{
      timestamp: new Date().toLocaleString('pt-BR'),
      nickname: 'Admin',
      message: 'Bem vindo ao Chat!',
    }],
    randomNickname,
  });
});

module.exports = app;
