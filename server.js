const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

app.set('view engine','hbs');

hbs.registerPartials(__dirname+'/views/partials');

app.get('/',(req,res)=>{
  res.render('index.hbs',{
    tittle: 'Home PAGE',
    header: 'Welcome to Home Page',
    content: 'Welcome to the HOME PAGE',
    year : new Date().getFullYear()
  });
  //res.send('<H1>Hello Express</H1>');
  // res.send({
  //   name: 'Dinuka',
  //   likes: ['Traveling','Playing Cricket','...']
  // });
});

app.get('/about',(req,res)=>{
  res.render('about.hbs',{
    tittle: 'About Page',
    header: 'About Page',
    content: 'Some Text',
    year : new Date().getFullYear()
  });
  //res.send('About Page');
});

app.get('/bad',(req,res)=>{
  res.send({
    errorMessage:'This page can not reach'
  });
})

app.listen(port,()=>{
  console.log(`Server is running on prot ${port}`);
});
