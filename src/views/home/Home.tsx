import { useEffect } from "react";

export const Home = () => {
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(`${process.env.REACT_APP_SERVER_ENDPOINT}`);
      console.log(response);
      console.log(response);
      // if (response.status === 401) {
      //   window.location.href = "/login";
      // }
      const data = await response.json();
      console.log(data);
    }
    fetchData();
  }, []);
  return (
    <div>
      <h1>Home screen</h1>
    </div>
  );
};
