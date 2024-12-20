import React, { useState } from 'react'
import './Filter.css'
import filter from '../../shared/images/filter.svg'
import arrow from '../../shared/images/blackarrow.svg'
import rightarrow from '../../shared/images/rightarrow.svg'
import Slider from '@mui/material/Slider';
import Colors from './Colors'
import Sizes from './Sizes'



function Filter() {
    const [showPrice, setShowPrice] = useState(false);
    const [showColor, setColor] = useState(false);
    const [showSizes, setSizes] = useState(false);
    const [value, setValue] = React.useState([30000, 60000]);
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
      const valuetext = (value) => {
        return `${value}тг`;
    };
      
  return (
    <div>
        <div className="filter-container">
            <div className="filter-item"> 
                <span>Filters</span>
                <img src={filter} alt="" />
            </div>
            <div className='filter-categories'>
                <div className="flex flex-col space-y-0.5 text-black/60">
                    <a className="flex items-center justify-between py-2" href="/shop?category=t-shirts">T-shirts 
                    <img src={rightarrow} alt="" /></a>
                   
                    <a className="flex items-center justify-between py-2" href="/shop?category=shorts">Shorts 
                    <img src={rightarrow} alt="" /></a>
                    
                    <a className="flex items-center justify-between py-2" href="/shop?category=shirts">Shirts 
                    <img src={rightarrow} alt="" /></a>
                    <a className="flex items-center justify-between py-2" href="/shop?category=hoodie">Hoodie
                    <img src={rightarrow} alt="" /> </a>
                    <a className="flex items-center justify-between py-2" href="/shop?category=jeans">Jeans 
                    <img src={rightarrow} alt="" /></a>
                </div>
             </div>
            <hr className="border-t-black/10"></hr>
            <div className="filter-item" onClick={()=>setShowPrice(!showPrice)}>
                <span>Price</span>
                <img src={arrow} alt="" className={`transform transition-transform ${showPrice ? 'rotate-180' : ''}`} />
                </div>
            {showPrice && (
                 
                 <Slider
                     getAriaLabel={() => 'Ценовой диапазон'}
                     value={value}
                     min={0}
                     max={100000}
                     step={1000} // Опционально: настройка шага
                     onChange={handleChange}
                     valueLabelDisplay="on"
                     getAriaValueText={valuetext}
                     
                     sx={{
                         color: 'black', // Цвет ползунка
                     }}
                 />
            
            )}
            <hr className=" border-t-black/10"></hr>
            <div className="filter-item" onClick={()=>setColor(!showColor)}>
                <span>Colour</span>
                <img src={arrow} alt=""  className={`transform transition-transform ${showColor ? 'rotate-180' : ''}`}/>
            </div>
            {showColor && 
                <Colors/>
                }
            <hr className= "border-t-black/10"></hr>
            <div className="filter-item" onClick={() => setSizes(!showSizes)}>
                <span>Size</span>
                <img src={arrow} alt="" className={`transform transition-transform ${showSizes ? 'rotate-180' : ''}`}/>
            </div>
            {showSizes && 
                <Sizes/>
            }
        </div>

    </div>
  )
}

export default Filter