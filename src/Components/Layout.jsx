import PropTypes from "prop-types";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import StartTop from "./StartTop";
import { AnimatePresence } from "framer-motion";

const propTypes = {
  children: PropTypes.any.isRequired,
};
const Layout = ({ children }) => {
  return (
    <div className="overflow-x-hidden">
      <StartTop />
      <BackToTop />
      <AnimatePresence exitBeforeEnter>
        <main>{children}</main>
      </AnimatePresence>
      <Footer />
    </div>
  );
};

Layout.propTypes = propTypes;

export default Layout;
