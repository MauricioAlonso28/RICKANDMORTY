import { useEffect, useState } from "react";
import Style from "./form.module.css";
import { useNavigate } from "react-router-dom";

function Form() {
    // STATES
    const [access, setAccess] = useState(false);
    const [userData, setUserData] = useState({
        nickname: '',
    })
    const navigate = useNavigate()

    // FUNCTIONS
    const handleSubmit = (event) => {
        event.preventDefault();
        setTimeout(() => {
            setAccess(true)
        }, 500);
    }
    const handleChange = (event) => {
        setUserData({...userData, [event.target.name]: event.target.value})
    }
    
    // EFFECTS
    useEffect(() => {
        setTimeout(() => {
            access && navigate('/home')
        }, 5000);
    }, [access, navigate])

    return (
        <>
            <form className={access ? Style.hidden : Style.form}>
                <img src={require('../../img/form.jpg')} className={Style.img} alt="Rick&Morty" />
                <div className={Style.sign}>
                    <label className={Style.label}>Nickname:</label>
                    <input className={Style.input} name="nickname" type="text" value={userData.email} onChange={handleChange} required></input>
                </div>
                <button className={userData.nickname.trim() === '' 
                    ? Style.btn2 
                    : Style.btn1} 
                    type="submit" 
                    onClick={handleSubmit}>
                    Enter
                </button>
            </form>
            <div className={access ? Style.notHidden : Style.hidden}>
                <div className={Style.welcome}>
                    WELCOME {(userData.nickname).toUpperCase()}
                </div>
            </div> 
        </>
    );
}

export default Form