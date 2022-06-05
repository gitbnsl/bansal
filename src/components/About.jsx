import React from 'react'
import '../css/about.css'
import pic1 from '../images/pic3.jpg'


const About = () => {

    // const prog = document.getElementsByClassName("progress");
    // function Scrolldown() {
    //     window.scroll(0,2000);

    // }

    // function Scrolldown() {
    //     window.scroll(0, 300);
    // }


    // window.onload = Scrolldown;

    // prog.style.width = '100%';
    return (
        <>
            <div className="container pt-5" id='about' data-aos="zoom">

                <div className="row">
                    <div className="col-md-4 text-center">
                        <img src={pic1} className='img-fluid shadow-lg bg-body' alt="" width={400} />
                    </div>
                    <div className="col-md-8 text-center px-5 py-3">
                        <h2>About me <hr /></h2>
                        <figure className="text-center">
                            <blockquote className="blockquote">
                                <p> "If you really look closely, most overnight successes took a long time."</p>
                            </blockquote>
                            <figcaption className="blockquote-footer text-end">
                                <cite title="Source Title">Steve Jobs

                                </cite>
                            </figcaption>
                        </figure>
                        <h5>
                             <div className='p-1 txt text-center fw-bold'>Hey! My name is Sandeep Kumar Bansal.</div>
                        </h5>
                        <p className='txt my-3'>
                            I am a full stack developer.
                            I’ve always been someone who has both a creative and a logical side. When I discovered web design in college, I realized it would be the perfect fit. I could use my creative side to design and my logical side to code. As a bonus, being both designer and developer allows me to make sure no detail is lost in translation.
                        </p>
                        <p className='txt'>I've worked hard in my education and now I'm ready to apply my knowledge into practice. While I don't have any real-life work experience, I've had a lot of exposure to the business environment. 
</p>
                        {/* <p className='text-start'><b>Name</b> : Sandeep Kumar Bansal</p> */}
                        {/* <p className='text-start'><b>Age</b> : 22 </p> */}
                        {/* <p className='text-start'><b>Qualification</b> : Bachelor's in Computer Aplication</p> */}
                        {/* <p className='text-start'><b>Address</b> : V.P.O Bhater Teh. Mukerian Distt. Hoshairpur Punjab (144224)</p> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default About