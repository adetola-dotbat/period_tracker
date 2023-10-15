import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, View } from 'react-native'
// import { FlatGrid } from 'react-native-super-grid'
// import { useQuery } from 'react-query'
import { ProductService } from '../api/ProductService'
import ProductHeader from './ProductDetailsHeader'
import ProductGridItem from './ProductGridItem'
import tw from "twrnc";
import Destinations from './destinations'
import { useNavigation } from "@react-navigation/native";


interface Props { }

const ProductCategoryDetails = (props: Props) => {
    const navigation = useNavigation();

    // I've Tried to fetch using React Query but unable to find solution for fetching local json in React Query in quick time
    // const { data, status } = useQuery("prodList", productService.getAllProducts())
    // console.log(data)
    // console.log(status)

    const productService = new ProductService()

    const categories = productService.getCategories('Personal Care')

    const [prodList, setProdList] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        // Using set time out to mock http requests
        setTimeout(() => {
            setProdList(productService.getAllProducts())
            setIsLoading(false)
        }, 2000);
    }, [])

    const { subCategories, name } = categories
    const [selectedCatId, setSelectedCatId] = useState(0)

    return (
        <>
            <ProductHeader
                categoryName={name}
                productService={productService}
                onProdListStateChanged={setProdList}
                selectedCatId={selectedCatId}
                onChangeSelectedCatId={setSelectedCatId}
                subCategories={subCategories}
            />

            {
                isLoading && (
                    <ActivityIndicator size="large" />
                )
            }
             {/* <View style={tw`bg-white rounded-[10]`}>
                <Destinations />
            </View> */}
            <FlatList
                horizontal={false}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                data={prodList || []}
                renderItem={({ item }) => (
                    <ProductGridItem
                        item={item} 
                    />
                )}
            />

        </>
    )
}

export default ProductCategoryDetails
