import React from 'react';
import {Card, Title, Paragraph} from 'react-native-paper';
import {View, StyleSheet, Pressable, Text} from 'react-native';
import FullWidthImage from 'react-native-fullwidth-image';
import {StackNavigationProp} from '@react-navigation/stack';
import {ComicJson, StackParamList} from '../pages/XkcdListPage';
import {addComicJson} from '../redux/actions/history';
import {Dispatch} from 'redux';
import {connect} from 'react-redux';
interface ComicProps {
  comicJson: ComicJson;
  screen: string;
  navigation: StackNavigationProp<StackParamList, any>;
  onViewComic: (comicJson: ComicJson) => void;
}

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginTop: 10,
    alignContent: 'center',
  },
  boldText: {
    fontWeight: 'bold',
  },
});

const XkcdComicCardBase: React.FC<ComicProps> = ({
  comicJson,
  screen,
  navigation,
  onViewComic,
}) => {
  if (screen === 'Comic' && comicJson) {
    return (
      <View style={styles.container}>
        <Card>
          <Card.Content>
            <FullWidthImage source={{uri: comicJson.img}} />
            <Title>{comicJson.title}</Title>
            <Paragraph>
              <Text style={styles.boldText}>Description: </Text>
              {comicJson.alt}
            </Paragraph>
            <Paragraph>
              <Text style={styles.boldText}>Transcript: </Text>
              {comicJson.transcript}
            </Paragraph>
          </Card.Content>
        </Card>
      </View>
    );
  } else if (screen === 'Home' && comicJson) {
    return (
      <View style={styles.container}>
        <Pressable
          onPress={() => {
            onViewComic(comicJson);
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
  } else if (screen === 'History' && comicJson) {
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

const mapDispatchToProps = (dispatch: Dispatch) => ({
  onViewComic: (comicJson: ComicJson) => {
    dispatch(addComicJson(comicJson));
  },
});

const XkcdComicCard = connect(null, mapDispatchToProps)(XkcdComicCardBase);

export default XkcdComicCard;
