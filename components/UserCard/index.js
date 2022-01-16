import styles from "./index.module.scss";

const UserCard = ({ avatarUrl, name = "", bio = "" }) => {
  return (
    <div className={styles.Root}>
      <img src={avatarUrl} alt="Avatar" />
      <div className={styles.Root_container}>
        <h4>
          <b>{name}</b>
        </h4>
        <p>{bio}</p>
      </div>
    </div>
  );
};

export default UserCard;
