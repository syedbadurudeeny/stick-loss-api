import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { isUserAuthenticated, logoutUser } from "./Auth";

function Home(){

    const userDetails = JSON.parse(localStorage.getItem('userData'));
    const token = localStorage.getItem('userToken')
    console.log(token)
    const navigate = useNavigate()

    function handleClick(){
        logoutUser()
        navigate('/login')
    }
    
    return(
        <>
         <main className="home-page">
        {/* <h1>Home Component</h1> */}
        <div className="home-dash">
        <section className="content-edu ">
                <h2>Stocks Prevention</h2>
            </section>
            <section className="nav-edu">
            <ul className="nav-links">
        {isUserAuthenticated() ? <li><Link to={'/'} className="admin">Home</Link></li> : null}
        {isUserAuthenticated() ? <li><Link to={'/dashboard'} className="admin">Dashboard</Link></li> :null}
        {isUserAuthenticated() ? <li><Link to={'/stocks/analyze'} className="admin">Stocks</Link></li> :null}
        {!isUserAuthenticated() ? <li><Link to={'/register'} className="admin">Register</Link></li> : null}
        {!isUserAuthenticated() ? <li><Link to={'/login'} className="admin">Login</Link></li> : null}
        {isUserAuthenticated() ? <li><a href="#" className="logout" onClick={handleClick} class="admin">Logout</a></li> : null}
            </ul>
            </section>
        </div>
        <br/>

        <section className="user-details">
            <h3>{`Name : ${userDetails.username}`}</h3>
            <h3>{`Email : ${userDetails.email}`}</h3>
            {isUserAuthenticated() ? <h3>{`Token : ${token.slice(0,36)}`}</h3> :null}
        </section>
       
        
        </main>
        </>
    )
}

export default Home