import React from "react"
import { 
    BrowserRouter as Router,
    Routes,
    Link,
    Route
} from 'react-router-dom'
import Contact from "./pages/Contact"
import Home from "./pages/Home"

const App = () => {

    return (
        <Router>
            <div>
                <div>tää on näkyvillä kaikilla sivuilla</div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/contact">Yhteydenotto</Link></li>
                </ul>

                <hr />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="contact" element={<Contact />} />
                </Routes>
            </div>

        </Router>
    )
}

export default App