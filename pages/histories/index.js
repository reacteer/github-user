import React from "react";
import { useRouter } from "next/router";
import styles from "./index.module.scss";

import useSearchHistory from "../../hooks/useSearchHistory";

const SearchPage = () => {
  const { histories, updateHistories } = useSearchHistory();
  const router = useRouter();

  const onClickItem = (history) => {
    const newHistories = histories.filter((item) => item.time !== history.time);
    const newHistory = {
      ...history,
      time: Date.now(),
    };

    updateHistories([newHistory, ...newHistories]);

    router.push(`/search?username=${history.username}`);
  };

  return (
    <React.Fragment>
      <h4>Search Histories:</h4>
      <table className={styles.Root}>
        <thead>
          <tr>
            <th>STT</th>
            <th>Time</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {histories.map((h, index) => (
            <tr onClick={() => onClickItem(h)} key={h.time}>
              <td>{index + 1}</td>
              <td>
                {new Date(h.time).toLocaleDateString()} {new Date(h.time).toLocaleTimeString()}
              </td>
              <td>{h.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </React.Fragment>
  );
};

export default SearchPage;
