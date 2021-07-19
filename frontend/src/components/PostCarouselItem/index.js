import React from 'react';
import { View,Text,Image,Pressable,useWindowDimensions } from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Post = (props) => {

    const post = props.post;
    const width = useWindowDimensions().width;

    const navigation = useNavigation();
    
    const goToPostScreen = () => {
        navigation.navigate('Post', {postId:post.id})
    }

    return (
        <Pressable onPress={goToPostScreen} style={[styles.container, {width:width-60}]}>
            <View style={styles.innerContainer}>
                {/* image */}
                <Image style={styles.coverImage} source={{uri:post.image}}/>

                <View style={{flex:1, marginHorizontal:10}}>
                    {/* bed & bath */}
                    <Text style = {styles.bed}>{post.bed}  bed {post.bath} bath</Text>
                    {/* Title */}
                    <Text style = {styles.title} numberOfLines={2}>{post.title}</Text>
                    {/* rental type */}
                    <Text style = {styles.rentalType}>{post.rentalType}</Text>
                    {/* price */}
                    <Text style = {styles.prices}>
                        <Text style = {styles.price}>${post.price} </Text>
                        / month
                    </Text>
                </View>
            </View>
        </Pressable>
    );
};

export default Post;
