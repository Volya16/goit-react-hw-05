import { useEffect, useState } from "react";
// import fetchMoviesByQuery from "../../api/apiServer";

import style from "./SearchInput.module.css";

export default function SearchInput({ onSearch }) {
  const handleSubmit = (evt) => {
    evt.preventDefault();
    const value = evt.target.elements.query.value;
    onSearch(value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={style.form}>
        <input type="text" name="query" className={style.input} />
        <button type="submit" className={style.button}>
          Search
        </button>
      </form>
    </>
  );
}
