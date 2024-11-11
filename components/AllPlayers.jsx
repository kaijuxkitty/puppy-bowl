import {useState,useEffect} from 'react'
import {fetchAllPlayers} from 'https://fsa-puppy-bowl.herokuapp.com//api/2409-ftb-et-web-ft/players';

function AllPlayers(){
    coonst [AllPlayers,setPlayers] = useState([]);

    useEffect(() => {
        const getPlayers= async()=> {
            const data = await fetchAllPlayers();
            setPlayers(data);
        };
        getPlayers();

    }, []);
    return (
        <div> 
            <h2>AllPlayers</h2>
        {players.map((player) => (
            <div key={player.id}>{}
            <h4>{player.name}</h4>
        </div>
    ))};
    </div>
    );
};