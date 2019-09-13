import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
} from "react-native";
import { Film } from "../../constants/interfaces";
import { Avatar, Image } from "react-native-elements";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import VehiclesCardList from "../../Components/VehiclesCardList";
import PlanetsCardList from "../../Components/PlanetsCardList";
import StarshipsCardList from "../../Components/StarshipsCardList";
import CharactersCardList from "../../Components/CharactersCardList";
import SpeciesCardList from "../../Components/SpeciesCardList";
import Routes from "../../Navigation/Routes";

interface Props {
    navigation: any;
}

const FilmDetails = ({ navigation }: Props) => {
    const [film, setFilm] = useState(null);

    const url = navigation.getParam("film");

    useEffect(() => {
        fetch(url, {}).then((res) => {
            res.json().then((resJson) => {
                console.log("got character", resJson);
                setFilm(resJson);
            });
        });
    }, []);

    if (!film) {
        return <ActivityIndicator style={{ flex: 1, alignSelf: "center" }} />;
    }

    let {
        created,
        edited,
        vehicles,
        starships,
        species,
        title,
        release_date,
        producer,
        characters,
        director,
        episode_id,
        opening_crawl,
        planets,
    }: Film = film;

    var fields = film.url.split("/");
    let id = fields[fields.length - 2];

    return (
        <View style={{ flex: 1, marginBottom: 10 }}>
            <ScrollView>
                <Text style={styles.title}>{title}</Text>
                <Image
                    containerStyle={{ marginHorizontal: 10, alignSelf: "center" }}
                    source={{
                        uri: `https://starwars-visualguide.com/assets/img/films/${id}.jpg`,
                    }}
                    style={{ width: 200, height: 350 }}
                />
                <Card title="Info">
                    <Text style={{ marginBottom: 10 }}>Director: {film.director}</Text>
                    <Text style={{ marginBottom: 10 }}>Producer: {film.producer}</Text>
                    <Text style={{ marginBottom: 10 }}>Release: {film.release_date}</Text>
                    <Text style={{ marginBottom: 10 }}>Opening Crawl</Text>
                    <Text style={styles.opening}>{opening_crawl}</Text>
                </Card>

                <CharactersCardList
                    characters={characters}
                    onPress={(item) => navigation.push(Routes.PEOPLE_DETAILS, { character: item })}
                />
                <StarshipsCardList starships={starships} onPress={(item) => {}} />

                <PlanetsCardList
                    planets={planets}
                    onPress={(item) => navigation.push(Routes.PLANETS_DETAILS, { planet: item })}
                />

                <VehiclesCardList vehicles={vehicles} onPress={(item) => {}} />

                <SpeciesCardList
                    species={species}
                    onPress={(item) => navigation.push(Routes.SPECIES_DETAILS, { species: item })}
                />
            </ScrollView>
        </View>
    );
};

export default FilmDetails;

const styles = StyleSheet.create({
    title: { fontSize: 45, fontWeight: "700", textAlign: "center" },
    opening: {
        fontSize: 12,
        textAlign: "center",
    },
});
