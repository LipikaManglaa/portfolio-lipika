import React, { useState } from 'react'
import './../styles/Contact.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import Layout from '../layout/Layout'
import { toast } from 'react-toastify'
export default function Contact() {


    const [data, setData] = useState({
        name: "",
        email: "",
        password: "",
        mobile: "",
        message: ""
    })

    let InputData = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })
    }

    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    let handleSubmit = ((e) => {
        e.preventDefault()

        if (e.target.name.value == "") {
            toast.error("name is required", { autoClose: 1000 })
        } else if (e.target.mobile.value == "") {
            toast.error("phone numbersould be 10 digits ", { autoClose: 1000 })
        }

        else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(e.target.email.value)) {
            toast.error('invalid email address')
        }
        else if (e.target.message.value == "") {
            toast.error("message is required", { autoClose: 1000 })
        }
        else if (e.target.password.value == "") {
            toast.error("password is required", { autoClose: 1000 })
        }
        else {
            fetch(`http://localhost:3000/users`, {
                method: "POST",
                headers: {
                    "Content-Type": "Application/json"
                },
                body: JSON.stringify(data)
            }).then(() => {
                toast.success("Thank you for enquiry!", { autoClose: 1000 })
            })
        }

        setData({
            name: "",
            email: "",
            password: "",
            mobile: "",
            message: ""
        })
    })

    return (
        <>
            <Layout>


                <section>
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12 p-3">
                                    <div className="text-center ">
                                        <h2 className="fs-35 fw-600 hcolor pt-3">Get In Touch</h2>
                                        <p className="fs-14 pcolor py-3">To request a quote, contact us directly or fill out the form and we will get back to you promptly.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4 col-12 p-3">
                                    <div className="contact-info rounded d-flex justify-content-center align-items-center py-3"  style={{background:'red'}}>
                                        <div className="social-icon  fs-22 text-white fs-30 d-flex justify-content-center align-items-center">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <div className="ms-4 pe-2">
                                            <h5 className="hcolor fw-800">Email</h5>
                                            <p className="text-white fs-14  mb-0">
                                                lipika.mangla.web@gmail.com
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 p-3">
                                    <div className="contact-info rounded d-flex justify-content-center align-items-center py-3">
                                        <div className="social-icon ms-3 fs-22 text-white fs-30 d-flex justify-content-center align-items-center">
                                            <FontAwesomeIcon icon={faEnvelope} />
                                        </div>
                                        <div className="ms-4 pe-2">
                                            <h5 className="hcolor fw-800">Address</h5>
                                            <p className="text-white fs-14  mb-0">
                                                Melbourne,Vic,3000
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-12 p-3">
                                    <div className="contact-info rounded d-flex justify-content-center align-items-center py-3">
                                        <div className="social-icon  fs-22 text-white fs-30 d-flex justify-content-center align-items-center">
                                            <FontAwesomeIcon icon={faPhone} />
                                        </div>
                                        <div className="ms-4">
                                            <h5 className="hcolor fw-800">Phone</h5>
                                            <p className="text-white fs-14  mb-0">
                                                0425652303
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="container-fluid">
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-lg-6 col-12 p-3">
                                <div className="mb-5 mb-lg-0">
                                    <h2 className="hcolor fs-26 text-capitalize mb-20">Find us on Map</h2>
                                    <div className="p-2 rounded">

                                        <iframe className="rounded" width="100%" height="440px" src='https://www.google.com/maps/d/embed?mid=1IGK9HyngCQgny869e7_1QT5r2Co&hl=en&ehbc=2E312F' title="
                                Learning Point Jind,126102" aria-label="Learning Point Jind,126102"></iframe>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-12 p-3 mt-3">
                                <div className="contact-form position-relative rounded p-3">
                                    <span>Write to Us!</span>
                                    <div className="spanborder"></div>
                                    <h3 className="hcolor fs-22 text-capitalize fw-900 ">Have A Question?</h3>
                                    <form onSubmit={handleSubmit}>
                                        <div className="row g-3">
                                            <div className="col-md-6">
                                                <label for="your-name" className="form-label">Your Name</label>
                                                <input value={data.name} onChange={InputData} type="text" className="form-control" name="name" />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="your-surname" className="form-label">Your Phone</label>
                                                <input value={data.mobile} onChange={InputData} type="number" className="form-control" name="mobile" />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="your-surname" className="form-label">Your Email</label>
                                                <input value={data.email} onChange={InputData} type="email" className="form-control" name="email" />
                                            </div>
                                            <div className="col-md-6">
                                                <label for="your-subject" className="form-label">Password</label>
                                                <input value={data.password} onChange={InputData} type="text" className="form-control" name="password" />
                                            </div>
                                            <div className="col-12">
                                                <label for="your-message" class="form-label">Your Message</label>
                                                <textarea class="form-control" id="your-message" name="message" rows="5" value={data.message} onChange={InputData} />
                                            </div>
                                            <div className="col-12">
                                                <div className="row">
                                                    <div className="col-md-6">
                                                        <button type="submit" className="btn cform-btn w-100 fw-bold" >
                                                            Send
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
