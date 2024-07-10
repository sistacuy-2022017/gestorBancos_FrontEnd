
import { User } from "../User/User.jsx";
import { Divisas } from "../Divisas/Divisas.jsx";
import { ContentPagesUser } from "../../pages/Dashboard/ContentPagesUser.jsx";

export const DashboarUser = () => {
    return (
        <>
            <ContentPagesUser
                nav={<User />}
                main={<Divisas />}
            />
        </>
    )
}