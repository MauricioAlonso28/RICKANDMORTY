import Card from '../Cards/Card';
import Style from './favorites.module.css'
import cardsS from '../Cards/cards.module.css'

import { connect } from 'react-redux';
import { useDispatch} from 'react-redux'
import { orderCards, filterCards } from '../../redux/actions';
import { useState, useEffect } from 'react';

function Favorites ({ myFavorites}) {
    const dispatch = useDispatch();
    const [ aux, setAux ] = useState(false);


    // FUNCTIONS
    function handleOrder (event){
        dispatch(orderCards(event.target.value))
        aux ? setAux(false) : setAux(true);

    }

    function handleFilter(event){
        dispatch(filterCards(event.target.value))
    }

    
  useEffect(() => {dispatch(filterCards("All"))}, [dispatch]);

  return (
    <div className={Style.container}>
        <div className={Style.selectors}>
            <select className={Style.selector} name='' id='' onChange={handleOrder}>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>
            </select>
            <select className={Style.selector} name='' id='' onChange={handleFilter}>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="unknown">Unknown</option>
            </select>
        </div>
        <div className={cardsS.cardsContainer}>
        { 
            myFavorites.map((char) => {
            return (
            <Card
            key={char.id}
            id = {char.id}
            image = {char.image}
            name= {char.name}
            status= {char.status}
            species= {char.species}
            gender = {char.gender}
            />
            )})
        } 
        </div>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites
  };
}

export default connect(mapStateToProps, null)(Favorites);