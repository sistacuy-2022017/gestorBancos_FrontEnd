import { ServicesAd } from "../ServiciosOferta/ServiciosAdmin.jsx"
import { ContentPagesAdmin } from "../../pages/Dashboard/ContentPagesAdmin.jsx";

export const DashboardAdmin = () => {
    return (
        <>
            <ContentPagesAdmin
                serv={<ServicesAd />}
            />
        </>
    )
}