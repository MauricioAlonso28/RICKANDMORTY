import { Routes, Route, useLocation} from 'react-router-dom';
import axios from 'axios'
import { useState} from 'react';
import Form from './components/Form/Form';
import Navbar from './components/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import Detail from './components/Detail/Detail';
import About from './components/About/About';
import Favorites from './components/Favorites/Favorites';

const URL_API = 'https://rickandmortybackend-9jv6.onrender.com/rickandmorty/character/'

function App() {
 
    const [characters, setCharacters] = useState([])
    const location = useLocation()


    function onClose(id){
        setCharacters(
            characters.filter((char) => {
                return char.id !== Number(id)
            })
        )
    }
 
     
    async function onSearch(id) {
        try {
            const characterId = characters.filter(character => character.id === Number(id));
            if (characterId.length) return alert("The character already exists!");
            if (id < 1 || id > 826 ) return alert("There is no character with the entered id!")
            
            const { data } = await axios.get(`${URL_API}${id}`);
            if (data.name) {
                setCharacters((oldChars) => [...oldChars, data]);
            } else {
                window.alert("There is no character with the entered id!");
            }
        } catch(error) {
            console.log(error.message);
        }
    }

    return (<>
        {
            location?.pathname !== '/' ?  <Navbar onSearch={onSearch}/> : <Form/>
        }
        <Routes>
            <Route path='/home' element={<Cards characters={characters} onClose={onClose}/>} />
            <Route path='/about' element={<About/>}/>
            <Route path='/detail/:id' element={<Detail/>}/>
            <Route path='/favorites' element={<Favorites/>}/>
        </Routes>
    </>);
}

export default App;
