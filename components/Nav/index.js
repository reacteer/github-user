import styles from "./index.module.scss";

import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();

  return (
    <ul className={styles.Nav}>
      <li>
        <Link href="/search">
          <a className={`${router.pathname.startsWith("/search") ? styles.Nav_active : ""}`}>Search</a>
        </Link>
      </li>
      <li>
        <Link href="/histories">
          <a className={`${router.pathname.startsWith("/histories") ? styles.Nav_active : ""}`}>Search Histories</a>
        </Link>
      </li>
    </ul>
  );
};

export default Nav;
