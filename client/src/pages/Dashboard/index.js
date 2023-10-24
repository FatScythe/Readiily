import { useState } from "react";
// Components
import DashboardMain from "../../components/dashboard/main";
import DashboardSideNav from "../../components/dashboard/sidenav";
import DashboardHeader from "../../components/dashboard/header";
import DashboardBotNav from "../../components/dashboard/bottomnav";

const Dashboard = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);

  return (
    <section id='dash' className='sm:h-screen overflow-hidden'>
      <DashboardHeader isSideOpen={isSideOpen} setIsSideOpen={setIsSideOpen} />
      <main
        className={`grid grid-cols-12 h-full ${
          isSideOpen ? "relative" : "static"
        }`}
      >
        <DashboardSideNav
          isSideOpen={isSideOpen}
          setIsSideOpen={setIsSideOpen}
        />
        <DashboardBotNav />
        <div className='col-span-11'>
          <DashboardMain />
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
