import React from 'react'
import bansal from '../images/bansal1.jpg'

const Footer = () => {
    return (
        <>
            <div className="container my-2">
                <div className="row">
                    {/* <hr /> */}
                    <div className="col-md-12 text-center">

                        {/* <p className='my-1'>|</p> */}
                        {/* <h4 className='my-1'>Bansal</h4> */}

                        <footer className="py-3 my-2">
                            <img src={bansal} className='img-fluid logo' width={40} alt="" />
                            <h5 className='my-1'>Bansal</h5>
                            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
                                <li className="nav-item"><a href="/" className="nav-link px-2 text-muted">Home</a></li>
                                <li className="nav-item"><a href="#about" className="nav-link px-2 text-muted">About</a></li>
                                <li className="nav-item"><a href="#skills" className="nav-link px-2 text-muted">Skils</a></li>
                                <li className="nav-item"><a href="#study" className="nav-link px-2 text-muted">Education</a></li>
                                <li className="nav-item"><a href="#contact" className="nav-link px-2 text-muted">Contact</a></li>
                            </ul>
                            <p className="text-center text-muted">Copyright © 2022 | All rights reserved | This template is made with 🖤  by Bansal</p>
                        </footer>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer