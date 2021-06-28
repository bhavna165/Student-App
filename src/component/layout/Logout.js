import React from 'react';
import { useHistory } from "react-router-dom";
import { toast } from 'react-toastify';


toast.configure()

const Logout = () => {
    const History = useHistory("");

    localStorage.removeItem("token");
    toast.success("Logout succesfully",{ position: toast.POSITION.TOP_CENTER })
    History.push("/")


    return (
        <div>
         logout  
        </div>
    );
};

export default Logout;