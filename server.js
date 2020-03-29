const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;
var app = express();

app.set('view engine','hbs');

hbs.registerPartials(__dirname+'/views/partials');

app.get('/',(req,res)=>{
  res.render('index.hbs',{
    tittle: 'Home Page',
    header: 'Home Page',
    content: 'Welcome to the Home Page',
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
    content: 'This is the About Page',
    year : new Date().getFullYear()
  });
  //res.send('About Page');
});

app.get('/projects',(req,res)=>{
  res.render('projects.hbs',{
    tittle: 'Projects Page',
    header: 'Welcome to Projects Page',
    content: 'New Projects can be found here',
    year : new Date().getFullYear()
  });
});

app.get('/bad',(req,res)=>{
  res.send({
    errorMessage:'This page can not reach'
  });
})

app.listen(port,()=>{
  console.log(`Server is running on prot ${port}`);
});
