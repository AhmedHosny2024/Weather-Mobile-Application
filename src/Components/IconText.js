import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Feather } from '@expo/vector-icons';

const IconText = (props) => {
    const {iconName, text,iconColor,bodyTextStyles} = props;
    const {wrapper,text:stylesText} = styles;
    return (
        <View style={wrapper}>
            <Feather name={iconName} size={50} color={iconColor} />
            <Text style={[stylesText,bodyTextStyles]}>{text}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    text: {
        fontWeight: 'bold',
    },
});
export default IconText;
