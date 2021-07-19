import React from 'react';
import { View,Text,Image,Pressable } from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

const Post = (props) => {
    
    const post = props.post;

    const navigation = useNavigation();
    
    const goToPostScreen = () => {
        navigation.navigate('Post', {postId: post.id})
    }
    return (
        <Pressable onPress={goToPostScreen} style={styles.container}>
            {/* image */}
            <Image style={styles.coverImage} source={{uri:post.image}}/>
            {/* bed & bath */}
            <Text style = {styles.bed}>{post.bed} bed {post.bath} bath</Text>
            {/* Title */}
            <Text style = {styles.title}>{post.title}</Text>
            {/* address */}
            <Text style = {styles.location}>{post.location}</Text>
            {/* rental type */}
            <Text style = {styles.rentalType}>{post.rentalType}</Text>
            {/* description */}
            <Text style = {styles.description} numberOfLines={2}>{post.description}</Text>
            {/* price */}
            <Text style = {styles.prices}>
                <Text style = {styles.price}>${post.price} </Text>
                / month
            </Text>
        </Pressable>
    );
};

export default Post;
