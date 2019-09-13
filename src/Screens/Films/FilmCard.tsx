import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { Film } from "../../constants/interfaces";

interface FilmCardProps {
    film: Film;
    onPress: any;
}

const FilmCard = ({ film, onPress }: FilmCardProps) => {
    const { title, director, producer, opening_crawl } = film;
    var fields = film.url.split("/");
    let id = fields[fields.length - 2];
    return (
        <Card
            title={title}
            image={{
                uri: `https://starwars-visualguide.com/assets/img/films/${id}.jpg`,
            }}
        >
            <Text style={{ marginBottom: 10 }}>Director: {film.director}</Text>
            <Text style={{ marginBottom: 10 }}>Producer: {film.producer}</Text>
            <Text style={{ marginBottom: 10 }}>Release: {film.release_date}</Text>

            <Button
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title="Explore"
                onPress={onPress}
            />
        </Card>
    );
};

export default FilmCard;
