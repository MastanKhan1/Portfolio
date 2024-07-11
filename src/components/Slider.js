import { useState, useEffect } from 'react';
import '../styles/about.css';




const Slider = (slideArr)=>{
    const [currentIndex, setCurrentIndex] = useState(0);
    

    const gotoPrevius = ()=>{
        const newIndex = (currentIndex === 0)?slideArr.slideArr.length-1 : currentIndex-1;
        setCurrentIndex(newIndex);
    }

    const gotoNext = ()=>{
        const newIndex = (currentIndex ===slideArr.slideArr.length-1)? 0 : currentIndex+1;
        setCurrentIndex(newIndex);
        console.log("newIndex" + newIndex);
        console.log("currentIndex" + currentIndex);
    }

    const slideInfo = slideArr.slideArr;
    console.log(slideInfo);
    console.log(slideInfo[0].name);
    console.log(slideInfo[0].info);

    return(
        <>
            <div className='carousel'>
                <div className='leftArrow' onClick={gotoPrevius}>{'<'}</div>
                <div className='rightArrow' onClick={gotoNext}>{'>'}</div>
                <div className='carousel-items'>
                    <div className='carousel-item'>
                        <h1>{slideInfo[currentIndex].name}</h1>
                        {
                            slideInfo[currentIndex]?.info?.map(item=>{
                                return(
                                    <>
                                    <p>{item.description}</p>
                                    <p className='aim'>{item.aim}</p>
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Slider;