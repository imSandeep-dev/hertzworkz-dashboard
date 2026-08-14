const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

const mock_credentials={
    email: "admin@gmail.com",
    password:"admin123",
}

app.post('/api/login',(req,res)=>{
    const {email,password}=req.body;
    if(email===mock_credentials.email && password===mock_credentials.password){
        return res.status(200).json({success:true,message:"Login successful"});
    }
    return res.status(401).json({success:false,message:"Invalid credentials"});
})

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})