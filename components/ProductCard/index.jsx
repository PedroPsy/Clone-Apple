import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import Animated, { FadeInUp } from "react-native-reanimated";
import { useRouter } from "expo-router";
import { colors, typography, spacing } from "../../theme";

/**
 * @typedef {Object} ProductCardProps
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} image
 * @property {number} index
 */

const styles = StyleSheet.create({
  card: {
    padding: spacing.md,
    marginBottom: spacing.sm,
    backgroundColor: colors.white,
    borderRadius: 8,
  },
  name: {
    ...typography.heading,
    color: colors.black,
    marginBottom: spacing.xs,
  },
  description: {
    ...typography.body,
    color: colors.gray,
    marginBottom: spacing.md,
  },
  actions: {
    flexDirection: "row",
    gap: spacing.sm,
  },
  link: {
    ...typography.link,
    color: colors.blue,
  },
  image: {
    width: "100%",
    height: 200,
    marginTop: spacing.md,
    borderRadius: 8,
  },
});

export function ProductCard({
  id,
  name,
  description,
  image,
  index,
}) {
  const router = useRouter();
  return (
    <Animated.View
      entering={FadeInUp.delay(index * 120).duration(500)}
      style={styles.card}
    >
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.description}>{description}</Text>

      <View style={styles.actions}>
        <TouchableOpacity onPress={() => router.push(`/product/${id}`)}>
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
