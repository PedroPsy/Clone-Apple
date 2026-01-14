import { View, Text, StyleSheet, Image } from "react-native";

export function Hero() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>iPhone</Text>

      <Text style={styles.subtitle}>
        Conheça a linha iPhone.
      </Text>

      <Image
        source={{
          uri: "https://www.apple.com/v/iphone/home/bu/images/overview/hero/iphone_family__f5uqx1n4p6eu_large.png",
        }}
        style={styles.image}
        resizeMode="contain"
      />
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
  image: {
    marginTop: 40,
    width: "100%",
    height: 260,
  },
});
