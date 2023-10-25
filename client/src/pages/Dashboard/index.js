import { useState } from "react";
// Components
import DashboardMain from "../../components/dashboard/main";
import DashboardSideNav from "../../components/dashboard/sidenav";
import DashboardHeader from "../../components/dashboard/header";
import DashboardBotNav from "../../components/dashboard/bottomnav";

const Dashboard = () => {
  const [isSideOpen, setIsSideOpen] = useState(false);

  return (
    <section
      id='dash'
      className='sm:h-screen overflow-hidden bg-lightpink/90 sm:bg-lightpink'
    >
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
        <div className='col-span-12 sm:col-span-11 sm:h-full sm:pb-28 sm:overflow-y-scroll'>
          <DashboardMain />
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
