import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Routes from "./Routes";
import HomeTabs from "./HomeTabs";

const ModalNav = createStackNavigator(
    {
        [Routes.HOME_TABS]: {
            screen: HomeTabs,
            path: "tabs",
            navigationOptions: {
                header: null,
            },
        },
    },
    {
        headerMode: "none",
    }
);

export default createAppContainer(ModalNav);
