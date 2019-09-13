import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Routes from "./Routes";
import Messages from "../Screens/Messages/Messages";
import MessageDetails from "../Screens/MessageDetails/MessageDetails";
import Nearby from "../Screens/Nearby";
import SquadsScreen from "../Screens/Squads";
import Profile from "../Screens/Profile";
import SquadDetails from "../Screens/SquadDetails";
import { Icon } from "native-base";

const FilmsStack = createStackNavigator({
    [Routes.NEARBY_SCREEN]: {
        screen: Nearby,
        navigationOptions: {
            title: "Nearby",
        },
    },
});

const PeopleStack = createStackNavigator({
    [Routes.SQUADS_SCREEN]: {
        screen: SquadsScreen,
        navigationOptions: {
            title: "Squads",
        },
    },
});

const PlanetsStack = createStackNavigator({
    [Routes.MESSAGES_SCREEN]: {
        screen: Messages,
        navigationOptions: {
            title: "Messages",
        },
    },
    [Routes.MESSAGE_DETAILS_SCREEN]: {
        screen: MessageDetails,
        navigationOptions: {
            title: "Chat Room",
        },
    },
});

const SpeciesStack = createStackNavigator({
    [Routes.PROFILE_SCREEN]: {
        screen: Profile,
        navigationOptions: {
            title: "Profile",
        },
    },
});

export default createBottomTabNavigator(
    {
        [Routes.FILMS_STACK]: {
            screen: FilmsStack,
            path: "squads",
            navigationOptions: {
                tabBarIcon: (props: any) => getTabIcon(props, { name: "group", type: "MaterialIcons" }),
                title: "Squads",
            },
        },
        [Routes.PEOPLE_STACK]: {
            screen: PeopleStack,
            path: "nearby",
            navigationOptions: {
                tabBarIcon: (props: any) => getTabIcon(props, { name: "map", type: "MaterialIcons" }),
                title: "Nearby",
            },
        },

        [Routes.PLANETS_STACK]: {
            screen: PlanetsStack,
            path: "messages",
            navigationOptions: {
                tabBarIcon: (props: any) => getTabIcon(props, { name: "message", type: "MaterialIcons" }),
                title: "Messages",
            },
        },

        [Routes.SPECIES_STACK]: {
            screen: SpeciesStack,
            path: "profile",
            navigationOptions: {
                tabBarIcon: (props: any) => getTabIcon(props, { name: "person", type: "MaterialIcons" }),
                title: "Profile",
            },
        },
    },
    {
        // initialRouteName: Routes.NEARBY_STACK,
    }
);

function getTabIcon(
    { focused, horizontal, tintColor }: any,
    icon: {
        name: string;
        type:
            | "AntDesign"
            | "Entypo"
            | "EvilIcons"
            | "Feather"
            | "FontAwesome"
            | "FontAwesome5"
            | "Foundation"
            | "Ionicons"
            | "MaterialCommunityIcons"
            | "MaterialIcons"
            | "Octicons"
            | "SimpleLineIcons"
            | "Zocial"
            | undefined;
    }
) {
    return (
        <Icon
            style={{ color: tintColor, fontSize: 20 }}
            name={icon.name}
            color={tintColor}
            type={icon.type}
        />
    );
}
