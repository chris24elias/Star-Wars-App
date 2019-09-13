import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import FilmCard from "./FilmCard";
import Routes from "../../Navigation/Routes";

interface Props {
    navigation: any;
}

const Films = ({ navigation }: Props) => {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        fetch("http://swapi.co/api/films", {}).then((res) => {
            res.json().then((resJson) => {
                console.log("got films", resJson);
                if (resJson.results) {
                    setFilms(resJson.results);
                }
            });
        });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={films}
                renderItem={({ item, index, separators }) => {
                    return (
                        <FilmCard
                            film={item}
                            key={index}
                            onPress={() => navigation.push(Routes.FILM_DETAILS_SCREEN, { film: item.url })}
                        />
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default Films;
