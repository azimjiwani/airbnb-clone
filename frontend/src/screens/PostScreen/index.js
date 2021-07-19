import React from 'react';
import { View } from 'react-native';
import DetailedPost from '../../components/DetailedPost';
import locations from '../../../assets/data/feed';
import {useRoute} from '@react-navigation/native';

const PostScreen = (props) => {

    const route = useRoute();
    const post = locations.find(location => location.id === route.params.postId);

    return (
        <View style={{backgroundColor:'white'}}>
            <DetailedPost post={post} />
        </View>
    );
};

export default PostScreen;
