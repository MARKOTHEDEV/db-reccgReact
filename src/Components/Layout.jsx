import PropTypes from "prop-types";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import Navbar from "./Navbar";
import StartTop from "./StartTop";

const propTypes = {
  children: PropTypes.any.isRequired,
};
const Layout = ({ children }) => {
  return (
    <>
      {/* <Navbar /> */}
      {/* <BackToTop /> */}
      <StartTop />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};

Layout.propTypes = propTypes;

export default Layout;
