import React from 'react';

type Props = {
    setLoginRequest: (loginRequest: boolean) => void;
    setRegisterRequest: (registerRequest: boolean) => void;
};

const Register = ({setLoginRequest, setRegisterRequest}: Props) => {
    return (
    <>
        <button className = "fixed bg-black bg-opacity-50 inset-0" onClick={() => setRegisterRequest(false)}> </button>

        <div>
            <div className = "absolute inset-[50%] translate-x-[-50%] translate-y-[-50%] bg-jet h-2/4 w-1/4 grid place-items-center text-cream border rounded-xl">
                <p className= "text-7xl text-cream">Register</p>
                <form>
                    <input className= "bg-dark-jet rounded-xl border h-12 w-80 mb-[10%] text-center" placeholder="Email"></input><br/>
                    <input className= "bg-dark-jet rounded-xl border h-12 w-80 mb-[10%] text-center" placeholder="Username"></input><br/>
                    <input className= "bg-dark-jet rounded-xl border h-12 w-80 text-center" placeholder="Password"></input>
                </form>
                <button className="button-blue h-12 w-40" onClick={() => {setRegisterRequest(false); setLoginRequest(true);}}> Register </button>
                <p>Already have an accout? <button className="text-red" onClick={() => {setLoginRequest(true); setRegisterRequest(false);}}>Login</button></p>
            </div>
        </div>
    </>
    )
}

export default Register;