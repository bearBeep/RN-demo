import { Alert, Button, TextInput, View } from 'react-native'
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DevPage from '../pages/dev/devPage/index';
import Animated, { SharedTransition, withSpring } from 'react-native-reanimated';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Box, Text } from "../components"
import React from 'react';

const MyTheme = {
    ...DefaultTheme,
    colors: {
        /** 底部导航栏选中颜色 */
        primary: 'rgb(255, 45, 85)',
        /** 每个Screen的背景颜色 */
        background: 'rgb(242, 242, 242)',
        /** 导航栏背景颜色 */
        card: 'rgb(255, 255, 255)',
        /** 导航栏文字颜色 */
        text: 'rgb(28, 28, 30)',
        /** 底部导航栏边框颜色 */
        border: 'rgb(199, 199, 204)',
        notification: 'rgb(255, 69, 58)',
    },
};


const customTransition = SharedTransition.custom((values) => {
    'worklet';
    return {
        height: withSpring(values.targetHeight),
        width: withSpring(values.targetWidth),
        originX: withSpring(values.targetOriginX),
        originY: withSpring(values.targetOriginY),
    };
});

function HomeScreen({ navigation }) {
    const handlePress = () => {
        console.log('in')
        navigation.navigate('Details')
    }
    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Button
                title="Go to Details"
                onPress={handlePress}
            />
            <Animated.Image
                source={{ uri: 'https://picsum.photos/id/39/200' }}
                style={{ width: 300, height: 300 }}
                sharedTransitionTag="tag"
                sharedTransitionStyle={customTransition} // add this to both elements on both screens
            />
            <Box
                margin="m"
                padding={{ smallPhone: 'xs', phone: 's', tablet: 'm' }}
                backgroundColor="primary"
                style={{
                    width: 200,
                    height: 200,
                }}
            >
                <Text style={{}} variant="header" color="success">123</Text>
            </Box>
        </View>
    );
}

function DetailsScreen({ navigation }) {
    const [text, setText] = React.useState('');
    const hasUnsavedChanges = Boolean(text);

    React.useEffect(
        () =>
            navigation.addListener('beforeRemove', (e) => {
                if (!hasUnsavedChanges) {
                    // If we don't have unsaved changes, then we don't need to do anything
                    return;
                }

                // Prevent default behavior of leaving the screen
                e.preventDefault();

                // Prompt the user before leaving the screen
                Alert.alert(
                    'Discard changes?',
                    'You have unsaved changes. Are you sure to discard them and leave the screen?',
                    [
                        { text: "Don't leave", style: 'cancel', onPress: () => { } },
                        {
                            text: 'Discard',
                            style: 'destructive',
                            // If the user confirmed, then we dispatch the action we blocked earlier
                            // This will continue the action that had triggered the removal of the screen
                            onPress: () => navigation.dispatch(e.data.action),
                        },
                    ]
                );
            }),
        [navigation, hasUnsavedChanges]
    );

    return (
        <View style={{ flex: 1, alignItems: 'center' }}>
            <Button title="Go back" onPress={() => navigation.goBack()} />
            <Animated.Image
                source={{ uri: 'https://picsum.photos/id/39/200' }}
                style={{ width: 100, height: 100 }}
                sharedTransitionTag="tag"
                sharedTransitionStyle={customTransition}
            />
            <TextInput
                value={text}
                placeholder="Type something…"
                onChangeText={setText}
            />
        </View>
    );
}

function SettingsScreen() {
    return (
        <DevPage />
    );
}

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const SettingStack = createNativeStackNavigator();

export default function App() {
    return (
        /**
         * @param 
         *  theme 配置底部选中时的颜色
         */
        <NavigationContainer theme={MyTheme}>
            <Tab.Navigator screenOptions={{ headerShown: false }}>
                <Tab.Screen name="HomeTab">
                    {() => (
                        <HomeStack.Navigator>
                            <HomeStack.Screen name="Home" component={HomeScreen} />
                            <HomeStack.Screen name="Details" component={DetailsScreen} />
                        </HomeStack.Navigator>
                    )}
                </Tab.Screen>
                <Tab.Screen name="SecondTab" >
                    {() => (
                        <SettingStack.Navigator>
                            <SettingStack.Screen name="Settings" component={SettingsScreen} />
                        </SettingStack.Navigator>
                    )}
                </Tab.Screen>
            </Tab.Navigator>
        </NavigationContainer>
    );
}
