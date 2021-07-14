import React from "react";
import { PropTypes } from "prop-types";

import styles from "./Search.module.css";

function Search({ searchValue, setCity }) {
  const changeHandler = (e) => {
    searchValue.current = e.target.value;
  };

  Search.propTypes = {
    searchValue: PropTypes.object,
    setCity: PropTypes.func,
  };

  return (
    <div className={styles.searchWrapper}>
      <form>
        <label htmlFor="search">
          <input
            id="search"
            name="search"
            onChange={changeHandler}
            placeholder="Type city here..."
          />
        </label>
        <button onClick={setCity}>Search</button>
      </form>
    </div>
  );
}

export default Search;
