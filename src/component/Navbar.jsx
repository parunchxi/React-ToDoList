import { RiMoonFill, RiGithubFill } from "react-icons/ri";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div>
        <a id="change_theme">
          <RiMoonFill />
        </a>
        <a id="github" href="https://github.com/parunchxi/React-ToDoList">
          <RiGithubFill />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
