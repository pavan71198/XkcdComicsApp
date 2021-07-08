import React from 'react';
import {NativeScrollEvent, ScrollView, View} from 'react-native';
import XkcdComicCard from '../components/XkcdComicCard';
import {StackNavigationProp} from '@react-navigation/stack';
import {useState} from 'react';
import {ActivityIndicator} from 'react-native-paper';

interface ComicParams {
  comicJson: ComicJson;
}

export type ComicJson = {
  month: string;
  num: number;
  link: string;
  year: string;
  news: string;
  safe_title: string;
  transcript: string;
  alt: string;
  img: string;
  title: string;
  day: string;
} | null;

export type StackParamList = {
  Home: any;
  Comic: ComicParams;
};

type Props = {
  navigation: StackNavigationProp<StackParamList, 'Home'>;
};

let xkcdComicCards: (JSX.Element | null)[] = [];
let comicJsons: ComicJson[] = [];
let comicJsonCount = 0;
let renderedComics = 0;
let requiredComics = 10;

const XkcdListPage: React.FC<Props> = ({navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const setComicJson = (comicNum: number) => {
    let jsonUrl = 'https://xkcd.com/' + comicNum.toString() + '/info.0.json';
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => {
        comicJsons[comicNum - 1] = json;
        xkcdComicCards[comicNum - 1] = (
          <XkcdComicCard
            navigation={navigation}
            comicJson={comicJsons[comicNum - 1]}
            screen="Home"
            key={comicNum - 1}
          />
        );
        renderedComics++;
        console.log('Rendered ' + comicNum.toString());
        if (renderedComics === requiredComics) {
          console.log('Rendering Done');
          setLoading(false);
        }
      })
      .catch(error => console.error(error));
  };

  const isScrollEnd = (nativeEvent: NativeScrollEvent) => {
    const paddingToBottom = 20;
    return (
      nativeEvent.layoutMeasurement.height + nativeEvent.contentOffset.y >=
      nativeEvent.contentSize.height - paddingToBottom
    );
  };

  if (comicJsonCount < requiredComics) {
    setLoading(true);
    for (; comicJsonCount < requiredComics; comicJsonCount++) {
      comicJsons.push(null);
      xkcdComicCards.push(null);
      setComicJson(comicJsonCount + 1);
    }
  }
  return (
    <ScrollView
      onScroll={({nativeEvent}) => {
        if (isScrollEnd(nativeEvent)) {
          if (!isLoading && renderedComics === requiredComics) {
            console.log('Loading More Comics');
            requiredComics += 10;
            setLoading(true);
          }
        }
      }}
      scrollEventThrottle={1000}>
      {[...xkcdComicCards]}
      <View style={{marginVertical: 30}}>
        <ActivityIndicator animating={isLoading} />
      </View>
    </ScrollView>
  );
  // return <ScrollView>{createComicCards()}</ScrollView>;
};

export default XkcdListPage;
