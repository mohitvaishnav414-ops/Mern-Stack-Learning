const express=require("express")
const mongoose=require("mongoose")
require("dotenv").config()
const Student=require("./models/student")

const app = express()
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello Mohit Kumar')
})
mongoose.connect(process.env.MONGODB_URI)
.then(() =>console.log("mongodb.connect"))
.catch((err)=> console.log(err));

app.get("/api/students",async (req,res) => {
 try{
  const students=await Student.find();
  res.json(students);
 }catch(e){
  res.json({
    message:e.message
  })};
 
});
app.post("/api/students",async (req,res)=>{
   try{
    const student =await Student.create(req.body);
    res.json(student);
   }
      catch(e){
        res.json({
          message:e.message
        });
      }

});


console.log(process.env.MONGODB_URI)

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})