import React from 'react';
import './BracketElement.scss'; 

interface BracketElementProps {
  title: string;
  bracketContent: TeamScore[]
}

interface TeamScore {
  team: string;
  score: number;
}

const BracketElement: React.FC<BracketElementProps> = ({ title, bracketContent}) => {
  return (
    <>
    <div>
      <p>{title}</p>
    </div>
    {bracketContent.map((teamScore, index) => (
        <div key={index} className="team-row">
          <span className="team-name">{teamScore.team}</span>
          <span className="team-score">{teamScore.score}</span>
        </div>
      ))}
    </>
  );
};

export default BracketElement;