import { theme, txtStyles } from "@/src/styles/theme";
import { Feather } from "@expo/vector-icons";
import { ScrollView, Text, View } from "react-native";

export default function Routines() {
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
				<Text style={txtStyles.h1}>Rotinas</Text>

				<Text style={txtStyles.p}>Todas suas rotinas aqui</Text>
			</View>
			<View>
				<Feather name="moon" size={18} color={theme.colors.primary} />
				<Text style={txtStyles.p}>Todas suas rotinas aqui</Text>
			</View>
		</ScrollView>
	);
}
