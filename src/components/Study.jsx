import React from 'react'
import '../css/study.css'
import study from '../images/study.svg'


const Study = () => {
    return (
        <>
            <div className="container margin" data-aos="fade-right" id='study'>
                {/* <h2 className='text-center'>Resume <hr /></h2> */}
                <h4 className='text-center  fw-bold fs-2 py-5'>EDUCATION</h4>

                <div className="row my-5">

                    <div className="col-md-6 text-center" id='photo'>
                        <img src={study} className='img-fluid' alt="" width={400} />
                    </div>

                    <div className="col-md-6 d-flex">
                        <div className='list'>
                            <li></li>
                            <div className="vr bg-danger opacity-100 rounded" style={{ height: "100px", width: "8px" }}></div>
                            <li></li>
                            <div className="vr bg-info opacity-100 rounded" style={{ height: "100px", width: "8px" }}></div>
                            <li></li>
                        </div>

                        <div>
                            <br />
                            <div className='mar'>
                                <h4>BCA (Bachelor's in Computer Application)</h4>
                                <mark className='bg-secondary opacity-75 text-light'>2018-2021</mark>
                                <h6 className='mt-2'>Goverment College Daulatpur Chownk</h6>
                            </div>
                            <br />
                            <div className='mar1'>
                                <h4>DCA (Diploma in Computer Application)</h4>
                                <mark className='bg-secondary opacity-75 text-light'>2017-2018</mark>
                                <h6 className='mt-2'>Sahid Yadgari Education Society (SYES)</h6>
                            </div>
                            <br />
                            <div className='mar2'>
                                <h4>+2 Class (Science)</h4>
                                <mark className='bg-secondary opacity-75 text-light'>2016-2017</mark>
                                <h6 className='mt-2'>Govt. Senior Secondary School Sector -1 Talwara</h6>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </>
    )
}

export default Study