import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import  {colors}  from "../../theme";

export function Header() {
  return (
    <SafeAreaView style={styles.safe}>
      <View style={styles.container}>
        <TouchableOpacity>
          <Text style={styles.logo}></Text>
        </TouchableOpacity>

        <Text style={styles.title}>iPhone</Text>

        <View style={{ width: 24 }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    backgroundColor: colors.background,
  },
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: "#e5e5e5",
  },
  logo: {
    fontSize: 22,
    fontWeight: "600",
  },
  title: {
    fontSize: 17,
    fontWeight: "600",
  },
});
