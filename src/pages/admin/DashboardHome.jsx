import React from "react";
import WelcomeBanner from "../../components/admin/Dashboard/WelcomeBanner";
import CardsInfo from "../../components/admin/Dashboard/CardsInfo";

const DashboardHome = () => {
  return (
    <>
      <div className="flex flex-col w-full mt-5">
        <div className="flex flex-col w-full">
          <WelcomeBanner />
          <div className="m-7">
            <CardsInfo />
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardHome;
