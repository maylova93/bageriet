import styles from "./Slideshow.module.scss";
import slide1 from "../../assets/slide1.jpg";
import slide2 from "../../assets/slide2.jpg";
import slide3 from "../../assets/slide3.jpg";
import { useEffect, useState } from "react";

export function Slideshow() {
 const imageArray = [ slide1, slide2, slide3,slide1, slide2, slide3];
 const [currentIndex, setCurrentIndex] = useState(0);
 
 function nextIndex(){
    if(currentIndex === imageArray.length -1){
        setCurrentIndex(0);
    }
    else{
        setCurrentIndex(currentIndex + 1);
    }
 }
 function prevIndex(){
    if (currentIndex === 0){
        setCurrentIndex(2);
    }else{
        setCurrentIndex(currentIndex - 1)
    }
 }
 useEffect(() => {
    let timeout = setInterval(() => {
    //   setCurrentIndex(currentIndex +1);
      nextIndex();
    }, 2000);

    return () => clearTimeout(timeout);
 }, [currentIndex]);

  return (
 <header className={styles.slider}>
    <img src={imageArray[currentIndex]}/>
    <h2>Vi elsker at lave brød</h2>
    <button onClick={prevIndex}></button>
    <button onClick={nextIndex}></button>
    <div>
        <span onClick={() => setCurrentIndex(0)}></span>
        <span onClick={() => setCurrentIndex(1)}></span>
        <span onClick={() => setCurrentIndex(2)}></span>
        </div>
 </header>
);
}

