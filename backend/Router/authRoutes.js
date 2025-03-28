import express from "express"
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken";
import User from "../models/UserModel.js"
import { protect } from "../middleware/authMiddleware.js";
const router = express.Router();


router.post("/register",async(req,res) =>{

const {name,email,password} =req.body;

//check if already user exist : 

try {
    

    let user = await User.findOne({email});
    if (user) {
       return res.status(400).json({message:"user already exist!!"}) 
    }
    const salt = await bcrypt.genSalt(10);
            const hashedPassword = await bcrypt.hash(password, salt);
            
            // Create new user
            user = new User({ name, email, password: hashedPassword });
            await user.save();
            
            // Generate token
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
            
            res.status(201).json({ token, user: { id: user._id, name: user.name, email: user.email } });


} catch (error) {
    res.status(500).json({ message: "couldnt create account" });
}

   

});


router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "Invalid credentials" });
        
        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });
        
        // Generate token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "7d" });
        
        res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

// Get authenticated user
router.get("/me", protect, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select("-password");
        res.json(user);
    } catch (error) {
        res.status(500).json({ message: "Server error" });
    }
});

export default router;



