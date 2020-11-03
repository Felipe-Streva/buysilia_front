import React, {createContext, useEffect, useState} from 'react';

const Context = createContext();

function Session({ children }) {
    const [session, setSession] = useState({
        client: 0,
        provider: 0
    })

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        setLoading(false)
    },[])

    function handleLoggout(){
        setSession({
            client: 0,
            provider: 0
        })
    }

    function handleLoginClient(client_id){

        setSession({
            client: client_id,
            provider: 0
        })       
    }

    function handleLoginProvider(provider_id){
        setSession({
            client: 0,
            provider: provider_id
        })
    }

    if(loading){
        return <h1>Loading...</h1>
    }

    return (
        <Context.Provider value={{session, handleLoginClient, handleLoginProvider, handleLoggout}} >
            {children}
        </Context.Provider>
    );
}

export {Context, Session};

