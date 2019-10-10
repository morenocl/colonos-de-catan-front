import React, { useContext } from "react";
import { AuthContext } from "./LoginScreen";

export const Home = () => {
  const { state } = useContext(AuthContext);
  return (
    <>
      <div className="home">
        <h3>Welcome To Catan!</h3>
        <h6>{`User: ${state.user}`}</h6>
      </div>
    </>
  );
};
export default Home;
