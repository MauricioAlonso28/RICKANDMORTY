import Style from "./navbar.module.css";
import { useState } from 'react';
import { NavLink} from 'react-router-dom'
import img from '../../img/title.png'

function Navbar({onSearch}) {
    const [id, setId] = useState('');
   
    const handleChange = (event) => {
        setId(event.target.value) 
    }
   
    const random = Math.floor(Math.random() * 826) + 1;

    return (
        <>  
            <img src={img} className={Style.title} alt="rickandmorty title"></img>  
            <nav className={Style.navbar}>
                <div className={Style.pInput}>
                    <button className={Style.pButton} onClick={() => onSearch(id)}>+</button>
                    <input className={Style.input} type='search' value={id} onChange={handleChange} placeholder="Insert ID"/>
                </div>
                <div className={Style.searchBar}>
                    <input className={Style.input} type='search' value={id} onChange={handleChange}/>
                    <button className={Style.button} onClick={() => onSearch(id)}>Add</button>
                    <button className={Style.button} onClick={() => onSearch(random)}>Random</button>
                </div>
                <div className={Style.containerButtons}>
                    <NavLink to={'/home'} className={Style.links}>
                        <button className={Style.buttonsNav}>Home</button>
                    </NavLink>
                    <NavLink to={'/about'} className={Style.links}>
                        <button className={Style.buttonsNav}>About</button>
                    </NavLink>
                    <NavLink to={'/favorites'} className={Style.links}>
                        <button className={Style.buttonsNav}>Favorites</button>
                    </NavLink>
                </div>
            </nav>
        </>
    )
}

export default Navbar