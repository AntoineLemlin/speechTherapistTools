import { useEffect, useState } from "react";
import { generateCards } from "../helpers/dobble";

export default function useDobbleCards<T>(
  elements: T[],
  numberOfSymbolsOnCard: number,
  shuffleSymbolsOnCard: boolean
) {
  const [cards, setCards] = useState<T[][] | null>([]);

  useEffect(() => {
    if (
      (numberOfSymbolsOnCard - 1) ** 2 + numberOfSymbolsOnCard >
      elements.length
    ) {
      setCards(null);
    } else {
      const cardsIndexes = generateCards(
        numberOfSymbolsOnCard - 1,
        shuffleSymbolsOnCard
      );
      console.log("cardsIndexes", cardsIndexes);
      const cardMappedToElements = cardsIndexes.map((card) =>
        card.map((idx) => elements[idx])
      );

      setCards(cardMappedToElements);
    }

    return () => setCards(null);
  }, [numberOfSymbolsOnCard, shuffleSymbolsOnCard, elements]);

  return { cards };
}
