import React, { useState } from "react";
import "../assets/styles/modal.css"
import { useEffect } from "react";

function Modal({setModalOpen}) {

    const [authMode, setAuthMode] = useState("Sign Up");

    useEffect(()=>{
        document.body.style.overflow = "hidden";

        return ()=>{
            document.body.style.overflow ="unset";
        };
    }, []);

    return (
        <div className="modal-container" onClick={()=>setModalOpen(false)}>
            <form onClick={(e)=>e.stopPropagation()}>
                <div className="modal-title">
                    <h2>{authMode}</h2>
                    <span onClick={()=>setModalOpen(false)}>&times;</span>
                </div>
                <div className="modal-input">
                    {authMode === "Login" ? <></> : <input type="text" placeholder="Full Name" required />}
                    <input type="email" placeholder="Email Address" required />
                    <input type="password" placeholder="Password" required />
                </div>
                <button>{authMode === "Sign Up" ? "Create account" : "Log in"}</button>
                <div className="modal-condition">
                    <input type="checkbox" required />
                    <p>By continuing, i agree to the terms of use & privacy policy.</p>
                </div>
                {authMode === "Login" ? <p>Create a new account? <span onClick={()=>setAuthMode("Sign Up")}>Click here</span></p>
                : <p>Already have an account? <span onClick={()=>setAuthMode("Login")}>Login here</span></p>}

            </form>
        </div>
    )
}

export default Modal;