import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link } from "react-router-dom"
import './Settings.css'
import dashboard_icon from '../../assets/dashboard-icon.png'
import account_icon from '../../assets/account-icon.png'
import setting_icon from '../../assets/setting-icon.png'
import chat_icon from '../../assets/chat-icon.png'
import diary_icon from '../../assets/diary-icon.png'

function Settings() {
    return (
        <>
            <Tooltip id="my-tooltip" place="right" />

            <div className="settings">
                <div className="settings-container">
                    <div className="settings-left">
                        <div className="settings-left-content" data-tooltip-id="my-tooltip" data-tooltip-content="Dashboard">
                            <Link to="/dashboard"><img src={dashboard_icon} alt="dashboard_icon" /></Link>
                        </div>

                        <div className="settings-left-content" data-tooltip-id="my-tooltip" data-tooltip-content="Diary">
                            <Link to="/diary"><img src={diary_icon} alt="diary_icon" /></Link>
                        </div>

                        <div className="settings-left-content" data-tooltip-id="my-tooltip" data-tooltip-content="Converse">
                            <Link to="/converse"><img src={chat_icon} alt="chat_icon" /></Link>
                        </div>

                        <div className="settings-left-content" data-tooltip-id="my-tooltip" data-tooltip-content="Accounts">
                            <Link to="/accounts"><img src={account_icon} alt="account_icon" /></Link>
                        </div>

                        <div className="settings-left-content" style={{ border: "2px solid white" }} data-tooltip-id="my-tooltip" data-tooltip-content="Settings">
                            <img src={setting_icon} alt="setting_icon" />
                        </div>
                    </div>

                    <div className="settings-middle">
                        <h1>Settings</h1>
                    </div>

                    <div className="settings-right">
                        hello
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings