import { Button, ButtonIcon } from "@/src/components/Button";
import { Input } from "@/src/components/Input";
import { layouts, theme, txtStyles } from "@/src/styles/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function LoginScreen() {
	// Login logic here
	const router = useRouter();

	const handleEnter = () => {
		// Front-end mock: bypass API check and enter the app directly
		router.replace("/(tabs)");
	};

	return (
		<View style={[layouts.dadContainer, styles.container]}>
			<View style={styles.backButton}>
				<ButtonIcon
					name="arrow-back"
					bgColor="transparent"
					color={theme.colors.text}
					onPress={() => router.back()}
					style={{ padding: 0 }}
				/>
			</View>
			<Image
				source={require("@/assets/images/alcoholism_has_got_me.jpg")}
				style={styles.logo}
			/>
			<Text style={txtStyles.h1}>Login</Text>

			<View style={styles.inputContainer}>
				<View style={styles.inputItem}>
					<Text style={txtStyles.p}>E-mail</Text>
					<Input placeholder="Digite seu e-mail" />
				</View>
				<View style={styles.inputItem}>
					<Text style={txtStyles.p}>Senha</Text>
					<Input placeholder="Digite sua senha" />
				</View>
			</View>

			<Button label="Entrar" onPress={handleEnter} />

			<TouchableOpacity
				onPress={() => router.replace("/register")}
				style={styles.registerLink}
			>
				<Text style={txtStyles.p}>Novo usuário?</Text>
				<Text style={[txtStyles.p, styles.link]}>
					Faça seu cadastro
				</Text>

				<MaterialIcons
					name="arrow-forward"
					size={20}
					color={theme.colors.text}
				/>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "space-between",
		backgroundColor: theme.colors.background,
		paddingHorizontal: 50,
	},
	backButton: {
		alignItems: "flex-start",
		width: "100%",
		// backgroundColor: "red",
		// marginTop: 20,
	},
	logo: {
		width: 100,
		height: 100,
		borderRadius: 100,
		marginBottom: 20,
	},
	inputContainer: {
		width: "100%",
		// maxWidth: 400,
		gap: theme.spacing.d,
	},
	inputItem: {
		gap: theme.spacing.b,
	},
	registerLink: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "space-between",
		gap: theme.spacing.b,
		// marginTop: 20,
	},
	link: {
		color: theme.colors.primary,
		textDecorationLine: "underline",
	},
});
