const express = require('express');
const app = express();

app.use(express.json());//MIDDLEWARE -> converting body(string) in json 

// CUSTOM MIDDLEWARE
app.use((req, res, next) => {
    console.log(`Method: ${req.method}`);
    console.log(`IP: ${req.ip}`);
    console.log(`Hostname: ${req.hostname}`);
    console.log(`Date: ${new Date().toLocaleString()}`);
    next(); // Don't forget to call next() to continue the request pipeline
  });
let courses = [
    {id:1,name:"java"},
    {id:2,name:"javascript"},
    {id:3,name:"python"}
];
//  GET
app.get('/courses',(req,res)=>{
    res.json(courses);
});
// ADDED another COURSE
app.post('/courses', (req, res) => {
    let singleCourse = {
        id: courses.length + 1,
        name: req.body.name
    }
    courses.push(singleCourse);
    res.send(courses);
});
// PUT
app.put('/courses/:id',(req,res) =>{
    try{
        let singleCourse = courses.find((course)=>{
            return course.id == req.params.id;
        })
        if(!singleCourse){
            res.status(404).send('course not found');
        }
        singleCourse.name = req.body.name;
        res.send(courses);
    }catch(err){
        res.status(500).send(err);
    } 
})
// DELETE 

// app.delete('/courses/:id', (req, res) => {
//     try{
//         let singleCourse = courses.find((course)=>{
//             return course.id == req.params.id;
//         })
//         if(!singleCourse){
//             res.status(404).send('course not found');
//         }
//         const index = courses.indexOf(singleCourse);
//         courses.splice(index,1);
//         res.send(courses);
//     }catch(err){
//         res.status(500).send(err);
//     }
// });


function middleware(req,res,next){
    console.log();
}
app.listen(3000,()=>{
    console.log("server started");
});