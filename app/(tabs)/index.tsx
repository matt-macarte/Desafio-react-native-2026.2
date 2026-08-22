import { Text } from "@/src/components/Text";
import { theme } from "@/src/styles/theme";
import { LinearGradient } from "expo-linear-gradient";
import { View } from "react-native";

export default function Index() {
	return (
		<LinearGradient
			colors={theme.gradients.bgGradient}
			start={{ x: 1, y: 0 }} // Início (90deg aprox -> horizontal)
			end={{ x: 1, y: 1 }} // Fim
			style={{ flex: 1 }}
		>
			<View
				style={{
					flex: 1,
					justifyContent: "center",
					alignItems: "center",
				}}
			>
				<Text variant="bodySm" color="text">
					caralho AAAAAAAAA muito zika.
				</Text>
			</View>
		</LinearGradient>
	);
}
