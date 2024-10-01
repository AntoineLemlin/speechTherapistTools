import { Circle, G, StyleSheet, Svg, Text, View } from "@react-pdf/renderer";

type Props = {
  radius: number;
  card: string[];
};

type Point = {
  x: number;
  y: number;
};

const MAX_FONT_SIZE = 30;
const MIN_FONT_SIZE = 20;
const MARGIN_SIZE = 75;
const SPACE_BETWEEN_SIZE = 50;

const styles = StyleSheet.create({
  svgContainer: {
    width: "50%",
    height: "33%",
    padding: 5,
  },
  svg: {
    width: "100%",
    height: "100%",
  },
});

function getRandomPoint(
  radius: number,
  center: Point
): Point & { fontSize: number } {
  // Random angle between 0 and 2 * PI
  const angle = Math.random() * 2 * Math.PI;

  // Random distance from the center, ensuring it's within the circle
  const randomRadius = Math.random() * radius;

  // Calculate the x and y coordinates
  const x = center.x + randomRadius * Math.cos(angle);
  const y = center.y + randomRadius * Math.sin(angle);

  const fontSize = Math.floor(
    Math.random() * (MAX_FONT_SIZE - MIN_FONT_SIZE) + MIN_FONT_SIZE
  );

  return { x, y, fontSize };
}

function distanceBetweenPoints(p1: Point, p2: Point): number {
  const dx = p1.x - p2.x;
  const dy = p1.y - p2.y;
  return Math.sqrt(dx * dx + dy * dy);
}

function generateRandomCirclePoints(
  totalPoints: number,
  radius: number,
  pointRadius: number,
  center: Point
): (Point & { fontSize: number })[] {
  const points: (Point & { fontSize: number })[] = [];
  const minDistance = 2 * pointRadius; // Minimum distance between points

  while (points.length < totalPoints) {
    const newPoint = getRandomPoint(radius, center);

    // Check if the new point is too close to existing points
    const isTooClose = points.some(
      (point) => distanceBetweenPoints(point, newPoint) < minDistance
    );

    // If not too close, add the new point to the list
    if (!isTooClose) {
      points.push(newPoint);
    }
  }

  return points;
}

export default function CanvasCards({ radius = 250, card }: Props) {
  const size = radius * 2;
  const center = { x: radius, y: radius };
  const points = generateRandomCirclePoints(
    card.length,
    radius - MARGIN_SIZE,
    SPACE_BETWEEN_SIZE,
    center
  );

  return (
    <View style={styles.svgContainer}>
      <Svg style={styles.svg} viewBox={`0 0 ${size} ${size}`}>
        <Circle
          cx={center.x}
          cy={center.y}
          r={radius - 5}
          stroke="black"
          strokeWidth={2}
          fill="white"
        />
        {points.map(({ x, y, fontSize }, i) => (
          <G key={i}>
            <Text
              x={x}
              y={y + 1}
              fontSize={fontSize}
              textAnchor="middle"
              fill="black"
            >
              {card[i]}
            </Text>
          </G>
        ))}
      </Svg>
    </View>
  );
}
