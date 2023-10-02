import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Search() {

    const navigate = useNavigate();
    const [sessionData, setSessionData] = useState('');
    
    useEffect(() => {
        const data = sessionStorage.getItem('inputData');
        if (data) {
            setSessionData(data);
        }
    }, []);
    
    const handleInputChange = (e) => {
        setSessionData(e.target.value);
    };

    const back = () => {
        sessionStorage.setItem('inputData', sessionData);
        navigate('/');
    };

    const call = () => {
        sessionStorage.setItem('inputData', sessionData);
        navigate('/call');
    };

    return <>
    <div>
        <div>
            <input
                id="sessionData"
                type="text"
                onChange={handleInputChange}
                    defaultValue={sessionData}
                placeholder="Enter your data" />
        </div>
            <button onClick={back}>back</button>
            <button onClick={call}>call</button>
    </div>
    </>
}

export default Search;