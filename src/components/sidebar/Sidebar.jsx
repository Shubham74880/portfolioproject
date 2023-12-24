import "./sidebar.scss"
import Links from "./links/Links"
import ToggleButton from "./toggleButton/Togglebutton"
import { useState } from "react"
import {motion} from "framer-motion"

const Sidebar = () => {

    const [open,setOpen] = useState(false)

    const variants ={
        open:{
            clipPath:"circle(800px at 50px 50px)",
            transition:{
                type:"spring",
                stiffiness:20,
            }
        },
        closed:{
            clipPath:"circle(25px at 49px 45px)",
            transition:{
                delay:0.5,
                type:"spring",
                stiffiness:350,
                damping:20,
            }
        }
    }
  return (
    <motion.div className="sidebar" animate={open? "open": "closed"}>
    <motion.div className="bg" variants={variants}>
    <Links/>
    </motion.div>
    <ToggleButton setOpen={setOpen}/>
















    </motion.div>
  )
}

export default Sidebar
