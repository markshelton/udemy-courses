import Header from "./Header";

const styles = {
  layout: { margin: 20, padding: 20, border: "1px solid #DDD" }
};

const Layout = ({ children }) => (
  <div style={styles.layout}>
    <Header />
    {children}
  </div>
);

export default Layout;
