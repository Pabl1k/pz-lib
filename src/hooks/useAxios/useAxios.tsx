import React, { useEffect, useState } from "react";
import defaultAxios from "axios";

type StateType = {
  isLoading: boolean;
  error: string | null;
  data: any;
  refetch?: () => void;
};

const useAxios = (
  options: any,
  axiosInstance = defaultAxios
): StateType | undefined => {
  const [state, setState] = useState<StateType>({
    isLoading: true,
    error: null,
    data: null,
  });
  const [trigger, setTrigger] = useState<number>(0);
  const refetch = () => {
    setState({
      ...state,
      isLoading: true,
    });
    setTrigger(Date.now());
  };
  useEffect(() => {
    axiosInstance(options)
      .then((data) => {
        setState({
          ...state,
          data,
          isLoading: false,
        });
      })
      .catch((error) => {
        setState({
          ...state,
          isLoading: false,
          error,
        });
      });
  }, [trigger]);

  if (!options.url) {
    return;
  }
  return { ...state, refetch };
};

export default function UseAxiosExample() {
  const data = useAxios({
    url: "https://imdb-api.com/en/API/Top250Movies/k_ekb8v2r4",
  });

  return (
    <div>
      <h1>{data?.data.status}</h1>
      <h2>{data?.isLoading && "Loading..."}</h2>
      <button onClick={data?.refetch}>Update data</button>
    </div>
  );
}
