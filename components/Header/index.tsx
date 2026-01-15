import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { spacing, typography } from "../../theme";
import { useTheme } from "../../theme";


export function Header() {
  const colors = useTheme(); // ✅ agora é dinâmico

  return (
    <SafeAreaView style={{ backgroundColor: colors.background }}>
      <View
        style={[
          styles.container,
          { borderBottomColor: colors.textSecondary },
        ]}
      >
        <Text style={[styles.logo, { color: colors.textPrimary }]}>
          
        </Text>

        <Text style={[styles.title, { color: colors.textPrimary }]}>
          iPhone
        </Text>

        <View style={{ width: 24 }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 56,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: spacing.md,
    borderBottomWidth: 0.5,
  },
  logo: {
    fontSize: 22,
    fontWeight: "600",
  },
  title: {
    ...typography.body,
    fontWeight: "600",
  },
});

