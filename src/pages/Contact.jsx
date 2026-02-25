import React from 'react'
import dataContact from '../data/contactData'
import { data } from 'react-router-dom'
const Contact = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    {dataContact.map(item => (
                        <div key={item.id} className="col-3">
                            <div className="card" style={{ border: "none" }}>
                                <p>{item.title}<br></br><span style={{ fontSize: "12px" }}>{item.description}</span></p>

                            </div>
                        </div>
                    ))}

                </div>
                <hr />
                <div className="row">
                    <div className="col-6 mt-4">
                        <div className="our">
                            <h3>Our Stores</h3>
                            <p>On dekande mydurtad mora även om skurkstat. Semirade timaheten rena.<br></br> Radiogen pasam inte loba även om prerade i garanterad traditionell specialitet till<br></br> bebel. Ev is sönde. Tun gps-väst att epiligt. Diliga tresk dira. Ens biov dijevis.</p>
                        </div>
                        <div className="contact-list d-flex">
                            <div className="contact-list-one">
                                <ul>
                                    <small>United States</small>
                                    <li style={{ fontSize: "18px", fontWeight: "bold" }}>United States</li>
                                    <li>205 Middle Road, 2nd Floor, New York 2485</li>
                                    <li>+02 1234 567 88<br></br>
                                        info@example.com</li>
                                </ul>
                            </div>
                            <div className="contact-list-two">
                                <ul>
                                    <small>United States</small>
                                    <li style={{ fontSize: "18px", fontWeight: "bold" }}>United States</li>
                                    <li>205 Middle Road, 2nd Floor, New York 2485</li>
                                    <li>+02 1234 567 88<br></br>
                                        info@example.com</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 mt-4">
                        <div className="write-us">
                            <h3>Write us...</h3>
                            <p>On dekande mydurtad mora även om skurkstat. Semirade timaheten rena. Radiogen<br></br> pasam inte loba även om prerade i garanterad traditionell specialitet till bebel.</p>
                            <div className="">
                                <form>
                                    <div className="row">
                                        <div className="col-md-5 mb-3">
                                            <label htmlFor="name" className="form-label">Your name *</label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="name"
                                                placeholder=""
                                                required
                                            />
                                        </div>

                                        <div className="col-md-5 mb-3">
                                            <label htmlFor="email" className="form-label">Your email *</label>
                                            <input
                                                type="email"
                                                className="form-control"
                                                id="email"
                                                placeholder=""
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="mb-3 col-md-11">
                                        <label htmlFor="subject" className="form-label">Subject *</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="subject"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3 col-md-11">
                                        <label htmlFor="message" className="form-label">Your message</label>
                                        <textarea
                                            className="form-control"
                                            id="message"
                                            rows="5"
                                        ></textarea>
                                    </div>

                                    <button className='mt-3' type="submit">Send Message</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact