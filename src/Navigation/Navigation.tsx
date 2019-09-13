import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Routes from "./Routes";
import HomeTabs from "./HomeTabs";
import FilmDetails from "../Screens/FilmDetails";
import PeopleDetails from "../Screens/PeopleDetails";
import PlanetDetails from "../Screens/PlanetDetails";
import SpeciesDetails from "../Screens/SpeciesDetails";

const ModalNav = createStackNavigator(
    {
        [Routes.HOME_TABS]: {
            screen: HomeTabs,
            path: "tabs",
            navigationOptions: {
                header: null,
            },
        },
        [Routes.FILM_DETAILS_SCREEN]: {
            screen: FilmDetails,
            navigationOptions: {
                title: "Film Detaiils",
            },
        },
        [Routes.PEOPLE_DETAILS]: {
            screen: PeopleDetails,
            navigationOptions: {
                title: "People Detaiils",
            },
        },
        [Routes.PLANETS_DETAILS]: {
            screen: PlanetDetails,
            navigationOptions: {
                title: "Planets Detaiils",
            },
        },
        [Routes.SPECIES_DETAILS]: {
            screen: SpeciesDetails,
            navigationOptions: {
                title: "Species Detaiils",
            },
        },
    },
    {
        // headerMode: "none",
    }
);

export default createAppContainer(ModalNav);
