import { useRouter } from "next/router";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUserInfo } from "../redux/reducer/user";

const GITHUB_API_URL = "https://api.github.com";

const useSearchResult = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    const username = router.query.username;
    if (!username) {
      dispatch(setUserInfo({ user: {}, repos: [] }));
      return;
    }

    const fetchInfo = async () => {
      const resp = await fetch(`${GITHUB_API_URL}/users/${username}`);

      if (resp.status !== 200) {
        dispatch(setUserInfo({ user: {}, repos: [] }));
        return;
      }
      const user = await resp.json();
      const data = { user };

      const respRepo = await fetch(user.repos_url);
      if (respRepo.status === 200) {
        const repos = await respRepo.json();
        data.repos = repos;
      }

      dispatch(setUserInfo(data));
    };

    fetchInfo();
  }, [router.query.username]);

  return { username: router.query.username };
};

export default useSearchResult;
