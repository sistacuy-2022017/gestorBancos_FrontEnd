/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import {User} from "../../components/User/User.jsx";
import {Acount} from "../../components/Acount/Acount.jsx";
import {Divisas} from "../../components/Divisas/Divisas.jsx";  
import {Ofertas} from "../../components/ServiciosOferta/Ofertas-services.jsx"; 

export const Content = ({channels, getChannels}) => {
    return(
        <div className="content-container">
            <Routes>
                <Route path="/User" element={<User/>}/>
                <Route path="/Acount" element={<Acount/>}/>
                <Route path="/dividad" element={<Divisas/>}/>
                <Route path="/" element={<Ofertas/>}/>
            </Routes>
        </div>
    )
}