import { Button } from "@/src/components/Button";
import { layouts, theme, txtStyles } from "@/src/styles/theme";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";

export default function WelcomeScreen() {
	const router = useRouter();
	// hiii

	return (
		<LinearGradient
			colors={theme.gradients.bgGradient}
			start={{ x: 1, y: 0 }}
			end={{ x: 1, y: 1 }}
			style={[layouts.dadContainer, styles.page]}
		>
			<View></View>
			<View style={styles.welcome}>
				<Image
					source={require("@/assets/images/alcoholism_has_got_me.jpg")}
					style={styles.logo}
				/>
				<Text style={txtStyles.h1}>Rotineiro</Text>
				<View style={styles.description}>
					<Text style={[txtStyles.p, { textAlign: "center" }]}>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua.
					</Text>
					<Text style={[txtStyles.p, { textAlign: "center" }]}>
						Ut enim ad minim veniam, quis nostrud exercitation
						ullamco laboris nisi ut aliquip ex ea commodo consequat.
					</Text>
				</View>
			</View>
			<View style={styles.options}>
				<Button
					label="Registrar"
					bgColor="transparent"
					color={theme.colors.text}
					onPress={() => router.push("/register")}
				/>
				<Button label="Entrar" onPress={() => router.push("/login")} />
			</View>
		</LinearGradient>
	);
}

const styles = StyleSheet.create({
	logo: {
		width: 120,
		height: 120,
		borderRadius: 100,
	},
	page: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between",
	},
	welcome: {
		alignItems: "center",
		gap: 40,
	},
	description: {
		gap: theme.spacing.c,
		paddingHorizontal: 30,
	},
	options: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: theme.spacing.d,
		width: "100%",
	},
});
