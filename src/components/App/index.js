
import './style.scss'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "../Header";
import Main from "../Main";
// import Footer from "../Footer";
import Food from '../Food';
                
    function App(){
        return(
            <>
            <BrowserRouter>
            <Header />
            <Routes>
            <Route index element={<Main />} />
            <Route path="Food" element={<Food />} />
            </Routes>
            </BrowserRouter>
            </>
            );
        }
    export default App;