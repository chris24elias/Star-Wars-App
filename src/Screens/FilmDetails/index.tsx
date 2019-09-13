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
import Routes from "../../Navigation/Routes";

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

                <CharactersCardList
                    characters={characters}
                    onPress={(item) => navigation.navigate(Routes.PEOPLE_DETAILS, { character: item })}
                />
                <StarshipsCardList starships={starships} onPress={(item) => {}} />

                <PlanetsCardList
                    planets={planets}
                    onPress={(item) => navigation.navigate(Routes.PLANETS_DETAILS, { planet: item })}
                />

                <VehiclesCardList vehicles={vehicles} onPress={(item) => {}} />

                <SpeciesCardList
                    species={species}
                    onPress={(item) => navigation.navigate(Routes.SPECIES_DETAILS, { species: item })}
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
