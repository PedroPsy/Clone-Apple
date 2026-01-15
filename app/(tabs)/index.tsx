import { View } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedScrollHandler,
} from "react-native-reanimated";

import { Header } from "../../components/Header";
import { Hero } from "../../components/Hero";
import { ProductCard } from "../../components/ProductCard";
import { PRODUCTS } from "../../constants/products"; 
import { useTheme } from "../../theme/useTheme";


export default function Home() {
  const colors = useTheme(); 
  const scrollY = useSharedValue(0);

  const onScroll = useAnimatedScrollHandler({
    onScroll: (event) => {
      scrollY.value = event.contentOffset.y;
    },
  });

  return (
    <View style={{ flex: 1, backgroundColor: colors.background }}>
      <Header />

      <Animated.ScrollView
        onScroll={onScroll}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: 64 }}
      >
        <Hero scrollY={scrollY} />

        <View style={{ paddingHorizontal: 16 }}>
          {/* Mapeando os produtos dinamicamente */}
          {PRODUCTS.map((product, index) => (
            <ProductCard
              key={product.id}
              id={product.id}
              index={index}
              name={product.name}
              description={product.description}
              image={product.image}
            />
          ))}
        </View>
      </Animated.ScrollView>
    </View>
  );
}