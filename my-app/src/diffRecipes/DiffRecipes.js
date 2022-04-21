import React from "react";
import { images } from "../image";
import "./DiffRecipes.scss";
import {BsHeart} from 'react-icons/bs';
export default function DiffRecipes() {
    return (
        <section className="diffRecipes">
            <div className="container">
                <div className="row">
                    <div className="diff-top">
                        <h2 className="diff-title">Try this delicious recipeto make your day</h2>
                        <p className="diff-sub-title">Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    </div>
                    <div className="diff-bottom">

                        <div className='diff-main'>
                            <div className='img'>
                                <img src={images.diffone} className='diff-img' alt="Healthy_img" />
                                <div className='circleicon'></div>
                                <div className='hearticon'>
                                    <i class="1 likes fa-solid fa-heart"></i>
                                </div>
                            </div>
                            <div className='content'>
                                <h3 className='card-heading'>Mixed Tropical Fruit Salad with Superfood Boosts</h3>
                                <div className="wrapper space">
                                    <div className="stat none">
                                        <span>
                                            <img src={images.Timer} alt="timer_img" />
                                        </span>
                                        <span className="text">30 minutes</span>
                                    </div>
                                    <div className="stat none">
                                        <span>
                                            <img src={images.ForkKnife} alt="forknife_img" />
                                        </span>
                                        <span className="text">Healthy</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='diff-main'>
                            <div className='img'>
                                <img src={images.difftwo} className='diff-img' alt="Western_img" />
                                <div className='circleicon'></div>
                                <div className='hearticon'>
                                    <i class="2 likes fa-solid fa-heart"></i>
                                </div>
                            </div>
                            <div className='content'>
                                <h3 className='card-heading'>Big and Juicy Wagyu Beef Cheeseburger</h3>
                                <div className="wrapper space">
                                    <div className="stat none">
                                        <span>
                                            <img src={images.Timer} alt="timer_img" />
                                        </span>
                                        <span className="text">30 minutes</span>
                                    </div>
                                    <div className="stat none">
                                        <span>
                                            <img src={images.ForkKnife} alt="forknife_img" />
                                        </span>
                                        <span className="text">Western</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='diff-main'>
                            <div className='img'>
                                <img src={images.diffthree} className='diff-img' alt="Healthy_img" />
                                <div className='circleicon'></div>
                                <div className='hearticon'>
                                    <i class="3 likes fa-solid fa-heart"></i>
                                </div>
                            </div>
                            <div className='content'>
                                <h3 className='card-heading'>Healthy Japanese Fried Rice with Asparagus</h3>
                                <div className="wrapper space">
                                    <div className="stat none">
                                        <span>
                                            <img src={images.Timer} alt="timer_img" />
                                        </span>
                                        <span className="text">30 minutes</span>
                                    </div>
                                    <div className="stat none">
                                        <span>
                                            <img src={images.ForkKnife} alt="forknife_img" />
                                        </span>
                                        <span className="text">Healthy</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='diff-main'>
                            <div className='img'>
                                <img src={images.difffour} className='diff-img' alt="Eastern_img" />
                                <div className='circleicon'></div>
                                <div className='hearticon'>
                                    <i class="4 likes fa-solid fa-heart"></i>
                                </div>
                            </div>
                            <div className='content'>
                                <h3 className='card-heading'>Cauliflower Walnut Vegetarian Taco Meat</h3>
                                <div className="wrapper space">
                                    <div className="stat none">
                                        <span>
                                            <img src={images.Timer} alt="timer_img" />
                                        </span>
                                        <span className="text">30 minutes</span>
                                    </div>
                                    <div className="stat none">
                                        <span>
                                            <img src={images.ForkKnife} alt="forknife_img" />
                                        </span>
                                        <span className="text">Eastern</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='diff-main'>
                            <div className='img'>
                                <img src={images.difffive} className='diff-img' alt="Healthy_img" />
                                <div className='circleicon'></div>
                                <div className='hearticon'>
                                    <i class="5 likes fa-solid fa-heart"></i>
                                </div>
                            </div>
                            <div className='content'>
                                <h3 className='card-heading'>Rainbow Chicken Salad with Almond Honey Mustard Dressing</h3>
                                <div className="wrapper space">
                                    <div className="stat none">
                                        <span>
                                            <img src={images.Timer} alt="timer_img" />
                                        </span>
                                        <span className="text">30 minutes</span>
                                    </div>
                                    <div className="stat none">
                                        <span>
                                            <img src={images.ForkKnife} alt="forknife_img" />
                                        </span>
                                        <span className="text">Healthy</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='diff-main'>
                            <div className='img'>
                                <img src={images.diffsix} className='diff-img' alt="Snack_img" />
                                <div className='circleicon'></div>
                                <div className='hearticon'>
                                    <i class="6 likes fa-solid fa-heart"></i>
                                </div>
                            </div>
                            <div className='content'>
                                <h3 className='card-heading'>Barbeque Spicy Sandwiches with Chips </h3>
                                <div className="wrapper space">
                                    <div className="stat none">
                                        <span>
                                            <img src={images.Timer} alt="timer_img" />
                                        </span>
                                        <span className="text">30 minutes</span>
                                    </div>
                                    <div className="stat none">
                                        <span>
                                            <img src={images.ForkKnife} alt="forknife_img" />
                                        </span>
                                        <span className="text">Snack</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='diff-main'>
                            <div className='img'>
                                <img src={images.diffseven} className='diff-img' alt="Seafood_img" />
                                <div className='circleicon'></div>
                                <div className='hearticon'>
                                    <i class="7 likes fa-solid fa-heart"></i>
                                </div>
                            </div>
                            <div className='content'>
                                <h3 className='card-heading'>Firecracker Vegan Lettuce Wraps - Spicy!</h3>
                                <div className="wrapper space">
                                    <div className="stat none">
                                        <span>
                                            <img src={images.Timer} alt="timer_img" />
                                        </span>
                                        <span className="text">30 minutes</span>
                                    </div>
                                    <div className="stat none">
                                        <span>
                                            <img src={images.ForkKnife} alt="forknife_img" />
                                        </span>
                                        <span className="text">Seafood</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className='diff-main'>
                            <div className='img'>
                                <img src={images.diffeight} className='diff-img' alt="Japanese_img" />
                                <div className='circleicon'></div>
                                <div className='hearticon'>
                                    <i class="8 likes fa-solid fa-heart"></i>
                                </div>
                            </div>
                            <div className='content'>
                                <h3 className='card-heading'>Chicken Ramen Soup with Mushroom</h3>
                                <div className="wrapper space">
                                    <div className="stat none">
                                        <span>
                                            <img src={images.Timer} alt="timer_img" />
                                        </span>
                                        <span className="text">30 minutes</span>
                                    </div>
                                    <div className="stat none">
                                        <span>
                                            <img src={images.ForkKnife} alt="forknife_img" />
                                        </span>
                                        <span className="text">Japanese</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    )
}