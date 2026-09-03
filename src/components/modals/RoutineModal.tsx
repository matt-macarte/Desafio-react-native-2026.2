import { Button } from "@/src/components/Button";
import { theme, txtStyles } from "@/src/styles/theme";
import { Modal, StyleSheet, Text, View } from "react-native";

interface RoutineModalProps {
    visible: boolean;
    onClose: () => void;
}

export function RoutineModal({ visible, onClose }: RoutineModalProps) {
    return (
        <Modal
            visible={visible}
            transparent={true}
            animationType="slide"
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>
                <View style={styles.modalContainer}>
                    <Text style={txtStyles.h4}>New Routine</Text>

                    {/* Form inputs or details go here */}

                    <Button label="Close" onPress={onClose} />
                </View>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Dims background content
        justifyContent: "center",
        alignItems: "center",
        padding: theme.spacing.d,
    },
    modalContainer: {
        width: "100%",
        backgroundColor: theme.colors.background,
        borderRadius: theme.borderRadius.l,
        padding: theme.spacing.d,
        gap: theme.spacing.c,
    },
});
