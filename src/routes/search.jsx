import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function Search() {

    const navigate = useNavigate();
    const [sessionData, setSessionData] = useState('');
    
    useEffect(() => {
        // セッションストレージからデータを取得
        const data = sessionStorage.getItem('inputData');
        if (data) {
            setSessionData(data);
        }
    }, []);

    return <>
    <div>
        <div>
                <p>Data from sessionStorage: {sessionData}</p>
        </div>
        <button onClick={() => navigate('/')}>back</button>
    </div>
    </>
}

export default Search;