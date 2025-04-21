import { View, Text, ImageBackground, Image } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { images } from '@/constants/images'
import { icons } from '@/constants/icons'


const TabIcon = ({ focused, icon, title }: any) => {
    if (focused) {
        return (
            <ImageBackground
                source={images.highlight}
                className='flex flex-row w-full flex-1 min-w-[112px] min-h-16 mt-4 justify-center items-center rounded-full overflow-hidden'
            >
                <Image source={icon} tintColor='#151312' className='size-5' />
                <Text className='text-secondary text-base font-semibold ml-2'>{title}</Text>
            </ImageBackground>
        )
    }
    return (
        <View className='size-full justify-center items-center mt-4 rounded-full'>
            <Image source={icon} tintColor='#A8B5DB' className='size-5' />
        </View>
    )
}


const _layout = () => {

    return (
        // This is Tab navigation which is nested inside Stack navigation.
        // i.e. whenever (tabs) in Stack navigation is rendering, this Tab navigation will be shown starting with the Home screen.
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarItemStyle: {
                width: '100%',
                height: '100%',
                justifyContent: 'center',
                alignContent: 'center'
            },
            tabBarStyle: {
                backgroundColor: '#0f0D23',
                borderRadius: 50,
                marginHorizontal: 20,
                marginBottom: 36,
                height: 52,
                position: 'absolute',
                overflow: 'hidden',
                borderColor: '#0f0D23'
            }
        }}>
            {/*Tabs automatically recognize all the screens inside groups. Tabs,screen are just for modifying them. */}
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <TabIcon
                                focused={focused}
                                icon={icons.home}
                                title="Home"
                            />
                        </>
                    )
                }}
            />
            <Tabs.Screen
                name='search'
                options={{
                    title: 'Search',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <TabIcon
                                focused={focused}
                                icon={icons.search}
                                title="Search"
                            />
                        </>
                    )
                }}
            />
            <Tabs.Screen
                name='saved'
                options={{
                    title: 'Saved',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <TabIcon
                                focused={focused}
                                icon={icons.save}
                                title="Saved"
                            />
                        </>
                    )
                }}
            />
            <Tabs.Screen
                name='profile'
                options={{
                    title: 'Profile',
                    headerShown: false,
                    tabBarIcon: ({ focused }) => (
                        <>
                            <TabIcon
                                focused={focused}
                                icon={icons.person}
                                title="Profile"
                            />
                        </>
                    )
                }}
            />

        </Tabs>
    )
}

export default _layout