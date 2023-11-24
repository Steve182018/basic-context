import { useState } from "react"
import AppProvider from "./appProvider"

const AppContext = (props) => {
    
    const data = {
        username: "",
        email: ""
    }

    const [userData, setUserData] = useState(data);

    const onChangeEvent = (data) => {
        setUserData(data)
    }

    console.log("props.children : ", props.children)

    return (
        <AppProvider.Provider value={{
            userDetail: userData,
            changeUserDetail: onChangeEvent
        }}>
            {props.children}
        </AppProvider.Provider>
    )
}

export default AppContext;