import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Call() {
    const [sessionData, setSessionData] = useState('');
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const cocktailName = sessionStorage.getItem('inputData');
        if (cocktailName) {
            setSessionData(cocktailName);
        }

        // const apiUrl = 'https://cocktail-f.com/api/v1/cocktails?word=' + cocktailName;
        const apiUrl = 'data.json';

        axios.get(apiUrl)
        .then((response) => {
            setData(response.data.cocktails);
            console.log(response.data.cocktails); 
        })
        .catch((error) => {
            console.error('APIエラー:', error);
        });
    }, []);

    const back = () => {
        sessionStorage.setItem('inputData', sessionData);
        navigate('/search');
    };

    return (
        <div>
            <h1>APIから取得したデータ</h1>
            <ul>
                {data.map((item) => (
                    <li key={item.cocktail_id}>{item.cocktail_name} : {item.recipe_desc}</li>
                ))}
            </ul>
            <button onClick={back}>back</button>
        </div>
    );
}

export default Call;