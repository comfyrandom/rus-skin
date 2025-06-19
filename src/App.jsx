import Header from "./components/header/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainContent from "./components/MainContent.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import HomePage from "./pages/HomePage.jsx";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <MainContent>
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                </Routes>
            </MainContent>
        </BrowserRouter>
    );
}

export default App;