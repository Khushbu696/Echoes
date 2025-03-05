import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import Home from './pages/home'
import Services from './pages/services'
import Testimonals from './pages/testimonals'
import About from './pages/about'
import Contact from './pages/contact'
import NotFound from './pages/notFound'
import SignUp from './auth/Signup'
import SignIn from './auth/Signin'
import Dashboard from './Application/Dashboard/Dashboard'
import Diary from './Application/Diary/Diary'
import Settings from './Application/Settings/Settings'
import Converse from './Application/Converse/Converse'
import Account from './Application/Accounts/Accounts'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact_us" element={<Contact />} />
          <Route path="/testimonals" element={<Testimonals />} />
          <Route path="/about_us" element={<About />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/diary" element={<Diary />} />
          <Route path="/converse" element={<Converse />} />
          <Route path="/accounts" element={<Account />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
