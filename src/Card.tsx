import React from 'react';

interface CardProps {
    rank: '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10' | 'j' | 'q' | 'k' | 'a';
    suit: 'diams' | 'hearts' | 'clubs' | 'spades';
}

const getSuitSymbol = (suit: CardProps['suit']) => {
    switch (suit) {
        case 'diams':
            return '♦';
        case 'hearts':
            return '♥';
        case 'clubs':
            return '♣';
        case 'spades':
            return '♠';
        default:
            return '';
    }
};

const Cards: React.FC<CardProps> = ({ rank, suit }) => {
    return (
        <span className={`card rank-${rank as string} ${suit as string}`}>
          <span className="rank">{rank}</span>
          <span className={`suit suit-${suit}`}>{getSuitSymbol(suit)}</span>
        </span>

    );
};

export default Cards;
