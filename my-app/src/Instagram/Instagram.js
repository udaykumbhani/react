import React from "react";
import { images } from "../image";
import "./Instagram.scss"
export default function Instagram(){
    return(
        <section className="instagram" id="contact">
            <div className="container">
                <div className="row">
                    <div className="insta-top">
                        <h2 className="insta-title">Check out @foodieland on Instagram</h2>
                        <p className="paregraph">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    </div>
                    <div className="insta-center">
                        <div className="insta-post">
                            <img src={images.Postone} alt="insta-post_img" />
                        </div>
                        <div className="insta-post">
                            <img src={images.Postsecond} alt="insta-post_img" />
                        </div>
                        <div className="insta-post">
                            <img src={images.Postthird} alt="insta-post_img" />
                        </div>
                        <div className="insta-post">
                            <img src={images.Postfourth} alt="insta-post_fourth" />
                        </div>
                    </div>
                       <div className="btn ">
                           <a href="https://www.instagram.com/" target="_blank" className="btn-link">Visit Our Instagram <i class="fa-brands fa-instagram"></i></a>
                           
                       </div>
                    </div>
                </div>
        </section>
    )
}