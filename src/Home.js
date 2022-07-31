import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
  return (
    <div className='home'>
       <div className='home__container'>
         <img 
           src='https://images-eu.ssl-images-amazon.com/images/G/31/img22/Sports/July/GW/Sportsstore/New/V1/3000x1200_1._CB632390078_.jpg' 
           alt='' 
           className='home__image'
         />
       </div>
       <div className='home__row'>
          <Product
            id = '1' 
            title = 'The Psychology of Money'
            price = '299'
            rating = {5}
            img = 'https://images-eu.ssl-images-amazon.com/images/I/41r6F2LRf8L._SY264_BO1,204,203,200_QL40_FMwebp_.jpg'
          />
          <Product
            id = '2'
            title = 'boAt Rockerz 450 Bluetooth Wireless On Ear Headphones with Mic and Upto 15 Hours Playback, 40MM Drivers, Padded Ear Cushions and Dual Modes (Aqua Blue)'
            price = '1,499'
            rating = {4}
            img = 'https://m.media-amazon.com/images/I/61u1VALn6JL._AC_UY327_FMwebp_QL65_.jpg'
          />
       </div>
       <div className='home__row'>
       <Product 
            id = '3'
            title = "MuscleBlaze Creatine Monohydrate, India's Only Labdoor USA Certified Creatine (Unflavoured, 100 g / 0.22 lb, 33 Servings)"
            price = '599'
            rating = {4}
            img = 'https://m.media-amazon.com/images/I/61dEQFiZZjS._AC_SY200_.jpg'
          />
          <Product 
            id = '4'
            title = 'Samsung 324L 3 Star Inverter Frost Free Double Door Refrigerator (RT34T4513S8/HL, Elegant Inox, Convertible)'
            price = '34,790'
            rating = {4}
            img = 'https://m.media-amazon.com/images/I/71MPug2uqTL._AC_UY327_FMwebp_QL65_.jpg'
          />
          <Product 
            id = '5'
            title = 'LG 35WN75C-B – 35” QHD (3440 x 1440) Curved Monitor with sRGB 99% Color Gamut and HDR 10 and USB-Type C (94W Power Delivery)'
            price = '54,299'
            rating = {5}
            img = 'https://m.media-amazon.com/images/I/71EP7F-yPKL._AC_UY327_FMwebp_QL65_.jpg'
          />
       </div>
       <div className='home__row'>
       <Product 
            id = '6'
            title = '2021 Apple iMac with 4.5K Retina Display (24-inch/60.96 cm, Apple M1 chip with 8‑core CPU and 8‑core GPU, 8GB RAM, 256GB) - Green'
            price = '1,28,900'
            rating = {5}
            img = 'https://m.media-amazon.com/images/I/61eoyE0l9gS._AC_UY327_FMwebp_QL65_.jpg'
          />
       </div>
    </div>
  )
}

export default Home
