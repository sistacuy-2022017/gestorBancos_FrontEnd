/* eslint-disable react/prop-types */
import { Route, Routes } from "react-router-dom";
import {Ofertas} from "../../components/ServiciosOferta/Ofertas-services.jsx"; 
import { DashboarUser } from "../dashbooardUser/DashboardUser.jsx";
import { Acount } from "../Acount/Acount.jsx";
import { DashboardAdmin } from "../../components/dashboardAdmin/DashboardAdmin.jsx";
import { ListCuentas } from "../search/ListCuentas.jsx";
import { Favorites } from "../../components/Favorites/Favorites.jsx";
import { AccountsAddAdmin } from "../Acount/AcountsAddAdmin.jsx";

export const Content = () => {
    return(
        <div className="content-container">
            <Routes>
            <Route path="/" element={<Ofertas/>}/>
            <Route path="/dashboardUser" element={<DashboarUser/>}/>
                <Route path="/Acount" element={<Acount/>}/>
                <Route path="/dashboardAdmin" element={<DashboardAdmin />}/>
                <Route path="/favoritos" element={<Favorites />} />
                <Route path="/ListCuentas" element={<ListCuentas />} />
                <Route path="/Petitions" element={<AccountsAddAdmin />} />
            </Routes>
        </div>
    )
}