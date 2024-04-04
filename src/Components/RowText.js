import React from "react";
import { View, Text } from "react-native";

const RowText = (props) => {
    const { text1,text2,containerStyle, message1style, message2style } = props;
    return (
        <View style={containerStyle}>
            <Text style={message1style}>{text1}</Text>
            <Text style={message2style}>{text2}</Text>
        </View>
    );
    }

export default RowText;