import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import XkcdComicCard from '../components/XkcdComicCard';
import {RouteProp} from '@react-navigation/native';
import {StackParamList} from './XkcdListPage';
import {ScrollView} from 'react-native';

type Props = {
  navigation: StackNavigationProp<StackParamList, 'Comic'>;
  route: RouteProp<StackParamList, 'Comic'>;
};

const XkcdComicPage: React.FC<Props> = ({navigation, route}) => {
  return (
    <ScrollView>
      <XkcdComicCard
        comicJson={route.params.comicJson}
        screen={'Comic'}
        navigation={navigation}
      />
    </ScrollView>
  );
};

export default XkcdComicPage;
