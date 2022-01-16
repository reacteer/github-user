import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "./index.module.scss";
import useSearchHistory from "./../../hooks/useSearchHistory";

const SearchForm = (props) => {
  const [username, setUsername] = useState("");
  const { saveHistory } = useSearchHistory();
  const router = useRouter();

  const onSearch = (e) => {
    e.preventDefault();

    saveHistory({
      username,
      time: Date.now(),
    });
    router.replace({
      pathname: "/search",
      query: {
        username,
      },
    });
  };

  useEffect(() => {
    if (props.username) {
      setUsername(props.username);
    }
  }, [props.username]);

  return (
    <div>
      <h3 className="title">Search From:</h3>
      <form onSubmit={onSearch} className={styles.Form}>
        <input
          value={username}
          className={styles.Form__input}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Github username"
        />
        <button type="submit" className={styles.Form__submit}>
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchForm;
