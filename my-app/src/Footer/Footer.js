import React from "react";
import { images } from "../image";
import "./Footer.scss";
export default function Footer(){
    return(
        <section className="footer" id="aboutus">
            <div className="container">
                <div className="ft">
                    <div className="ft-top">
                        <div className="ft-left">
                            <h2 className="ft-logo">Foodieland<span>.</span></h2>
                            <p className="ft-paregraph">Lorem ipsum dolor sit amet, consectetuipisicing elit, </p>
                        </div>
                        <div className="ft-right">
                            <ul>
                                <li><a href="#Recipes" className="ft-link">Recipes</a></li>
                                <li><a href="#Blog" className="ft-link">Blog</a></li>
                                <li><a href="#contact" className="ft-link">Contact</a></li>
                                <li><a href="#aboutus" className="ft-link">About us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="ft-bottom">
                        <div className="copyright">
                            <a href="#" className="foot">© 2020 Flowbase. Powered by <span>Webflow</span></a>
                        </div>
                        <div className='ft-icon'>
                            <a href="https://www.facebook.com/" target="_blank" className="icon"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="https://twitter.com/" target="_blank" className="icon"><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://www.instagram.com/" target="_blank" className="icon"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}