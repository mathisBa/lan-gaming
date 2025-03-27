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
    </>
  );
};

export default BracketElement;