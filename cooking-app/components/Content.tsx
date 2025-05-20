import React from 'react';
import type { PropsWithChildren } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { ThemedView } from '@/components/ThemedView';
import { useBottomTabOverflow } from '@/components/ui/TabBarBackground';

export default function ParallaxScrollView({ children }: PropsWithChildren<{}>) {
    const bottom = useBottomTabOverflow();

    return (
        <ThemedView style={styles.container}>
            <ScrollView
                scrollEventThrottle={16}
                scrollIndicatorInsets={{ bottom }}
                contentContainerStyle={{ paddingBottom: bottom }}>
                <ThemedView style={styles.content}>{children}</ThemedView>
            </ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
        padding: 32,
        paddingTop: 100,
        gap: 16,
        overflow: 'hidden',
    },
});
