import React from 'react';
import bannerImg from '../img/banner.jpg'

const Banner = () => {
    return (
        <div className="banner">
            <img src={bannerImg} className="img-fluid" alt="К весне готовы!"/>
            <h2 className="banner-header">К весне готовы!</h2>
        </div>
    );
};

export default Banner;