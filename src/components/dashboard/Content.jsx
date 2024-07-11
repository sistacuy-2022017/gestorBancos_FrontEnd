/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import {Ofertas} from "../../components/ServiciosOferta/Ofertas-services.jsx"; 
import { DashboarUser } from "../dashbooardUser/DashboardUser.jsx";
import { Acount } from "../Acount/Acount.jsx";
import { DashboardAdmin } from "../../components/dashboardAdmin/DashboardAdmin.jsx";
import { CardInfo } from "../search/CardInfo.jsx";

export const Content = () => {
    return(
        <div className="content-container">
            <Routes>
            <Route path="/" element={<Ofertas/>}/>
            <Route path="/dashboardUser" element={<DashboarUser/>}/>
                <Route path="/Acount" element={<Acount/>}/>
                <Route path="/dashboardAdmin" element={<DashboardAdmin />}/>
                <Route path="/CardInfo" element={<CardInfo />} />
            </Routes>
        </div>
    )
}