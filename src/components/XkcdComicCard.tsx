import React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';
import {View, StyleSheet, Pressable} from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import {StackNavigationProp} from '@react-navigation/stack';
import {ComicJson, StackParamList} from '../pages/XkcdListPage';
interface ComicProps {
  comicJson: ComicJson;
  screen: string;
  navigation: StackNavigationProp<StackParamList, 'Home' | 'Comic'>;
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    alignContent: 'center',
  },
});

const XkcdComicCard: React.FC<ComicProps> = ({
  comicJson,
  screen,
  navigation,
}) => {
  if (screen === 'Comic' && comicJson) {
    return (
      <View style={styles.container}>
        <Card>
          <Card.Content>
            <FullWidthImage source={{uri: comicJson.img}} />
            <Title>{comicJson.title}</Title>
            <Paragraph>Description: {comicJson.alt}</Paragraph>
            <Paragraph>Transcript: {comicJson.transcript}</Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  } else if (screen === 'Home' && comicJson) {
    return (
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            navigation.navigate('Comic', {
              comicJson: comicJson,
            });
          }}>
          <Card>
            <Card.Content>
              <FullWidthImage source={{uri: comicJson.img}} />
              <Title>{comicJson.title}</Title>
            </Card.Content>
          </Card>
        </Pressable>
      </View>
    );
  } else {
    return <View />;
  }
};

export default XkcdComicCard;
