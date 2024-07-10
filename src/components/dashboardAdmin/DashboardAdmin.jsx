import { User } from "../User/User.jsx";
import { Divisas } from "../Divisas/Divisas.jsx";
import { ServicesAd } from "../ServiciosOferta/ServiciosAdmin.jsx"
import { ContentPagesAdmin } from "../../pages/Dashboard/ContentPagesAdmin.jsx";
import { ListCuentas } from "../search/ListCuentas.jsx";

export const DashboardAdmin = () => {
    return (
        <>
            <ContentPagesAdmin
                navb={<User />}
                divi={<Divisas />}
                serv={<ServicesAd />}
                listA={<ListCuentas />}
            />
        </>
    )
}