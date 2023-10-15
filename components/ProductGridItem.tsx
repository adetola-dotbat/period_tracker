import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { AppColors } from '../utils/Colors'
import tw from "twrnc";
import { LinearGradient } from "expo-linear-gradient";
import { HeartIcon } from "react-native-heroicons/solid";
import { useNavigation } from "@react-navigation/native";

interface Props {
    item: any
}

const ProductGridItem = (props: Props) => {
    const navigation = useNavigation();

    const [isFavourite, toggleFavourite] = useState(false);

    const item = props.item
    const {
        container,
        productImage,
        brand,
        productNamePrice,
        contentContainer
    } = styles

    return (
        <View
     
            key={item.id}
            style={tw`mx-4 flex justify-evenly flex-wrap`}
        >
            
            <TouchableOpacity 
            // @ts-ignore
                onPress={() => navigation.navigate("Details", {...item})}
                style={tw`flex justify-end relative p-2 py-6 space-y-2 w-[35] h-[58]`}
                >
                <Image style={tw`absolute w-40 h-55 rounded-[8]`}
                source={{uri:item.image}}
                    resizeMode='contain'
                />
                <LinearGradient
                colors={["transparent", "rgba(0,0,0,0.8)"]}
                style={tw`absolute bottom-0 w-[40] h-[50] rounded-[8]`}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
            />
                  <TouchableOpacity
                    onPress={() => toggleFavourite(!isFavourite)}
                    style={tw`absolute top-5 right-0 rounded-full p-3 bg-[rgba(255,255,255,0.4)]`}
                >
                    <HeartIcon
                    size={20}
                    color={isFavourite ? "red" : "white"}
                    />
                </TouchableOpacity>
                <View style={contentContainer}>
                    <Text  style={tw`text-white font-semibold`}>{item.brand.name}</Text>
                    <Text numberOfLines={3}  style={tw`text-white font-semibold`}>{item.name}</Text>
                </View>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    contentContainer: {
        marginLeft: 15
    },
    productImage: {
        width: 150,
        height: 150,
        backgroundColor: AppColors.grey,
        borderRadius: 10,
    },
    brand: {
        marginVertical: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#8793A1'
    },
    productNamePrice: {
        marginVertical: 5,
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000'
    }
})

export default ProductGridItem
