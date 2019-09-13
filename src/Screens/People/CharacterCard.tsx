import React from "react";
import { View, Text, Image, FlatList } from "react-native";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import { Film, Character } from "../../constants/interfaces";

interface CharacterCardProps {
    character: Character;
    onPress: any;
}

const CharacterCard = ({ character, onPress }: CharacterCardProps) => {
    const {
        name,
        birth_year,
        gender,
        species,
        starships,
        vehicles,
        edited,
        created,
        url,
        homeworld,
        height,
        eye_color,
        films,
        hair_color,
        mass,
        skin_color,
    } = character;
    var fields = character.url.split("/");
    let id = fields[fields.length - 2];
    return (
        <Card
            title={name}
            image={{
                uri: `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`,
            }}
        >
            <Text style={{ marginBottom: 10 }}>DOB: {birth_year}</Text>
            <Text style={{ marginBottom: 10 }}>Gender: {gender}</Text>
            <Text style={{ marginBottom: 10 }}>Mass: {mass}</Text>

            <Button
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0 }}
                title="Explore"
                onPress={onPress}
            />
        </Card>
    );
};

export default CharacterCard;
