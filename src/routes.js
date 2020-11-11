import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import Dathuc from "./views/Dathuc";
import Tichphan from "./views/Tichphan";
import Dothi from "./views/Dothi";
import Tonghop from "./views/Tonghop";
import Daoham from "./views/Daoham";

export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    component: () => <Redirect to="/Dathuc" />
  },
  {
    path: "/Dathuc",
    layout: DefaultLayout,
    component: Dathuc
  },
  {
    path: "/Tichphan",
    layout: DefaultLayout,
    component: Tichphan
  },
  {
    path: "/Dothi",
    layout: DefaultLayout,
    component: Dothi
  },
  {
    path: "/Tonghop",
    layout: DefaultLayout,
    component: Tonghop
  },
  {
    path: "/Daoham",
    layout: DefaultLayout,
    component: Daoham
  }
];
