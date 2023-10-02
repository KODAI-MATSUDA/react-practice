import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

function Top() {
    
    const navigate = useNavigate();
    const { register, handleSubmit, formState: { errors }, getValues} = useForm();

    const onSubmit = () => {
        // フォームデータを取得
        const formData = getValues(); 
        console.log("formData.cocktailName : " + formData.cocktailName);
        // セッションストレージにデータを保存
        sessionStorage.setItem('inputData', formData.cocktailName);
        // 画面遷移
        navigate('/search'); 
    };

    return <>
    <div className="Top">
         <form onSubmit={handleSubmit(onSubmit)}>
                <input 
                    id="cocktailName"
                    type="text"
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