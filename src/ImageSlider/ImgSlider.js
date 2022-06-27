import React,{useState} from 'react'
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import './slide.css'
function ImgSlider({slide}) {
    const [current,setCurrent] = useState(0)
   const length = slide.length;

  const nextSlide = () =>{
    setCurrent(current ===length-1? 0:current+1)
  }
   const preSlide = () =>{
     setCurrent(current ===0 ?length-1 :current -1 )
   }
   if(!Array.isArray(slide) || slide.length <=0){
     return null
   }
   console.log("Hello I am rendering he data for every state change")
  return (
    <section className='slider'>
    <ArrowCircleLeftIcon className='arrow' onClick ={preSlide}/>
    <ArrowCircleRightIcon className='right-arrow' onClick ={nextSlide}/>
      {slide.map((slides,index)=>{
        console.log("index data",index)
          return(
              <div className={index===current ? 'slide active' : 'slide'} key = {index}>
              {index===current && (<img src ={slides.image}  alt ="all photos" className='image'/>)}
                </div>
          )
      })}  
    </section>
  )
}

export default ImgSlider
