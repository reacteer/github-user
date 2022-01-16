import { useRouter } from "next/router";
import React from "react";
import { useSelector } from "react-redux";
import SearchForm from "../../components/SearchForm";
import SearchResult from "../../components/SearchResult";
import useSearchResult from "./../../hooks/useSearchResult";

const SearchPage = () => {
  const { username, result } = useSearchResult();
  console.log("username", username);
  const a = useSelector((state) => state);
  console.log(a);
  return (
    <React.Fragment>
      <SearchForm username={username} />
      <SearchResult />
    </React.Fragment>
  );
};

export default SearchPage;
