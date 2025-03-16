const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcrypt');
const User = require('./models/User');

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("❌ MongoDB connection string is missing in .env file!");
  process.exit(1); // Stop the server if no DB connection string
}

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('✅ MongoDB connected'))
  .catch((err) => {
    console.error('❌ MongoDB connection error:', err);
    process.exit(1);
  });



// Signup Route
app.post('/signup', async (req, res) => {
  try {
    const { fullName, username, email, password } = req.body;
    console.log(req.body);

    // Validate all fields
    if (!fullName || !username || !email || !password) {
      return res.status(400).json({ error: "All fields are required!" });
    }

    // Check if user already exists (by email OR username)
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res.status(400).json({ error: "Email or username is already taken!" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    const newUser = new User({ fullName, username, email, password: hashedPassword });
    await newUser.save();
    res.status(201).json({ message: "User registered successfully" });
  }
  catch (error) {
    console.error("❌ Signup error:", error);
    res.status(500).json({ error: error.message || "Internal server error" });
  }
});


//SignIn Route
app.post("/api/signin", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

  res.json({ message: "Login successful", token: "your_jwt_token" });
});



app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
