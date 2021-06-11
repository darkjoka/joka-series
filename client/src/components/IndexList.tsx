import React, { useEffect, useState } from "react";
import { Error } from "./Error";

interface Dstate {
  title: String;
}
type state = Dstate[];

export const IndexList = () => {
  const [state, setState] = useState<state>([{ title: "" }]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/")
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setState(result.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);
  return (
    <>
      {!loading &&
        state?.map(({ title }, index) => {
          return <p key={index}>{title}</p>;
        })}
      {loading && <p>Loading...</p>}
      {error && <Error />}
    </>
  );
};
