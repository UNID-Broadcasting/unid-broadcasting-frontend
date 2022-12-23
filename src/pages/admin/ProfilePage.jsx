import React from "react";
import Profile from "../../components/admin/Profile/Profile";
import { Helmet } from "react-helmet";

const ProfilePage = () => {
  return (
    <>
      <Helmet>
        <title>Perfil - UNID Radio y Televisión</title>
        <meta
          name="description"
          content="Modifica tus datos de acceso en nuestro sistema"
        />
      </Helmet>
      <Profile />
    </>
  );
};

export default ProfilePage;
