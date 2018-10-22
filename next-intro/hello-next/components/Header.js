import Link from "next/link";

const styles = { link: { marginRight: 15 } };

const Header = () => (
  <div>
    <Link href="/">
      <a style={styles.link}>Home</a>
    </Link>
    <Link href="/about">
      <a style={styles.link}>About</a>
    </Link>
  </div>
);

export default Header;
