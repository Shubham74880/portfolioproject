import { useRef } from "react";
import "./portfolio.scss"
import { motion, useScroll, useSpring, useTransform } from 'framer-motion'

const items = [{
  id: 1,
  title: "React Commerce",
  img: "https://images.pexels.com/photos/326522/pexels-photo-326522.jpeg?auto=compress&cs=tinysrgb&w=600",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est pariatur aperiam incidunt quasi, facilis totam voluptatem quam aspernatur necessitatibus! Expedita nobis atque pariatur architecto aliquam explicabo veniam deleniti quibusdam ipsa.",

},
{
  id: 2,
  title: "Next.js blog",
  img: "https://images.pexels.com/photos/768474/pexels-photo-768474.jpeg?auto=compress&cs=tinysrgb&w=400",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est pariatur aperiam incidunt quasi, facilis totam voluptatem quam aspernatur necessitatibus! Expedita nobis atque pariatur architecto aliquam explicabo veniam deleniti quibusdam ipsa.",

},
{
  id: 3,
  title: "Vanilla JS App",
  img: "https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=400",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est pariatur aperiam incidunt quasi, facilis totam voluptatem quam aspernatur necessitatibus! Expedita nobis atque pariatur architecto aliquam explicabo veniam deleniti quibusdam ipsa.",

},
{
  id: 4,
  title: " Music App",
  img: "https://images.pexels.com/photos/13003485/pexels-photo-13003485.jpeg?auto=compress&cs=tinysrgb&w=600",
  desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est pariatur aperiam incidunt quasi, facilis totam voluptatem quam aspernatur necessitatibus! Expedita nobis atque pariatur architecto aliquam explicabo veniam deleniti quibusdam ipsa.",

}];

const Single = ({ item }) => {


  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });

  const y = useTransform(scrollYProgress, [0, 1], [-300, 300]);


  return (
    <section >
      <div className="container">

        <div className="wrapper">
          <div className="imageContainer" ref={ref} >
            <img src={item.img} alt="" />
          </div>

          <motion.div className="textContainer" style ={{y}}>
            <h2 >{item.title}</h2>
            <p>{item.desc}</p>
            <button>See Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const Portfolio = () => {

  const ref = useRef();

  const { scrollYProgress } = useScroll({ target: ref, offset: ["end end ", "start start"] });


  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  })
  return (
    <div className='portfolio' ref={ref}>
      <motion.div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>

      </motion.div>
      {items.map(item => (
        <Single item={item} key={item.id} />))}
    </div>

  )
}

export default Portfolio
