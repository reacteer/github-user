import { useSelector } from "react-redux";
import styles from "./index.module.scss";
import UserCard from "./../UserCard";
import RepoCard from "../RepoCard";

const SearchResult = () => {
  const { user } = useSelector((state) => state);

  return (
    <div className={styles.Root}>
      <h3 className="title">Search Result:</h3>
      {user.info.login ? (
        <div className={styles.Root_container}>
          <UserCard
            avatarUrl={user.info.avatar_url}
            username={user.info.login}
            name={user.info.name}
            bio={user.info.bio}
          />
          <h4>Repos</h4>
          {user.repos.map((repo) => (
            <RepoCard key={repo.id} name={repo.name} description={repo.description} url={repo.clone_url} />
          ))}
        </div>
      ) : (
        <p>There is no result</p>
      )}
    </div>
  );
};

export default SearchResult;
