import React from "react";
import { Link } from "react-router-dom";

import { closeSide } from "../../store/actions/navigation";
import { genreFilter, yearFilter } from "../../shared/constants/filters";
import { HeadList, Content, FilterObj, Section } from "./MovieFiltersStyle";

interface ObserverOptions {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number;
}

const useOnScreen = (options: ObserverOptions): [{ current: null | HTMLElement }, boolean] => {
  const ref: { current: null | HTMLElement } = React.useRef(null);
  const [onScreen, setOnScreen] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setOnScreen(entry.isIntersecting);
    }, options);

    const elem = ref.current;

    if (elem) {
      observer.observe(elem);
    }
    return () => {
      if (elem) {
        observer.unobserve(elem);
      }
    };
  }, [options]);
  return [ref, onScreen];
};

export const MovieFilters: React.FC<{ parent: { current: null | HTMLElement } }> = ({ parent }) => {
  const options: ObserverOptions = {
    root: parent.current,
    rootMargin: "0% -50%",
  };

  const [genreRef]: [any, boolean] = useOnScreen(options);
  const [yearRef, yearOnScreen]: [any, boolean] = useOnScreen(options);

  const handleGenre = (): void => {
    genreRef.current?.scrollIntoView();
  };

  const handleYear = (): void => {
    yearRef.current?.scrollIntoView();
  };

  return (
    <div>
      <HeadList filterItem={yearOnScreen}>
        <p onClick={handleGenre}>By Genre</p>
        <p onClick={handleYear}>By Year</p>
      </HeadList>

      <Content>
        <Section ref={genreRef}>
          {genreFilter.map((genre, index) => {
            return (
              <FilterObj key={index} onClick={closeSide}>
                <Link to={`/filter/${genre.toLowerCase()}`}>{genre}</Link>
              </FilterObj>
            );
          })}
        </Section>
        <Section ref={yearRef}>
          {yearFilter.map((year, index) => {
            return (
              <FilterObj key={index} onClick={closeSide}>
                <Link to={`/filter/${year}`}>{year}</Link>
              </FilterObj>
            );
          })}
        </Section>
      </Content>
    </div>
  );
};
