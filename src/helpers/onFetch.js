import { message } from "antd";
import axios from "axios";
import qs from "qs";

export const onFetch = async (keyValue, link) => {
  const UrlApi = "http://localhost:8080/";

  try {
    const { data } = await axios.post(
      `${UrlApi}${link}`,
      qs.stringify(keyValue)
    );
    return data;
  } catch (error) {
    message.error({
      content: "check your internet",
      duration: 2
    });
    return error;
  }
};
