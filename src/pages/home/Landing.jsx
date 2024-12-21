import React from 'react'
import ShopButton from '../../components/Landing/ShopButton'
import './Landing.css'
import man from '../../shared/images/landingImage.png'
import LanguageSwitcher from '../../features/i18n/Locale';
import { useTranslation } from 'react-i18next';

function Landing() {
  const { t } = useTranslation();

  return (
    <div className='landing-main'>
      <div className='landing-title'>
      <h2 className="text-4xl lg:text-[64px] lg:leading-[64px] mb-5 lg:mb-8">{t('translation:welcome')}</h2>
      <p className="text-black/60 text-sm lg:text-base mb-6 lg:mb-8 max-w-[545px]">{t('translation:description')}</p>
      <ShopButton/>   
      <div className='number-info'>
        <div className="flex flex-col">
            <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
            <span>200</span>+</span>
            <span className="text-xs xl:text-base text-black/60 text-nowrap">{t('translation:brands')}</span>
        </div>
        <div className='vertical-line'></div>
        <div className="flex flex-col ml-6 md:ml-0">
            <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
            <span>2,000</span>+</span>
            <span className="text-xs xl:text-base text-black/60 text-nowrap">{t('translation:quality')}</span>
        </div>
        <div className='vertical-line'></div>
        <div className="flex flex-col w-full text-center sm:w-auto sm:text-left mt-3 sm:mt-0 sm:ml-6 md:ml-0">
            <span className="font-bold text-2xl md:text-xl lg:text-3xl xl:text-[40px] xl:mb-2">
            <span>3,000</span>+</span>
            <span className="text-xs xl:text-base text-black/60 text-nowrap">{t('translation:customers')}</span>
        </div>
      </div>
      </div>
      
      <div className='landing-image'> 
        <img src={man} alt="" />

      </div>
      <div>

      </div>
    </div>
  )
}

export default Landing