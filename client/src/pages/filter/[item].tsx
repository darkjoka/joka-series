import { useRouter } from "next/router";

const Filter = () => {
  const {
    query: { item },
  } = useRouter();

  return <p>{item}</p>;
};

export default Filter;
