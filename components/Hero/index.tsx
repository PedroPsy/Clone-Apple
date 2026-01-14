import { View, Text, StyleSheet, Image } from "react-native";
import Animated, {
  FadeInDown,
} from "react-native-reanimated";

export function Hero() {
  return (
    <View style={styles.container}>
      <Animated.Text
        entering={FadeInDown.duration(600).springify()}
        style={styles.title}
      >
        iPhone
      </Animated.Text>

      <Animated.Text
        entering={FadeInDown.delay(150).duration(600)}
        style={styles.subtitle}
      >
        Conheça a linha iPhone.
      </Animated.Text>

      <Animated.View
        entering={FadeInDown.delay(300).duration(700)}
        style={styles.imageWrapper}
      >
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
    paddingTop: 48,
    paddingBottom: 64,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 40,
    fontWeight: "600",
    letterSpacing: -0.5,
  },
  subtitle: {
    marginTop: 12,
    fontSize: 18,
    color: "#6e6e73",
    textAlign: "center",
  },
  imageWrapper: {
    marginTop: 40,
    width: "100%",
    alignItems: "center",
  },
  image: {
    width: "100%",
    height: 260,
  },
});
