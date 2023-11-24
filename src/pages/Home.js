import React, { useContext } from "react";
import AppProvider from "../context/appProvider";

const Home = () => {

    const { userDetail } = useContext(AppProvider);

    return (
        <div className="App">
        <header className="App-header">
            <h1>{userDetail?.username}</h1>
            <h3>{userDetail?.email}</h3>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    )
}

export default Home;