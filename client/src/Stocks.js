import React, { useEffect, useState } from "react";
import axios from "axios";
import { isUserAuthenticated } from "./Auth";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "./Auth";

function Stocks(){

    // function uniqueId(){
    //     return Math.floor(Math.random() * 1000000)
    // }
    const navigate = useNavigate();
    function handleLogout(){
        logoutUser()
        navigate('/login')
    }

    const API_KEY = "pk_f6d2da983ea441bf9fba7addf981e91b";

    const [input,setInput] = useState();
    const [stock,setStock]= useState();
    const [fetchedDatas,setFetchedDatas] = useState()

    function handleChange(e){
        const event = e.target.value
        setInput(event)
    }

    function handleClick(){
        setStock(input.toUpperCase())
        setInput("")
    }


    useEffect(()=>{
        async function fetchData(){
            try {
            const url= `https://api.iex.cloud/v1/data/core/minutebar/${stock}?last=4&token=${API_KEY}`
            const response = await axios(url);
            console.log(response.data)
            setFetchedDatas(Object.entries(response.data[0]))
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    },[stock])

    
    return(
        <>
        <main className="stock-page">
        <div className="stock-dash">
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
        {isUserAuthenticated() ? <li><a href="#" className="logout" onClick={handleLogout} class="admin">Logout</a></li> : null}
            </ul>
            </section>
        </div>
        <br/>
            <section className="input-box">
                {/* <label htmlFor="stock">Enter Stocks</label> */}
                <input type="text" name="stocks" className="stocks" id="stocks" placeholder="Enter-Stocks" value={input} 
                onChange={handleChange} />

                <button onClick={handleClick}>Search</button>
            </section>
            <br/>

            <section className="stock-values" style={fetchedDatas ? {border: '2px solid red'} : null}>  

                {
                    fetchedDatas ? 
                    <div className="stock-features">
                        <div className="stock-features-first">
                            <h3>Time</h3>
                            <h3>Average</h3>
                            <h3>Date</h3>
                            <h3>High</h3>
                            <h3>Low</h3>
                            <h3>Market-Average</h3>
                            <h3>Market-Close </h3>
                            <h3>Market-High</h3>
                            <h3>Market-Low</h3>
                            <h3>Market-National</h3>
                            <h3>Market-Number-Of-Trade</h3>
                            <h3>Market-Open</h3>
                            <h3>Market-Volume</h3>
                            <h3>Market-Region</h3>
                            <h3>Market-Symbol  </h3>
                            <h3>id</h3>
                            <h3>key</h3>
                            <h3>Sub-Key</h3>
                        </div>

                        <div className="stock-features-second">
                        <h3>{`${fetchedDatas[0][0]}`}</h3>
                        <h3>{`${fetchedDatas[0][1].average}`}</h3>
                        <h3>{`${fetchedDatas[0][1].date}`}</h3>
                        <h3>{`${fetchedDatas[0][1].high}`}</h3>
                        <h3>{`${fetchedDatas[0][1].low}`}</h3>
                        <h3>{`${fetchedDatas[0][1].marketAverage}`}</h3>
                        <h3>{`${fetchedDatas[0][1].marketClose}`}</h3>
                        <h3>{`${fetchedDatas[0][1].marketHigh}`}</h3>
                        <h3>{`${fetchedDatas[0][1].marketLow}`}</h3>
                        <h3>{`${fetchedDatas[0][1].marketNotional}`}</h3>
                        <h3>{`${fetchedDatas[0][1].marketNumberOfTrades}`}</h3>
                        <h3>{`${fetchedDatas[0][1].marketOpen}`}</h3>
                        <h3>{`${fetchedDatas[0][1].marketVolume}`}</h3>
                        <h3>{`${fetchedDatas[0][1].region}`}</h3>
                        <h3>{`${fetchedDatas[0][1].symbol}`}</h3>
                        <h3>{`MINUTEBAR`}</h3>
                        <h3>{`${fetchedDatas[0][1].region}`}</h3>
                        <h3>{`${fetchedDatas[0][1].symbol}`}</h3>

                        </div>
                    </div>
                    : null
                }
            </section>
        </main>
        </>
    )
}

export default Stocks