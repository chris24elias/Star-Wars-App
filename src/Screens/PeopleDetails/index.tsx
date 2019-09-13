import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator, StyleSheet } from "react-native";
import { Card, ListItem, Button, Icon, Avatar, Image } from "react-native-elements";
import { Character } from "../../constants/interfaces";
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

const PeopleDetails = ({ navigation }: Props) => {
    const [character, setCharacter] = useState(null);

    const url = navigation.getParam("character");

    useEffect(() => {
        fetch(url, {}).then((res) => {
            res.json().then((resJson) => {
                console.log("got character", resJson);
                setCharacter(resJson);
            });
        });
    }, []);

    if (!character) {
        return <ActivityIndicator style={{ flex: 1, alignSelf: "center" }} />;
    }

    let {
        films,
        species,
        starships,
        vehicles,
        eye_color,
        gender,
        name,
        height,
        hair_color,
    }: Character = character;

    var fields = url.split("/");
    let id = fields[fields.length - 2];

    return (
        <View style={{ flex: 1, marginBottom: 10 }}>
            <ScrollView>
                <Text style={styles.title}>{name}</Text>

                <Image
                    containerStyle={{ marginHorizontal: 10, alignSelf: "center" }}
                    source={{
                        uri: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
                    }}
                    style={{ width: 200, height: 350 }}
                />

                <Card title="Info">
                    <Text style={{ marginBottom: 10 }}>Gender: {gender}</Text>
                    <Text style={{ marginBottom: 10 }}>Eye Color: {eye_color}</Text>
                    <Text style={{ marginBottom: 10 }}>Hair Color: {hair_color}</Text>
                    <Text style={{ marginBottom: 10 }}>Height: {height}</Text>
                </Card>

                <FilmsCardList
                    films={films}
                    onPress={(item) => navigation.push(Routes.FILM_DETAILS_SCREEN, { film: item })}
                />

                <StarshipsCardList starships={starships} onPress={(item) => {}} />

                <VehiclesCardList vehicles={vehicles} onPress={(item) => {}} />

                <SpeciesCardList
                    species={species}
                    onPress={(item) => navigation.push(Routes.SPECIES_DETAILS, { species: item })}
                />
            </ScrollView>
        </View>
    );
};

export default PeopleDetails;

const styles = StyleSheet.create({
    title: { fontSize: 45, fontWeight: "700", textAlign: "center" },
    opening: {
        fontSize: 12,
        textAlign: "center",
    },
});
