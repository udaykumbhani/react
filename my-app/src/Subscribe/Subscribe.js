import React from "react";
import { images } from "../image";
import "./Subscribe.scss";
export default function Subscribe (){
    return(
        <section className="subscribe">
            <div className="container">
                <div className="background">
                    <div className="kisssalad-image">
                        <img src={images.kisssalad} alt="kisssalad_images" />
                    </div>
                    <div className="content">
                        <h2 className="heading">Deliciousness to your inbox</h2>
                        <p className="partegraph">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                        <form action="/action_page.php">
                            <input type="email" id="email" name="email" placeholder="Your email address..."/>
                            <a href="mailto: abc@example.com" target="_blank">Subscribe</a>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
