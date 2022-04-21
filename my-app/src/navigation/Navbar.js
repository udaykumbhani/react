import React from 'react';
import "./Navbar.scss";
export default function Navbar(){
    return(
        <nav className='Navbar'>
            <header>
                <div className='container'>
                    <div className='header-part'>
                        <h1 className='logo'>Foodieland<span>.</span></h1>
                        <ul className='nav-item'>
                            <li className='nav-list'><a href="#home" className='nav-link'>Home</a></li>
                            <li className='nav-list'><a href="#Recipes" className='nav-link'>Recipes</a></li>
                            <li className='nav-list'><a href="#Blog" className='nav-link'>Blog</a></li>
                            <li className='nav-list'><a href="#contact" className='nav-link'>Contact</a></li>
                            <li className='nav-list'><a href="#aboutus" className='nav-link'>About us</a></li>
                        </ul>

                        <div className='nav-icon'>
                            <a href="https://www.facebook.com/" target="_blank"><i class="fa-brands fa-facebook-f"></i></a>
                            <a href="https://twitter.com/" target="_blank"><i class="fa-brands fa-twitter"></i></a>
                            <a href="https://www.instagram.com/" target="_blank"><i class="fa-brands fa-instagram"></i></a>
                        </div>
                    </div>
                </div>
            </header>
        </nav>
    )
} 