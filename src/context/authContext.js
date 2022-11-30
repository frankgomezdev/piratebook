import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(
        JSON.parse(localStorage.getItem("user")) || null
        );

        const login = () => {
            //TO DO
            setCurrentUser({
                id: 1, 
                name: "Monkey D. Luffy", 
                profilePic:"https://image.winudf.com/v2/image/Y29tLmJhbGVmb290Lk1vbmtleURMdWZmeVdhbGxwYXBlcl9zY3JlZW5fMF8xNTI0NTE5MTEwXzAyOA/screen-0.jpg?h=500&fakeurl=1&type=.jpg"})
        }

        useEffect(()=>{
            localStorage.setItem("user", JSON.stringify(currentUser));
        }, [currentUser]);

        return(
            <AuthContext.Provider value={{ currentUser, login }}>
                {children}
                </AuthContext.Provider>
        )
};