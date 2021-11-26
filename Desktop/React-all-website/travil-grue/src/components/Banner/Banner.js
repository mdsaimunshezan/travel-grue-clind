import React from 'react'
import banner from "../../images/banner.jpg"
import "./Banner.css"
const Banner = () => {
    return (
        <div>
            <div className="banner ">
                <div className="banner__overly">
                    <img src={banner} alt="" className="banner__img" />
                    <div className="banner__content">
                        <h1 className="banner__header">Explore <span className="banner__title">Life</span> Travel <br /> Whire You Want </h1>
                        <p className="banner__text">
                            Travel has helped us to understand the meaning of life and it has helped us become better people. Each time we travel, we see the world with new eyes
                    </p>
                    <button className="banner__btn">Read More</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
