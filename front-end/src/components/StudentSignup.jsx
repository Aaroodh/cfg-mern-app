
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import axios from "axios"

const StudentSignUP = () => {

    const [user, setUser] = useState({
        name: "",
        age: Number,
        center: "",
        gender: "",
        payment: "",
        feepaid: Number,
        totalfee: Number,
        tel: Number,
        courseEnrolled: "",
        sdate: Date,
        edate: Date,
        scholarship: "",
        courseCertificate: File,
        cname: "",
        jdate: Date,
        location: "",
        designation: "",
        salary: Number,
        email: "",
        password: ""
    });
    function handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        setUser({ ...user, [name]: value });
    }

    const handleClick = async (e) => {
        alert("Successfully Sent")

        e.preventDefault();
        const { name, age, center, tel, sdate, edate, payment, gender, courseEnrolled, courseCertificate, salary, designation, location, jdate, cname, email, password } = user;
        axios.post('http://localhost:4000/api/user/signup', {
            name, age, center, tel, sdate, edate, payment, gender, courseEnrolled, courseCertificate, salary, designation, location, jdate, cname, email, password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                alert("Check the form again and fill the details as required");;
            });

    }


    return (<div><section className="vh-100" style={{ backgroundColor: "#eee" }}>
        <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-lg-12 col-xl-11">
                    <div className="card text-black" style={{ borderRadius: "25px" }}>
                        <div className="card-body p-md-5">
                            <div className="row justify-content-center">
                                <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">

                                    <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Student Details</p>

                                    <form className="mx-1 mx-md-4" onSubmit={handleClick} method="POST">

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example1c">Student Name</label>

                                                <input value={user.name} onChange={handleChange} type="text" name="name" placeholder="Name" id="form3Example1c" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example1c">Student Age </label>

                                                <input value={user.age} placeholder="Age" onChange={handleChange} type="Number" name="age" id="form3Example1c" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example1c">Student Phone Number </label>

                                                <input value={user.tel} placeholder="telephone" onChange={handleChange} type="tel" name="tel" id="form3Example1c" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example1c">Gender</label>
                                                <div class="form-check">
                                                    <label class="form-check-label" htmlFor="flexRadioDefault2">
                                                        Male
                                                    </label>
                                                    <input value="Male" onChange={handleChange} class="form-check-input" type="radio" name="gender" id="flexRadioDefault2" />

                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label" htmlFor="flexRadioDefault2">

                                                        <input value="Female" onChange={handleChange} class="form-check-input" type="radio" name="gender" id="flexRadioDefault2" />
                                                        Female
                                                    </label>
                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label" htmlFor="flexRadioDefault2">
                                                        Others
                                                    </label>
                                                    <input value="Others" onChange={handleChange} class="form-check-input" type="radio" name="gender" id="flexRadioDefault2" />

                                                </div>
                                            </div>
                                        </div>


                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example1c">Center</label>

                                                <div class="form-check">
                                                    <label class="form-check-label" htmlFor="flexRadioDefault1">
                                                        Khar
                                                    </label>
                                                    <input value="Khar" onChange={handleChange} class="form-check-input" type="radio" name="center" id="flexRadioDefault1" />

                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label" htmlFor="flexRadioDefault2">
                                                        Chembur
                                                    </label>
                                                    <input value="Chembur" onChange={handleChange} class="form-check-input" type="radio" name="center" id="flexRadioDefault2" />

                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label" htmlFor="flexRadioDefault1">
                                                        Trombay
                                                    </label>
                                                    <input value="Trombay" onChange={handleChange} class="form-check-input" type="radio" name="center" id="flexRadioDefault1" />

                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label" htmlFor="flexRadioDefault2">
                                                        Nerul
                                                    </label>
                                                    <input value="Nerul" onChange={handleChange} class="form-check-input" type="radio" name="center" id="flexRadioDefault2" />

                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label" htmlFor="flexRadioDefault2">
                                                        Deonar
                                                    </label>
                                                    <input value="Deonar" onChange={handleChange} class="form-check-input" type="radio" name="center" id="flexRadioDefault2" />

                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example1c">Enter Course Enrolled</label>

                                                <input value={user.courseEnrolled} placeholder="course" onChange={handleChange} type="text" name="courseEnrolled" id="form3Example1c" className="form-control" />
                                            </div>
                                            <div class="form-check">
                                                <label class="form-check-label" htmlFor="flexRadioDefault2">
                                                    Paid
                                                </label>
                                                <input value="paid" onChange={handleChange} class="form-check-input" type="radio" name="payment" id="flexRadioDefault2" />

                                            </div>
                                            <div class="form-check">
                                                <label class="form-check-label" htmlFor="flexRadioDefault2">
                                                    Unpaid
                                                </label>
                                                <input value="unpaid" onChange={handleChange} class="form-check-input" type="radio" name="payment" id="flexRadioDefault2" />
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example4c">Total FEE</label>

                                                <input value={user.totalfee} placeholder="Fee" onChange={handleChange} name="totalfee" type="number" id="form3Example4c" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example4c">Fee Paid</label>

                                                <input value={user.feepaid} placeholder="Fee Paid" onChange={handleChange} name="feepaid" type="number" id="form3Example4c" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example1c">Start Date</label>

                                                <input value={user.sdate} placeholder="date" onChange={handleChange} type="date" name="sdate" id="form3Example1c" className="form-control" />
                                            </div>
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example1c">End Date</label>

                                                <input value={user.edate} placeholder="date" onChange={handleChange} type="date" name="edate" id="form3Example1c" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example1c">Course Certificate</label>

                                                <input value={user.courseCertificate} onChange={handleChange} type="file" name="courseCertificate" id="form3Example1c" className="form-control" />
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example1c">Scholarship Status</label>

                                                <div class="form-check">
                                                    <label class="form-check-label" htmlFor="flexRadioDefault1">
                                                        Granted
                                                    </label>
                                                    <input value="granted" onChange={handleChange} class="form-check-input" type="radio" name="scholarship" id="flexRadioDefault1" />

                                                </div>
                                                <div class="form-check">
                                                    <label class="form-check-label" htmlFor="flexRadioDefault2">
                                                        Not Granted
                                                    </label>
                                                    <input value="notgranted" onChange={handleChange} class="form-check-input" type="radio" name="scholarship" id="flexRadioDefault2" />

                                                </div>
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example1c">Employment Details</label>
                                                <br></br>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example1c">Company Name</label>

                                                    <input value={user.cname} placeholder="company name" onChange={handleChange} type="text" name="cname" id="form3Example1c" className="form-control" />
                                                </div> <br></br>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example1c">Company Location</label>

                                                    <input value={user.location} placeholder="Location" onChange={handleChange} type="text" name="location" id="form3Example1c" className="form-control" />
                                                </div> <br></br>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example1c">Designation</label>

                                                    <input value={user.designation} placeholder="Designation" onChange={handleChange} type="text" name="designation" id="form3Example1c" className="form-control" />
                                                </div> <br></br>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example1c">Date of Joining</label>

                                                    <input value={user.jdate} placeholder="date" onChange={handleChange} type="date" name="jdate" id="form3Example1c" className="form-control" />
                                                </div> <br></br>
                                                <div className="form-outline flex-fill mb-0">
                                                    <label className="form-label" htmlFor="form3Example1c">Salary</label>

                                                    <input value={user.salary} placeholder="Salary" onChange={handleChange} type="number" name="salary" id="form3Example1c" className="form-control" />
                                                </div> <br></br>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example1c">Admin Enter Email</label>

                                                <input value={user.email} placeholder="Email" onChange={handleChange} type="email" name="email" id="form3Example1c" className="form-control" />
                                            </div>
                                        </div>

                                        <div className="d-flex flex-row align-items-center mb-4">
                                            <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                                            <div className="form-outline flex-fill mb-0">
                                                <label className="form-label" htmlFor="form3Example4c">Admin Password</label>

                                                <input value={user.password} placeholder="Password" onChange={handleChange} name="password" type="password" id="form3Example4c" className="form-control" />
                                            </div>
                                        </div>



                                        <div className="form-check d-flex justify-content-center mb-5 ">
                                            <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3c" required />
                                            <label className="form-check-label" htmlFor="form2Example3">
                                                I agree all statements in <a href="#!">Terms of service</a>
                                            </label>

                                        </div>

                                        <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                            <button type="submit" className="btn btn-primary btn-lg">Register</button>
                                        </div>

                                    </form>

                                </div>
                                <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">

                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                        className="img-fluid" alt="Sample image" />

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </div >)
}

export default StudentSignUP;





