import React, { useState } from 'react';
import Player from '../Player/Player';
import Team from '../Team/Team';
import './Players.css';
const Players = (props) => {
    const players = props.players;
    const [add, setAdd] = useState([]);
    const addPlayerHandler = (addPlayer) =>{
        let newAdd = [...add,addPlayer];
        setAdd(newAdd);
      }
    return (
        <div className="players">
            <div className="row">
                {
                    players.map((player) => <Player key={player.id} addPlayerHandler={addPlayerHandler} player={player}></Player>)
                }

            </div>
            <div className="col-sm-3 text-center">
                <Team add={add}></Team>
            </div>
        </div>
    );
};

export default Players;
