import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link } from "react-router-dom"
import './Dashboard.css'
import dashboard_icon from '../../assets/dashboard-icon.png'
import account_icon from '../../assets/account-icon.png'
import setting_icon from '../../assets/setting-icon.png'
import chat_icon from '../../assets/chat-icon.png'
import diary_icon from '../../assets/diary-icon.png'
import person01 from '../../assets/person01.png'

function Dashboard() {
    return (
        <>
            <Tooltip id="my-tooltip" place="right" />

            <div className="dashboard">
                <div className="dashboard-container">
                    <div className="dashboard-left">
                        <div className="dashboard-left-content" style={{ border: "2px solid white" }} data-tooltip-id="my-tooltip" data-tooltip-content="Dashboard">
                        <img src={dashboard_icon} alt="dashboard_icon" />
                        </div>

                        <div className="dashboard-left-content" data-tooltip-id="my-tooltip" data-tooltip-content="Diary">
                            <Link to="/diary"><img src={diary_icon} alt="diary_icon" /></Link>
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

                    <div className="dashboard-middle">
                        <h1>Dashboard</h1>
                    </div>

                    <div className="dashboard-right">
                        <div className="dashboard-profile">
                            <div>Alexa Smith</div>
                            <div id='profile-imgage'><img src={person01} alt="person profile" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard