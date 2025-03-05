import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link } from "react-router-dom"
import './Diary.css'
import dashboard_icon from '../../assets/dashboard-icon.png'
import account_icon from '../../assets/account-icon.png'
import setting_icon from '../../assets/setting-icon.png'
import chat_icon from '../../assets/chat-icon.png'
import diary_icon from '../../assets/diary-icon.png'
import diary02 from '../../assets/diary02.png'

function Diary() {
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
                        <h3>Your diaries</h3>

                        <div className="diary-middle-display">
                            <div className="diary-middle-each">
                                <img src={diary02} alt="diary image" />
                                <div>
                                    Title: Personal <br />
                                    Created on: March 5, 2025
                                </div>
                            </div>

                            <div className="diary-middle-each">
                                <img src={diary02} alt="diary image" />
                                <div>
                                    Title: Personal <br />
                                    Created on: March 5, 2025
                                </div>
                            </div>

                            <div className="diary-middle-each">
                                <img src={diary02} alt="diary image" />
                                <div>
                                    Title: Personal <br />
                                    Created on: March 5, 2025
                                </div>
                            </div>
                        </div>

                        <div className="diary-middle-create">
                            Add Diary
                        </div>
                    </div>

                    <div className="diary-right">
                        No diary selected
                    </div>
                </div>
            </div>
        </>
    )
}

export default Diary