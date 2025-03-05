import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import { Link } from "react-router-dom"
import './Converse.css'
import dashboard_icon from '../../assets/dashboard-icon.png'
import account_icon from '../../assets/account-icon.png'
import setting_icon from '../../assets/setting-icon.png'
import chat_icon from '../../assets/chat-icon.png'
import diary_icon from '../../assets/diary-icon.png'

function Converse() {
    return (
        <>
            <Tooltip id="my-tooltip" place="right" />

            <div className="converse">
                <div className="converse-container">
                    <div className="converse-left">
                        <div className="converse-left-content" data-tooltip-id="my-tooltip" data-tooltip-content="Dashboard">
                        <Link to="/dashboard"><img src={dashboard_icon} alt="dashboard_icon" /></Link>
                        </div>

                        <div className="converse-left-content" data-tooltip-id="my-tooltip" data-tooltip-content="Diary">
                        <Link to="/diary"><img src={diary_icon} alt="diary_icon" /></Link>
                        </div>

                        <div className="converse-left-content" style={{ border: "2px solid white" }} data-tooltip-id="my-tooltip" data-tooltip-content="Converse">
                            <img src={chat_icon} alt="chat_icon" />
                        </div>

                        <div className="converse-left-content" data-tooltip-id="my-tooltip" data-tooltip-content="Accounts">
                        <Link to="/accounts"><img src={account_icon} alt="account_icon" /></Link>
                        </div>

                        <div className="converse-left-content" data-tooltip-id="my-tooltip" data-tooltip-content="Settings">
                        <Link to="/settings"><img src={setting_icon} alt="setting_icon" /></Link>
                        </div>
                    </div>

                    <div className="converse-middle">
                        <h1>Converse</h1>
                    </div>

                    <div className="converse-right">
                        hello
                    </div>
                </div>
            </div>
        </>
    )
}

export default Converse