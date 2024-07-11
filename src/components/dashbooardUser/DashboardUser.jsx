
import { User } from "../User/User.jsx";
import { Divisas } from "../Divisas/Divisas.jsx";
import { ContentPagesUser } from "../../pages/Dashboard/ContentPagesUser.jsx";
import { Favorites } from "../../components/Favorites/Favorites.jsx";

export const DashboarUser = () => {
    return (
        <>
            <ContentPagesUser
                nav={<User />}
                main={<Divisas />}
                favoritess={<Favorites />}
            />
        </>
    )
}