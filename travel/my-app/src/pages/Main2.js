import {Swiper, SwiperSlide} from "swiper/react";
import { Autoplay, EffectFade, EffectCube, EffectCreative } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/effect-creative';
import { FaHotjar} from "react-icons/fa6";

import classes from './Main2.module.css';
import pic1 from '../images/카페1.jpg'
import pic2 from '../images/카페2.jpg'
import pic3 from '../images/카페3.jpg'
import cos1 from '../images/cos1.jpg'
import cos2 from '../images/cos2.jpg'
import cos3 from '../images/cos3.jpg'
import fes1 from '../images/축제1.jpg'
import fes2 from '../images/축제2.jpg'
import fes3 from '../images/축제3.jpg'
import food1 from '../images/음식1.jpg'
import food2 from '../images/음식2.jpg'
import food3 from '../images/음식3.jpg'
import Main1 from "./Main1";
import Main3 from "./Main3";

const Main2 = () => {
    return (
        <>
            <Main1 />
        <div className={classes.main2}>
            <h2 className={classes.tag}><FaHotjar /> 요즘 떠오르는 핫플레이스</h2>
            <div className={classes.container}>
            <Swiper
            modules={[Autoplay, EffectFade, EffectCube]}
            effect={'fade'}
            spaceBetween={30}
            slidesPerView={1}
            autoplay= {{delay: 3000, disableOnInteraction: false}}
            style={{width: '300px', borderRadius: '15px', height: '500px'}}
            >
                <SwiperSlide><p className={classes.picintro}>네르하21카페 - 통영</p><img src={pic1} style={{width:'300px',borderRadius: '15px', height: '500px'}}/></SwiperSlide>
                <SwiperSlide><p className={classes.picintro}>뚜벅스- 부산</p><img src={pic2} style={{width:'300px',borderRadius: '15px', height: '500px'}}/></SwiperSlide>
                <SwiperSlide><p className={classes.picintro}>해화탕 - 제주</p><img src={pic3} style={{width:'300px',borderRadius: '15px', height: '500px'}}/></SwiperSlide>
            </Swiper>
            <Swiper
            modules={[Autoplay, EffectFade, EffectCube]}
            effect={'fade'}
            spaceBetween={30}
            slidesPerView={1}
            autoplay= {{delay: 3000, disableOnInteraction: false}}
            style={{width: '300px', borderRadius: '15px', height: '500px'}}
            >
                <SwiperSlide><p className={classes.picintro}>욕지섬 - 통영</p><img src={cos1} style={{width:'300px',borderRadius: '15px', height: '500px'}}/></SwiperSlide>
                <SwiperSlide><p className={classes.picintro}>오동도 - 여수</p><img src={cos2} style={{width:'300px',borderRadius: '15px', height: '500px'}}/></SwiperSlide>
                <SwiperSlide><p className={classes.picintro}>임실치즈테마파크 - 임실</p><img src={cos3} style={{width:'300px',borderRadius: '15px', height: '500px'}}/></SwiperSlide>
            </Swiper>
            <Swiper
            modules={[Autoplay, EffectFade, EffectCube]}
            effect={'fade'}
            spaceBetween={30}
            slidesPerView={1}
            autoplay= {{delay: 3000, disableOnInteraction: false}}
            style={{width: '300px', borderRadius: '15px', height: '500px'}}
            >
                      <SwiperSlide><p className={classes.picintro}>찜닭 - 안동</p><img src={food1} style={{width:'300px',borderRadius: '15px', height: '500px'}}/></SwiperSlide>
                <SwiperSlide><p className={classes.picintro}>떡갈비- 담양</p><img src={food2} style={{width:'300px',borderRadius: '15px', height: '500px'}}/></SwiperSlide>
                <SwiperSlide><p className={classes.picintro}>오징어 - 속초</p><img src={food3} style={{width:'300px',borderRadius: '15px', height: '500px'}}/></SwiperSlide>
            </Swiper>
            <Swiper
            modules={[Autoplay, EffectFade, EffectCube]}
            effect={'fade'}
            spaceBetween={30}
            slidesPerView={1}
            autoplay= {{delay: 3000, disableOnInteraction: false}}
            style={{width: '300px', borderRadius: '15px', height: '500px'}}
            >
                <SwiperSlide><p className={classes.picintro}>해바라기축제 - 함안</p><img src={fes1} style={{width:'300px',borderRadius: '15px', height: '500px'}}/></SwiperSlide>
                <SwiperSlide><p className={classes.picintro}>빛축제 - 울산</p><img src={fes2} style={{width:'300px',borderRadius: '15px', height: '500px'}}/></SwiperSlide>
                <SwiperSlide><p className={classes.picintro}>나오라쇼 - 원주</p><img src={fes3} style={{width:'300px',borderRadius: '15px', height: '500px'}}/></SwiperSlide>
            </Swiper>
        </div>
        <div className={classes.main3}>
            <Main3 />
        </div>
        </div>
        </>
        
        
    );
};

export default Main2;