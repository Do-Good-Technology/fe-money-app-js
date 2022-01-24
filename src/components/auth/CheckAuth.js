import { Fragment, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CheckAuth({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  useEffect(() => {
    if (pathname === "/login" || pathname === "/register") {
    } else {
      const authData = JSON.parse(localStorage.getItem("auth"));

      if (
        !authData?.email_user ||
        !authData?.id_user ||
        !authData?.hash_password_user
      ) {
        navigate("/login");
      }
    }
  }, [pathname]);

  // return <Fragment>{children}</Fragment>;
}
