import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Home = () => {
  const dispatch = useDispatch(); // to use the states available in the redux store
  const { c } = useSelector((state) => state.custome); // to use functions available in the redux store

  const addBtn = () => {
    dispatch({
      type: "increment",
    });
  };

  const addBtn20 = () => {
    dispatch({
      type: "incrementByValue",
      payLoad: 20,
    });
  };

  const subBtn = () => {
    dispatch({
      type: "decrement",
    });
  };

  return (
    <div>
      <h1>Home Component: {c}</h1>
      <button onClick={addBtn}>Incremenet</button>
      <button onClick={subBtn}>Decrement</button>
      <button onClick={addBtn20}>20</button>
    </div>
  );
};

export default Home;
