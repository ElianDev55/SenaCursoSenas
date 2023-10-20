import { createContext } from "react";

export const ContextVideos = createContext();


export const ContextVideosProvider = ({children}) => {
    
    
    
    return (
        <ContextVideos.Provider value={{}}>
            {children}
        </ContextVideos.Provider>
    )
}