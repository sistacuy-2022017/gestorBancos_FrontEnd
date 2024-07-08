/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import {Ofertas} from "../../components/ServiciosOferta/Ofertas-services.jsx"; 
import { DashboarUser } from "../dashbooardUser/DashboardUser.jsx";
import { Acount } from "../Acount/Acount.jsx";

export const Content = () => {
    return(
        <div className="content-container">
            <Routes>
                <Route path="/" element={<Ofertas/>}/>
                <Route path="/dashboardUser" element={<DashboarUser/>}/>
                <Route path="/Acount" element={<Acount/>}/>
            </Routes>
        </div>
    )
}