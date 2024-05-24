import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import { Header } from "../components/Header";
import { Home } from "../components/Home";
import { NewFile } from "../components/NewFile";

export const RoutesPage = () => {
    return(
        <BrowserRouter>

            <Header/>

            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/new" element={<NewFile/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    )
}