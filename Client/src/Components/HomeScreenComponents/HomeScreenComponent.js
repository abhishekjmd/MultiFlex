import { ScrollView,View } from 'react-native'
import React from 'react'
import TopPlaylist from './TopPlaylist'
import RecommendedPlaylist from './RecommendedPlaylist'
import MoodyPlaylist from './MoodyPlaylist'
import GreetingComp from './GreetingComp'
import LoginScreenComp from '../AuthenticationScreenComps/LoginScreencomponents/LoginScreenComp'

const HomeScreenComponent = () => {
    return (    
         <ScrollView scrollEnabled={true} style={{ flex: 1 }} >
         <GreetingComp />
         <RecommendedPlaylist />
         <TopPlaylist />
         <MoodyPlaylist />
         </ScrollView>
    )
}

export default HomeScreenComponent
