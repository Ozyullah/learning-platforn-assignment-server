const express= require('express');
const cors = require('cors')
const app = express();
const port =process.env.PORT || 5000;

app.use(cors());

const catagory =require('./data/catagory.json')

const courses =require('./data/courses.json')

const titles =require('./data/tittles.json')

const premium =require('./data/premium.json')

app.get('/tittles',(req, res)=>{
    res.send(titles)
})

app.get('/catagory', (req,res) =>{
    res.send(catagory)
})

app.get('/catagory/:id', (req,res)=>{
    // console.log(req.params)
     const id =req.params.id;
     if(id === "07"){
        res.send(courses)
     }
     else {
        const pathCategory=courses.filter(sect=>sect.catagory_id === id)
        res.send(pathCategory)
     }
})

app.get('/courses', (req, res)=> {
    res.send(courses)
})

app.get('/courses/:id', (req, res)=>{
    const id =req.params.id;
    const coursesAlbum= courses.find(part=>part._id === id)
    res.send(coursesAlbum);
})


app.get('/premium', (req, res)=>{
    res.send(premium)
})
app.get('/premium/:id', (req, res)=>{
    const id =req.params.id;
    const meed =courses.find(kudo=>kudo._id === id)
    res.send(meed)
})

app.listen(port, ()=>{
console.log(`learnin platform started with port:${port}`)
})