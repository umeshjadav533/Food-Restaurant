import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email,setemail] = useState("");
    const [pass,setpass] = useState("");
    const [isLoggdIn,setIsLoggedIn] = useState(false);
    const navigate = useNavigate();

    useEffect(()=>{
        const storedfoodemail = localStorage.getItem("foodemail");
        const stordfoodpassword = localStorage.getItem("foodpassword");
        if(storedfoodemail && stordfoodpassword){
            setemail(storedfoodemail);
            setpass(stordfoodpassword);
            setIsLoggedIn(true);
        } 
    },[]);

    const handlefoodloginform = (e) => {
        e.preventDefault();
        localStorage.setItem("foodemail",email);
        localStorage.setItem("foodpassword",pass);
        setIsLoggedIn(true);
        alert("Login Succesfully");
        navigate("/home");
    }


    const handlefoodLogout = () => {
        localStorage.removeItem("foodemail");
        localStorage.removeItem("foodpassword");
        setIsLoggedIn(false);
        setemail("");
        setpass("");
    }
    return (
    <section id="login-section">
        {isLoggdIn ? (
            <div  className="text-center mt-4" style={{height:"100vh"}}>
                <p><strong>Email: </strong>{email}</p>
                <p><strong>Password: </strong>{pass}</p>
                <button onClick={handlefoodLogout} className="btn mt-2" id='food-logout-btn'>Logout</button>
            </div>
        ):(
            <form id="login-form" className="mb-3" onSubmit={handlefoodloginform}>
            <div className="form-floating mb-3">
                <input type="email" placeholder="Enter Email" className="form-control" id="emailfield" value={email} onChange={(e)=>setemail(e.target.value)}/>
                <label htmlFor="emailfield">Enter Email</label> 
            </div>
            <div className="form-floating mb-3">
                <input type="password" placeholder="Enter Password" className="form-control" id="passwordfield" value={pass} onChange={(e)=>setpass(e.target.value)}/>
                <label htmlFor="passwordfield">Enter Password</label> 
            </div>
            <button type="submit" className="w-100 border-0 py-3 rounded" id="login-btn">Login</button>
        </form>
        )}
    </section>
    )
}

export default Login;