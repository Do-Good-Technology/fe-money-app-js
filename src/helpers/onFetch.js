import { message } from "antd";
import axios from "axios";
import qs from "qs";

export const onFetch = async (keyValue, link, fetch) => {
  const UrlApi = "http://localhost:8080/";

  fetch.setIsFetching(true);

  try {
    const { data } = await axios.post(
      `${UrlApi}${link}`,
      qs.stringify(keyValue)
    );

    if (data?.status === "error" && data?.info === "auth error") {
      message.error({
        content: "Auth Error, Please Re-Login",
        duration: 2
      });
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
