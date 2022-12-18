import React from "react";
import Header from "../../components/admin/Header";
import WelcomeBanner from "../../components/admin/Dashboard/WelcomeBanner";
import CardsInfo from "../../components/admin/Dashboard/CardsInfo";

const DashboardHome = () => {
  return (
    <>
      <div className="flex flex-col w-full">
        <Header />
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
