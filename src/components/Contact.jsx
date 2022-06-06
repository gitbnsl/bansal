import React, { useState, useRef } from 'react'
import '../css/contact.css'
import contact from '../images/svg.svg'
import email from 'emailjs-com'


import { Flip, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Contact = () => {

    const form = useRef();

    const [data, setData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    })

    const getData = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData({ ...data, [name]: value })
    }

    const sendEmail = (e) => {
        e.preventDefault();
        console.log('click active');


        email.sendForm('service_x3zc6nk', 'template_xh65ho7', form.current, 'tXYQhNSTkw49_VQSu')
            .then((result) => {
                console.log(result.text);
                toast.success('message send successfully');

            }, (error) => {
                console.log(error.text);
                toast.error('Failed to send message');

            });

        setData({
            name: "",
            email: "",
            subject: "",
            message: ""
        });

    }
    return (
        <>
            <div id="contact" className="paddsection">
                <div className="container p-5 mt-5" data-aos="flip-down">
                    <div className="contact-block1">
                        <h2 className='text-center my-5'>GET IN TOUCH <hr /></h2>
                        <div className="row">

                            <div className="col-lg-6 text-center">
                                <div className="contact-contact my-3">

                                    {/* <h2 className="mb-30">GET IN TOUCH</h2> */}
                                    <iframe className='img-fluid map shadow-lg' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13544.458948196976!2d75.8821352303149!3d31.930642149771014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391b72add44989f3%3A0xf7ab10580cfb0934!2sTalwara%2C%20Punjab%20144216!5e0!3m2!1sen!2sin!4v1653834147104!5m2!1sen!2sin" width={520} style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />

                                    {/* <img src={contact} width={400} className='img-fluid my-4' alt="" /> */}


                                </div>
                            </div>


                            <div className="col-lg-6">
                                <form role="form" ref={form} onSubmit={sendEmail} className="php-email-form">
                                    <div className="row gy-3">

                                        <div className="col-lg-6">
                                            <div className="form-group contact-block1">
                                                <input type="text" name="name" value={data.name} className="form-control" onChange={getData} id="name" placeholder="Your Name" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" value={data.email} name="email" onChange={getData} id="email" placeholder="Your Email" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <input type="text" className="form-control" value={data.subject} name="subject" onChange={getData} id="subject" placeholder="Subject" required />
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="form-group">
                                                <textarea className="form-control" value={data.message} name="message" onChange={getData} placeholder="Message" required></textarea>
                                            </div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="loading">Loading</div>
                                            <div className="error-message"></div>
                                            <div className="sent-message">Your message has been sent. Thank you!</div>
                                        </div>

                                        <div className="mt-0">
                                            <input type="submit" className="btn btn-defeault btn-send" value="Send message" />
                                        </div>

                                    </div>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
                <ToastContainer
                    position="bottom-center"
                    transition={Flip}
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
        </>
    )
}

export default Contact