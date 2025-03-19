const mongoose = require('mongoose');

const entrySchema = new mongoose.Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const diarySchema = new mongoose.Schema({
    title: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    entries: [entrySchema] // Store multiple entries inside each diary
});

const Diary = mongoose.model("Diary", diarySchema);
module.exports = Diary;
