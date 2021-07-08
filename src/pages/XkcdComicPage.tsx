import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import XkcdComicCard from '../components/XkcdComicCard';
import {RouteProp} from '@react-navigation/native';
import {StackParamList} from './XkcdListPage';

type Props = {
  navigation: StackNavigationProp<StackParamList, 'Comic'>;
  route: RouteProp<StackParamList, 'Comic'>;
};

const XkcdComicPage: React.FC<Props> = ({navigation, route}) => {
  return (
    <XkcdComicCard
      comicJson={route.params.comicJson}
      screen={'Comic'}
      navigation={navigation}
    />
  );
};

export default XkcdComicPage;
