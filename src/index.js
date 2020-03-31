const express = require('express');
const morgan = require('morgan');
const path = require('path')
const app = express();

app.set('port', process.env.PORT || 3000);



app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:false}))

//router
app.use(require('./router/router'))


app.use(express.static(path.join(__dirname,'public')))

app.listen(app.get('port'),()=>{
    console.log('server on http://localhost:'+app.get('port'));
})