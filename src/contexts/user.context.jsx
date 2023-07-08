import { createContext, useEffect, useState } from "react";
import { onAuthStateListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

const UserContext = createContext({
    currentUser: null,
    setCurrentUser: () => {},
    
});


export const UserContextProvider = ({children}) => {

    const [currentUser, setCurrentUser] = useState(null);

    const value = {
        currentUser,
        setCurrentUser,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateListener((user) => {
            if (user) {
                createUserDocumentFromAuth(user);
            }
            setCurrentUser(user);
        });

        return unsubscribe;
    }, [])

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}


export default UserContext;