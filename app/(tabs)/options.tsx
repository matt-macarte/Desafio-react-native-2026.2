import { theme, txtStyles } from "@/src/styles/theme";
import { ScrollView, Text, View } from "react-native";

export default function Options() {
	return (
		<ScrollView
			contentContainerStyle={{
				backgroundColor: theme.colors.background,
				padding: theme.spacing.d,
				flex: 1,
				gap: theme.spacing.e,
			}}
		>
			<View>
				<Text style={txtStyles.h1}>Configurações</Text>

				<Text style={txtStyles.p}>omg hiii</Text>
			</View>
		</ScrollView>
	);
}
