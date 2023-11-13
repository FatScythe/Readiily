import { useState, useEffect } from "react";
// Components
import DashboardMain from "../../components/dashboard/main";
import DashboardSideNav from "../../components/dashboard/sidenav";
import DashboardHeader from "../../components/dashboard/header";
import DashboardBotNav from "../../components/dashboard/bottomnav";
// Redux
import { useSelector, useDispatch } from "react-redux";
import { getBrands } from "../../features/brand/brandSlice";
import { getTickets } from "../../features/ticket/ticketSlice";

const Dashboard = () => {
  const dispatch = useDispatch();
  const [isSideOpen, setIsSideOpen] = useState(false);
  const { account } = useSelector((store) => store.auth);
  useEffect(() => {
    if (account?.role === "user") {
      dispatch(getBrands());
      dispatch(getTickets());
    }
  }, [dispatch, account]);

  return (
    <section
      id='dash'
      className='sm:h-screen overflow-hidden bg-lightpink/90 sm:bg-lightpink'
    >
      <DashboardHeader
        {...account}
        isSideOpen={isSideOpen}
        setIsSideOpen={setIsSideOpen}
      />
      <main
        className={`grid grid-cols-12 h-full ${
          isSideOpen ? "relative" : "static"
        }`}
      >
        <DashboardSideNav
          isSideOpen={isSideOpen}
          setIsSideOpen={setIsSideOpen}
          {...account}
        />
        <DashboardBotNav {...account} />
        <div className='col-span-12 sm:col-span-11 h-full sm:pb-28 sm:overflow-y-scroll'>
          <DashboardMain />
        </div>
      </main>
    </section>
  );
};

export default Dashboard;
