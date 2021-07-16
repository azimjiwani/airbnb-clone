import React, {useState,useEffect,useRef}from 'react';
import { View,Text, FlatList,useWindowDimensions } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import locations from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';
import PostCarouselItem from '../../components/PostCarouselItem'

const SearchResultMap = (props) => {

    const [selectedLocationId,setSelectedLocationId] = useState(null);
    const screenWidth = useWindowDimensions().width;
    const flatList = useRef();
    const mapRef = useRef();
    const viewConfig = useRef({itemVisiblePercentThreshold: 70})
    const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedLocation = viewableItems[0].item;
      setSelectedLocationId(selectedLocation.id)
        }
    })

    useEffect(() => {
        if (!selectedLocationId || !flatList){
            return;
        }
        const index = locations.findIndex(location => location.id === selectedLocationId);
        flatList.current.scrollToIndex({index})
        const selectedLocation = locations[index];
        const currRegion = {
            latitude:selectedLocation.coordinate.latitude,
            longitude:selectedLocation.coordinate.longitude,
            latitudeDelta:0.35,
            longitudeDelta:0.35,
        }
        mapRef.current.animateToRegion(currRegion)
    }, [selectedLocationId]);

    return (
        <View style = {{width:'100%', height:'100%'}}>
            <MapView 
                ref={mapRef}
                provider={PROVIDER_GOOGLE}style={{width:'100%', height:'100%'}}
                initialRegion={{
                latitude: 43.469761,
                longitude: -80.538811,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
                }}
            >
                {locations.map(location => 
                    <CustomMarker
                        key={location.id}
                        coordinate={location.coordinate}
                        price = {location.price}
                        isSelected={location.id === selectedLocationId}
                        onPress={() => setSelectedLocationId(location.id)}
                        
                    />)
                }
            </MapView>
            <View style={{position:'absolute',bottom:0}}>
                <FlatList 
                    ref={flatList}
                    data={locations} 
                    renderItem={({item})=> <PostCarouselItem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={screenWidth-60}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current}
                />
            </View>
        </View>
    );
}

export default SearchResultMap;