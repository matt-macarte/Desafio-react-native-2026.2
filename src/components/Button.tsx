import React from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";
import { theme, txtStyles } from "../styles/theme";

type ButtonProps = TouchableOpacityProps & { label?: string | React.ReactNode };

export function Button({ label, ...rest }: ButtonProps) {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			{...rest}
			style={styles.container}
		>
			{label ? <Text style={txtStyles.h4}>{label}</Text> : null}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: theme.spacing.b,
		paddingHorizontal: theme.spacing.c,
		borderRadius: theme.borderRadius.m,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: theme.spacing.b,
	},
});
