import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import React from "react";
import {
	StyleSheet,
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
} from "react-native";
import { theme, txtStyles } from "../styles/theme";

type ButtonProps = TouchableOpacityProps & {
	name?: keyof typeof MaterialIcons.glyphMap;
	label?: string | React.ReactNode;
	color?: string;
};

export function ButtonIcon({ name, label, ...rest }: ButtonProps) {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			{...rest}
			style={styles.container}
		>
			{name ? (
				<MaterialIcons
					name={name}
					size={32}
					color={theme.colors.text}
				/>
			) : null}
			{label ? <Text style={txtStyles.p1}>{label}</Text> : null}
		</TouchableOpacity>
	);
}

export function SimpleButtonIcon({
	color = theme.colors.text,
	name,
	label,
	...rest
}: ButtonProps) {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			{...rest}
			style={[styles.containerSimple]}
		>
			{name ? (
				<MaterialIcons name={name} size={32} color={color} />
			) : null}
			{label ? (
				<Text style={[txtStyles.p1, { color }]}>{label}</Text>
			) : null}
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
	containerSimple: {
		flexDirection: "row",
		alignItems: "center",
		gap: theme.spacing.b,
	},
});
