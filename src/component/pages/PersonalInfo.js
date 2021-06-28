import React, { useEffect, useState } from 'react';
import Authenticattion from '../../Authentication/Authentication';
import {  useHistory } from "react-router-dom";
// import {Formik} from 'formik'
import { toast } from 'react-toastify';

toast.configure();




const PersonalInfo = () => {
    // validation
    // useEffect(Authenticattion(),[]);
    Authenticattion();
    // const useMountEffect = (fun) => useEffect(fun, [])

    // useMountEffect( Authenticattion());

    const History = useHistory("");

    const [updateValue, currentState] = useState({
        collageStream: "",
        aadharNumber: "",
        schoolName: "",
        tenthPercentage: "",
        eleventhPercentage: "",
        twelthPercentage: "",
        casteCategory: "",
        fatherAnnualIncome: "",

    });
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


    const updatePersonalInfo = async (event) => {
        let loader = document.getElementById("loader");
        loader.style.display = "flex";
        event.preventDefault();
        const { collageStream, aadharNumber, schoolName, tenthPercentage, eleventhPercentage, twelthPercentage, casteCategory, fatherAnnualIncome } = updateValue;
        const token = await localStorage.getItem("token");
        const reqOption = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token
            }, body: JSON.stringify({
                collageStream, aadharNumber, schoolName, tenthPercentage, eleventhPercentage, twelthPercentage, casteCategory, fatherAnnualIncome
            })
        }

        const res = await fetch('/personal-information', reqOption)


        console.log(res);
        if (res) {
            loader.style.display = "none"
        }
        if(res.status === 200){
            toast.success("Profile Update successfully", { position: toast.POSITION.TOP_CENTER });
           History.push("/Payment");

        }else if(res.status === 500){

            toast.error("Internal server error", { position: toast.POSITION.TOP_CENTER });

        }else{
            toast.error("Internal server error", { position: toast.POSITION.TOP_CENTER });

        }

        console.log(updateValue);
    }












    return (
        <>

            <section id="reg">

                <div className="box container h-100">

                    <div className=" row h-100">
                        <div className=" start col-lg-6 offset-lg-3 valign-center">
                            <div className="w-100">
                                <div className="  start1 login p-5 text-center">
                                    <h1 className="heading  medium-heading">Personal Information !</h1>

                                    <p className=" para pt-2"></p>
                                    <form className="form-horizontal pt-5" role="form" onSubmit={updatePersonalInfo}  >

                                        <div className="form-element">
                                            <div className="form-group position-relative">
                                                <label className=" lab input-label" htmlFor="name">Interested Graduation Stream</label>
                                                <select
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    type="text"
                                                    name="collageStream"
                                                    placeholder=""
                                                    required
                                                    onChange={inputEvent}
                                                    value={updateValue.collageStream}

                                                >
                                                    <option>select your branch</option>
                                                    <option>BBA</option>
                                                    <option>BA</option>
                                                    <option>BCA</option>
                                                    <option>B.SC(Computer Science)</option>
                                                    <option>B.SC(Biotechnology)</option>
                                                    <option>B.SC(Microbiology)</option>
                                                    <option>B.SC(SeedTechnology)</option>
                                                    <option>B.com</option>

                                                </select>
                                            </div>


                                        </div>
                                        <div className="mt form-element">
                                            <div className="form-group position-relative">
                                                <label className=" lab input-label" htmlFor="number">Aadhar Number</label>

                                                <input
                                                    type="tel"
                                                    name="aadharNumber"
                                                    // pattern="[0-9]"
                                                    maxLength="12"
                                                    minLength="12"
                                                    inputMode="numerice"
                                                    className="form-control form-control-lg"
                                                    id="number"
                                                    placeholder=""
                                                    required
                                                    onChange={inputEvent}
                                                    value={updateValue.aadharNumber}

                                                />

                                            </div>

                                        </div>

                                        <div className=" mt form-element">
                                            <div className=" nob form-group position-relative">
                                                <label className=" lab input-label" htmlFor="name">School Name</label>
                                                <input
                                                    type="text"
                                                    name="schoolName"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    placeholder=""
                                                    required
                                                    onChange={inputEvent}
                                                    value={updateValue.schoolName}

                                                />

                                            </div>
                                        </div>
                                        <div className=" mt form-element">
                                            <div className="form-group position-relative ">
                                                <label className=" lab input-label" htmlFor="number" >10th Percentage</label>
                                                <input
                                                    type="text" min="0" max="1" step="0.01"
                                                    className="form-control form-control-lg"
                                                    id="number"

                                                    name="tenthPercentage"
                                                    placeholder=""
                                                    required
                                                    onChange={inputEvent}
                                                    value={updateValue.tenthPercentage}

                                                />

                                            </div>
                                        </div>
                                        <div className=" mt form-element">
                                            <div className="form-group position-relative">
                                                <label className=" lab input-label" htmlFor="number">11th Percentage</label>

                                                <input
                                                    type="text" min="0" max="1" step="0.01"
                                                    className="form-control form-control-lg"
                                                    id="number"

                                                    name="eleventhPercentage"
                                                    placeholder=""
                                                    required
                                                    onChange={inputEvent}
                                                    value={updateValue.eleventhPercentage}

                                                />

                                            </div>
                                        </div>
                                        <div className=" mt form-element">
                                            <div className="form-group position-relative">
                                                <label className=" lab input-label" htmlFor="12th%">12th Percentage</label>

                                                <input
                                                    type="text" min="0" max="1" step="0.01"
                                                    className="form-control form-control-lg"
                                                    id="number"

                                                    name="twelthPercentage"
                                                    placeholder=""
                                                    required
                                                    onChange={inputEvent}
                                                    value={updateValue.twelthPercentage}


                                                />

                                            </div>
                                        </div>

                                        <div className=" mt form-element">
                                            <div className="form-group position-relative">
                                                <div className="d-flex ">
                                                    <label className=" lab input-label" htmlFor="name">Category
                                                    </label>
                                                    <select
                                                        className="form-control form-control-lg"
                                                        id="name"
                                                        type="text"
                                                        name="casteCategory"
                                                        placeholder=""
                                                        required
                                                        onChange={inputEvent}
                                                        value={updateValue.casteCategory}

                                                    >
                                                        <option>select your Category </option>
                                                        <option>OBC</option>
                                                        <option>SC</option>
                                                        <option>ST</option>
                                                        <option>General</option>


                                                    </select>

                                                </div>
                                            </div>
                                        </div>
                                        <div className=" mt form-element">
                                            <div className="form-group position-relative">
                                                <label className=" lab input-label" htmlFor="number">Fathers Annual Income
                                                </label>

                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    id="number"

                                                    name="fatherAnnualIncome"
                                                    placeholder=""
                                                    required
                                                    onChange={inputEvent}
                                                    value={updateValue.fatherAnnualIncome}

                                                />

                                            </div>
                                        </div>
                                        <div className="text-center pt-3">
                                            <button type="submit" className="button btn btn-lg">Submit</button>
                                        </div>

                                    </form>


                                </div>
                                {/* <div className=" last pt-1">Already have an account? <NavLink to="/Login">Login</NavLink></div> */}

                            </div>
                        </div>
                    </div>
                </div>
            </section>




        </>
    )
}
export default PersonalInfo;