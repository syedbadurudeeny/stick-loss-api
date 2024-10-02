import React from "react";
import { isUserAuthenticated } from "./Auth";
import { Link, useNavigate } from "react-router-dom";
import { logoutUser } from "./Auth";

function Dashboard(){

    const navigate = useNavigate();
    function handleClick(){
        logoutUser()
        navigate('/login')
    }
    
    
    return(
        <>
        <main className="dash-page">
        {/* <h1>Home Component</h1> */}
        <div className="dash-dash">
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

        <section className="about-stocks">

            <div>
            <h3>What is the Stock Market?</h3>
            <br/>
            <p>
            The stock market is a place where investors can buy and sell shares of publicly traded companies. It serves as a marketplace for companies to raise capital and for investors to buy ownership in those companies.
            </p>
            </div>

            <div>
            <h3>How Does it Work?</h3>
            <br/>
            <p>
            Stock Exchanges: Stocks are traded on stock exchanges, which are centralized marketplaces where buyers and sellers come together 
            to trade shares. Some well-known stock exchanges include the New York Stock Exchange (NYSE), NASDAQ, London Stock Exchange (LSE),
            and Tokyo Stock Exchange (TSE).

            Buying and Selling: Investors can buy and sell stocks through brokerage firms, either online or through traditional brokers. 
            They place orders to buy or sell stocks at certain prices, and these orders are matched electronically on the exchange.

            Price Determination: Stock prices are determined by supply and demand. If more people want to buy a stock than 
            sell it, the price goes up,and vice versa. Various factors such as company performance, economic conditions, news events, and 
            investor sentiment influence supply and demand.
            </p>
            </div>

            <div>
                <h3>Why Do People Invest in Stocks?</h3>
                <br/>
                <p>
                Potential for Growth: Stocks offer the potential for significant long-term growth. Investing in successful companies can 
                lead to substantial returns over time.

                Dividend Income: Many companies pay dividends to shareholders, providing a source of regular income.

                Portfolio Diversification: Stocks allow investors to diversify their investment portfolios, spreading risk across 
                different assets.
                </p>
            </div>

            <div>
                <h3>Risks Associated with Stock Market Investment</h3>
                <br/>
                <p>
                Volatility: Stock prices can be volatile, with values fluctuating frequently due to various factors.

                Market Risk: The overall stock market can experience downturns or bear markets, affecting the value of individual stocks.

                Company-Specific Risk: Investing in individual stocks carries the risk of company-specific issues such as poor financial
                performance, management changes, or legal problems.

                Liquidity Risk: Some stocks may be less liquid, meaning there may not be enough buyers or sellers, making it difficult 
                to buy or sell shares at desired prices.
                </p>
            </div>

            <div>
                <h3>Strategies for Investing in Stocks</h3>
                <br/>
                <p>
                Long-Term Investing: Investing in fundamentally strong companies for the long term, often referred to as "buy and hold" 
                strategy.

                Value Investing: Seeking undervalued stocks based on fundamental analysis of company financials.

                Growth Investing: Investing in companies with strong growth potential, even if their current stock prices may seem high.

                Diversification: Spreading investments across different sectors and asset classes to reduce risk.

                Risk Management: Setting stop-loss orders, diversifying investments, and staying informed about market trends and news.
                </p>
            </div>

        </section>
       
        
        </main>
        </>
    )
}

export default Dashboard