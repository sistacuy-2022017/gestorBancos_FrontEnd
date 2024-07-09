
import { User } from "../User/User.jsx";
import { Divisas } from "../Divisas/Divisas.jsx";
import CardInfo from "../Search/CardInfo.jsx";
import { ContentPagesUser } from "../../pages/Dashboard/ContentPagesUser.jsx";
import ListTransacciones from "../Search/ListTransacciones.jsx";
import ListMovimientos from "../Search/ListMovimientos.jsx";

export const DashboarUser = () => {
    return (
        <>
            <ContentPagesUser
                nav={<User />}
                main={<Divisas />}
            />

            <CardInfo />
            <ListTransacciones />
            <ListMovimientos />
        </>
    )
}