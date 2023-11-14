import { useState } from "react";
import { Outlet } from "react-router-dom";

const DashboardMain = () => {
  const [openBanner, setOpenBanner] = useState(true);

  return (
    <main>
      <Outlet context={[openBanner, setOpenBanner]} />
    </main>
  );
};

export default DashboardMain;
