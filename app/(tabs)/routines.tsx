import { RoutineCard } from "@/src/components/Routine";
import { theme, txtStyles } from "@/src/styles/theme";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Routines() {
	const routinesData = [
		{ id: "1", name: "Acordar", time: "07" },
		{ id: "2", name: "Calistenia", time: "30" },
	];

	return (
		<>
			<View style={styles.viewContainer}>
				<Text style={txtStyles.h1}>Rotinas</Text>
				<Text style={txtStyles.h3}>Todas Rotinas</Text>

				<FlatList
					data={routinesData}
					keyExtractor={(item) => item.id}
					renderItem={({ item }) => (
						<RoutineCard name={item.name} time={item.time} />
					)}
					ItemSeparatorComponent={() => (
						<View style={styles.separator} />
					)}
					ListHeaderComponent={null}
				/>
			</View>
		</>
	);
}

const styles = StyleSheet.create({
	viewContainer: {
		padding: theme.spacing.d,
		gap: theme.spacing.b,
		marginBottom: theme.spacing.e,
		backgroundColor: theme.colors.background,
		flex: 1,
	},
	separator: {
		height: theme.spacing.c,
	},
});
