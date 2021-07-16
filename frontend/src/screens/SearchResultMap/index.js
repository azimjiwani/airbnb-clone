import React, {useState}from 'react';
import { View,Text, FlatList,useWindowDimensions } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import locations from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem'

const SearchResultMap = (props) => {

    const [selectedLocationId,setSelectedLocationId] = useState(null);
    const screenWidth = useWindowDimensions().width;

    return (
        <View style = {{width:'100%', height:'100%'}}>
            <MapView provider={PROVIDER_GOOGLE}style={{width:'100%', height:'100%'}}
                initialRegion={{
                latitude: 43.469761,
                longitude: -80.538811,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            >
                {locations.map(locations => 
                    <CustomMarker
                        key={locations.id}
                        coordinate={locations.coordinate}
                        price = {locations.price}
                        isSelected={locations.id === selectedLocationId}
                        onPress={() => setSelectedLocationId(locations.id)}
                        
                    />)
                }
            </MapView>
            <View style={{position:'absolute',bottom:0}}>
                <FlatList 
                    data={locations} 
                    renderItem={({item})=> <PostCarouselItem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={screenWidth-60}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                    
                />
            </View>
        </View>
    );
}

export default SearchResultMap;