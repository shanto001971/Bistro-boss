import { createContext, useState, useEffect } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../firebase/Firebase.config";



export const AuthContext = createContext(null);
const auth = getAuth(app);


const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const LogInUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const singUpUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const LogOutUser = () => {
        setLoading(true);
        return signOut(auth);
    }

    const updateprofileUser = (name, photo) => {
        return updateprofileUser(auth.currentUser, {
            displayName: name, photoURL: photo
        })
        
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);

        });
        return () => {
            return unsubscribe();
        }
    }, []);

    const authInfo = {
        user,
        setUser,
        loading,
        LogInUser,
        singUpUser,
        LogOutUser,
        updateprofileUser
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;