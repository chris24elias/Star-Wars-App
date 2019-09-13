import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from "react-native";
import { Avatar } from "react-native-elements";
import { Card, ListItem, Button, Icon } from "react-native-elements";

interface StarshipsCardListProps {
    starships: string[];
    onPress: any;
}

const StarshipsCardList = ({ starships, onPress }: StarshipsCardListProps) => {
    return (
        <Card title="Starships">
            <FlatList
                data={starships}
                renderItem={({ item, index, separators }) => {
                    // let id = item.slice(item.lastIndexOf("/"));
                    var fields = item.split("/");
                    let id = fields[fields.length - 2];

                    return (
                        <Avatar
                            onPress={() => onPress(item)}
                            containerStyle={{ marginHorizontal: 10 }}
                            rounded
                            size="medium"
                            source={{
                                uri: `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`,
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

export default StarshipsCardList;
