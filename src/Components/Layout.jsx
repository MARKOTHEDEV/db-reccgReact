import PropTypes from "prop-types";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import Header from "./Header";
import StartTop from "./StartTop";

const propTypes = {
  children: PropTypes.any.isRequired,
};
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {/* <BackToTop /> */}
      <StartTop />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

Layout.propTypes = propTypes;

export default Layout;
