import { ButtonIcon } from "@/src/components/Button";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { theme, txtStyles } from "../styles/theme";
import { CANONICAL_HOURS } from "./Globals";

export interface RoutineCardProps {
    name: string;
    time?: string;
    canonicalHour?: (typeof CANONICAL_HOURS)[keyof typeof CANONICAL_HOURS];
    onPress?: () => void;
}

export const RoutineCard = ({
    name,
    time,
    canonicalHour,
    onPress,
}: RoutineCardProps) => {
    return (
        <TouchableOpacity
            activeOpacity={0.7}
            onPress={onPress}
            style={styles.container}
        >
            <View style={styles.content}>
                <Text style={txtStyles.h4}>{name}</Text>
                <View style={styles.time}>
                    <AntDesign
                        name="clock-circle"
                        size={theme.iconSize.s}
                        color={theme.colors.primary}
                    />
                    <Text
                        style={[txtStyles.p2, { color: theme.colors.primary }]}
                    >
                        {time ? time + "min" : "0 min"}
                    </Text>
                </View>
            </View>
            <ButtonIcon name="play-arrow" color={theme.colors.text} />
        </TouchableOpacity>
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
    time: {
        flexDirection: "row",
        alignItems: "center",
        gap: theme.spacing.b,
    },
});

export const Action = ({
    name,
    duration,
}: {
    name: string;
    duration: string;
}) => {
    return (
        <View>
            <Text style={txtStyles.h4}>{name}</Text>
            <Text style={txtStyles.p}>{duration}</Text>
        </View>
    );
};
