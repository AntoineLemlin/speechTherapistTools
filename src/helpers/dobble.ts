export function shuffle<T>(array: T[]) {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

export function generateCards(
  n: number,
  shuffleSymbolsOnCard: boolean
): number[][] {
  const cards: number[][] = [];

  // Add first set of n+1 cards (e.g. 8 cards)
  for (let i = 0; i < n + 1; i++) {
    // Add new card with first symbol
    cards.push([1]);
    // Add n+1 symbols on the card (e.g. 8 symbols)
    for (let j = 0; j < n; j++) {
      cards[i].push(j + 1 + i * n + 1);
    }
  }

  // Add n sets of n cards
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      // Append a new card with 1 symbol
      const card: number[] = [i + 2];
      // Add n symbols on the card (e.g. 7 symbols)
      for (let k = 0; k < n; k++) {
        const val = n + 1 + n * k + ((i * k + j) % n) + 1;
        card.push(val);
      }
      cards.push(card);
    }
  }
  // Shuffle symbols on each card
  if (shuffleSymbolsOnCard) {
    cards.forEach((card) => shuffle(card));
  }

  return cards;
}

export function generateDobbleCards(
  elements: string[],
  numberOfSymbolsOnCard: number,
  shuffleSymbolsOnCard: boolean
) {
  const cardsIndexes = generateCards(
    numberOfSymbolsOnCard - 1,
    shuffleSymbolsOnCard
  );
  const cardMappedToElements = cardsIndexes.map((card) =>
    card.map((idx) => elements[idx])
  );
  return cardMappedToElements;
}
