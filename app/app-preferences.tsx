import { Button } from "@/src/components/Button";
import { layouts, theme, txtStyles } from "@/src/styles/theme";
import { useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, StyleSheet, Switch, Text, View } from "react-native";

export default function Preferences() {
    const [isDarkModeOn, setIsDarkModeOn] = useState(true);
    const [isSoundOn, setIsSoundOn] = useState(true);
    const [isNotificationOn, setIsNotificationOn] = useState(true);
    const router = useRouter();
    return (
        <ScrollView contentContainerStyle={[layouts.dadContainer, styles.page]}>
            <View>
                <Button
                    name="arrow-left"
                    color={theme.colors.text}
                    onPress={() => router.back()}
                    style={styles.btn}
                    bgColor="transparent"
                />
                <Text style={txtStyles.h1}>Preferências</Text>
            </View>
            <View style={styles.optionsContainer}>
                <View style={styles.options}>
                    <Text style={txtStyles.p2}>Modo Escuro</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isDarkModeOn ? "#f5dd4d" : "#f4f3f4"}
                        onValueChange={setIsDarkModeOn}
                        value={isDarkModeOn}
                    />
                </View>
                <View style={styles.options}>
                    <Text style={txtStyles.p2}>Som</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isSoundOn ? "#f5dd4d" : "#f4f3f4"}
                        onValueChange={setIsSoundOn}
                        value={isSoundOn}
                    />
                </View>
                <View style={styles.options}>
                    <Text style={txtStyles.p2}>Notificações</Text>
                    <Switch
                        trackColor={{ false: "#767577", true: "#81b0ff" }}
                        thumbColor={isNotificationOn ? "#f5dd4d" : "#f4f3f4"}
                        onValueChange={setIsNotificationOn}
                        value={isNotificationOn}
                    />
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    page: {
        // backgroundColor: theme.colors.background,
        // padding: theme.spacing.d,
        flex: 1,
        flexGrow: 1,
        // justifyContent: "space-between",
        gap: theme.spacing.g,
    },
    btn: {
        alignSelf: "baseline",
        paddingHorizontal: 0,
        paddingVertical: 0,
    },
    optionsContainer: {
        gap: theme.spacing.e,
    },
    options: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
});
