import Style from "./cards.module.css";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { addFav, removeFav } from '../../redux/actions';


function Card(props) {
    const { onClose, id, image, name, species, gender, myFavorites, addFav, removeFav } = props

    const [isFav, setIsFav] = useState(false)


    function handleFavorite(){
        if (isFav === true) {
            setIsFav(false)
            removeFav(id);
        } else {
            setIsFav(true)
            addFav({id, image, name, species, gender});
        } 
    }

    useEffect(() => {
        myFavorites.forEach((fav) => {
            if (fav.id === id) {
                setIsFav(true);
            }
        });
    }, [myFavorites]);

    return (
    <div className={Style.cardItem}>
        {
            isFav ? (
               <button className={Style.buttonFavorite} onClick={handleFavorite}>💙</button>
            ) : (
               <button className={Style.buttonFavorite} onClick={handleFavorite}>🤍</button>
            )
        }
        {
            onClose ? <button className={Style.buttonClose} onClick={() => onClose(props.id)}>X</button> : null
        }
        <img className={Style.imgCard} src={props.image} />
        <NavLink className={Style.nameDetail} to={`/detail/${props.id}`}>
            <h2 className={Style.name}>{props.name}</h2>
        </NavLink>
        <div className={Style.description}>
            <h2 className={Style.features}>{props.species}</h2>
            <h2 className={Style.features}>{props.gender}</h2>
        </div>
    </div>
    );
}
function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

function mapDispatchToProps(dispatch){
    return {
        addFav: (character) => dispatch(addFav(character)),
        removeFav: (id) => dispatch(removeFav(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)