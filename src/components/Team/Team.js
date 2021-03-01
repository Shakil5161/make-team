import React from 'react';
import './Team.css';

const Team = (props) => {
    const add= props.add;
    const total = add.reduce((acc,player) =>acc+player.salary,0);
    return (
        <div className="team">
            <h3>FC Barcelona</h3>
            <p>Players: {add.length}</p>
            <p>Players salary: ${total}</p>
            <ol>
                {
                    add.map(player => <li>{player.name} (${player.salary})</li>)
                }
            </ol>
        </div>
    );
};

export default Team;