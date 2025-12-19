import MovieCard from "@/components/movieCard";
import { icons } from "@/constants/icons";
import { images } from "@/constants/images";
import { FlatList, Image, Text, View } from "react-native";

const savedMovies: any[] = [];

const Saved = () => {
    return (
        <View className="flex-1 bg-primary">
            {/* Background */}
            <Image
                source={images.bg}
                className="absolute w-full h-full z-0"
                resizeMode="cover"
            />

            <View className="flex-1 px-5">
                {/* Header */}
                <Image
                    source={icons.logo}
                    className="w-12 h-10 mt-20 mb-5 mx-auto"
                />

                <Text className="text-xl text-white font-bold mb-4">
                    Saved Movies
                </Text>

                {/* Movies Grid */}
                <FlatList
                    data={savedMovies}
                    renderItem={({ item }) => <MovieCard {...item} />}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={3}
                    columnWrapperStyle={{
                        justifyContent: "flex-start",
                        gap: 20,
                        paddingRight: 5,
                        marginBottom: 10,
                    }}
                    contentContainerStyle={{
                        paddingBottom: 120,
                    }}
                    ListEmptyComponent={
                        <View className="mt-20 items-center px-10">
                            <Text className="text-gray-400 text-center text-base">
                                No saved movies yet
                            </Text>
                            <Text className="text-gray-500 text-center text-sm mt-2">
                                Movies you save will appear here
                            </Text>
                        </View>
                    }
                    showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    );
};

export default Saved;
