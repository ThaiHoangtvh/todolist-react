import Header from "./header";
import Footer from "./footer";

const Layout = ({ children, id }) => {
  return (
    <div id={id}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
