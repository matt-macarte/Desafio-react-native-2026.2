import { Text } from "@/src/components/Text";
import { theme } from "@/src/styles/theme";
import { View } from "react-native";

export default function Routines() {
	return (
		<View
			style={{
				backgroundColor: theme.colors.background,
				padding: theme.spacing.md,
			}}
		>
			<Text variant="headingLg">Rotinas</Text>

			<Text variant="bodySm">Todas suas rotinas</Text>
		</View>
	);
}
