import React, {useEffect, useState} from 'react';
import {Card, Title, Paragraph, ActivityIndicator} from 'react-native-paper';
import { View, Image, StyleSheet, Platform } from "react-native";
interface IProps {
  comicNum: number;
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
  comic: {
    resizeMode: 'cover',
  },
});

const XkcdImageCard: React.FC<IProps> = ({comicNum}) => {
  const [isLoading, setLoading] = useState(false);
  const [comicJson, setComicJson] = useState<IComicJson>({} as IComicJson);

  const getComicJson = (comicNum: number) => {
    let jsonUrl = 'https://xkcd.com/' + comicNum.toString() + '/info.0.json';
    fetch(jsonUrl)
      .then(response => response.json())
      .then(json => setComicJson(json))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  };
  useEffect(() => {
    setLoading(true);
    getComicJson(comicNum);
  }, [comicNum]);
  return isLoading ? (
    <ActivityIndicator animating={true} />
  ) : (
    <View style={styles.container}>
      <Card>
        <Card.Cover source={{uri: comicJson.img}} style={styles.comic} />
        <Title>{comicJson.title}</Title>
        <Paragraph>{comicJson.alt}</Paragraph>
      </Card>
    </View>
  );
};

export default XkcdImageCard;
