import React from "react";
import { NavLink } from "react-router-dom";

import classes from './Header.module.css';
import mainlogo from '../images/로고.png'

const Header = () => {
    return (
       <div className={classes.header}>

        <ul className={classes.list}>
            <NavLink to='/' className={({isActive})=> isActive ? classes.active : classes.unactive}><li><img src={mainlogo} className={classes.mainlogo}/></li></NavLink>
            <NavLink to='/intro/seoul' className={({isActive})=> isActive ? classes.active : classes.unactive} end><li>서울</li></NavLink>
            <NavLink to='/intro/Gyeonggi' className={({isActive})=> isActive ? classes.active :  classes.unactive}><li>경기</li></NavLink>
            <NavLink to='/intro/Gangwon' className={({isActive})=> isActive ? classes.active : classes.unactive}><li>강원</li></NavLink>
            <NavLink to='/intro/Chungcheong' className={({isActive})=> isActive ? classes.active : classes.unactive}><li>충청</li></NavLink>
            <NavLink to='/intro/Jeolla' className={({isActive})=> isActive ? classes.active : classes.unactive}><li>전라</li></NavLink>
            <NavLink to='/intro/Gyeongsang' className={({isActive})=> isActive ? classes.active : classes.unactive}><li>경상</li></NavLink>
            <NavLink to='/intro/Jeju' className={({isActive})=> isActive ? classes.active : classes.unactive}><li>제주</li></NavLink>
        </ul>
       </div> 
    );
};

export default Header;