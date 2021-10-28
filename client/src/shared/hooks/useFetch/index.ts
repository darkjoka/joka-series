import React from "react";

type Callback = ((...args: any[]) => void) | null;

export const useFetch = (link: string, callback: Callback = null, condition: boolean = true) => {
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [data, setData] = React.useState();

  React.useEffect(() => {
    if (condition) {
      setLoading(true);
      setError(false);
      (async () => {
        try {
          const response = await fetch(link);
          const result = await response.json();
          if (callback) callback(result.data);
          setData(result.data);
        } catch (e) {
          setLoading(false);
          setError(true);
        }
      })();
    }
    return () => {
      setLoading(false);
      setError(false);
    }; //set states to defaults on unmount => prevent prob of memory leak
  }, [condition, callback, link]);

  return [error, loading, data];
};
