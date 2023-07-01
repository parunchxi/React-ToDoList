import { RiGithubFill } from "react-icons/ri";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <a
          id="github"
          title="Github"
          href="https://github.com/parunchxi/React-ToDoList"
        >
          <RiGithubFill />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
