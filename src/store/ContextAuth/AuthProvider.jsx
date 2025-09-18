// import Auth
import { useState } from "react";
import React from "react";
import Auth from "./Auth";

const AuthProvider = (props) => {
  const [login, setLogin] = useState(false);

  const [CurrentBooking, setCurrentBooking] = useState({
    id: 1,
    Country: "Australia",
    Price: 1000,
  });

  const Countries = [
    {
      id: 1,
      countries: "Australia",
      OldPrice: 1000,
      Discount: 800,
      Content: "Australia",
      peoples: 7,
    },
    {
      id: 2,
      countries: "Egypt",
      OldPrice: 500,
      Discount: 300,
      Content: "Africa",
      peoples: 2,
    },

    {
      id: 3,
      countries: "Brazil",
      OldPrice: 1200,
      Discount: 1000,
      Content: "North America",
      peoples: 9,
    },
  ];

  const Admins = [
    {
      id: 1,
      name: "Maxamed jiwrow",
      email: "maxamedjiwrow@gmail.com",
      password: "jiirow12345",
    },
    {
      id: 2,
      name: "Maxamed Nuur",
      email: "maxamednuur@gmail.com",
      password: "cagey12345",
    },
    {
      id: 1,
      name: "Maxamed Muudey",
      email: "maxamed088@gmail.com",
      password: "12345678",
    },
    {
      id: 1,
      name: "Cabdiqani yacquub",
      email: "cabdiqaniyacquub@gmail.com",
      password: "cabdiqani12345",
    },
  ];

  const [packages, setPackages] = useState([
    { id: 1, peoples: 7 },
    { id: 2, peoples: 3 },
    { id: 9, peoples: 9 },
  ]);

  const PeopleChangeHandler = () => {
    const FindedIdx = packages.findIndex((pgkage) => {
      return pgkage.id == CurrentBooking.id;
    });

    setPackages((prev) => {
      const updated = prev.map((pkg, index) => {
        if (index === FindedIdx) {
          return {
            ...pkg,
            peoples: pkg.peoples - 1,
          };
        }
        return pkg;
      });
      return updated;
    });
  };

  const valueProvider = {
    login,
    setLogin,
    Admins,
    Countries,
    CurrentBooking,
    setCurrentBooking,
    packages,
    PeopleChangeHandler,
  };

  return (
    <>
      <Auth.Provider value={valueProvider}>{props.children}</Auth.Provider>
    </>
  );
};

export default AuthProvider;
