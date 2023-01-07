import { useState } from 'react'
import { IconContext } from "react-icons";
import { FcPrevious } from "react-icons/fc";
import { FcNext } from "react-icons/fc";

import singleProductData from '../../pages/SingleProduct/singleProductData';

import './ImageSlider.scss';
const arr = [1,2,3,4,5]

const style = { color: "green", fontSize: "1.5em" }
const ImageSlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        console.log('first',currentIndex)
        if(currentIndex === arr.length - 1 ){
            setCurrentIndex(0);
        }
        else {
            setCurrentIndex(currentIndex+1);
        }
        console.log('after change', currentIndex)
        return    
    }

    const prevSlide = () => {
        if(currentIndex === 0 ){
            setCurrentIndex(arr.length-1);
        }
        else {
            setCurrentIndex(currentIndex-1);
        }
        return    
    }
    return (
    <div className='imageSliderContainer'>
        <div className='carousalContainer'>
            {singleProductData.map(({imageUrl, name}, index) => (
               (index == currentIndex) ? <div className='sliderImage' key={name}
               style={{backgroundImage: `url(${imageUrl})`}}> </div> : ''
            ))}
        </div>
        <button className='imageSliderButton' id='prevBtn' onClick={prevSlide}>
            <IconContext.Provider value={{size: '1.5em', color: '#166862'}}>
                <FcPrevious/>
            </IconContext.Provider></button>
        <button className='imageSliderButton' id='nextBtn' onClick={nextSlide}><FcNext  style={style}/></button>
    </div>
  )
}

export default ImageSlider;