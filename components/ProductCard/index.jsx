import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { colors, typography, spacing } from "../../theme";

/**
 * @typedef {Object} ProductCardProps
 * @property {string} id
 * @property {string} name
 * @property {string} description
 * @property {string} image
 * @property {number} index
 */

/**
 * @param {ProductCardProps} props
 */
export function ProductCard({ id, name, description, image }) {
  return (
    <TouchableOpacity 
      style={styles.container} 
      onPress={() => router.push(`/product/${id}`)}
    >
      <View style={styles.content}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background, // Usando o tema centralizado
    borderRadius: 12,
    padding: spacing.lg,
    marginBottom: spacing.md,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  content: {
    flex: 1,
  },
  name: {
    ...typography.titleLarge,
    fontSize: 20,
  },
  description: {
    ...typography.body,
    color: colors.textSecondary,
  },
  image: {
    width: 100,
    height: 100,
  },
});