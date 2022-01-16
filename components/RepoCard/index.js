import styles from "./index.module.scss";

const RepoCard = ({ name, description = "", url = "" }) => {
  return (
    <div className={styles.Root}>
      <div>
        <span>Name: </span>
        <b>{name}</b>
      </div>
      <div>
        <span>Description: </span>
        <i>{description}</i>
      </div>
      <div>
        <span>Url: </span>
        <a href={url} className={styles.RepoLink}>
          {url}
        </a>
      </div>
    </div>
  );
};

export default RepoCard;
