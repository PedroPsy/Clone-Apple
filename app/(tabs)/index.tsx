import { ScrollView, View } from "react-native";
import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { ProductCard } from "../../components/ProductCard";

export default function Home() {
  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />

      <ScrollView contentContainerStyle={{ paddingBottom: 64 }}>
        <Hero />

        <View style={{ paddingHorizontal: 16 }}>
              <ProductCard
                index={0}
                name="iPhone 15 Pro"
                description="O iPhone definitivo. Design em titânio. O chip mais poderoso."
                image="https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_15_pro__f4p0p0xk6w2y_large.png"
              />
              <ProductCard
                index={1}
                name="iPhone 15"
                description="Uma nova câmera de 48 MP. Design incrível. Tudo em um só."
                image="https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_15__e0tw6kz6l4ya_large.png"
              />
              <ProductCard
                index={2}
                name="iPhone SE"
                description="Potência incrível em um design clássico."
                image="https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_se__cuaa2bdndqeu_large.png"
              />

        </View>
      </ScrollView>
    </View>
  );
}
