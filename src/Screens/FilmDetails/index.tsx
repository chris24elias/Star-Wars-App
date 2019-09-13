import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Film } from "../../constants/interfaces";
import { Avatar } from "react-native-elements";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import VehiclesCardList from "../../Components/VehiclesCardList";
import PlanetsCardList from "../../Components/PlanetsCardList";
import StarshipsCardList from "../../Components/StarshipsCardList";
import CharactersCardList from "../../Components/CharactersCardList";
import SpeciesCardList from "../../Components/SpeciesCardList";

interface Props {
    navigation: any;
}

const FilmDetails = ({ navigation }: Props) => {
    const film: Film = navigation.getParam("film");
    const { characters, opening_crawl, title, starships, vehicles, planets, species } = film;
    return (
        <View style={{ flex: 1, marginBottom: 10 }}>
            <ScrollView>
                <Text style={styles.title}>{title}</Text>

                <Card title="Info">
                    <Text style={{ marginBottom: 10 }}>Director: {film.director}</Text>
                    <Text style={{ marginBottom: 10 }}>Producer: {film.producer}</Text>
                    <Text style={{ marginBottom: 10 }}>Release: {film.release_date}</Text>
                    <Text style={{ marginBottom: 10 }}>Opening Crawl</Text>
                    <Text style={styles.opening}>{opening_crawl}</Text>
                </Card>

                <CharactersCardList characters={characters} />
                <StarshipsCardList starships={starships} />

                <PlanetsCardList planets={planets} />

                <VehiclesCardList vehicles={vehicles} />

                <SpeciesCardList species={species} />
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
