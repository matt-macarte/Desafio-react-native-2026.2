import { Button } from "@/src/components/Button";
import { Text } from "@/src/components/Text";
import { AntDesign } from "@expo/vector-icons";
import React from "react";
import { StyleSheet, View } from "react-native";
import { theme } from "../styles/theme";
import { CANONICAL_HOURS } from "./Globals";

export const RoutineCard = ({
	name,
	time,
	canonicalHour,
}: {
	name: string;
	time?: string;
	canonicalHour?: (typeof CANONICAL_HOURS)[keyof typeof CANONICAL_HOURS];
}) => {
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<Text variant="h4">{name}</Text>
				<IconText
					variant="p"
					info={time ? time : "0:00"}
					icon="clock-circle"
					type="primary"
				/>
			</View>
			<Button variant="icon" title="" icon="play" onPress={() => {}} />
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: theme.colors.card,
		flexDirection: "row",
		justifyContent: "space-between",
		padding: theme.spacing.d,
		borderRadius: theme.borderRadius.l,
		gap: theme.spacing.b,
		boxShadow: "-2px 4px 4px " + theme.colors.cardShadow,
	},
	content: {
		gap: theme.spacing.b,
	},
});

export const IconText = ({
	icon,
	variant,
	info,
	type,
}: {
	icon: keyof typeof AntDesign.glyphMap;
	variant: keyof typeof theme.typography;
	info: string;
	type?: "primary" | "secondary";
}) => {
	const cor = type ? theme.colors[type] : theme.colors.text;

	return (
		<View
			style={{
				flexDirection: "row",
				alignItems: "center",
				gap: theme.spacing.b,
			}}
		>
			<AntDesign name={icon} size={theme.iconSize.s} color={cor} />
			<Text
				variant={variant}
				style={{ alignItems: "center" }}
				color={cor}
			>
				{info}
			</Text>
		</View>
	);
};

export const Action = ({
	name,
	duration,
}: {
	name: string;
	duration: string;
}) => {
	return (
		<View>
			<Text variant="p">{name}</Text>
			<Text variant="p">{duration}</Text>
		</View>
	);
};
