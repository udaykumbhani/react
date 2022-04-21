import react from 'react';
import { images } from '../image';
import "./Recipes.scss";
import {BsHeart} from 'react-icons/bs';
export default function Recipes(){
    return(
        <section className='Recipes' id='Recipes'>
            <div className='container'>
                <div className='row'>
                    <div className='top'>
                        <h2 className='heading'>Simple and tasty recipes</h2>
                        <p className='paregraph'>Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim ad minim </p>
                    </div>
                    <div className='bottom'>
                        <div className='bg'>
                            <div className='img'>
                                <img src={images.Snack} className='recipy-img' alt="snack_img" />
                                <div className='circle'></div>
                                <div className='heart'>
                                    <i class="likes fa-solid fa-heart"></i>
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
                                        <span className="text">Snack</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg'>
                            <div className='img'>
                                <img src={images.Fish} className='recipy-img' alt="snack_img" />
                                <div className='circle'></div>
                                <div className='heart'>
                                    <i class="likes fa-solid fa-heart"></i>                                
                                </div>
                            </div>
                            <div className='content'>
                                <h3 className='card-heading'>Fresh Lime Roasted Salmon with Ginger Sauce</h3>
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
                                        <span className="text">Fish</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg'>
                            <div className='img'>
                                <img src={images.Breakfast} className='recipy-img' alt="snack_img" />
                                <div className='circle'></div>
                                <div className='heart'>
                                    <i class="likes fa-solid fa-heart"></i>
                                </div>
                            </div>
                            <div className='content'>
                                <h3 className='card-heading'>Strawberry Oatmeal Pancake with Honey Syrup</h3>
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
                                        <span className="text">Breakfast</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg'>
                            <div className='img'>
                                <img src={images.Healthy} className='recipy-img' alt="snack_img" />
                                <div className='circle'></div>
                                <div className='heart'>
                                    <i class="likes fa-solid fa-heart"></i>
                                </div>
                            </div>
                            <div className='content'>
                                <h3 className='card-heading'>Fresh and Healthy Mixed Mayonnaise Salad</h3>
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

                        <div className='bg'>
                            <div className='img'>
                                <img src={images.Meat} className='recipy-img' alt="snack_img" />
                                <div className='circle'></div>
                                <div className='heart'>
                                    <i class="likes fa-solid fa-heart"></i>
                                </div>
                            </div>
                            <div className='content'>
                                <h3 className='card-heading'>Chicken Meatballs with Cream Cheese</h3>
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
                                        <span className="text">Meat</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg bg-none'>
                            <div className='img'>
                                <img src={images.Ads} className='recipy-img' alt="snack_img" />
                            </div>
                        </div>

                        <div className='bg'>
                            <div className='img'>
                                <img src={images.Sweet} className='recipy-img' alt="snack_img" />
                                <div className='circle'></div>
                                <div className='heart'>
                                    <i class="likes fa-solid fa-heart"></i>
                                </div>
                            </div>
                            <div className='content'>
                                <h3 className='card-heading'>Fruity Pancake with Orange & Blueberry</h3>
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
                                        <span className="text">Sweet</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className='bg'>
                            <div className='img'>
                                <img src={images.Rice} className='recipy-img' alt="snack_img" />
                                <div className='circle'></div>
                                <div className='heart'>
                                    <i class="likes fa-solid fa-heart"></i>
                                </div>
                            </div>
                            <div className='content'>
                                <h3 className='card-heading'>The Best Easy One Pot Chicken and Rice</h3>
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

                        <div className='bg'>
                            <div className='img'>
                                <img src={images.Noodles} className='recipy-img' alt="snack_img" />
                                <div className='circle'></div>
                                <div className='heart'>
                                    <i class="likes fa-solid fa-heart"></i>
                                </div>
                            </div>
                            <div className='content'>
                                <h3 className='card-heading'>The Creamiest Creamy Chicken and Bacon Pasta</h3>
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
                                        <span className="text">Noodles</span>
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