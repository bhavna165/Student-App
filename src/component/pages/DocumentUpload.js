import React, { useState } from "react";
// import React from 'react';
import Authenticattion from '../../Authentication/Authentication';
// import { NavLink, useHistory } from "react-router-dom";
// import './Registration.css'

import { toast } from 'react-toastify';

toast.configure();


const DocumentUpload = () => {


    Authenticattion();




    // const History = useHistory("");
    const [updateValue, currentState] = useState({});
    const [imageValue, imagetState] = useState({
        // tenthMarksheet:"0"
        // , twelthMarksheet:"0"
        // , incomeCertificate:"0"
        // , castCertificate:"0"
        // , domicileCertificate:"0"
        // , tcCopy:"0"
        // , passportPhoto:"0"
        // , aadharCard:"0"
        // , BankPassBook:"0"
        // , houseFrontPhotoWithFamily:"0"
        // // , otherCertificate:"0",
    });

    const [img, setimg] = useState("");
    //  let img;
    const createBase64Image = async (file) => {
        const reader = new FileReader();
        return new Promise(function (resolve, reject) {
            reader.onload = function (event) {
                resolve(event.target.result)
            }
            reader.readAsDataURL(file);
        })
    }


    const inputEvent = async (event) => {

        if (event.target.value != "") {


            if (event.target.files[0].size > 150000) {
                alert("File is too big!");
                event.target.value = null;
                return false
            } else {
                let { value, name } = event.target;
                setimg(await createBase64Image(event.target.files[0]));
                let base64 = await createBase64Image(event.target.files[0]);
                // console.log(event.target.result);
                // console.log(name);


                currentState((preValue) => {
                    // console.log(preValue);
                    return {
                        ...preValue,
                        [name]: value,
                    };
                });

                imagetState((imageValue) => {

                    return {
                        ...imageValue,
                        [name]: base64,
                    };

                })
                console.log(imageValue);
            }
        }
    };














    const Upload = async (e) => {
        let loader = document.getElementById("loader");
        loader.style.display = "flex";
        e.preventDefault();
        console.log(updateValue)
        console.log(imageValue)
        console.log("Upload");

        const token = await localStorage.getItem("token");

        const {
            tenthMarksheet
            , twelthMarksheet
            , incomeCertificate
            , castCertificate
            , domicileCertificate
            , tcCopy
            , passportPhoto
            , aadharCard
            , BankPassBook
            , houseFrontPhotoWithFamily
            , otherCertificate
        } = imageValue
        const reqOption = {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                'Authorization': 'Bearer ' + token,
            },

            body: JSON.stringify({

                // tenthMarksheet: imageValue.tenthMarksheet,
                // twelthMarksheet: imageValue.twelthMarksheet
                tenthMarksheet
                , twelthMarksheet
                , incomeCertificate
                , castCertificate
                , domicileCertificate
                , tcCopy
                , passportPhoto
                , aadharCard
                , BankPassBook
                , houseFrontPhotoWithFamily
                , otherCertificate



            })
        }

        const res = await fetch('/document/upload', reqOption)


        console.log(res);
        if (res) {
            loader.style.display = "none"
        }
        if (res.status === 201) {
            toast.success("file upload successfully !", {
                position: toast.POSITION.TOP_CENTER
            });

        } else {
            toast.error("Internal Server Error !", {
                position: toast.POSITION.TOP_CENTER
            });
        }

    }






    return (
        <div>



            <section id="reg">

                <div className="box container h-100">

                    <div className=" row h-100">
                        <div className=" start col-lg-6 offset-lg-3 valign-center">
                            <div className="w-100">
                                <div className="  start1 login p-5 text-center">
                                    <h1 className="heading  medium-heading">Upload Documents!</h1>

                                    <p className=" para pt-2"></p>
                                    <form className="form-horizontal pt-5" role="form" method="POST" onSubmit={Upload} >

                                        <div className="form-element">
                                            <div className="form-group position-relative">
                                                <label className=" lab input-label" htmlFor="name">10TH  Marksheet</label>
                                                <input
                                                    type="file"
                                                    name="tenthMarksheet"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    placeholder=""

                                                    // required
                                                    onChange={inputEvent}
                                                // value={updateValue.firstName} 
                                                />
                                            </div>

                                        </div>
                                        <div className="mt form-element">
                                            <div className="form-group position-relative">
                                                <label className=" lab input-label" htmlFor="name">12TH Marksheet</label>
                                                <input
                                                    type="file"
                                                    name="twelthMarksheet"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    placeholder=""
                                                    // required
                                                    onChange={inputEvent}
                                                // value={updateValue.lastName}
                                                />
                                            </div>

                                        </div>

                                        <div className=" mt form-element">
                                            <div className=" nob form-group position-relative">
                                                <label className=" lab input-label" htmlFor="name">income Certificate</label>
                                                <input
                                                    type="file"
                                                    name="incomeCertificate"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    placeholder=""
                                                    // required
                                                    onChange={inputEvent}
                                                    value={updateValue.fatherFirstName}
                                                />
                                            </div>
                                        </div>

                                        <div className=" mt form-element">
                                            <div className=" nob form-group position-relative">
                                                <label className=" lab input-label" htmlFor="name">cast Certificate</label>
                                                <input
                                                    type="file"
                                                    name="castCertificate"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    placeholder=""
                                                    // required
                                                    onChange={inputEvent}
                                                    value={updateValue.fatherFirstName}
                                                />
                                            </div>
                                        </div>

                                        <div className=" mt form-element">
                                            <div className=" nob form-group position-relative">
                                                <label className=" lab input-label" htmlFor="name">domicile Certificate</label>
                                                <input
                                                    type="file"
                                                    name="domicileCertificate"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    placeholder=""
                                                    // required
                                                    onChange={inputEvent}
                                                    value={updateValue.fatherFirstName}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mt form-element">
                                            <div className=" nob form-group position-relative">
                                                <label className=" lab input-label" htmlFor="name">TC Copy</label>
                                                <input
                                                    type="file"
                                                    name="tcCopy"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    placeholder=""
                                                    // required
                                                    onChange={inputEvent}
                                                    value={updateValue.fatherFirstName}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mt form-element">
                                            <div className=" nob form-group position-relative">
                                                <label className=" lab input-label" htmlFor="name">passport Photo</label>
                                                <input
                                                    type="file"
                                                    name="passportPhoto"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    placeholder=""
                                                    // required
                                                    onChange={inputEvent}
                                                    value={updateValue.fatherFirstName}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mt form-element">
                                            <div className=" nob form-group position-relative">
                                                <label className=" lab input-label" htmlFor="name">aadharCard</label>
                                                <input
                                                    type="file"
                                                    name="aadharCard"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    placeholder=""
                                                    // required
                                                    onChange={inputEvent}
                                                    value={updateValue.fatherFirstName}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mt form-element">
                                            <div className=" nob form-group position-relative">
                                                <label className=" lab input-label" htmlFor="name">Bank PassBook</label>
                                                <input
                                                    type="file"
                                                    name="BankPassBook"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    placeholder=""
                                                    // required
                                                    onChange={inputEvent}
                                                    value={updateValue.fatherFirstName}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mt form-element">
                                            <div className=" nob form-group position-relative">
                                                <label className=" lab input-label" htmlFor="name">house Front Photo With Family</label>
                                                <input
                                                    type="file"
                                                    name="houseFrontPhotoWithFamily"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    placeholder=""
                                                    // required
                                                    onChange={inputEvent}
                                                    value={updateValue.fatherFirstName}
                                                />
                                            </div>
                                        </div>
                                        <div className=" mt form-element">
                                            <div className=" nob form-group position-relative">
                                                <label className=" lab input-label" htmlFor="name">other Certificate</label>
                                                <input
                                                    type="file"
                                                    name="other Certificate"
                                                    className="form-control form-control-lg"
                                                    id="name"
                                                    placeholder=""
                                                    // required
                                                    onChange={inputEvent}
                                                    // value={updateValue.fatherFirstName}
                                                />
                                            </div>
                                        </div>


                                        <div className="text-center pt-3">
                                            <button type="submit" className="button btn btn-lg">Submit Documents</button>
                                        </div>

                                    </form>


                                </div>


                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}




export default DocumentUpload;