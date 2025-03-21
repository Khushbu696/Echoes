import { useState, useEffect } from "react";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Diary.css";
import dashboard_icon from "../../assets/dashboard-icon.png";
import account_icon from "../../assets/account-icon.png";
import setting_icon from "../../assets/setting-icon.png";
import chat_icon from "../../assets/chat-icon.png";
import diary_icon from "../../assets/diary-icon.png";
import diary02 from "../../assets/diary02.png";
import delete_image from '../../assets/delete.png'
import three_lines from '../../assets/three_lines.png'

function Diary() {
    const [diaries, setDiaries] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [title, setTitle] = useState("");
    const [selectedDiary, setSelectedDiary] = useState(null);
    const [entries, setEntries] = useState([]);  // Store entries
    const [showEntryInput, setShowEntryInput] = useState(false);
    const [entryText, setEntryText] = useState("");
    const [entryTitle, setEntryTitle] = useState("");
    const [selectedEntry, setSelectedEntry] = useState(null); //Show specific entry

    useEffect(() => {
        fetchDiaries();
    }, []);

    const fetchDiaries = async () => {
        try {
            const response = await axios.get("http://localhost:5000/api/diaries");
            setDiaries(response.data);
        } catch (error) {
            console.error("Error fetching diaries", error);
        }
    };

    const handleAddDiary = async () => {
        if (!title.trim()) return;
        try {
            const response = await axios.post("http://localhost:5000/api/add-diary", { title });
            setDiaries([response.data, ...diaries]); // Add new diary to the list
            setTitle("");
            setShowModal(false);
        } catch (error) {
            console.error("Error adding diary", error);
        }
    };

    const handleSelectDiary = async (diary) => {
        setSelectedDiary(diary);
        setShowEntryInput(false);
        setEntryText("");

        try {
            const response = await axios.get(`http://localhost:5000/api/diary/${diary._id}`);
            setEntries(response.data.entries);
        } catch (error) {
            console.error("Error fetching diary entries:", error);
        }
    };

    const handleAddEntry = () => {
        setShowEntryInput(true);
    };

    const handleSaveEntry = async () => {
        if (!entryTitle.trim() || !entryText.trim()) {
            alert("Both title and content are required!");
            return;
        }

        try {
            const response = await axios.post("http://localhost:5000/api/add-entry", {
                diaryId: selectedDiary._id,
                title: entryTitle, // ⬅️ Include title
                content: entryText,
            });

            if (response.status === 201) {
                setEntries([...entries, response.data]); // Update UI
                setEntryTitle(""); // Clear title
                setEntryText("");  // Clear content
                setShowEntryInput(false);
            }
        } catch (error) {
            console.error("Error saving entry:", error);
        }
    };

    const handleDeleteDiary = async (diaryId) => {
        if (!window.confirm("Are you sure you want to delete this diary?")) return;

        try {
            await axios.delete(`http://localhost:5000/api/delete-diary/${diaryId}`);
            setDiaries(diaries.filter(diary => diary._id !== diaryId)); // Remove diary from UI
            setSelectedDiary(null); // Reset selected diary if it's deleted
        } catch (error) {
            console.error("Error deleting diary:", error);
        }
    };

    const handleDeleteEntry = async (entryId) => {
        if (!selectedDiary) return;

        try {
            const response = await axios.delete(
                `http://localhost:5000/api/delete-entry/${selectedDiary._id}/${entryId}`
            );

            if (response.status === 200) {
                setEntries(entries.filter((entry) => entry._id !== entryId)); // Update UI
                setSelectedEntry(null); // Close modal after deletion
            }
        } catch (error) {
            console.error("Error deleting entry:", error);
        }
    };



    return (
        <>
            <Tooltip id="my-tooltip" place="right" />

            <div className="diary">
                <div className="diary-container">
                    <div className="diary-left">
                        <div className="diary-left-content" data-tooltip-id="my-tooltip" data-tooltip-content="Dashboard">
                            <Link to="/dashboard"><img src={dashboard_icon} alt="dashboard_icon" /></Link>
                        </div>
                        <div className="dashboard-left-content" style={{ border: "2px solid white" }} data-tooltip-id="my-tooltip" data-tooltip-content="Diary">
                            <img src={diary_icon} alt="diary_icon" />
                        </div>
                        <div className="dashboard-left-content" data-tooltip-id="my-tooltip" data-tooltip-content="Converse">
                            <Link to="/converse"><img src={chat_icon} alt="chat_icon" /></Link>
                        </div>
                        <div className="dashboard-left-content" data-tooltip-id="my-tooltip" data-tooltip-content="Accounts">
                            <Link to="/accounts"><img src={account_icon} alt="account_icon" /></Link>
                        </div>
                        <div className="dashboard-left-content" data-tooltip-id="my-tooltip" data-tooltip-content="Settings">
                            <Link to="/settings"><img src={setting_icon} alt="setting_icon" /></Link>
                        </div>
                    </div>

                    <div className="diary-middle">
                        <h1>Diary</h1>
                        <h3>A collection of notes from your life.</h3>

                        <div className="diary-middle-display">
                            {diaries.length > 0 ? diaries.map((diary) => (
                                <div className="diary-middle-each" key={diary._id} onClick={() => handleSelectDiary(diary)}>
                                    <img src={diary02} alt="diary image" />
                                    <div>
                                        Title: {diary.title} <br />
                                        Created on: {new Date(diary.createdAt).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric"
                                        })}
                                    </div>
                                </div>
                            )) : <p>No diaries yet. Start adding some!</p>}
                        </div>

                        <div className="diary-middle-create" onClick={() => setShowModal(true)}>
                            Add Diary
                        </div>
                    </div>

                    <div className="diary-right">
                        {selectedDiary ? (
                            <div>
                                <div className="diary-right-content">
                                    <h1>{selectedDiary.title}</h1>
                                    <button onClick={handleAddEntry} className="add-entry-btn">Add Entry</button>
                                </div>

                                {showEntryInput ? (
                                    <div className="entry-container">
                                        <input
                                            type="text"
                                            value={entryTitle}
                                            onChange={(e) => setEntryTitle(e.target.value)}
                                            placeholder="Entry title..."
                                        />
                                        <textarea
                                            value={entryText}
                                            onChange={(e) => setEntryText(e.target.value)}
                                            placeholder="Write your entry here..."
                                        />
                                        <div className="entry-actions">
                                            <button onClick={() => setShowEntryInput(false)} className="delete-btn">Cancel</button>
                                            <button onClick={handleSaveEntry} className="save-btn">Save</button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="entries-container">
                                        {entries.length > 0 ? (
                                            entries.map((entry, index) => (
                                                <div
                                                    key={index}
                                                    className="entries-each"
                                                    onClick={() => setSelectedEntry(entry)}
                                                    style={{ cursor: "pointer" }}
                                                >
                                                    <img src={three_lines} alt="three_lines" />
                                                    <p><b>{entry.title}</b></p>
                                                    <p>|</p>
                                                    <small>{new Date(entry.createdAt).toLocaleString()}</small>
                                                </div>
                                            ))
                                        ) : (
                                            <p>No entries yet.</p>
                                        )}
                                        <div className="diary-right-del" onClick={() => handleDeleteDiary(selectedDiary._id)}>
                                            <img src={delete_image} alt="delete_image" />
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <p>No diary selected</p>
                        )}
                    </div>
                </div>
            </div>

            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h1>Add New Diary</h1>
                        <input
                            type="text"
                            placeholder="Enter diary title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <div className="modal-actions">
                            <button className="close-btn" onClick={() => setShowModal(false)}>Close</button>
                            <button className="add-btn" onClick={handleAddDiary}>Add</button>
                        </div>
                    </div>
                </div>
            )}

            {selectedEntry && (
                <div className="entry-modal-overlay">
                    <div className="entry-modal-content">
                        <div className="entry-modal-actions">

                            <div onClick={() => handleDeleteEntry(selectedEntry._id)}>
                                <img src={delete_image} alt="delete_image" />
                            </div>

                            <button className="close-btn-2" onClick={() => setSelectedEntry(null)}>X</button>
                        </div>

                        <h1>{selectedEntry.title}</h1>
                        <p>{selectedEntry.content}</p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Diary;
