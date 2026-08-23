import { Text } from "@/src/components/Text";
import { theme } from "@/src/styles/theme";
import { ScrollView, View } from "react-native";

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
				<Text variant="h1">Configurações</Text>

				<Text variant="p">omg hiii</Text>
			</View>
		</ScrollView>
	);
}
