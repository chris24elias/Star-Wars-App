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

    return (
        // <TouchableOpacity onPress={onPress}>
        //     <Text>{film.title}</Text>
        // </TouchableOpacity>
        <Card
            title={title}
            // image={require("../images/pic2.jpg")}
            featuredSubtitle={director}
        >
            <Text style={{ marginBottom: 10 }}>Director: {film.director}</Text>
            <Text style={{ marginBottom: 10 }}>Producer: {film.producer}</Text>
            <Text style={{ marginBottom: 10 }}>Release: {film.release_date}</Text>
            {/* <Text style={{ marginBottom: 10 }}>Director {film.director}</Text> */}
            {/* <FlatList 
                data={film.characters}
                renderItem={({ item, index, separators }) => {
                    return (
                        <FilmCard
                            film={item}
                            key={index}
                            onPress={() => navigation.navigate(Routes.FILM_DETAILS_SCREEN, { film: item })}
                        />
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            /> */}
            <Button
                // icon={<Icon name="code" color="#ffffff" />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title="Explore"
                onPress={onPress}
            />
        </Card>
    );
};

export default FilmCard;
