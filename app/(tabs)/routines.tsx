import { RoutineModal } from "@/src/components/modals/RoutineModal";
import { RoutineCard } from "@/src/components/RoutineCard";
import { layouts, theme, txtStyles } from "@/src/styles/theme";
import { useState } from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";

export default function Routines() {
    const routinesData = [
        { id: "1", name: "Acordar", time: "07" },
        { id: "2", name: "Calistenia", time: "30" },
    ];

    const [isModalVisible, setModalVisible] = useState(false);
    const [routines, setRoutines] = useState([]);

    return (
        <>
            <View style={[layouts.dadContainer, styles.viewContainer]}>
                <Text style={txtStyles.h1}>Rotinas</Text>
                <Text style={txtStyles.h3}>Todas Rotinas</Text>

                <FlatList
                    data={routinesData}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <RoutineCard
                            onPress={() => setModalVisible(true)}
                            name={item.name}
                            time={item.time}
                        />
                    )}
                    ItemSeparatorComponent={() => (
                        <View style={styles.separator} />
                    )}
                    ListHeaderComponent={null}
                />
                <RoutineModal
                    visible={isModalVisible}
                    onClose={() => setModalVisible(false)}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        gap: theme.spacing.b,
        marginBottom: theme.spacing.e,
        backgroundColor: theme.colors.background,
        flex: 1,
    },
    separator: {
        height: theme.spacing.c,
    },
});
