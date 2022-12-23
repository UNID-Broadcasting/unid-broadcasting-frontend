import React from "react";
import WelcomeBanner from "../../components/admin/Dashboard/WelcomeBanner";
import CardsInfo from "../../components/admin/Dashboard/CardsInfo";
import { Helmet } from "react-helmet";

const DashboardHome = () => {
  return (
    <>
      <Helmet>
        <title>Dashboard - UNID Radio y Televisión</title>
        <meta
          name="description"
          content="Bienvenido al dashboard de UNID - Radio y Televisión"
        />
      </Helmet>
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
