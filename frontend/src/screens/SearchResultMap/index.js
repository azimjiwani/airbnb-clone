import React, {useState}from 'react';
import { View,Text } from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import locations from '../../../assets/data/feed';
import CustomMarker from '../../components/CustomMarker';

const SearchResultMap = (props) => {

    const [selectedLocationId,setSelectedLocationId] = useState(null);

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
                {locations.map(place => 
                    <CustomMarker
                        coordinate={place.coordinate}
                        price = {place.price}
                        isSelected={place.id === selectedLocationId}
                        onPress={() => setSelectedLocationId(place.id)}
                        
                    />)
                }
            </MapView>
        </View>
    );
}

export default SearchResultMap;