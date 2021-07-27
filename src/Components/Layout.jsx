import PropTypes from "prop-types";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import StartTop from "./StartTop";

const propTypes = {
  children: PropTypes.any.isRequired,
};
const Layout = ({ children }) => {
  return (
    <>
     
      <StartTop />
       <BackToTop/>
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = propTypes;

export default Layout;
