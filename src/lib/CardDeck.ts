import Card from './Card';

export default class CardDeck {
    private cards: Card[] = [];

    constructor() {
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['diams', 'hearts', 'clubs', 'spades'];

        for (const suit of suits) {
            for (const rank of ranks) {
                this.cards.push(new Card(rank, suit));
            }
        }
    }

    public getCard(): Card {
        if (this.cards.length > 0) {
            const index = Math.floor(Math.random() * this.cards.length);
            return this.cards.splice(index, 1)[0];
        } else {
            throw new Error('The deck is empty.');
        }
    }

    public getCards(howMany: number): Card[] {
        const drawnCards: Card[] = [];

        for (let i = 0; i < howMany; i++) {
            drawnCards.push(this.getCard());
        }

        return drawnCards;
    }
}
