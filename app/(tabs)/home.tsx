import { RoutineCard } from "@/src/components/Routine";
import { layouts, theme, txtStyles } from "@/src/styles/theme";
import { AntDesign } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function Home() {
	return (
		<LinearGradient
			colors={theme.gradients.bgGradient}
			start={{ x: 1, y: 0 }}
			end={{ x: 1, y: 1 }}
			style={[layouts.dadContainer, { flex: 1 }]}
		>
			<ScrollView contentContainerStyle={styles.page}>
				<View style={styles.welcomeText}>
					<Text style={txtStyles.h1}>Bem-vindo,</Text>
					<Text style={txtStyles.h1}>Matheus</Text>
				</View>
				<View style={styles.dayInfoContainer}>
					<View style={styles.weatherRow}>
						<View style={{ transform: [{ rotate: "-100deg" }] }}>
							<AntDesign
								name="moon"
								size={56}
								color={theme.colors.primary}
							/>
						</View>

						<Text style={txtStyles.h2}>19°C</Text>
					</View>
					<View style={styles.dayRow}>
						<Text style={[txtStyles.p2, { fontSize: 18 }]}>
							Segunda-feira, 23 de agosto de 2026
						</Text>
					</View>
				</View>

				{/* <View>
					<Text style={txtStyles.p}>
						partes terças do dia vem aqui
					</Text>
				</View> */}

				<View>
					<Text style={txtStyles.h3}>Rotinas</Text>
				</View>
				<RoutineCard name="Acordar" time="07" />
				<RoutineCard name="Calistenia" time="30" />
			</ScrollView>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	page: {
		// padding: theme.spacing.d,
		gap: theme.spacing.d,
		backgroundColor: "none",
	},
	welcomeText: {
		gap: theme.spacing.c,
	},
	dayInfoContainer: {
		padding: theme.spacing.e,
		alignItems: "center",
		gap: theme.spacing.c,
	},
	weatherRow: {
		flexDirection: "row",
		alignItems: "center",
		gap: theme.spacing.b,
		padding: theme.spacing.b,
		width: "100%",
	},
	dayRow: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		width: "100%",
	},
});
