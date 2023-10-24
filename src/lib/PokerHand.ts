import PlayCard from './PlayCard';

class PokerHand {
    private cards: PlayCard[];

    constructor(cards: PlayCard[]) {
        this.cards = cards;
    }

    getOutcome(): string {
        if (this.hasOnePair()) {
            return 'Одна пара';
        } else if (this.hasTwoPairs()) {
            return 'Две пары';
        } else if (this.hasThreeOfAKind()) {
            return 'Тройка';
        } else if (this.isFlush()) {
            return 'Флэш';
        } else {
            return 'Старшая карта';
        }
    }

    private hasOnePair(): boolean {
        const ranks: string[] = this.cards.map((card) => card.rank);
        const uniqueRanks = new Set(ranks);
        return uniqueRanks.size === 4;
    }

    private hasTwoPairs(): boolean {
        const ranks: string[] = this.cards.map((card) => card.rank);
        const uniqueRanks = new Set(ranks);
        return uniqueRanks.size === 3;
    }

    private hasThreeOfAKind(): boolean {
        const ranks: string[] = this.cards.map((card) => card.rank);
        const uniqueRanks = new Set(ranks);
        return uniqueRanks.size === 3 && ranks.some((rank) => ranks.indexOf(rank) !== ranks.lastIndexOf(rank));
    }

    private isFlush(): boolean {
        const suits: string[] = this.cards.map((card) => card.suit);
        return new Set(suits).size === 1;
    }
}

export default PokerHand;