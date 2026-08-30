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
	bgColor?: string;
};

export function ButtonIcon({
	color = theme.colors.background,
	name,
	label,
	bgColor,
	...rest
}: ButtonProps) {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			{...rest}
			style={[styles.container, { backgroundColor: bgColor }]}
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

export function Button({
	color = theme.colors.background,
	name,
	label,
	bgColor = theme.colors.primary,
	...rest
}: ButtonProps) {
	return (
		<TouchableOpacity
			activeOpacity={0.7}
			{...rest}
			style={[styles.containerSimple, { backgroundColor: bgColor }]}
		>
			{name ? (
				<MaterialIcons name={name} size={32} color={color} />
			) : null}
			{label ? (
				<Text
					style={[
						txtStyles.btn,
						{ color },
						bgColor == "transparent"
							? { textDecorationLine: "underline" }
							: {},
					]}
				>
					{label}
				</Text>
			) : null}
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: theme.spacing.b,
		paddingHorizontal: theme.spacing.c,

		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: theme.spacing.b,
	},
	containerSimple: {
		paddingVertical: theme.spacing.b,
		paddingHorizontal: theme.spacing.c,
		borderRadius: 32,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		gap: theme.spacing.b,
		backgroundColor: theme.colors.primary,
	},
});
