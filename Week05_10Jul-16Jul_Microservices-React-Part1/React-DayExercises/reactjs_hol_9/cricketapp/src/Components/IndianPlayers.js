import React from "react";

function IndianPlayers() {
  const players = [
    "Virat",
    "Rohit",
    "Gill",
    "Rahul",
    "Pant",
    "Hardik",
    "Jadeja",
    "Bumrah",
  ];

  const [odd1,even1,odd2,even2,odd3,even3,odd4,even4]=players;
  
  const T20Players=[
    "Virat",
    "Rohit",
    "Surya"
  ]

  const RanjiPlayer=[
    "Pujara",
    "Rahane",
    "Iyer"
  ]
  const mergedPlayer=[...T20Players,...RanjiPlayer]

  return (
    <div>
      <h2>Odd team player</h2>
      <p>{odd1}</p>
      <p>{odd2}</p>
      <p>{odd3}</p>

      <hr/>

      <h2>Even team Player</h2>
      <p>{even1}</p>
      <p>{even2}</p>
      <p>{even3}</p>

      <hr/>

      <h2>merged player</h2>
      {
        players.map((player,index)=>(
          <p key={index}>
            {player}
          </p>
        ))
      }
    
    </div>
  )
}

export default IndianPlayers;