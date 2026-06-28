import React from "react";

function ListofPlayers() {
  const players = [
    { name: "Virat Kohli", score: 90 },
    { name: "Rohit Sharma", score: 85 },
    { name: "KL Rahul", score: 65 },
    { name: "Shubman Gill", score: 78 },
    { name: "Hardik Pandya", score: 50 },
    { name: "Ravindra Jadeja", score: 72 },
    { name: "Rishabh Pant", score: 95 },
    { name: "Suryakumar Yadav", score: 60 },
    { name: "Jasprit Bumrah", score: 40 },
    { name: "Mohammed Shami", score: 55 },
    { name: "Kuldeep Yadav", score: 80 },
  ];

  const lowScorePlayers=players.filter(player=>player.score<70);

  return(
    <div>
      <h2>List of players</h2>
      {
        players.map((player,index)=>(
          <p key={index}>
            {player.name} - {player.score}
          </p>
        ))
      }
      <hr/>
      <h2>Player with score above 70</h2>
      {
        lowScorePlayers.map((player,index)=>(
          <p key={index}>
            {player.name} - {player.score}
          </p>
        ))
      }
    </div>
  );
}
export default ListofPlayers;