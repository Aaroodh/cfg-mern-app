import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_38lps6k', 'template_f6wu2kq', form.current, 'nSSDPzU1sRYJ7pMC7')
            .then((result) => {
                alert(result.text);
            }, (error) => {
                alert("Check the form again and fill the details as required");;
            });
    };

    return (<div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: "25px" }}>
                    <div className="card-body p-md-5">
                        <div className="row justify-content-center">
                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                <form ref={form} onSubmit={sendEmail} >
                                    <label className="form-label" htmlFor="form3Example1c" style={{ marginRight: 3 }}>Name</label>
                                    <input type="text" name="to_name" />
                                    <hr></hr>

                                    <label style={{ marginRight: 10 }} className="form-label" htmlFor="form3Example1c">Email</label>
                                    <input type="email" name="to_mail" />
                                    <hr></hr>

                                    <label style={{ marginRight: 10, position: "relative" }} className="form-label" htmlFor="form3Example1c">Message</label>
                                    <textarea name="message" />
                                    <hr></hr>

                                    <input type="submit" value="Send" />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    );
};

export default ContactUs;