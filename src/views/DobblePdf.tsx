import { Page, Document, StyleSheet } from "@react-pdf/renderer";
import CanvasCards from "../components/CanvasCards";

type Props = {
  cards: string[][] | null;
};

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "#fff",
    padding: 10,
  },
});

export default function DobblePdf({ cards }: Props) {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        {cards?.map((card: string[], i: number) => (
          <CanvasCards radius={250} card={card} key={i} />
        ))}
      </Page>
    </Document>
  );
}
