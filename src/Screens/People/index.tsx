import React, { useState, useEffect } from "react";
import { View, Text, FlatList } from "react-native";
import CharacterCard from "./CharacterCard";
import Routes from "../../Navigation/Routes";

interface Props {
    navigation: any;
}

const People = ({ navigation }: Props) => {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch("http://swapi.co/api/people", {}).then((res) => {
            res.json().then((resJson) => {
                console.log("got people", resJson);
                if (resJson.results) {
                    setPeople(resJson.results);
                }
            });
        });
    }, []);

    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={people}
                renderItem={({ item, index, separators }) => {
                    return (
                        <CharacterCard
                            character={item}
                            key={index}
                            onPress={() => navigation.push(Routes.PEOPLE_DETAILS, { character: item.url })}
                        />
                    );
                }}
                keyExtractor={(item, index) => index.toString()}
            />
        </View>
    );
};

export default People;
