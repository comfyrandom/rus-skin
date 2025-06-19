import './App.css'
import Header from "./components/header/Header.jsx";
import {BrowserRouter} from "react-router-dom";

function App() {

    return (
        <BrowserRouter>
            <div className="min-h-screen bg-gradient-to-b from-gray-50 to-blue-50">
                <Header/>
            </div>
        </BrowserRouter>
    )
}

export default App
