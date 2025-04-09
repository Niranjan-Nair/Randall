import React, { useState } from "react";
import { StyleSheet, View, Pressable, Text } from "react-native";
import Content from "@/components/Content";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useColorScheme } from "@/hooks/useColorScheme";
import { Colors } from "@/constants/Colors";

const dietaryOptions = ["Vegetarian", "Vegan", "Halal", "Kosher"];

export default function ProfileScreen() {
    const colorScheme = useColorScheme();
    const [preferences, setPreferences] = useState<boolean[]>([true, false, false, false]);

    const togglePreference = (index: number) => {
        const updated = [...preferences];
        updated[index] = !updated[index];
        setPreferences(updated);
    };

    return (
        <Content>
            {/* Top Bar */}
            <View style={styles.topBar}>
                <Pressable style={styles.topIcon}>
                    <Text style={styles.topIconText}>←</Text>
                </Pressable>
                <Text style={styles.topTitle}>Profile</Text>
                <Pressable style={styles.topIcon}>
                    <Text style={styles.topIconText}>⚙</Text>
                </Pressable>
            </View>

            {/* Profile Header */}
            <ThemedView style={styles.profileContainer}>
                <View style={styles.avatarPlaceholder} />
                <View style={styles.profileTextContainer}>
                    <Text style={styles.username}>@username</Text>
                    <Text style={styles.bio}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, s...
                    </Text>
                </View>
                <Pressable style={styles.editButton}>
                    <Text style={styles.editIcon}>✎</Text>
                </Pressable>
            </ThemedView>

            {/* Dietary Preferences Section */}
            <ThemedView style={styles.section}>
                <ThemedText type="subtitle" style={styles.sectionTitle}>
                    Dietary Preferences
                </ThemedText>

                {dietaryOptions.map((label, index) => (
                    <View key={index} style={styles.preferenceRow}>
                        <Text style={styles.preferenceLabel}>{label}</Text>
                        <Pressable
                            style={[
                                styles.checkBox,
                                preferences[index] && styles.checkBoxChecked
                            ]}
                            onPress={() => togglePreference(index)}
                        >
                            {preferences[index] && <Text style={styles.checkMark}>✓</Text>}
                        </Pressable>
                    </View>
                ))}
            </ThemedView>

            {/* My Fridge Section */}
            <ThemedView style={styles.section}>
                <ThemedText type="subtitle" style={styles.sectionTitle}>
                    My Fridge
                </ThemedText>

                {[1, 2, 3].map((_, index) => (
                    <View key={index} style={styles.ingredientRow}>
                        <Text style={styles.ingredientLabel}>Ingredient</Text>
                        <Text style={styles.ingredientAmount}>0g</Text>
                        <Pressable style={styles.iconButtonBlue}>
                            <Text style={styles.iconText}>✎</Text>
                        </Pressable>
                        <Pressable style={styles.iconButtonRed}>
                            <Text style={styles.iconText}>🗑</Text>
                        </Pressable>
                    </View>
                ))}

                <Pressable style={styles.addButton}>
                    <Text style={styles.addButtonText}>Add Ingredient</Text>
                </Pressable>
            </ThemedView>
        </Content>
    );
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 16,
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: "#444",
        marginBottom: 12,
    },
    topTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
        textAlign: "center",
        flex: 1,
    },
    topIcon: {
        width: 32,
        alignItems: "center",
    },
    topIconText: {
        fontSize: 18,
        color: "#fff",
    },

    profileContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
        padding: 12,
        borderRadius: 12,
        marginBottom: 20,
    },
    avatarPlaceholder: {
        width: 60,
        height: 60,
        borderRadius: 12,
        backgroundColor: "#ffffff",
        marginRight: 12,
    },
    profileTextContainer: {
        flex: 1,
    },
    username: {
        fontWeight: "bold",
        fontSize: 16,
        marginBottom: 4,
    },
    bio: {
        fontSize: 14,
        color: "#666",
    },
    editButton: {
        backgroundColor: "#A5C4FF",
        padding: 6,
        borderRadius: 8,
    },
    editIcon: {
        fontSize: 16,
        color: "#000",
    },
    section: {
        marginBottom: 24,
    },
    sectionTitle: {
        marginBottom: 12,
        fontWeight: "bold",
    },

    preferenceRow: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 12,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 10,
        gap: 8,
    },
    preferenceLabel: {
        fontSize: 16,
        color: "#000",
    },
    checkBox: {
        height: 24,
        width: 24,
        borderWidth: 2,
        borderRadius: 6,
        borderColor: "#ccc",
        alignItems: "center",
        justifyContent: "center",
    },
    checkBoxChecked: {
        backgroundColor: "#A5C4FF",
        borderColor: "#A5C4FF",
    },
    checkMark: {
        color: "#fff",
        fontSize: 16,
        fontWeight: "bold",
    },

    ingredientRow: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#fff",
        paddingVertical: 10,
        paddingHorizontal: 12,
        borderRadius: 10,
        marginBottom: 10,
        gap: 8,
    },
    ingredientLabel: {
        flex: 1,
        fontSize: 16,
    },
    ingredientAmount: {
        fontSize: 16,
        fontWeight: "bold",
        marginRight: 8,
    },
    iconButtonBlue: {
        backgroundColor: "#A5C4FF",
        padding: 6,
        borderRadius: 8,
    },
    iconButtonRed: {
        backgroundColor: "#F7B7B7",
        padding: 6,
        borderRadius: 8,
    },
    iconText: {
        fontSize: 16,
    },
    addButton: {
        marginTop: 10,
        backgroundColor: "#A5C4FF",
        paddingVertical: 12,
        borderRadius: 10,
        alignItems: "center",
    },
    addButtonText: {
        fontSize: 16,
        fontWeight: "bold",
        color: "#fff",
    },
});
