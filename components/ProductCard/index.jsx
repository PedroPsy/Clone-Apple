import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { router } from "expo-router";
import { typography, spacing, useTheme } from "../../theme"; //

export function ProductCard({ id, name, description, image }) {
  const theme = useTheme();
  
  const colors = theme || { background: '#fff', textPrimary: '#000', textSecondary: '#666' };

  return (
    <TouchableOpacity 
      style={[styles.container, { backgroundColor: colors.background }]} 
      onPress={() => router.push(`/product/${id}`)}
    >
      <View style={styles.content}>
        <Text style={[styles.name, { color: colors.textPrimary }]}>{name}</Text>
        <Text style={[styles.description, { color: colors.textSecondary }]}>
          {description}
        </Text>
      </View>
      <Image 
        source={typeof image === 'string' ? { uri: image } : image} 
        style={styles.image} 
        resizeMode="contain" 
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
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
  },
  image: {
    width: 100,
    height: 100,
  },
});