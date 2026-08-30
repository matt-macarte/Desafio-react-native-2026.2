import { StyleSheet, TextInput, TextInputProps } from "react-native";
import { theme } from "../styles/theme";

export function Input(props: TextInputProps) {
	return (
		<TextInput
			style={styles.input}
			placeholderTextColor={theme.colors.muted}
			placeholder="Digite aqui..."
			{...props}
		/>
	);
}

const styles = StyleSheet.create({
	input: {
		width: "100%",
		minHeight: 40,
		backgroundColor: theme.colors.secondary50,
		padding: 12,
		borderRadius: theme.borderRadius.l,
		color: theme.colors.text,
	},
});
