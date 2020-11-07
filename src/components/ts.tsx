import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setData } from "../state/actions/setData";
import { StateTypes } from "../state/reducers/reducer";

const Variables: React.FC = () => {
  const variable: number = 100;
  const string: string = "string";
  let boolean: boolean = true;
  let arr: number[] = [1, 2, 3];

  return (
    <>
      <div>
        <h1>Variables</h1>
        <p>{variable}</p>
        <p>{string}</p>
        <p>{boolean && "true"}</p>
        {arr.map((item, i) => {
          return <p key={i}>{item}</p>;
        })}
      </div>
    </>
  );
};

const Functions: React.FC = () => {
  const sum = (x: number, y: number): number => {
    return x + y;
  };

  const string = (username: string, points: number): string => {
    return `${username} ${points}`;
  };

  return (
    <>
      <h1>Functions</h1>
      <p>{sum(1, 2)}</p>
      <p>{string("Chris", 100)}</p>
    </>
  );
};

interface Items {
  number: number;
  string: string;
}

const Props: React.FC<Items> = ({ number, string }) => {
  return (
    <>
      <h1>Props</h1>
      <p>{number}</p>
      <p>{string}</p>
    </>
  );
};

const State: React.FC = () => {
  interface User {
    name: string;
  }

  const [user, setUser] = useState<User>({ name: "Chris" });

  useEffect(() => {
    setUser({ name: "Chris!" });
  }, []);

  return (
    <>
      <h1>State</h1>
      <p>{user.name}</p>
    </>
  );
};

const Events: React.FC = () => {
  const event = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    alert(event.currentTarget);
  };

  return (
    <>
      <h1>Events</h1>
      <button onClick={event}>Button</button>
    </>
  );
};

const Redux: React.FC = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: StateTypes) => state["reducer"]);

  const setState = () => {
    dispatch(setData("Chris"));
    alert("State has been set");
  };

  const getState = () => {
    alert(state.data);
  };

  return (
    <>
      <h1>Redux</h1>
      <button onClick={setState}>set state</button>
      <button onClick={getState}>get state</button>
    </>
  );
};

export default () => {
  return (
    <>
      <Variables />
      <Functions />
      <Props number={100} string={"Chris"} />
      <State />
      <Events />
      <Redux />
    </>
  );
};
