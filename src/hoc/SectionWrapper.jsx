import {motion} from "framer-motion";

import {styles} from "../styles.js";
import {staggerContainer} from "../utils/motion.js";

const SectionWrapper = (Component, idName) => function HOC() {
    return (
        <motion.section
            variants={staggerContainer()}
            initial="hidden"
            whileInView="show"
            viewport={{once: true, amout: 0.25}}
            className={`${styles.padding} max-w-7x1 mx-auto relative z-0`}
        >
            <span className="hash-span" id={idName}>
                &nbsp;
            </span>
            <Component/>
        </motion.section>
    )
}

export default SectionWrapper