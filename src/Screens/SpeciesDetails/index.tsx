import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import { Card, ListItem, Button, Icon, Avatar, Image } from "react-native-elements";
import { Character, Planet, Species } from "../../constants/interfaces";
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

const SpeciesDetails = ({ navigation }: Props) => {
    const [species, setSpecies] = useState(null);

    const url = navigation.getParam("species");

    useEffect(() => {
        fetch(url, {}).then((res) => {
            res.json().then((resJson) => {
                console.log("got species", resJson);
                setSpecies(resJson);
            });
        });
    }, []);

    if (!species) {
        return <ActivityIndicator style={{ flex: 1, alignSelf: "center" }} />;
    }

    let {
        films,
        average_height,
        average_lifespan,
        classification,
        edited,
        created,
        designation,
        name,
        eye_colors,
        hair_colors,
        homeworld,
        language,
        people,
        skin_colors,
    }: Species = species;

    var fields = url.split("/");
    let id = fields[fields.length - 2];

    return (
        <View style={{ flex: 1, marginBottom: 10 }}>
            <ScrollView>
                <Text style={styles.title}>{name}</Text>

                <Image
                    containerStyle={{ marginHorizontal: 10, alignSelf: "center" }}
                    source={{
                        uri: `https://starwars-visualguide.com/assets/img/species/${id}.jpg`,
                    }}
                    style={{ width: 350, height: 350 }}
                />

                <Card title="Info">
                    <Text style={{ marginBottom: 10 }}>average_height: {average_height}</Text>
                    <Text style={{ marginBottom: 10 }}>eye_colors: {eye_colors}</Text>
                    <Text style={{ marginBottom: 10 }}>hair_colors: {hair_colors}</Text>
                    <Text style={{ marginBottom: 10 }}>language: {language}</Text>
                </Card>
                <CharactersCardList
                    characters={people}
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

export default SpeciesDetails;

const styles = StyleSheet.create({
    title: { fontSize: 45, fontWeight: "700", textAlign: "center" },
    opening: {
        fontSize: 12,
        textAlign: "center",
    },
});
