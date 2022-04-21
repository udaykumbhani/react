import React from "react";
import { images } from "../image";
import "./Kitchen.scss"
export default function Kitchen(){
    return(
        <section className="kitchen" id="Blog">
            <div className="container">
                <div className="row">
                    <div className="content">
                        <h2 className="heading">Everyone can be achef in their own kitchen</h2>
                        <p className="paregraph">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                        <a href="#" className="btn">Learn More</a>
                    </div>
                    <div className="background">
                        <img src={images.Kitchen} alt="" />
                    </div>
                </div>
            </div>
        </section>
    )
}