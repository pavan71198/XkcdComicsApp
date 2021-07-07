import React from 'react';
import {StackNavigationProp} from '@react-navigation/stack';
import XkcdComicCard from '../components/XkcdComicCard';
import {RouteProp} from '@react-navigation/native';

interface IParams {
  comicNum: number;
}

type StackParamList = {
  Home: undefined;
  Comic: IParams;
};

type Props = {
  navigation: StackNavigationProp<StackParamList, 'Comic'>;
  route: RouteProp<StackParamList, 'Comic'>;
};

const XkcdComicPage: React.FC<Props> = ({navigation, route}) => {
  return (
    <XkcdComicCard comicNum={route.params.comicNum} navigation={navigation} />
  );
};

export default XkcdComicPage;
