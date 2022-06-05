import React from 'react'
import pic from '../images/pic3.png'
import pic1 from '../images/img2.gif'
// import pic1 from '../images/png1.jpg'
import '../css/home.css'
import cv from '../images/bansal.pdf'
import Typed from 'typed.js';


const Home = () => {

    const el = React.useRef(null);
    const typed = React.useRef(null);

    React.useEffect(() => {

        const options = {
            strings: [
                'Web Developer',
                'Designer',
                'Freelancer'
            ],
            loop: true,
            typeSpeed: 100,
            backSpeed: 60,
        };

        typed.current = new Typed(el.current, options);

        return () => {
            typed.current.destroy();
        }
    }, [])




    return (
        <>
            <div className="container my-5" data-aos="fade-in">
                <div className="row">
                    <div className="col-md-6 text-center">
                        <div>
                            <img src={pic} id='pic1' className='img-fluid rahul' width={500} alt="" />
                            <img src={pic1} className='img-fluid' width={500} alt="" />
                            {/* <hr className='fs-1 m-0 p-0' /> */}
                        </div>
                    </div>


                    <div className="col-md-6 mt-5 pt-4" id='home'>
                        <div className="type-wrap">
                            <h2> Hi i am <span className='font' style={{ whiteSpace: 'pre' }} ref={el} /></h2>
                        </div>
                        <h1 className=''>Rahul Bansal</h1>
                        <h3>I am always energetic and eager to learn new skills.</h3>
                        <div className='my-4 bttn'>
                            <a href={cv} download='sandeep.pdf' className='btn btn-outline-dark me-2'>Download CV <i className="bi bi-cloud-arrow-down-fill mx-2 h5"></i></a>
                            <a href='#contact' className='btn btn-outline-dark mx-2'>Contact me <i className="bi bi-telephone-fill mx-2"></i></a>
                        </div>

                        {/* <hr className='m-0 p-0 fs-1' /> */}
                    </div>
                    <hr className='m-0 p-0 fs-1' />
                </div>
            </div>
        </>
    )
}

export default Home