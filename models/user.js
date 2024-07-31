const mongoose = require('mongoose');//ประกาศตัวแปร productSchema

const userSchema = new mongoose.Schema({//ใส่ แอคทีบิว เพื่อสร้างdatabase
    user_name: { type: String, required: true }, 
    password: { type: String, required: true },
    name: { type: String, required: true },
    role: { type: String, required: true },
    
},

{timestamps: true, versionKey: false} 
);

const user = mongoose.model('Product', userSchema); 


module.exports = user