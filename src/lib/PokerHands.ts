import Card from './Card';

export default class PokerHand {
    private cards: Card[];

    constructor(cards: Card[]) {
        this.cards = cards;
    }

    public getOutcome(): string {
        if (this.isFlush()) {
            return 'Флэш';
        }

        if (this.isPair()) {
            return 'Одна пара';
        }

        if (this.isTwoPairs()) {
            return 'Две пары';
        }

        if (this.isThreeOfAKind()) {
            return 'Тройка';
        }

        return 'Старшая карта';
    }

    private isFlush(): boolean {
        const suit = this.cards[0].suit;
        return this.cards.every(card => card.suit === suit);
    }

    private isPair(): boolean {
        const rankCounts = this.getCountOfRanks();
        return Object.values(rankCounts).includes(2);
    }

    private isTwoPairs(): boolean {
        const rankCounts = this.getCountOfRanks();
        const pairs = Object.values(rankCounts).filter(count => count === 2);
        return pairs.length === 2;
    }

    private isThreeOfAKind(): boolean {
        const rankCounts = this.getCountOfRanks();
        return Object.values(rankCounts).includes(3);
    }

    private getCountOfRanks(): Record<string, number> {
        const rankCounts: Record<string, number> = {};

        for (const card of this.cards) {
            if (rankCounts[card.rank]) {
                rankCounts[card.rank]++;
            } else {
                rankCounts[card.rank] = 1;
            }
        }

        return rankCounts;
    }
}
