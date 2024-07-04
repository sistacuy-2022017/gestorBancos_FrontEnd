import { Navbar } from '../../components/navbar/Navbar.jsx';
import { Acount } from '../../components/Acount/Acount.jsx';

export const DashboardPage = () => {
  return (
    <div class="flex min-h-screen flex-col bg-gray-100 text-gray-800">
      <Navbar />
      <Acount />
    </div>
  );
};
