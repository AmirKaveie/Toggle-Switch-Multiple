import React, { useState } from "react";
import { View, Text, Switch, StyleSheet } from 'react-native';

export default function App() {
    const [firstSwitch, setFirstSwitch] = useState(false);
    const [secondSwitch, setSecondSwitch] = useState(false);

    const toggleFirstSwitch = () => setFirstSwitch(previousState => !previousState);
    const toggleSecondSwitch = () => setSecondSwitch(previousState => !previousState);

    return (
        <View style={styles.container}>
            <Text>First Switch is {firstSwitch ? "ON" : "OFF"}</Text>
            <Switch
                onValueChange={toggleFirstSwitch}
                value={firstSwitch}
                disabled={secondSwitch}
            />
            <Text>Second Switch is {secondSwitch ? "ON" : "OFF"}</Text>
            <Switch
                onValueChange={toggleSecondSwitch}
                value={secondSwitch}
                disabled={firstSwitch}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "pink",
    },
});