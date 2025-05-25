import { ReactNode, useState } from "react";
import { DetailsContext } from "./details-context-hook";




export default function WeatherDetailsContext( {children}: {children: ReactNode} ){

    const [city, setCity] = useState("Sofia");
    const [details, setDetails] = useState({})

    return (
        <DetailsContext.Provider value={{city, setCity, details, setDetails}}>
            {children}
        </DetailsContext.Provider>
    )
    
}


