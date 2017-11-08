const express = require('express');

const port = 8888

const app = express();
const bodyParser = require('body-parser')
var saying ={}
var response ={}

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/', (req, res) => {
    res.render('index', {
        title: 'Welcome',
        message: saying.name
    });
});

app.use(bodyParser.urlencoded({ extended: true }));

app.post('/stuff', (req, res) => {
    res.redirect(301,'/');
    saying = req.body;
     if (saying.name == 'Justin'){
        // Found world
      
         saying.name +=  " Please do not break me";
     } else if(saying.name) { 
         if (saying.name !=='Justin'){
         saying.name += ", Welcome new user";
         }
     }
    

 console.log(req.body.name);
  
});


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});