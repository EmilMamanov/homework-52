import PlayCard from './PlayCard';

class CardDeck {
    private deck: PlayCard[];

    constructor() {
        this.deck = [];
        const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
        const suits = ['diams', 'hearts', 'clubs', 'spades'];

        for (const suit of suits) {
            for (const rank of ranks) {
                this.deck.push(new PlayCard(rank, suit));
            }
        }
    }

    public getCard(): PlayCard | undefined {
        if (this.deck.length === 0) {
            return undefined;
        }
        const randomIndex = Math.floor(Math.random() * this.deck.length);
        const randomCard = this.deck.splice(randomIndex, 1);
        return randomCard[0];
    }

    public getCards(howMany: number): PlayCard[] {
        const cards: PlayCard[] = [];

        for (let i = 0; i < howMany; i++) {
            const card = this.getCard();
            if (card) {
                cards.push(card);
            }
        }

        return cards;
    }
}

export default CardDeck;