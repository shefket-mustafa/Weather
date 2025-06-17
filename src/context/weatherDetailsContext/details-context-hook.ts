import { createContext, useContext } from "react";



type ContextType = {
    city: string,
    setCity: (city: string) => void;
    details: Record<string, any>;
    setDetails: (details: Record<string, any>) => void
}

export const DetailsContext = createContext<ContextType | null>(null);

export function useWeatherDetails(){
    const context = useContext(DetailsContext);
    if(!context){
        throw new Error("useWeatherDetails must be used within detailsProvider")
    }
    return context;
}