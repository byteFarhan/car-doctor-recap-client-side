import { Outlet } from "react-router-dom";
import Footer from "../../Pages/Shared/Footer/Footer";
import Navbar from "../../Pages/Shared/Navbar/Navbar";

const MainLayout = () => {
  return (
    <section>
      <header>
        <Navbar />
      </header>
      <Outlet />
      <Footer />
    </section>
  );
};

export default MainLayout;
