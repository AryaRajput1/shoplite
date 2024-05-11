import { useEffect, useState } from "react";
import { fetchDataFromApi } from "../utils/api";

export const useFetchData = (api) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    makingApiCall();
  },[]);

  const makingApiCall =async () => {
    const response =await fetchDataFromApi(api);
    setData(response.data);
  };

  return data;
};
