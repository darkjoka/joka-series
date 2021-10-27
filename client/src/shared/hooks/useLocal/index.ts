import React from "react";
import { localFetch, localSet } from "../../../lib/utils-local";

export const useLocal = <T>(localStore: string, defaultLocal: T): [T, (value: T) => void] => {
  const [local, setLocal] = React.useState(localFetch(localStore, defaultLocal));

  const setLocalStore = React.useCallback(
    (value: T) => {
      localSet(localStore, value);
      setLocal(value);
    },
    [localStore]
  );

  return [local, setLocalStore];
};
