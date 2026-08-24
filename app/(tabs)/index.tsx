import { RoutineCard } from "@/src/components/Routine";
import { Text } from "@/src/components/Text";
import { theme } from "@/src/styles/theme";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, View } from "react-native";

export default function Index() {
	return (
		<LinearGradient
			colors={theme.gradients.bgGradient}
			start={{ x: 1, y: 0 }}
			end={{ x: 1, y: 1 }}
			style={{ flex: 1 }}
		>
			<ScrollView
				contentContainerStyle={{
					padding: theme.spacing.d,
					// flex: 1,
					gap: theme.spacing.e,
				}}
			>
				<View>
					<Text
						variant="h1"
						style={{
							fontFamily: theme.fonts.hostGrotesk.italic,
						}}
					>
						Bem-vindo,
					</Text>
					<Text variant="h1">Matheus</Text>
					<Text variant="p">caralho AAAAAAAAA muito zika.</Text>
				</View>
				<View style={styles.weatherRow}>
					<View style={{ transform: [{ rotate: "-100deg" }] }}>
						<AntDesign
							name="moon"
							size={32}
							color={theme.colors.primary}
						/>
					</View>

					<Text variant="h1" style={{ fontSize: 36 }}>
						19℃
					</Text>
				</View>
				<View>
					<Text variant="h6">partes terças do dia vem aqui</Text>
				</View>

				<View>
					<Text variant="h2">Rotinas</Text>

					<Text variant="h4">rotinas aqui</Text>
				</View>
				<RoutineCard name="Acordar" time="07:00" />
			</ScrollView>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	weatherRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: theme.spacing.b,
	},
});
