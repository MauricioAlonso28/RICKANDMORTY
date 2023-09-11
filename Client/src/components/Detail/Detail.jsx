import Style from "./detail.module.css";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const URL_API = 'https://rickandmortybackend-9jv6.onrender.com/rickandmorty/character/'

function Detail(){
   const { id } = useParams();
   const [character, setCharacter] = useState({});

    useEffect(() => {
        axios(`${URL_API}${id}`)
        .then(({ data }) => {
            if (data.name) {
                setCharacter(data);
            } else {
                window.alert('No hay personajes con ese ID');
            }
        });
        return setCharacter({});
    }, [id]);

    return <>
        <div className={Style.container}>
            <div className={Style.panel}>
                <div className={Style.ring}>
                    <div className={Style.card}>
                        <img className={Style.card2} src={character.image} alt={character.name} />
                    </div>
                    <div className={Style.border}>
                        <div className={Style.slide}>
                            <h2 className={Style.para}>{character.name}</h2>
                            <div className={Style.line}>
                                <h6 className={Style.para}>STATUS &nbsp;&nbsp;&nbsp;➪&nbsp;&nbsp;&nbsp; {character.status}</h6> 
                            </div>
                            <div className={Style.line}>
                                <h6 className={Style.para}>GENDER &nbsp;&nbsp;&nbsp;➪&nbsp;&nbsp;&nbsp; {character.gender}</h6> 
                            </div>
                            <div className={Style.line}>
                                <h6 className={Style.para}>SPECIE &nbsp;&nbsp;&nbsp;➪&nbsp;&nbsp;&nbsp; {character.species}</h6> 
                            </div>
                            <div className={Style.line}>
                                <h6 className={Style.para}>ORIGIN &nbsp;&nbsp;&nbsp;➪&nbsp;&nbsp;&nbsp; {character.origin && character.origin.name}</h6> 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default Detail