import React, { useContext, useState } from "react";
import AppProvider from "../context/appProvider";

const User = () => {

    const [userData, setUserData] = useState()

    const { changeUserDetail } = useContext(AppProvider);

    const submitUserdata = () => {
        console.log("userdata : ", userData)
        changeUserDetail(userData);
    }

    return (
        <div>
            <div>
                <label>
                    Username
                </label>
                <input type="text" placeholder="Username" required onChange={(e) => {setUserData({...userData, username: e.target.value})}} value={userData?.username} />
            </div>
            <div>
                <label>
                    Email
                </label>
                <input type="email" placeholder="Email" required onChange={(e) => {setUserData({...userData, email: e.target.value})}} value={userData?.email} />
            </div>
            <button type="button" onClick={() => {submitUserdata()}}>
                Submit
            </button>
        </div>
    )
}

export default User;