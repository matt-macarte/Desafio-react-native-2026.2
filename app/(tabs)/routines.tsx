import { Text } from "@/src/components/Text";
import { theme } from "@/src/styles/theme";
import { Feather } from "@expo/vector-icons";
import { ScrollView, View } from "react-native";

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
				<Text variant="h1">Rotinas</Text>

				<Text variant="p">Todas suas rotinas aqui</Text>
			</View>
			<View>
				<Feather name="moon" size={18} color={theme.colors.primary} />
				<Text variant="p">Todas suas rotinas aqui</Text>
			</View>
		</ScrollView>
	);
}
