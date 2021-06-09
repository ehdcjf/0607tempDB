const express = require('express');
const app = express();
const { sequelize } = require('./models');

const router = require('./routers');
const bodyParser = require('body-parser')
const nunjucks = require('nunjucks')

app.set('view engine', 'html');
nunjucks.configure('views', {
  express: app,
})

app.use('/uploads', express.static('uploads'));
app.use(express.static('uploads/'));
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

sequelize.sync({ force: false })
  .then(() => { console.log('접속 완료') })
  .catch(() => { console.log('접속 실패 ') })


app.use('/', router);


app.listen(3000, () => {
  console.log('server start port : 3000');
})

// const x= require('./public')

