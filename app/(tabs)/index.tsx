import { ScrollView, View, Text } from "react-native";
import { Header } from "../../components/Header";

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />

      <ScrollView>
        <View style={{ padding: 24 }}>
          <Text style={{ fontSize: 32, fontWeight: "600" }}>
            iPhone
          </Text>

          <Text style={{ marginTop: 12, fontSize: 16, color: "#6e6e73" }}>
            Conheça todos os modelos de iPhone.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}
