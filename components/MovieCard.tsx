import { View, Text, TouchableOpacity, Image, Dimensions } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import { icons } from '@/constants/icons';

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: Movie) => {
    const { width } = Dimensions.get('window');
    const cardSpacing = 20; // gap from columnWrapperStyle
    const numColumns = 3;
    const totalSpacing = cardSpacing * (numColumns - 1);
    const cardWidth = (width - totalSpacing - 60) / numColumns;

    return (
        <Link href={`/movies/${id}`} >   {/* as child simply means the content inside link will be clickable or navigatable. In this case a card */}
            <TouchableOpacity style={{ width: cardWidth }}>
                <Image
                    source={{
                        uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : 'https://placehold.co/600x400/1a1a1a/ffffff.png'

                    }}
                    className='w-full h-52 rounded-lg'
                    resizeMode='cover'
                />
                <Text className='text-sm font-bold text-white mt-2' numberOfLines={1}>{title}</Text>
                <View className='flex-row items-center justify-start gap-x-1'>
                    <Image source={icons.star} className='size-4' />
                    <Text className='text-xs text-white font-bold uppercase'>{Math.round(vote_average)}</Text>

                </View>
                <View className='flex-row items-center justify-between'>
                    <Text className='text-xs text-light-300 font-medium mt-1'>
                        {release_date?.split('-')[0]}
                    </Text>
                    {/* <Text className='text-xs font-medium text-light-300 uppercase'>
                        Movie
                    </Text> */}

                </View>
            </TouchableOpacity>

        </Link>
    )
}

export default MovieCard