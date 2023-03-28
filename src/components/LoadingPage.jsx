import "../styles/components/loadingPage.css";
import logo from "../assets/logo.png/";
import { motion } from "framer-motion";

function LoadingPage() {
  return (
    <div className="page">
      <div className="page-logo">
        <img className="page-logo-img" src={logo} alt="logo in loading page" />
        <motion.span
          initial={{ translateY: 105 }}
          animate={{ translateY: -200 }}
          transition={{ duration: 3.5 }}></motion.span>
      </div>
    </div>
  );
}

export default LoadingPage;
