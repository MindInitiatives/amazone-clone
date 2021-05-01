import React from 'react'
import Product from './Product'
import './Home.css'

function Home() {
    return (
        
        <div className="home">
            <img className="home__image" src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg" alt=""/>
            <div className="home__row">
                <Product
                id="121314"
                title="Govee 32.8ft Color Changing LED Strip Lights, Bluetooth LED Light"
                price={21.95}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/512rsFTunXL._AC_SR400,600_.jpg"
                />
                <Product
                id="121314"
                title="The Lean Startup: How Contant Innovation"
                price={11.96}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
                <Product
                id="121314"
                title="Nespresso Pixie Coffee and Espresso Machine by DeLonghi"
                price={15.60}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41otCOyiGwL._AC_SR400,600_.jpg"
                />
            </div>
            <div className="home__row">
                <Product
                id="121314"
                title="Govee 32.8ft Color Changing LED Strip Lights, Bluetooth LED Light"
                price={21.95}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/512rsFTunXL._AC_SR400,600_.jpg"
                />
                <Product
                id="121314"
                title="The Lean Startup: How Contant Innovation"
                price={11.96}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
                <Product
                id="121314"
                title="Nespresso Pixie Coffee and Espresso Machine by DeLonghi"
                price={15.60}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41otCOyiGwL._AC_SR400,600_.jpg"
                />
                <Product
                id="121314"
                title="The Lean Startup: How Contant Innovation"
                price={11.96}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
            </div>
            <div className="home__row">
            <Product
                id="121314"
                title="The Lean Startup: How Contant Innovation"
                price={11.96}
                rating={3}
                image="https://images-na.ssl-images-amazon.com/images/I/71K7Q4FpguL._AC_SL1500_.jpg"
                />
                <Product
                id="121314"
                title="Nespresso Pixie Coffee and Espresso Machine by DeLonghi"
                price={15.60}
                rating={5}
                image="https://images-na.ssl-images-amazon.com/images/I/41otCOyiGwL._AC_SR400,600_.jpg"
                />
            </div>
        </div>
    )
}
export default Home;