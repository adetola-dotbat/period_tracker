import React from 'react'
import { View, Text, Image, ScrollView, TouchableOpacity, StyleSheet } from 'react-native'
import { SubCategory } from '../api/models/SubCategory'
import { ProductService } from '../api/ProductService';
import { AppColors } from '../utils/Colors';
import tw from "twrnc";


interface Props {
    onProdListStateChanged: (productService: any) => void
    onChangeSelectedCatId: (catId: number) => void

    productService: ProductService
    selectedCatId: number
    categoryName: string

    subCategories: SubCategory[]
}

const ProductHeader = (props: Props) => {

    const {
        subCatSelector,
        subCatName,
        common,
        opacityView,
        catName,
        coverImageContainer
    } = styles

    const productService = props.productService
    const setProdList = props.onProdListStateChanged
    const setSelectedCatId = props.onChangeSelectedCatId
    const selectedCatId = props.selectedCatId
    const subCategories = props.subCategories
    const categoryName = props.categoryName

    return (
        <View style={{ marginHorizontal: 20, }}>
            {/* <View style={coverImageContainer}>

                <Image
                    source={require('../assets/personal_care.png')}
                    resizeMode='stretch'
                    style={common}
                />
                <View style={[common, opacityView]} />
                <Text style={catName}>{categoryName}</Text>

            </View> */}
            <View style={tw` flex-row justify-between items-center`}>
                <Text style={tw`font-bold text-neutral-700 text-2xl	`}>Categories</Text>
            </View>

            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                style={{ paddingVertical: 20 }}
            >
                <TouchableOpacity
                    style={[subCatSelector, { backgroundColor: selectedCatId === 0 ? AppColors.subCatSelector : AppColors.grey }, tw`rounded-3xl w-20 h-19`]}
                    onPress={() => {
                        setSelectedCatId(0)
                        setProdList(productService.getAllProducts())
                    }}>
                        
                    <Text style={[subCatName, { color: selectedCatId === 0 ? AppColors.white : AppColors.black }, tw`text-center flex items-center py-3`]}>
                        Insight
                    </Text>
                </TouchableOpacity>
                {
                    subCategories.map((cat: SubCategory) => {
                        return (

                            <TouchableOpacity
                                key={cat.id}
                                style={[
                                    subCatSelector,
                                    { backgroundColor: selectedCatId === cat.id ? AppColors.subCatSelector : AppColors.grey }
                                ]}
                                onPress={() => {
                                    setSelectedCatId(cat.id)
                                    setProdList(productService.getProductList(cat.productIds))
                                }}>
                                    
                                    <Image
                                        source={{uri:cat.image}}
                                        style={tw`rounded-3xl w-20 h-19`}
                                        // style={{ width: wp(20), height: wp(19) }}
                                    />
                                <Text style={[subCatName, { color: selectedCatId === cat.id ? AppColors.white : AppColors.black }, tw`text-center`]}>
                                    {cat.name}
                                </Text>
                            </TouchableOpacity>
                        )
                    })
                }

            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    subCatSelector: {
        borderRadius: 10,
        padding: 15,
        marginEnd: 15
    },
    subCatName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    opacityView: {
        opacity: 0.4,
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: AppColors.black
    },
    catName: {
        fontSize: 22,
        fontWeight: 'bold',
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        color: AppColors.white
    },
    coverImageContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    common: {
        width: '100%',
        height: 170,
        borderRadius: 20,
    }
})

export default ProductHeader
