import { message } from "antd";
import axios from "axios";
import qs from "qs";
import { API_CI } from "./constants";

export const maOnFetch = async (keyValue, link, fetch, navigate) => {
  console.log("maOnFetch");
  const auth = localStorage.getItem("auth");
  console.log("auth", auth);
  if (!auth) {
    message.error({
      content: "Auth Error, Please Re-Login",
      duration: 2
    });
    navigate("/login");
  }

  fetch.setIsFetching(true);

  const newKeyValue = {
    ...keyValue,
    ...{ auth: auth }
  };

  try {
    const { data } = await axios.post(
      `${API_CI}${link}`,
      qs.stringify(newKeyValue)
    );

    if (data?.status === "error" && data?.info === "auth error") {
      message.error({
        content: "Auth Error, Please Re-Login",
        duration: 2
      });
      navigate("/login");
    }

    return data;
  } catch (error) {
    message.error({
      content: "check your internet",
      duration: 2
    });
    return error;
  } finally {
    fetch.setIsFetching(false);
  }
};
