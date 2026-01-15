import { View, Text, StyleSheet, Image } from "react-native";
import Animated, {
  useAnimatedStyle,
  interpolate,
  Extrapolate,
} from "react-native-reanimated";
import type { SharedValue } from "react-native-reanimated";
import { colors, typography, spacing } from "../../theme";

type HeroProps = {
  scrollY: SharedValue<number>;
};

export function Hero({ scrollY }: HeroProps) {
  const imageAnimatedStyle = useAnimatedStyle(() => {
    const translateY = interpolate(
      scrollY.value,
      [0, 300],
      [0, -60],
      Extrapolate.CLAMP
    );

    const scale = interpolate(
      scrollY.value,
      [0, 300],
      [1, 0.9],
      Extrapolate.CLAMP
    );

    const opacity = interpolate(
      scrollY.value,
      [0, 200],
      [1, 0.6],
      Extrapolate.CLAMP
    );

    return {
      transform: [{ translateY }, { scale }],
      opacity,
    };
  });

  return (
    <View style={styles.container}>
      <Text style={styles.title}>iPhone</Text>
      <Text style={styles.subtitle}>Conheça a linha iPhone.</Text>

      <Animated.View style={[styles.imageWrapper, imageAnimatedStyle]}>
        <Image
          source={{
            uri: "https://www.apple.com/v/iphone/home/bu/images/overview/hero/iphone_family__f5uqx1n4p6eu_large.png",
          }}
          style={styles.image}
          resizeMode="contain"
        />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: spacing.xxl,
    paddingBottom: spacing.xxl,
    alignItems: "center",
    backgroundColor: colors.background,
  },
  title: {
    ...typography.titleLarge,
    color: colors.textPrimary,
  },
  subtitle: {
    marginTop: spacing.sm,
    ...typography.body,
    color: colors.textSecondary,
    textAlign: "center",
  },
  imageWrapper: {
    marginTop: spacing.xl,
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 260,
  },
});
