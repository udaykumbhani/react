import react from 'react';
import { images } from '../image';
import "./Categories.scss";
export default function Categories(){
    return (
        <section className='categories'>
            <div className='container'>
                <div className='row'>
                    <div className='top'>
                        <h2 className='heading'>Categories</h2>
                        <a href="#" className='button'>View All Categories</a>
                    </div>
                    <div className='bottom'>
                        <div className='box Breakfast'>
                            <div className='images'>
                                <img src={images.First} alt="brekfast.img" />
                            </div>
                            <div className='text'>
                                <p className='pare'>Breakfast</p>
                            </div>
                        </div>

                        <div className='box Vegan'>
                            <div className='images'>
                                <img src={images.Second} alt="Vegan.img" />
                            </div>
                            <div className='text'>
                                <p className='pare'>Vegan</p>
                            </div>
                        </div>

                        <div className='box Meat'>
                            <div className='images'>
                                <img src={images.Third} alt="Meat.img" />
                            </div>
                            <div className='text'>
                                <p className='pare'>Meat</p>
                            </div>
                        </div>

                        <div className='box Dessert'>
                            <div className='images'>
                                <img src={images.Four} alt="Dessert.img" />
                            </div>
                            <div className='text'>
                                <p className='pare'>Dessert</p>
                            </div>
                        </div>

                        <div className='box Lunch'>
                            <div className='images'>
                                <img src={images.Five} alt="Lunch.img" />
                            </div>
                            <div className='text'>
                                <p className='pare'>Lunch</p>
                            </div>
                        </div>

                        <div className='box Chocolate'>
                            <div className='images'>
                                <img src={images.Six} alt="Chocolate.img" />
                            </div>
                            <div className='text'>
                                <p className='pare'>Chocolate</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
