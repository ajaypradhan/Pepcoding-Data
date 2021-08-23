import { useDispatch, useSelector } from "react-redux";

import { incrementCreator, decrementCreator } from "./redux/actions";

let App = () => {
  let state = useSelector(function (state) {
    return state;
  });

  let dispatch = useDispatch();

  return (
    <>
      <button
        onClick={() => {
          dispatch(incrementCreator());
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          dispatch(decrementCreator());
        }}
      >
        -
      </button>
      <p>{state}</p>
    </>
  );
};

export default App;
