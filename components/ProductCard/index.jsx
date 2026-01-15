import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
/**
 * @typedef {Object} ProductCardProps
 * @property {string} name
 * @property {string} description
 * @property {string} image
 * @property {number} index
 */
export function ProductCard({
  name,
  description,
  image,
  index,
}) {
  return (
    <Animated.View
      entering={FadeInUp.delay(index * 120).duration(500)}
      style={styles.card}
    >
      <Text style={styles.name}>{name}</Text>

      <Text style={styles.description}>{description}</Text>

      <View style={styles.actions}>
        <TouchableOpacity>
          <Text style={styles.link}>Saiba mais</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text style={styles.link}>Comprar</Text>
        </TouchableOpacity>
      </View>

      <Image
        source={{ uri: image }}
        style={styles.image}
        resizeMode="contain"
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#f5f5f7",
    borderRadius: 20,
    paddingVertical: 32,
    paddingHorizontal: 16,
    alignItems: "center",
    marginBottom: 24,
  },
  name: {
    fontSize: 28,
    fontWeight: "600",
    letterSpacing: -0.5,
  },
  description: {
    marginTop: 8,
    fontSize: 16,
    color: "#6e6e73",
    textAlign: "center",
    maxWidth: 280,
  },
  actions: {
    flexDirection: "row",
    gap: 24,
    marginTop: 16,
  },
  link: {
    fontSize: 16,
    color: "#0066cc",
    fontWeight: "500",
  },
  image: {
    marginTop: 32,
    width: "100%",
    height: 220,
  },
});
