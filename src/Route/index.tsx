import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import { Header } from "../components/header";
import { Home } from "../components/home";
import { NewFile } from "../components/newFile";

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