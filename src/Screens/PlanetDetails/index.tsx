import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import { Card, ListItem, Button, Icon, Avatar, Image } from "react-native-elements";
import { Character, Planet } from "../../constants/interfaces";
import CharactersCardList from "../../Components/CharactersCardList";
import StarshipsCardList from "../../Components/StarshipsCardList";
import PlanetsCardList from "../../Components/PlanetsCardList";
import VehiclesCardList from "../../Components/VehiclesCardList";
import SpeciesCardList from "../../Components/SpeciesCardList";
import Routes from "../../Navigation/Routes";
import FilmsCardList from "../../Components/FilmsCardList";

interface Props {
    navigation: any;
}

const PlanetDetails = ({ navigation }: Props) => {
    const [planet, setPlanet] = useState(null);

    const url = navigation.getParam("planet");

    useEffect(() => {
        fetch(url, {}).then((res) => {
            res.json().then((resJson) => {
                console.log("got planet", resJson);
                setPlanet(resJson);
            });
        });
    }, []);

    if (!planet) {
        return <ActivityIndicator style={{ flex: 1, alignSelf: "center" }} />;
    }

    let {
        name,
        climate,
        created,
        diameter,
        edited,
        films,
        gravity,
        orbital_period,
        population,
        residents,
        rotation_period,
        surface_water,
        terrain,
    }: Planet = planet;

    var fields = url.split("/");
    let id = fields[fields.length - 2];

    return (
        <View style={{ flex: 1, marginBottom: 10 }}>
            <ScrollView>
                <Text style={styles.title}>{name}</Text>

                <Image
                    containerStyle={{ marginHorizontal: 10, alignSelf: "center" }}
                    source={{
                        uri: `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`,
                    }}
                    style={{ width: 350, height: 350 }}
                />

                <Card title="Info">
                    <Text style={{ marginBottom: 10 }}>Climate: {climate}</Text>
                    <Text style={{ marginBottom: 10 }}>Terrain: {terrain}</Text>
                    <Text style={{ marginBottom: 10 }}>Surface Water: {surface_water}</Text>
                    <Text style={{ marginBottom: 10 }}>Population: {population}</Text>
                </Card>
                <CharactersCardList
                    characters={residents}
                    onPress={(item) => navigation.push(Routes.PEOPLE_DETAILS, { character: item })}
                />

                <FilmsCardList
                    films={films}
                    onPress={(item) => navigation.push(Routes.FILM_DETAILS_SCREEN, { film: item })}
                />
            </ScrollView>
        </View>
    );
};

export default PlanetDetails;

const styles = StyleSheet.create({
    title: { fontSize: 45, fontWeight: "700", textAlign: "center" },
    opening: {
        fontSize: 12,
        textAlign: "center",
    },
});
