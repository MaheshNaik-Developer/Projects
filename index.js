import express from "express";
import mysql from "mysql";
import cors from "cors";

const app = express()

const db = mysql.createConnection({
  host:"localhost",
  user:"root",
  password:"root",
  database:"developers"
})

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
  res.json("Hello this is backend")
})

app.get("/userdata",(req,res)=>{
  const q = "SELECT * FROM userdata"
  db.query(q,(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.post("/userdata",(req,res)=>{
  const q = "INSERT INTO userdata(`username`,`email`,`firstname`,`lastname`,`contact`,`dateofbirth`,`address`,`password`,`confirmpassword`) VALUES (?)";
  const values = [
    req.body.username,
    req.body.email,
    req.body.firstname,
    req.body.lastname,
    req.body.contact,
    req.body.dateofbirth,
    req.body.address,
    req.body.password,
    req.body.confirmpassword,
  ];
  db.query(q,[values],(err,data)=>{
    if(err) return res.json(err)
    return res.json(data)
  })
})

app.put("/userdata/:id", (req, res) => {
  const bookId = req.params.id;
  const q = "UPDATE userdata SET `username`= ?, `email`= ?, `firstname`= ?, `lastname`= ?, `contact`= ?, `dateofbirth`= ?, `address`= ?, `password`= ?, `confirmpassword`= ? WHERE id = ?";

  const values = [
    req.body.username,
    req.body.email,
    req.body.firstname,
    req.body.lastname,
    req.body.contact,
    req.body.dateofbirth,
    req.body.address,
    req.body.password,
    req.body.confirmpassword,
  ];

  db.query(q, [...values,bookId], (err, data) => {
    if (err) return res.send(err);
    return res.json(data);
  });
});
app.listen(8800, ()=>{
  console.log("connected to backend!");
})