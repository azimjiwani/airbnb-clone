import React from 'react';
import { View,Text,Image,Pressable,useWindowDimensions } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = (props) => {
    const post = props.post;
    const width = useWindowDimensions().width;
    return (
        <View style={[styles.container, {width:width-60}]}>
            <View style={styles.innerContainer}>
                {/* image */}
                <Image style={styles.coverImage} source={{uri:post.image}}/>

                <View style={{flex:1, marginHorizontal:10}}>
                    {/* Title */}
                    <Text style = {styles.title}>{post.title}</Text>
                    {/* bed & bath */}
                    <Text style = {styles.bed}>{post.bed}  bed {post.bath} bath</Text>
                    {/* address */}
                    <Text style = {styles.location}>{post.location}</Text>
                    {/* rental type */}
                    <Text style = {styles.rentalType}>{post.rentalType}</Text>
                    {/* price */}
                    <Text style = {styles.prices}>
                        <Text style = {styles.price}>${post.price} </Text>
                        / month
                    </Text>
                </View>
            </View>
        </View>
    );
}

export default Post;