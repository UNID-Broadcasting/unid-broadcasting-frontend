import React from "react";
import Error404 from "../components/Error404";
import { Helmet } from "react-helmet";

const NotFoundPage = () => {
  return (
    <>
      <Helmet>
        <title>Error 404 😭</title>
      </Helmet>
      <Error404 />
    </>
  );
};

export default NotFoundPage;
