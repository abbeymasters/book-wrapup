import React from 'react';
import "./YearlyFavorites.css"
import bookImg from "../assets/bookimg.jpg"

const YearlyFavorites = () => {
    return(
        <section className="yearlyFavoritesSection">
            <h3>most favorited books of 2022</h3>
            <div className="yearlyFavoritesList">
                <div>
                    
                    {/* <svg>
                        <mask id='m' fill='#fff'>
                            <rect id='r' width='100%' height='100%'/>
                            <circle id='c' r='50' fill='#000'/>
                            <use xlinkHref='#c' x='100%'/>
                            <use xlinkHref='#c' y='100%'/>
                            <use xlinkHref='#c' x='100%' y='100%'/>
                        </mask>
                        <use xlinkHref='#r' fill='#f90' mask='url(#m)'/>
                    </svg> */}

                    <img src={bookImg} alt=""/>
                    <h4>title of book</h4>
                    <h5>- author</h5>
                </div>
                <div>
                    <img src={bookImg} alt="" />
                    <h4>title of book</h4>
                    <h5>- author</h5>
                </div>
                <div>
                    <img src={bookImg} alt="" />
                    <h4>title of book</h4>
                    <h5>- author</h5>
                </div>
            </div>
        </section>
    )
}

export default YearlyFavorites;