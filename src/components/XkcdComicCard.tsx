import React, {useEffect, useState} from 'react';
import {Card, Title, Paragraph, ActivityIndicator} from 'react-native-paper';
import {View, StyleSheet, Pressable} from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import {StackNavigationProp} from '@react-navigation/stack';
interface IProps {
  comicNum: number;
  navigation: StackNavigationProp<any>;
}

interface IComicJson {
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
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    alignContent: 'center',
  },
});

const XkcdComicCard: React.FC<IProps> = ({comicNum, navigation}) => {
  const [isLoading, setLoading] = useState(false);
  const [comicJson, setComicJson] = useState<IComicJson>({} as IComicJson);

  useEffect(() => {
    setLoading(true);
    const getComicJson = () => {
      let jsonUrl = 'https://xkcd.com/' + comicNum.toString() + '/info.0.json';
      fetch(jsonUrl)
        .then(response => response.json())
        .then(json => setComicJson(json))
        .catch(error => console.error(error))
        .finally(() => setLoading(false));
    };
    getComicJson();
  }, [comicNum]);

  return isLoading ? (
    <ActivityIndicator animating={true} />
  ) : (
    <View style={styles.container}>
      <Pressable
        onPress={() => {
          navigation.navigate('Comic', {comicNum: comicNum});
        }}>
        <Card>
          <Card.Content>
            <FullWidthImage source={{uri: comicJson.img}} />
            <Title>{comicJson.title}</Title>
            <Paragraph>{comicJson.alt}</Paragraph>
          </Card.Content>
        </Card>
      </Pressable>
    </View>
  );
};

export default XkcdComicCard;
