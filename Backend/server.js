const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const cors = require('cors');
const bcrypt = require('bcrypt');
const User = require('./models/User');
const Diary = require("./models/Diary_Model");

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  console.error("MongoDB connection string is missing in .env file!");
  process.exit(1); // Stop the server if no DB connection string
}

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
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


// Route to add a new diary
app.post("/api/add-diary", async (req, res) => {
  try {
    const { title } = req.body;
    const newDiary = new Diary({ title });
    await newDiary.save();
    res.status(201).json(newDiary);
  } catch (error) {
    res.status(500).json({ error: "Error creating diary" });
  }
});


// Route to get all diaries
app.get("/api/diaries", async (req, res) => {
  try {
    const diaries = await Diary.find().sort({ createdAt: -1 }); // Latest first
    res.json(diaries);
  } catch (error) {
    res.status(500).json({ error: "Error fetching diaries" });
  }
});


// Route to Add an entry in diary
app.post("/api/add-entry", async (req, res) => {
  try {
    const { diaryId, title, content } = req.body; // Accept title from request
    const diary = await Diary.findById(diaryId);
    if (!diary) {
      return res.status(404).json({ error: "Diary not found" });
    }

    const newEntry = { title, content, createdAt: new Date() }; // Include title
    diary.entries.push(newEntry);
    await diary.save();

    res.status(201).json(newEntry);
  } catch (error) {
    res.status(500).json({ error: "Error adding entry" });
  }
});


// Route to Fetch Diary with Entries
app.get("/api/diary/:id", async (req, res) => {
  try {
    const diary = await Diary.findById(req.params.id);
    if (!diary) {
      return res.status(404).json({ error: "Diary not found" });
    }

    // Ensure each entry has a title (fallback to "Untitled Entry" if missing)
    const formattedEntries = diary.entries.map(entry => ({
      _id: entry._id,
      title: entry.title || "Untitled Entry", // Ensure title is always present
      content: entry.content,
      createdAt: entry.createdAt
    }));

    res.json({
      _id: diary._id,
      title: diary.title,
      createdAt: diary.createdAt,
      entries: formattedEntries
    });

  } catch (error) {
    res.status(500).json({ error: "Error fetching diary" });
  }
});


// Route to Delete a Diary
app.delete("/api/delete-diary/:id", async (req, res) => {
  try {
    const diary = await Diary.findByIdAndDelete(req.params.id);
    if (!diary) {
      return res.status(404).json({ error: "Diary not found" });
    }
    res.json({ message: "Diary deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Error deleting diary" });
  }
});


//Route to Delete a entry in a diary
app.delete("/api/delete-entry/:diaryId/:entryId", async (req, res) => {
  try {
      const { diaryId, entryId } = req.params;
      const diary = await Diary.findById(diaryId);
      
      if (!diary) {
          return res.status(404).json({ error: "Diary not found" });
      }

      // Filter out the entry to delete
      diary.entries = diary.entries.filter(entry => entry._id.toString() !== entryId);
      await diary.save();

      res.status(200).json({ message: "Entry deleted successfully" });
  } catch (error) {
      res.status(500).json({ error: "Error deleting entry" });
  }
});




app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
