import React from "react";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Routes from "./Routes";

import { Icon } from "native-base";
import Films from "../Screens/Films";
import People from "../Screens/People";
import Planets from "../Screens/Planets";
import Species from "../Screens/Species";
import FilmDetails from "../Screens/FilmDetails";
import PeopleDetails from "../Screens/PeopleDetails";
import PlanetDetails from "../Screens/PlanetDetails";
import SpeciesDetails from "../Screens/SpeciesDetails";

const FilmsStack = createStackNavigator({
    [Routes.FILMS_SCREEN]: {
        screen: Films,
        navigationOptions: {
            title: "Films",
        },
    },
    [Routes.FILM_DETAILS_SCREEN]: {
        screen: FilmDetails,
        navigationOptions: {
            title: "Film Detaiils",
        },
    },
});

const PeopleStack = createStackNavigator({
    [Routes.PEOPLE_SCREEN]: {
        screen: People,
        navigationOptions: {
            title: "People",
        },
    },
    [Routes.PEOPLE_DETAILS]: {
        screen: PeopleDetails,
        navigationOptions: {
            title: "People Detaiils",
        },
    },
});

const PlanetsStack = createStackNavigator({
    [Routes.PLANETS_SCREEN]: {
        screen: Planets,
        navigationOptions: {
            title: "Planets",
        },
    },
    [Routes.PLANETS_DETAILS]: {
        screen: PlanetDetails,
        navigationOptions: {
            title: "Planets Detaiils",
        },
    },
});

const SpeciesStack = createStackNavigator({
    [Routes.SPECIES_SCREEN]: {
        screen: Species,
        navigationOptions: {
            title: "Species",
        },
    },
    [Routes.SPECIES_DETAILS]: {
        screen: SpeciesDetails,
        navigationOptions: {
            title: "Species Detaiils",
        },
    },
});

export default createBottomTabNavigator(
    {
        [Routes.FILMS_STACK]: {
            screen: FilmsStack,
            path: "films",
            navigationOptions: {
                tabBarIcon: (props: any) =>
                    getTabIcon(props, { name: "filmstrip", type: "MaterialCommunityIcons" }),
                title: "Films",
            },
        },
        [Routes.PEOPLE_STACK]: {
            screen: PeopleStack,
            path: "people",
            navigationOptions: {
                tabBarIcon: (props: any) => getTabIcon(props, { name: "person", type: "MaterialIcons" }),
                title: "People",
            },
        },

        [Routes.PLANETS_STACK]: {
            screen: PlanetsStack,
            path: "planets",
            navigationOptions: {
                tabBarIcon: (props: any) => getTabIcon(props, { name: "ios-planet", type: "Ionicons" }),
                title: "Planets",
            },
        },

        [Routes.SPECIES_STACK]: {
            screen: SpeciesStack,
            path: "species",
            navigationOptions: {
                tabBarIcon: (props: any) =>
                    getTabIcon(props, { name: "pine-tree", type: "MaterialCommunityIcons" }),
                title: "Species",
            },
        },
    },
    {
        // initialRouteName: "",
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
