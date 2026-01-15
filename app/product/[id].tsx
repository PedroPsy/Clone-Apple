import { View, Text, StyleSheet, Image } from "react-native";
import { useLocalSearchParams, Stack } from "expo-router";
import Animated, { FadeInDown } from "react-native-reanimated";
import { colors, typography, spacing } from "../../theme";

const products: Record<string, any> = {
  "iphone-15-pro": {
    name: "iPhone 15 Pro",
    description: "O iPhone mais avançado já criado.",
    image:
      "https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_15_pro__f4p0p0xk6w2y_large.png",
  },
  "iphone-15": {
    name: "iPhone 15",
    description: "Inovação em cada detalhe.",
    image:
      "https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_15__e0tw6kz6l4ya_large.png",
  },
  "iphone-se": {
    name: "iPhone SE",
    description: "Potência incrível em um design compacto.",
    image:
      "https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_se__cuaa2bdndqeu_large.png",
  },
};

export default function ProductDetail() {
  const { id } = useLocalSearchParams();
  const product = products[id as string];

  if (!product) return null;

  return (
    <>
      <Stack.Screen
        options={{
          title: product.name,
          headerBackTitle: "Voltar",
        }}
      />

      <View style={styles.container}>
        <Animated.Image
          entering={FadeInDown.duration(600)}
          source={{ uri: product.image }}
          style={styles.image}
          resizeMode="contain"
        />

        <Animated.Text
          entering={FadeInDown.delay(150)}
          style={styles.title}
        >
          {product.name}
        </Animated.Text>

        <Animated.Text
          entering={FadeInDown.delay(300)}
          style={styles.description}
        >
          {product.description}
        </Animated.Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 300,
    marginTop: spacing.xl,
  },
  title: {
    marginTop: spacing.lg,
    ...typography.titleMedium,
    color: colors.textPrimary,
  },
  description: {
    marginTop: spacing.md,
    ...typography.body,
    color: colors.textSecondary,
    textAlign: "center",
    maxWidth: 320,
  },
});
