import React, { useEffect, useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Top() {
    
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, getValues} = useForm();
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

    const onSubmit = () => {
        const formData = getValues(); 
        if (formData.cocktailName) {
            sessionStorage.setItem('inputData', formData.cocktailName);
        }else{
            sessionStorage.setItem('inputData', sessionData);
        }
        navigate('/search'); 
    };

    return <>
    <div className="Top">
         <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    id="cocktailName"
                    type="text"
                    onChange={handleInputChange}
                    defaultValue={sessionData}
                    {...register("cocktailName", 
                            { required: true }
                        )
                    } 
                    placeholder="Enter your data" />
                {errors.cocktailName && <p> cocktailName is required.</p>}
            <button onClick={onSubmit}>Search</button>
        </form>
    </div></>
}

export default Top;