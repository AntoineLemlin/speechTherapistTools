import { useEffect, useLayoutEffect, useMemo, useState } from "react";
import useDobbleCards from "../hooks/useDobbleCards";
import DobblePdf from "./DobblePdf";
import { saveAs } from "file-saver";
import { pdf, PDFViewer } from "@react-pdf/renderer";

let animals = [
  "Lion",
  "Tigre",
  "Éléphant",
  "Girafe",
  "Zèbre",
  "Hippopotame",
  "Rhinocéros",
  "Chien",
  "Chat",
  "Lapin",
  "Souris",
  "Cochon",
  "Vache",
  "Cheval",
  "Mouton",
  "Chèvre",
  "Poulet",
  "Canard",
  "Oie",
  "Dinde",
  "Serpent",
  "Lézard",
  "Grenouille",
  "Tortue",
  "Perroquet",
  "Colibri",
  "Pigeon",
  "Aigle",
  "Faucon",
  "Pingouin",
  "Ours",
  "Loup",
  "Renard",
  "Lynx",
  "Panthère",
  "Jaguar",
  "Puma",
  "Chauve-souris",
  "Crocodile",
  "Alligator",
  "Poisson",
  "Requin",
  "Dauphin",
  "Baleine",
  "Méduse",
  "Étoile de mer",
  "Crabe",
  "Homard",
  "Crevette",
  "Hérisson",
  "Écureuil",
  "Castor",
  "Koala",
  "Kangourou",
  "Autruche",
  "Panda",
  "Iguane",
  "Chameau",
];

export default function Dobble() {
  const [elements, setElements] = useState<string[]>([]);
  const [isShuffled, setShuffled] = useState(true);
  const [numberPerCards, setNumberPerCard] = useState<number>(8);
  const [isPreviewOpen, setPreviewOpen] = useState(false);
  const { cards } = useDobbleCards(elements, numberPerCards, isShuffled);

  const totalCards = useMemo(
    () => (numberPerCards - 1) ** 2 + numberPerCards,
    [numberPerCards]
  );

  async function downloadPDF() {
    if (!cards) return;
    const fileName = "dobble.pdf";
    const blob = await pdf(<DobblePdf cards={cards} />).toBlob();
    saveAs(blob, fileName);
  }

  useLayoutEffect(() => {
    if (totalCards > elements.length) {
      setPreviewOpen(false);
    }
  }, [elements, totalCards]);

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="flex flex-col justify-evenly hero-content max-w-screen-lg w-full h-full relative">
        <h1 className="text-3xl font-bold">Dobble Generator</h1>
        <form className="flex flex-col gap-5 w-full">
          <div className="flex justify-between gap-3">
            <div className="flex flex-col gap-3">
              <label htmlFor="numberPerCard" className="text-sm md:text-base">
                Combien de symboles par carte ?
              </label>
              <input
                type="number"
                placeholder="Entrez le nombre ici"
                className="input w-full max-w-xs"
                defaultValue={8}
                name="numberPerCard"
                onChange={(e) => setNumberPerCard(Number(e.target.value))}
              />
            </div>
            <label className="flex items-center flex-wrap gap-3 text-sm md:text-base ">
              <span className="label-text">
                Mélanger les symboles sur la carte ?
              </span>
              <input
                type="checkbox"
                className="checkbox checkbox-primary"
                name="shuffle"
                defaultChecked={true}
                onClick={(e) => setShuffled(e.target.checked)}
              />
            </label>
          </div>

          <textarea
            name="textarea"
            className="textarea textarea-primary"
            placeholder="Séparez les mots par une virgule: Chien,Chat,Penguin"
            onChange={(e) => setElements(e.target.value.split(","))}
          />

          {totalCards <= elements.length ? (
            <p className="text-lg text-success">
              Avec cette configuration, vous allez générer{" "}
              <strong>{totalCards}</strong> cartes.
            </p>
          ) : (
            <p className="text-lg text-warning">
              Nombre total de symboles minimum: <strong>{totalCards}.</strong>
              <br />
              Réduisez le nombre de symboles par carte ou ajoutez des symboles
              dans la sélection
            </p>
          )}
        </form>

        {totalCards <= elements.length && (
          <div className="flex flex-col gap-5 justify-center w-full">
            <div className="flex gap-5 justify-center">
              <button
                type="button"
                className="btn btn-primary"
                onClick={downloadPDF}
              >
                Generate PDF
              </button>
              <label className="flex gap-2 label cursor-pointer">
                <span className="label-text">Prévisualiser</span>
                <input
                  type="checkbox"
                  className="toggle toggle-lg"
                  onClick={() => setPreviewOpen(!isPreviewOpen)}
                />
              </label>
            </div>

            {isPreviewOpen && <PDFView cards={cards} />}
          </div>
        )}
      </div>
    </div>
  );
}

function PDFView({ cards }: { cards: string[][] | null }) {
  return (
    <PDFViewer width="100%" height="600px">
      <DobblePdf cards={cards} />
    </PDFViewer>
  );
}
