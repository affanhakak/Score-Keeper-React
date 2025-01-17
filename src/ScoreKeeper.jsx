import { useState } from "react";

export default function ScoreKeeper({ numPlayers = 5 }) {
  const [scores, setScores] = useState(new Array(numPlayers).fill(0));
  const incrementScore = (idx) => {
    setScores((previousScores) => {
      const copy = [...previousScores];
      copy[idx] += 1;
      return copy;
    });
  };
  const reset = () => {
    setScores(new Array(numPlayers).fill(0));
  };
  return (
    <div>
      <h1>Score Keeper</h1>
      <ul>
        {scores.map((score, idx) => {
          return (
            <li key={idx}>
              Player{idx + 1}----{score}
              <button onClick={() => incrementScore(idx)}>+1</button>
            </li>
          );
        })}
      </ul>
      <button onClick={reset}>Reset</button>
    </div>
  );
}
