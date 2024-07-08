import {Acount} from "../Acount/Acount.jsx";
import {User} from "../User/User.jsx";
import {Divisas} from "../Divisas/Divisas.jsx";

export const DashboarUser = () => {
    return (
        <div className="content-container">
            <User />
            <Divisas />
        </div>
    )
}