import express,{Router} from "express";
import {home} from "./controlller.js";


const router = Router();
const app = express();
const port = 9100;
const authRoutes = app.use(router);

authRoutes.get('/api', (req, res)=>{
  res.redirect('/api/home');
})
authRoutes.get('/', (req, res)=>{
  res.redirect('/api/home');
})
authRoutes.get('/api/home', home)
authRoutes.get('/api/login', (req, res)=>{
  res.status(201).json({ sucess: true, message: `Please log in to access`});
})
app.all("*",(req, res) =>{
      let wrongPage = "404 page not found";
      res.status(404).json({404:wrongPage});
  });

app.listen(port, () => {
  console.log(`Starting Server on Port ${port}`);
});
