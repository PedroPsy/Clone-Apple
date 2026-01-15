import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { colors, typography, spacing } from "../../theme";

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

      <Image source={{ uri: image }} style={styles.image} />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.card,
    borderRadius: 20,
    paddingVertical: spacing.xl,
    paddingHorizontal: spacing.md,
    alignItems: "center",
    marginBottom: spacing.lg,
  },
  name: {
    ...typography.titleMedium,
    color: colors.textPrimary,
  },
  description: {
    marginTop: spacing.sm,
    ...typography.body,
    color: colors.textSecondary,
    textAlign: "center",
    maxWidth: 280,
  },
  actions: {
    flexDirection: "row",
    gap: spacing.lg,
    marginTop: spacing.md,
  },
  link: {
    ...typography.body,
    color: colors.link,
    fontWeight: "500",
  },
  image: {
    marginTop: spacing.xl,
    width: "100%",
    height: 220,
  },
});
