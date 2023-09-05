import Card from './Card';
import Style from "./cards.module.css";

function Cards(props) {

   return (  
      <div className={Style.cardsContainer}>
         {
            props.characters.map(character => 
                <Card key={character.id}
                    id={character.id}
                    name={character.name}
                    status={character.status}
                    species={character.species}
                    gender={character.gender}
                    origin={character.origin.name}
                    image={character.image}
                    onClose={props.onClose}
                />
            )
         }
      </div>
   );
}

export default Cards