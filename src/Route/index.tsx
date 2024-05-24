import { BrowserRouter, Routes, Route } from "react-router-dom";

// Componentes
import { Header } from "../Components/Header";
import { Home } from "../Components/Home";
import { Favorites } from "../Components/Favorites";
import { NewFile } from "../Components/NewFile";

export const RoutesPage = () => {
    return(
        <BrowserRouter>

            <Header/>

            <main>
                <Routes>
                    <Route path="/" element={<Home/>}/>
                    <Route path="/favorites" element={<Favorites/>}/>
                    <Route path="/new" element={<NewFile/>}/>
                </Routes>
            </main>
        </BrowserRouter>
    )
}