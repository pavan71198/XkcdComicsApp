import React from 'react';
import {ScrollView} from 'react-native';
import XkcdComicCard from '../components/XkcdComicCard';
import {StackNavigationProp} from '@react-navigation/stack';

interface IParams {
  comicNum: number;
}

type StackParamList = {
  Home: any;
  Comic: IParams;
};

type Props = {
  navigation: StackNavigationProp<StackParamList, 'Home'>;
};

const XkcdListPage: React.FC<Props> = ({navigation}) => {
  let xkcdComicCards = [];
  for (let i = 1; i <= 10; i++) {
    xkcdComicCards.push(
      <XkcdComicCard comicNum={i} navigation={navigation} key={i} />,
    );
  }
  return <ScrollView>{xkcdComicCards}</ScrollView>;
};

export default XkcdListPage;
