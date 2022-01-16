import { useEffect, useState } from "react";

const HISTORY_KEY = "histories";

const useSearchHistory = () => {
  const [histories, setHistories] = useState([]);

  const saveHistory = (item) => {
    const items = [item, ...histories];
    localStorage.setItem(HISTORY_KEY, JSON.stringify(items));
    setHistories(items);
  };

  const updateHistories = (items) => {
    localStorage.setItem(HISTORY_KEY, JSON.stringify(items));
    setHistories(items);
  };

  useEffect(() => {
    const historiesStr = localStorage.getItem(HISTORY_KEY);
    if (!historiesStr) return;

    const items = JSON.parse(historiesStr);
    items.sort((a, b) => b.time - a.time);
    setHistories(items);
  }, []);

  return { histories, saveHistory, updateHistories };
};

export default useSearchHistory;
