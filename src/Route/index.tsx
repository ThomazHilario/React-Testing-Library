import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import { Header } from "../components/header";
import { Home } from "../components/home";

export const RoutesPage = () => {
    return(
        <BrowserRouter>

            <Header/>

            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    )
}