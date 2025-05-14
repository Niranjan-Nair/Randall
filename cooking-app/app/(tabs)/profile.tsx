import React, { useEffect, useState } from "react";
import { StyleSheet, View, Pressable, Text, ScrollView, TextInput } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { router } from "expo-router";
import * as SecureStore from "expo-secure-store";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "@/scripts/firebase";
import { ProfileData } from "@/constants/Types";

const dietaryOptions = ["Vegetarian", "Vegan", "Halal", "Kosher"];

export default function ProfileScreen() {
    const [userID, setUserID] = useState(uuidv4());

    const [profile, setProfile] = useState<ProfileData>({
        preferences: [false, false, false, false],
        bio: "Edit your bio here...",
        username: "@username",
        allergies: [],
    });

    async function getUser() {
        let uuid = userID;
        let id = (await SecureStore.getItemAsync("userid"))?.replaceAll(/^[\"\\]+|[\"\\]+$/g, "");

        if (id) {
            setUserID(id.replaceAll(/^[\"\\]+|[\"\\]+$/g, ""));
            uuid = id.replaceAll(/^[\"\\]+|[\"\\]+$/g, "");
        }

        await SecureStore.setItemAsync("userid", JSON.stringify(uuid).replaceAll(/^[\"\\]+|[\"\\]+$/g, ""));

        let snapshot = await getDoc(doc(db, `users/${uuid.replaceAll(/^[\"\\]+|[\"\\]+$/g, "")}`));

        if (snapshot.data()) {
            setProfile({...snapshot.data() as ProfileData});
        }
    }

    useEffect(() => {
        getUser();
    }, []);

    async function saveProfile(newProfile: ProfileData) {
        setDoc(doc(db, `/users/${userID}`), {...newProfile});
    }

    function setBio(bio: string) {
        saveProfile({...profile, bio: bio});
        setProfile({...profile, bio: bio});
    }

    function setUsername(username: string) {
        saveProfile({...profile, username: username});
        setProfile({...profile, username: username});
    }

    function setAllergies(allergies: string[]) {
        saveProfile({...profile, allergies: allergies});
        setProfile({...profile, allergies: allergies});
    }

    function setPreferences(preferences: boolean[]) {
        saveProfile({...profile, preferences: preferences});
        setProfile({...profile, preferences: preferences});
    }

    const [editedBio, setEditedBio] = useState(profile.bio);
    const [isEditingBio, setIsEditingBio] = useState(false);

    const [editedUsername, setEditedUsername] = useState(profile.username.slice(1));

    const togglePreference = (index: number) => {
        const updated = [...profile.preferences];
        updated[index] = !updated[index];
        setPreferences(updated);
    };

    const startEditingBio = () => {
        setEditedBio(profile.bio);
        setIsEditingBio(true);
    };

    const saveBio = () => {
        setBio(editedBio);
        setUsername("@" + editedUsername);
        setIsEditingBio(false);
    };

    return (
        <View style={{ paddingVertical: 60 }}>
            {/* Top Bar */}
            <View style={styles.topBar}>
                <Pressable style={styles.topIcon} onPress={() => router.back()}>
                    <Text style={styles.topIconText}>←</Text>
                </Pressable>
                <Text style={styles.topTitle}>Profile</Text>
                <Pressable style={styles.topIcon}>
                    <Text style={styles.topIconText}>⚙</Text>
                </Pressable>
            </View>

            <ScrollView style={styles.container}>
                {/* Profile Header */}
                <ThemedView style={styles.profileContainer}>
                    <View style={styles.avatarPlaceholder} />
                    <View style={styles.profileTextContainer}>
                        <View style={styles.usernameRow}>
                            {isEditingBio ? (
                                <>
                                    <TextInput
                                        style={styles.usernameInput}
                                        value={"@" + editedUsername}
                                        onChangeText={(text) => {
                                            const cleaned = text.startsWith("@") ? text.slice(1) : text;
                                            setEditedUsername(cleaned);
                                        }}
                                    />
                                </>
                            ) : (
                                <View style={styles.usernameDisplay}>
                                    <Text style={styles.username}>{profile.username}</Text>
                                </View>
                            )}
                        </View>

                        {isEditingBio ? (
                            <>
                                <TextInput
                                    style={styles.bioInput}
                                    value={editedBio}
                                    onChangeText={setEditedBio}
                                    multiline
                                />
                                <View style={styles.buttonRow}>
                                    <Pressable style={styles.saveButton} onPress={saveBio}>
                                        <Text style={styles.saveButtonText}>Save</Text>
                                    </Pressable>
                                    <Pressable style={styles.cancelButton} onPress={() => setIsEditingBio(false)}>
                                        <Text style={styles.cancelButtonText}>Cancel</Text>
                                    </Pressable>
                                </View>
                            </>
                        ) : (
                            <Text style={styles.bio}>{profile.bio}</Text>
                        )}
                    </View>
                    <Pressable style={styles.editButton} onPress={startEditingBio}>
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
                                    profile.preferences[index] && styles.checkBoxChecked,
                                ]}
                                onPress={() => togglePreference(index)}
                            >
                                {profile.preferences[index] && <Text style={styles.checkMark}>✓</Text>}
                            </Pressable>
                        </View>
                    ))}
                </ThemedView>

                {/* My Fridge Section */}
                <ThemedView style={styles.section}>
                    <ThemedText type="subtitle" style={styles.sectionTitle}>
                        Allergies
                    </ThemedText>

                    {profile.allergies.map((item, index) => (
                        <View key={index} style={styles.ingredientRow}>
                            <TextInput
                                style={styles.ingredientLabel}
                                value={item}
                                onChangeText={(text) => {
                                    const updated = [...profile.allergies];
                                    updated[index] = text;
                                    setAllergies(updated);
                                }}
                            />
                            <Pressable
                                style={styles.iconButtonRed}
                                onPress={() => {
                                    const updated = profile.allergies.filter((_, i) => i !== index);
                                    setAllergies(updated);
                                }}
                            >
                                <Text style={styles.iconText}>×</Text>
                            </Pressable>
                        </View>
                    ))}

                    <Pressable
                        style={styles.addButton}
                        onPress={() =>
                            setAllergies([...profile.allergies, "New Ingredient"])
                        }
                    >
                        <Text style={styles.addButtonText}>Add Allergy</Text>
                    </Pressable>
                </ThemedView>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    topBar: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingVertical: 16,
        borderBottomWidth: 1,
        borderBottomColor: "#444",
        paddingHorizontal: 16,
    },
    container: {
        backgroundColor: "#151718",
        paddingHorizontal: 16,
        minHeight: "100%",
        paddingTop: 14,
        marginBottom: 80,
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
    usernameRow: {
        marginBottom: 4,
    },
    usernameDisplay: {
        flexDirection: "row",
        alignItems: "center",
        gap: 6,
    },
    username: {
        fontWeight: "bold",
        fontSize: 16,
    },
    usernameInput: {
        fontSize: 16,
        fontWeight: "bold",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        color: "#000",
        paddingVertical: 2,
    },
    editIconSmall: {
        fontSize: 14,
        color: "#000",
    },
    bio: {
        fontSize: 14,
        color: "#666",
    },
    bioInput: {
        fontSize: 14,
        color: "#000",
        borderBottomWidth: 1,
        borderColor: "#ccc",
        paddingVertical: 2,
    },
    buttonRow: {
        flexDirection: "row",
        marginTop: 6,
        gap: 10,
    },
    saveButton: {
        backgroundColor: "#A5C4FF",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignSelf: "flex-start",
    },
    saveButtonText: {
        fontWeight: "bold",
        color: "#000",
        fontSize: 14,
    },
    cancelButton: {
        backgroundColor: "#ddd",
        paddingVertical: 6,
        paddingHorizontal: 12,
        borderRadius: 8,
        alignSelf: "flex-start",
    },
    cancelButtonText: {
        fontWeight: "bold",
        color: "#333",
        fontSize: 14,
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
        color: "#000",
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
        paddingVertical: 4,
        paddingHorizontal: 6,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        marginRight: 8,
    },
    ingredientAmount: {
        width: 60,
        fontSize: 16,
        paddingVertical: 4,
        paddingHorizontal: 6,
        borderBottomWidth: 1,
        borderColor: "#ccc",
        textAlign: "right",
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
        color: "#000",
    },
});
