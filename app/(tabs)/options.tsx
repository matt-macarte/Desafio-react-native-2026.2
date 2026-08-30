import { SimpleButtonIcon } from "@/src/components/Button";
import { layouts, theme, txtStyles } from "@/src/styles/theme";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";

export default function Options() {
	return (
		<ScrollView
			contentContainerStyle={[
				layouts.dadContainer,
				{
					// backgroundColor: theme.colors.background,
					// padding: theme.spacing.d,
					flex: 1,
					flexGrow: 1,
					gap: theme.spacing.f,
				},
			]}
		>
			<View>
				<Text style={txtStyles.h1}>Menu</Text>
			</View>
			<View style={styles.user}>
				<Image
					source={require("@/assets/images/alcoholism_has_got_me.jpg")}
					style={styles.userPic}
				/>
				<View style={styles.userInfo}>
					<Text style={[txtStyles.p, styles.userName]}>
						Matheus de Almeida Campos
					</Text>
					<Text style={txtStyles.sub}>Entrou em: 05/08/2026</Text>
				</View>
			</View>
			<View style={styles.optionsContainer}>
				<View style={styles.options}>
					<Text style={txtStyles.h2}>Opções</Text>
					<SimpleButtonIcon
						style={styles.btn}
						label="Editar Perfil"
						name="person"
					/>
					<SimpleButtonIcon
						style={styles.btn}
						label="Preferências"
						name="settings"
					/>
					<SimpleButtonIcon
						style={styles.btn}
						label="Gerenciar Ações"
						name="dashboard"
					/>
				</View>

				<SimpleButtonIcon
					style={styles.btn}
					label="Sair"
					name="logout"
					color={theme.colors.danger}
				/>
				<View>
					<SimpleButtonIcon
						style={styles.btn}
						label="Sobre"
						name="info"
					/>
					<Text style={txtStyles.sub}>Versão 0.0.8 alpha</Text>
				</View>
			</View>
		</ScrollView>
	);
}

const styles = StyleSheet.create({
	// header: {
	// 	paddingTop: 32,
	// },
	user: {
		gap: theme.spacing.d,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		width: "100%",
		padding: theme.spacing.b,
		// flexWrap: "wrap",
		// height: "90",
	},
	userPic: {
		width: 92,
		height: 92,
		backgroundColor: theme.colors.primary,
		borderRadius: 100,
		// flex: 1,
	},
	userName: {
		fontSize: 22,
		// fontWeight: "normal",
		// flexShrink: 1,
		// flex: 1,
		// flexWrap: "wrap",

		// width: "100%",
	},
	userInfo: {
		gap: theme.spacing.c,
		// justifyContent: "space-between",
		// width: "100%",
		// height: "100%",
		// flexWrap: "wrap",
		// flex: 2,
		flexShrink: 1,
	},
	// baixo
	optionsContainer: {
		gap: "48",
		// justifyContent: "space-between",
		// height: "100%",
	},
	options: {
		gap: theme.spacing.c,
	},
	btn: {
		gap: theme.spacing.c,
		flexDirection: "row",
		alignItems: "flex-start",
		justifyContent: "flex-start",
		width: "100%",
		// height: "auto",
	},
	about: {
		flex: 1,
		flexDirection: "column",
	},
});
