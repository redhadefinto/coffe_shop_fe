import React from "react";
import { useSearchParams } from "react-router-dom";

function WithSearchParams(Component) {
  function Wrapper(props) {
    const [searchParams, setSearchParams] = useSearchParams({ categories: "" });
    return (
      <Component
        searchParams={searchParams}
        setSearchParams={setSearchParams}
        {...props}
      />
    );
  }
  return Wrapper;
}

export default WithSearchParams;
