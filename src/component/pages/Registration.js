// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";
// // import './Registration.css'
// // import OtpInput from "react-otp-input";

// //import Navbar from "./Navbar";
// const Registeration = () => {



//     const Register = (event) => {
//         event.preventDefault();
//         alert("Successfully registered in :");
//     };

//     return (
//         <>

//             <section id="reg">

//                 <div className="box container h-100">

//                     <div className=" row h-100">
//                         <div className=" start col-lg-6 offset-lg-3 valign-center">
//                             <div className="w-100">
//                                 <div className="  start1 login p-5 text-center">
//                                     <h1 className="heading  medium-heading">Register now!</h1>

//                                     <p className=" para pt-2"></p>
//                                     <form className="form-horizontal pt-5" role="form" onSubmit={Register} >

//                                         <div className="form-element">
//                                             <div className="form-group position-relative">
//                                                 <label className=" lab input-label" htmlFor="name">first Name</label>
//                                                 <input
//                                                     type="text"
//                                                     name="name"
//                                                     className="form-control form-control-lg"
//                                                     id="name"
//                                                     placeholder=""
//                                                     required />
//                                             </div>

//                                         </div>
//                                         <div className="mt form-element">
//                                             <div className="form-group position-relative">
//                                                 <label className=" lab input-label" htmlFor="name">Last Name</label>
//                                                 <input
//                                                     type="text"
//                                                     name="name"
//                                                     className="form-control form-control-lg"
//                                                     id="name"
//                                                     placeholder=""
//                                                     required />
//                                             </div>

//                                         </div>

//                                         <div className=" mt form-element">
//                                             <div className=" nob form-group position-relative">
//                                                 <label className=" lab input-label" htmlFor="email">Father's Name</label>
//                                                 <input
//                                                     type="text"
//                                                     name="text"
//                                                     className="form-control form-control-lg"
//                                                     id="email"
//                                                     placeholder=""
//                                                     required />
//                                             </div>
//                                         </div>
//                                         <div className=" mt form-element">
//                                             <div className="form-group position-relative ">
//                                                 <label className=" lab input-label" htmlFor="name" >Streams</label>
//                                                 <select
//                                                     className="form-control form-control-lg"
//                                                     id="name"
//                                                     type="text"
//                                                     name="text"
//                                                     placeholder=""
//                                                     required>
//                                                     <option>Maths</option>
//                                                     <option>Science</option>
//                                                     <option>Arts</option>
//                                                     <option>Commerce</option>

//                                                 </select>
//                                             </div>
//                                         </div>
//                                         <div className=" mt form-element">
//                                             <div className="form-group position-relative">
//                                                 <label className=" lab input-label" htmlFor="name">Village
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     name="text"
//                                                     className="form-control form-control-lg"
//                                                     id="email"
//                                                     placeholder=""
//                                                     required />
//                                             </div>
//                                         </div>
//                                         <div className=" mt form-element">
//                                             <div className="form-group position-relative">
//                                                 <label className=" lab input-label" htmlFor="name">Town Name
//                                                 </label>
//                                                 <input
//                                                     type="text"
//                                                     name="text"
//                                                     className="form-control form-control-lg"
//                                                     id="email"
//                                                     placeholder=""
//                                                     required />
//                                             </div>
//                                         </div>

//                                         {/* <div className=" mt form-element">
//                                             <div className="form-group position-relative">
//                                                 <label className=" lab input-label" htmlFor="Phoneno">Phone Number</label>

//                                                 <input
//                                                     type="tel"
//                                                     name="telephone"
//                                                     className="form-control form-control-lg"
//                                                     id="Phoneno"
//                                                     placeholder=""
//                                                     required />
//                                             </div>
//                                         </div> */}
//                                         <div className="text-center pt-3">
//                                                     <button type="submit" className="button btn btn-lg">Register</button>
//                                                 </div>
//                                     </form>


//                                 </div>
//                                         <div className=" last pt-1">Already have an account? <NavLink to="/Login">Login</NavLink></div>

//                             </div>
//                                 </div>
//                             </div>
//                         </div>
//             </section>

//         </>
//                 );
// };

//                 export default Registeration;
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
// import './Registration.css'
import { toast } from 'react-toastify';

toast.configure();

// import OtpInput from "react-otp-input";

