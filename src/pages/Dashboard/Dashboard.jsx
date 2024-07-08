import { Navbar } from '../../components/NavbarUsers/Navbar.jsx';
import { Acount } from '../../components/Acount/Acount.jsx';
import { User } from '../../components/User/User.jsx';
import { Divisas } from '../../components/Divisas/Divisas.jsx';
import { Ofertas } from '../../components/ServiciosOferta/Ofertas-services.jsx';
import { Services } from '../../components/ServiciosOferta/Servicios.jsx'

export const DashboardPage = () => {
  return (
    <div class="flex min-h-screen flex-col bg-gray-100 text-gray-800">
      <Navbar />
      <User />
    </div>
  );
};
