import React, { createContext, useContext, useState } from "react";

const ResultContext = createContext();
const baseUrl = 'https://real-time-web-search.p.rapidapi.com';

export const ResultContextProvider = ({ children }) => {
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);

        const response = await fetch(`${baseUrl}${type}`, {
            method: 'GET',
            headers: {
                'x-rapidapi-key': 'c319dace0dmsh1bc1d1d26be00fbp12d8c8jsn6ddb32e6b27e',
                'x-rapidapi-host': 'real-time-web-search.p.rapidapi.com'
            }
        });

        const data = await response.json();

        console.log(data);

        setResults(data);
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    );
}

export const useResultContext = () => useContext(ResultContext);