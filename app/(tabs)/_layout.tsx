import { theme } from "@/src/styles/theme";
import { Tabs } from "expo-router";

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: true,
				tabBarActiveTintColor: theme.colors.primary,
				tabBarInactiveTintColor: theme.colors.textSecondary,
				tabBarStyle: {
					backgroundColor: theme.colors.background,
					borderTopWidth: 0,
				},
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: "Rotinas",
				}}
			/>

			<Tabs.Screen
				name="create"
				options={{
					title: "Nova Rotina",
				}}
			/>
		</Tabs>
	);
}
