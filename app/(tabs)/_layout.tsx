import { theme } from "@/src/styles/theme";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabsLayout() {
	return (
		<Tabs
			screenOptions={{
				headerShown: false,
				tabBarActiveTintColor: theme.colors.primary,
				tabBarActiveBackgroundColor: "#1B4BA080",
				tabBarInactiveTintColor: theme.colors.textSecondary,
				tabBarStyle: {
					backgroundColor: theme.colors.background,
					borderBlockColor: "white",
					borderTopWidth: 1,
				},
			}}
		>
			<Tabs.Screen
				name="routines"
				options={{
					title: "Rotinas",
					tabBarIcon: ({ color, size }) => (
						<Ionicons
							name="list-outline"
							size={size}
							color={color}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="index"
				options={{
					title: "início",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="home" size={size} color={color} />
					),
				}}
			/>
			<Tabs.Screen
				name="options"
				options={{
					title: "Opções",
					tabBarIcon: ({ color, size }) => (
						<Ionicons name="settings" size={size} color={color} />
					),
				}}
			/>
		</Tabs>
	);
}
