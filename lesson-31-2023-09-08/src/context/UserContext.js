import { createContext, useContext, useState, useEffect } from "react";

export const UserContext = createContext(null);

export default function UserContextProvider ({ children }) {

    const [user, setUser] = useState({});

    return (<UserContext.Provider value={[user, setUser]}>
        {children}
    </UserContext.Provider>);

}

export const useUser = () => {

    const [user, setUser] = useContext(UserContext);

    useEffect(() => {
        setUser({ name: "nilsgarland" });
    }, []);
    
    return [user, setUser];

}