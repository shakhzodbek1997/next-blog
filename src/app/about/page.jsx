import react from "react";
import styles from './page.module.css'
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image 
          src="https://images.pexels.com/photos/19287989/pexels-photo-19287989/free-photo-of-broken-pier-on-ocean-shore.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          fill={true}  
          alt="About image" 
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Digital Storytellers</h1>
          <h2 className={styles.imgDesc}>Handcrafting award winning digital experiences</h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Welcome to our digital storytelling platform where narratives come alive. We are a collective of passionate storytellers, weaving compelling tales through the digital realm. Our team comprises visionary creators, technologists, and artists dedicated to crafting immersive narratives that captivate and resonate.
            At our core, we believe in the power of stories to inspire, educate, and entertain. Whether through stunning visuals, interactive experiences, or innovative storytelling techniques, we strive to push the boundaries of digital storytelling.
            <br />
            We merge creativity with cutting-edge technology to bring stories to life, engaging audiences across diverse mediums. With a blend of expertise and imagination, we embark on a journey to redefine storytelling in the digital age.
            Join us in exploring the boundless possibilities of storytelling and lets embark on a transformative narrative journey together
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>What We DO?</h1>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. 
            <br/> <br/> - Creative Illustrations
            <br/> <br/> - Dynamic Websites  
            <br/> <br/>- Fast and Handy Mobile applications
          </p>
          <Button url="/contact" text="Contact"/>
        </div>
      </div>  
    </div>
  )
}
export default About;

// 1:00:19    Next.js UI design