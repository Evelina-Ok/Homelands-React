import { useState, useEffect, useContext } from "react";
import { UserContext } from "../context/userContext";

export function useGet (url, token) {

    const [data, setData] = useState();
    const [error, setError] = useState();
    const [isLoading, setIsLoading] = useState();
    // const [userToken, setUserToken] = useContext(UserContext)

    useEffect (() => {
        setIsLoading(true);

        const options = {
            headers: token ? {
                'Authorization' :  `Bearer ${token}`
            } : {},
        }
        fetch(url, options)
        .then((res) => res.json())
        .then((data) => setData(data))
        .then((err) => setError(err))
        .finally(() => setIsLoading(false))
    }, [url, token])

    return {data, error, isLoading}
}