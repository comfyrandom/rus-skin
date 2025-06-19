import Header from "./components/header/Header.jsx";
import {BrowserRouter} from "react-router-dom";
import MainContent from "./components/MainContent.jsx";

function App() {

    return (
        <BrowserRouter>
            <Header/>
            <MainContent>
                <h1>Hello, world!</h1>
            </MainContent>
        </BrowserRouter>
    )
}

export default App
