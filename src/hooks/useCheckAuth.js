import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { firebaseAuth } from "../firebase/config";
import { login, logout } from "../store/auth";

export const useCheckAuth = () => {
    const { status } = useSelector(state => state.auth);

    const dispatch = useDispatch();

    useEffect(() => {

        onAuthStateChanged(firebaseAuth, async (user) => {
            if (!user) return dispatch(logout());

            const { email, displayName, uid, photoURL } = user;

            dispatch(login({ email, displayName, uid, photoURL }));
        })


    }, [])

    return {
        status
    }
};
