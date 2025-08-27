import { useQuery } from "react-query";
import useAxios from "../useAxios";

const useFetchCompanyInformation = () => {
  const axios = useAxios();
  const fetchCompanyInformation = () => axios.get("/common/testsss");
  return useQuery(["company-information"], () => fetchCompanyInformation(), {
    refetchOnWindowFocus: false,
  });
};

export default useFetchCompanyInformation;
