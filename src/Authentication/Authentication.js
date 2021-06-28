// import React from 'react';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';


toast.configure();

const Authenticattion = () => {
    const History = useHistory("");

    const checkAuth = async () => {
        const token = await localStorage.getItem("token");
        console.log(token);
        
        if (token === null) {
            History.push("/login")
            toast.error("Please login !!", { position: toast.POSITION.TOP_CENTER })
        } else {


            const reqOption = {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    'Authorization': 'Bearer ' + token
                }
            }

            const res = await fetch('/Authenticate', reqOption)


            console.log(res);


            if (res.status === 401 || res.status === 500) {

                History.push("/login")
                toast.error("Please login !!", { position: toast.POSITION.TOP_CENTER })
            }
        }

    }
    checkAuth();

};

export default Authenticattion;