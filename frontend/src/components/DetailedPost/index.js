import React from 'react';
import { View,Text,Image,Pressable,ScrollView } from 'react-native';
import styles from './styles';
import Fontisto from 'react-native-vector-icons/Fontisto';

const Post = (props) => {
    const post = props.post;
    
    return (
        <ScrollView>
            <View style={styles.container}>
                {/* image */}
                <Image style={styles.coverImage} source={{uri:post.image}}/>
                {/* Title */}
                <Text style = {styles.title}>{post.title}</Text>
                {/* address */}
                <Text style = {styles.location}>{post.location}</Text>
                {/* bed & bath */}
                <Text style = {styles.bed}>{post.bed} bed {post.bath} bath</Text>
                {/* rental type */}
                <Text style = {styles.rentalType}>{post.rentalType}</Text>
                {/* price */}
                <Text style = {styles.prices}>
                    <Text style = {styles.price}>${post.price} </Text>
                    / month
                </Text>
                {/* description */}
                <Text style = {styles.description}>{post.description}</Text>
            </View>
        </ScrollView>
    );
}

export default Post;