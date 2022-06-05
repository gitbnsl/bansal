import React, { useState, useEffect } from 'react'
import '../css/about.css'

const Skills = () => {

    const [scroll, setScroll] = useState(false);

    const anima = () => {
        window.addEventListener("scroll", function () {

            // console.log(window.pageYOffset)

            if (window.pageYOffset > 1600 || window.pageYOffset > 800) {
                setScroll(true)
            }
            else {
                setScroll(false)
            }
            
        })

    }


    useEffect(() => {
        anima();
    }, [])




    return (
        <>

            <div className="container" data-aos="slide-up" id='skills'>
                <div className="row my-5 p-3">
                    <h2 className='text-center my-5' id='frame'>Technical Skills <hr /></h2>

                    <div className="col-md-10 m-auto ">
                        <div className="row">
                            <div className="col-md-2 mt-1 skill">
                                <h5>React  <span className='badge rounded-pill text-dark bg-info'>78%</span>
                                </h5>
                                <h5 className='hide badge rounded-pill text-dark bg-info px-2'>78%</h5>
                            </div>
                            <div className="col-md-10 text-start">
                                <div className="progress my-2">
                                    <div className={scroll ? "progress-bar scrolled" : "progress-bar"} role="progressbar" style={{ width: '78%' }}></div>
                                </div>
                            </div>

                            <div className="col-md-2 mt-1 skill">
                                <h5>java-script   <span className='badge rounded-pill text-dark bg-info'> 75%</span>
                                </h5>
                                <h5 className='hide badge rounded-pill text-dark bg-info px-2'>75%</h5>

                            </div>
                            <div className="col-md-10 text-start">
                                <div className="progress my-2">
                                    <div className={scroll ? "progress-bar scrolled" : "progress-bar"} role="progressbar" style={{ width: '75%' }}></div>
                                </div>
                            </div>

                            <div className="col-md-2 mt-1 skill">
                                <h5>Node js <span className='badge rounded-pill text-dark bg-info'>73%</span></h5>
                                <h5 className='hide badge rounded-pill text-dark bg-info px-2'>73%</h5>
                            </div>
                            <div className="col-md-10 text-start">
                                <div className="progress my-2">
                                    <div className={scroll ? "progress-bar scrolled" : "progress-bar"} role="progressbar" style={{ width: '70%' }}></div>

                                </div>
                            </div>

                            <div className="col-md-2 mt-1 skill">
                                <h5>HTML <span className='badge rounded-pill text-dark bg-info'>90%</span></h5>
                                <h5 className='hide badge rounded-pill text-dark bg-info px-2'>90%</h5>
                            </div>
                            <div className="col-md-10 text-start">
                                <div className="progress my-2">
                                    <div className={scroll ? "progress-bar scrolled" : "progress-bar"} role="progressbar" style={{ width: '83%' }}></div>
                                </div>
                            </div>

                            <div className="col-md-2 mt-1 skill">
                                <h5>CSS <span className='badge rounded-pill text-dark bg-info'>75%</span></h5>
                                <h5 className='hide badge rounded-pill text-dark bg-info px-2'>75%</h5>
                            </div>
                            <div className="col-md-10 text-start">
                                <div className="progress my-2">
                                    <div className={scroll ? "progress-bar scrolled" : "progress-bar"} role="progressbar" style={{ width: '73%' }}></div>
                                </div>
                            </div>

                            <div className="col-md-2 mt-1 skill">
                                <h5>Bootsrap <span className='badge rounded-pill text-dark bg-info'>85%</span></h5>
                                <h5 className='hide badge rounded-pill text-dark bg-info px-2'>85%</h5>
                            </div>
                            <div className="col-md-10 text-start">
                                <div className="progress my-2">
                                    <div className={scroll ? "progress-bar scrolled" : "progress-bar"} role="progressbar" style={{ width: '80%' }}></div>
                                </div>
                            </div>

                            <div className="col-md-2 mt-1 skill">
                                <h5>Express <span className='badge rounded-pill text-dark bg-info'>75%</span></h5>
                                <h5 className='hide badge rounded-pill text-dark bg-info px-2'>75%</h5>
                            </div>
                            <div className="col-md-10 text-start">
                                <div className="progress my-2">
                                    <div className={scroll ? "progress-bar scrolled" : "progress-bar"} role="progressbar" style={{ width: '80%' }}></div>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Skills