import { View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { ProductCard } from "../../components/ProductCard";

export default function Home() {
  const scrollY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <View style={{ flex: 1, backgroundColor: "#fff" }}>
      <Header />

      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: 64 }}
      >
        <Hero scrollY={scrollY} />

        <View style={{ paddingHorizontal: 16 }}>
          <ProductCard
              id="iphone-15-pro"
              index={0}
              name="iPhone 15 Pro"
              description="O iPhone definitivo. Design em titânio."
              image="https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_15_pro__f4p0p0xk6w2y_large.png"
            />

            <ProductCard
              id="iphone-15"
              index={1}
              name="iPhone 15"
              description="Uma nova câmera de 48 MP."
              image="https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_15__e0tw6kz6l4ya_large.png"
            />

            <ProductCard
              id="iphone-se"
              index={2}
              name="iPhone SE"
              description="Design clássico. Potência incrível."
              image="https://www.apple.com/v/iphone/home/bu/images/overview/select/iphone_se__cuaa2bdndqeu_large.png"
            />

        </View>
      </Animated.ScrollView>
    </View>
  );
}
