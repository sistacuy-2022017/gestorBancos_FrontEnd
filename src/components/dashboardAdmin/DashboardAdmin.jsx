import { User } from "../User/User.jsx";
import { Divisas } from "../Divisas/Divisas.jsx";
import { ContentPagesAdmin } from "../../pages/Dashboard/ContentPagesAdmin.jsx";

export const DashboardAdmin = () => {
    return (
        <>
            <ContentPagesAdmin
                navb={<User />}
                divi={<Divisas />}
            />
        </>
    )
}