//import Navbar from "./Navbar";
const Registeration = () => {
    const History = useHistory("");
    const [updateValue, currentState] = useState({
        firstName: "",
        lastName: "",
        fatherFirstName: "",
        mobileNumber: "",
        schoolStream: "",
        villageName: "",
        gender: "",
        townName: "",
        otp: ""
    });


    const [button, setButton] = useState('');

    const inputEvent = (event) => {
        const { value, name } = event.target;

        currentState((preValue) => {
            console.log(preValue);
            return {
                ...preValue,
                [name]: value,
            };
        });
    };






    const Register = async (event) => {
        let loader = document.getElementById("loader");
        loader.style.display = "flex";
        event.preventDefault();
        console.log(updateValue);
        const { firstName, lastName, fatherFirstName, mobileNumber, schoolStream, villageName, townName, gender, otp } = updateValue;
        const reqOption = {
            method: 'POST',
            headers: { "Content-Type": "application/json", },
            body: JSON.stringify({
                firstName, lastName, fatherFirstName, mobileNumber, schoolStream, villageName, townName, gender, otp
            })
        }

        const res = await fetch('/register', reqOption)


        console.log(res);
        if (res) {
            loader.style.display = "none";
        }
        if (res.status === 201 || res.status === 200) {
            const resData = await res.json();
            let token = resData.token;
            localStorage.setItem("token", token);
            console.log(resData.token);
            console.log(token);
            toast.success("Wellcome To SSISM", { position: toast.POSITION.TOP_CENTER });
            History.push("/PesonalInfo");

        } else if (res.status === 400) {
            toast.error("Please enter correct OTP", { position: toast.POSITION.TOP_CENTER });

        } else if (res.status === 500) {
            toast.error("Internal server error", { position: toast.POSITION.TOP_CENTER });

        } else {
            toast.error("Internal server error", { position: toast.POSITION.TOP_CENTER });

        }


    };




    const getOtp = async (event) => {
        let loader = document.getElementById("loader");
        loader.style.display = "flex";
        event.preventDefault();
        if (updateValue.mobileNumber.length === 10) {
            console.log(updateValue.mobileNumber);
            // alert("Sending otp");
            event.preventDefault();
            const reqOption = {
                method: 'POST',
                headers: { "Content-Type": "application/json", },
                body: JSON.stringify({
                    mobileNumber: updateValue.mobileNumber
                })
            }

            const res = await fetch('/getotp', reqOption)


            console.log(res);
            if (res) {
                loader.style.display = "none";
            }



            if (res.status === 200) {
                toast("enter otp", { position: toast.POSITION.TOP_CENTER });
                //   window.alert("enter otp");
                //   console.log('otp send ');


                setButton(<><div className=" mt form-element">
                    <div className="form-group position-relative">
                        <label className=" lab input-label" htmlFor="otp">OTP
                        </label>
                        <input
                            type="text"
                            name="otp"
                            className="form-control form-control-lg"
                            id="name"
                            placeholder="Please enter OTP"
                            minLength="6"
                            maxLength="6"
                            onChange={inputEvent}
                            // value={updateValue.otp}
                            required
                        />
                    </div>
                </div>
                    <div className="text-center pt-3">
                        <button type="submit" className="button btn btn-lg">Register</button>
                    </div>
                </>)



            } else if (res.status === 208) {

                toast.error("user already register !", {
                    position: toast.POSITION.TOP_CENTER
                });
                toast.error("Please login !", {
                    position: toast.POSITION.TOP_CENTER
                });
                History.push("/login");
            } else if (res.status === 500) {
                toast.error("Internal server error !", {
                    position: toast.POSITION.TOP_CENTER
                });

            } else {

                toast.error("Something error !", {
                    position: toast.POSITION.TOP_CENTER
                });
            }

        } else {
            toast.error("Please fill mobile number !", {
                position: toast.POSITION.TOP_CENTER
            });
            loader.style.display = "none";

        }



    }
    // Validtaion
    const [values, setValues] = useState({
        firstName: '',
        lastName: '',
        fatherFirstName: '',
        villageName: '',
        townName: ''

    });
    const [errors, setErrors] = useState({});

    //condition for fields
    //   firstName
    //   const errors = {};
    if (!values.firstName.trim()) {
        errors.firstName = 'fistName required';
    }
    else if (!/^[A-Za-z]+/.test(values.name.trim())) {
        errors.firstName = 'Enter a valid name';
    }

    //   lastName

    if (!values.lastName.trim()) {
        errors.lastName = 'lastName required';
    }
    else if (!/^[A-Za-z]+/.test(values.name.trim())) {
        errors.lastName = 'Enter a valid lastname';
    }

    //   fatherFirstName
    if (!values.fatherFirstName.trim()) {
        errors.fatherFirstName = 'fath required';
    }
    else if (!/^[A-Za-z]+/.test(values.name.trim())) {
        errors.fatherFirstName = 'Enter a valid father name';
    }

    //   villageName
    if (!values.villageName.trim()) {
        errors.villageName = 'village name required';
    }
    else if (!/^[A-Za-z]+/.test(values.name.trim())) {
        errors.villageName = 'Enter a valid village name';
    }

    //   townName
    if (!values.townName.trim()) {
        errors.townName = 'tehsil required';
    }
    else if (!/^[A-Za-z]+/.test(values.name.trim())) {
        errors.townName = 'Enter a valid tehsil';
    }

    return (

        <div>
            <section id="reg">

                <div className="box container h-100">

                    <div className=" row h-100">
                        <div className=" start col-lg-6 offset-lg-3 valign-center">
                            <div className="w-100">
                                <div className="  start1 login p-5 text-center">
                                    <h1 className="heading  medium-heading">Register now!</h1>

                                    <p className=" para pt-2"></p>
                                    <form className="form-horizontal pt-5" role="form" onSubmit={Register} >

                                        <div className="form-element">
                                            <div className="form-group position-relative">
                                                <label className=" lab input-label" htmlFor="name">first Name</label>
                                                <input
                                                    type="text"
                                                    name="firstName"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    placeholder=""
                                                    required
                                                    onChange={inputEvent}
                                                    value={values.firstName}
                                                    value={updateValue.firstName}
                                                />
                                                {errors.firstName && <p>{errors.firstName}</p>}


                                            </div>

                                        </div>
                                        <div className="mt form-element">
                                            <div className="form-group position-relative">
                                                <label className=" lab input-label" htmlFor="name">Last Name</label>
                                                <input
                                                    type="text"
                                                    name="lastName"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    placeholder=""
                                                    required
                                                    onChange={inputEvent}
                                                    value={values.firstName}
                                                    value={updateValue.lastName}
                                                />
                                                {errors.lastName && <p>{errors.lastName}</p>}

                                            </div>

                                        </div>
                                        <div className="mt form-element">
                                            <div className="form-group position-relative">
                                                {/* <label className=" lab input-label" htmlFor="name">Gender</label> */}
                                                {/* <input
                                                    type="text"
                                                    name="lastName"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    placeholder=""
                                                    required
                                                    onChange={inputEvent}
                                                    value={values.firstName}
                                                    value={updateValue.lastName}
                                                /> */}

                                                {/* {errors.lastName && <p>{errors.lastName}</p>} */}
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="gender" id="inlineRadio1" value="male" onChange={inputEvent} required />
                                                    <label class="form-check-label" for="inlineRadio1">Male</label>
                                                </div>
                                                <div class="form-check form-check-inline">
                                                    <input class="form-check-input" type="radio" name="gender" id="inlineRadio2" value="female" onChange={inputEvent} required />
                                                    <label class="form-check-label" for="inlineRadio2">Female</label>
                                                </div>
                                            </div>

                                        </div>



                                        <div className=" mt form-element">
                                            <div className=" nob form-group position-relative">
                                                <label className=" lab input-label" htmlFor="name">Father's Name</label>
                                                <input
                                                    type="text"
                                                    name="fatherFirstName"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    placeholder=""
                                                    required
                                                    onChange={inputEvent}
                                                    value={values.firstName}
                                                    value={updateValue.fatherFirstName}
                                                />
                                                {errors.fatherFirstName && <p>{errors.fatherFirstName}</p>}

                                            </div>
                                        </div>
                                        <div className=" mt form-element">
                                            <div className="form-group position-relative ">
                                                <label className=" lab input-label" htmlFor="name" >Stream</label>
                                                <select
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    type="text"
                                                    name="schoolStream"
                                                    placeholder=""
                                                    required
                                                    onChange={inputEvent}
                                                    value={updateValue.schoolStream}
                                                >

                                                    <option>select your branch</option>
                                                    <option>Maths</option>
                                                    <option>Science</option>
                                                    <option>Arts</option>
                                                    <option>Commerce</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className=" mt form-element">
                                            <div className="form-group position-relative">
                                                <label className=" lab input-label" htmlFor="name">Village
                                                </label>
                                                <input
                                                    type="text"
                                                    name="villageName"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    placeholder=""
                                                    required
                                                    onChange={inputEvent}
                                                    value={values.villageName}
                                                    value={updateValue.villageName}
                                                />
                                                {errors.villageName && <p>{errors.villageName}</p>}

                                            </div>
                                        </div>
                                        <div className=" mt form-element">
                                            <div className="form-group position-relative">
                                                <label className=" lab input-label" htmlFor="name">Town Name
                                                </label>
                                                <input
                                                    type="text"
                                                    name="townName"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    placeholder=""
                                                    required
                                                    onChange={inputEvent}
                                                    value={values.townName}
                                                    value={updateValue.townName}
                                                />
                                                {errors.townName && <p>{errors.townName}</p>}

                                            </div>
                                        </div>

                                        <div className=" mt form-element">
                                            <div className="form-group position-relative">
                                                <div className="d-flex ">
                                                    <label className=" lab input-label" htmlFor="Phoneno">Phone Number</label>

                                                    <input
                                                        type="tel"
                                                        // type="number"
                                                        name="mobileNumber"
                                                        className="form-control form-control-lg"
                                                        id="Phoneno"
                                                        placeholder=""
                                                        minLength="10"
                                                        maxLength="10"

                                                        required
                                                        onChange={inputEvent}
                                                        value={updateValue.mobileNumber}
                                                    />
                                                    <span> <button id="otpbtn" type="button" className="btn btn-warning p-3" onClick={getOtp}>Get Otp</button> </span>
                                                </div>
                                            </div>
                                        </div>
                                        {button}

                                    </form>


                                </div>
                                <div className=" last pt-1">Already have an account? <NavLink to="/Login">Login</NavLink></div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Registeration;