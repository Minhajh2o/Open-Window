import { createContext, useEffect, useState } from "react";
import app from "../Firebase/firebase.config";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const AuthContext = createContext();
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log("AuthProvider user:", user);

    // create new user
    const createNewUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
            console.log("Auth state changed:", currentUser);
        });
        return () => unsubscribe();
    }, []);

    // auth info
    const authInfo = { user, setUser, createNewUser };

    return <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
};

export default AuthProvider;