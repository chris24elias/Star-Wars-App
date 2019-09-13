import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { Card, ListItem, Button, Icon } from "react-native-elements";

interface SpeciesCardListProps {
    species: string[];
}

const SpeciesCardList = ({ species }: SpeciesCardListProps) => {
    return (
        <Card title="Species">
            <FlatList
                data={species}
                renderItem={({ item, index, separators }) => {
                    // let id = item.slice(item.lastIndexOf("/"));
                    var fields = item.split("/");
                    let id = fields[fields.length - 2];

                    return (
                        <Avatar
                            containerStyle={{ marginHorizontal: 10 }}
                            rounded
                            size="medium"
                            source={{
                                uri: `https://starwars-visualguide.com/assets/img/species/${id}.jpg`,
                            }}
                        />
                    );
                }}
                horizontal
                keyExtractor={(item, index) => index.toString()}
            />
        </Card>
    );
};

export default SpeciesCardList;
