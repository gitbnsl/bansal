import React from 'react'
import bansal from '../images/bansal1.jpg'
import '../css/navbar.css'

const Navbar = () => {
    return (
        <>

            <div className="container p-3 bg">
                <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
                    <a href="/" className="d-flex align-items-center my-2 my-lg-0 me-lg-auto text-dark text-decoration-none">

                        <img src={bansal} className='img-fluid logo' width={110} alt="" />
                    </a>

                    <ul className="nav col-12 col-lg-auto my-3 justify-content-center my-md-0 text-small">
                        <li>
                            <a href="/" className="nav-link text-black">
                                <i className="bi bi-house-fill mx-2"></i>
                                Home
                            </a>
                        </li>
                        {/* <li>
                            <a href="#" className="nav-link text-dark">
                            <i class="bi bi-book-half mx-2"></i>
                                <i className="bi bi-house-fill mx-2"></i>
                                Resume
                            </a>
                        </li> */}
                        <li>
                            <a href="#about" className="nav-link text-dark">
                                <i className="bi bi-person-lines-fill mx-1"></i>
                                About me
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="nav-link text-dark">
                                <i className="bi bi-person-rolodex mx-2"></i>
                                Contact
                            </a>
                        </li>
                        {/* <li>
                            <a href="#" className="nav-link text-dark">
                                <i className="bi bi-house-fill mx-2"></i>
                                
                            </a>
                        </li> */}
                    </ul>
                </div>

            </div>

           
        </>
    )
}

export default Navbar