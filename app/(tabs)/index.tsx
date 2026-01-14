import { ScrollView, View, Text } from "react-native";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";


export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />

      <ScrollView>
        <Hero />
      </ScrollView>
    </View>
  );
}
