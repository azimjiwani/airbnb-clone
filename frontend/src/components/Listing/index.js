import React from 'react';
import { View,Text,Image,Pressable } from 'react-native';
import styles from './styles'
import Fontisto from 'react-native-vector-icons/Fontisto';

const Listing = (props) => {
    return (
        <View style={styles.container}>
            {/* image */}
            <Image style={styles.coverImage} source={{uri:"https://scontent.fybz2-2.fna.fbcdn.net/v/t1.6435-0/cp0/e15/q65/c46.0.118.118a/p118x118/213725421_10222882937555700_7554680805140140343_n.jpg?_nc_cat=106&ccb=1-3&_nc_sid=07e735&_nc_ohc=C_gztMJlGtsAX8jzHkV&_nc_ht=scontent.fybz2-2.fna&tp=5&oh=b8cd893cfe7f21b91524cd61b34609c8&oe=60EF2FD5"}}/>
            {/* bed & bath */}
            <Text style = {styles.bedrooms}>1  bed 1 bath</Text>
            {/* Title */}
            <Text style = {styles.description}>Icon Sublet</Text>
            {/* rental type */}
            <Text style = {styles.rentalType}>Sublet</Text>
            {/* address */}
            <Text style = {styles.location}>330 Phillip Street</Text>
            {/* price */}
            <Text style = {styles.prices}>
                <Text style = {styles.price}>$800 </Text>
                / month
            </Text>
        </View>
    );
}

export default Listing;