import Button from "../../Common/Button";
import "./style.css";
import phone from "../../../assets/phone 1.png";
import gradient from "../../../assets/gradient 1.png";

import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function MainComponent() {
  return (
    <div className="flex-info">
      <div className="left-component">
        <motion.h1
          className="track-crypto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track Crypto
        </motion.h1>
        <motion.h1
          className="real-time"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Real Time.
        </motion.h1>
        <motion.p
          className="info"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          Track crypto through a public api in real time. Visit the dashboard to
          do so!
        </motion.p>
        <motion.div
          className="btn-flex"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link to="/dashboard">
            <Button text={"deshboard"} />
          </Link>
          <Button text={"Share app"} outLined={true} />
        </motion.div>
      </div>
      <div className="phone-component">
        <motion.img
          src={phone}
          className="phone"
          initial={{ y: 20 }}
          animate={{ y: -20 }}
          transition={{
            type: "smooth",
            repeatType: "mirror",
            duration: 2,
            repeat: Infinity,
          }}
        />
        <img src={gradient} className="gradient" />
      </div>
    </div>
  );
}

export default MainComponent;
