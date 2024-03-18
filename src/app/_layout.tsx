import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { Theme } from "../styles/templates/theme";

export default function Layout() {
    return (
        <SafeAreaView style={{flex: 1}}>
            <Theme>
                <Slot />
            </Theme>
        </SafeAreaView>
    )
}