import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import XkcdComicCard from '../components/XkcdComicCard';
import {StackNavigationProp} from '@react-navigation/stack';
import {useState} from 'react';
import {connect} from 'react-redux';
import {ActivityIndicator, Colors} from 'react-native-paper';
import {ComicJson, StackParamList} from './XkcdListPage';
import {HistoryState} from '../redux/types';

type Props = {
  navigation: StackNavigationProp<StackParamList, 'History'>;
  viewedComicJsons: ComicJson[];
};

const styles = StyleSheet.create({
  activityIndicatorView: {
    marginVertical: 30,
  },
});

let xkcdComicCards: JSX.Element[] = [];
let renderedComics = 0;

const XkcdHistoryPageBase: React.FC<Props> = ({
  navigation,
  viewedComicJsons,
}) => {
  const [isLoading, setLoading] = useState(false);
  if (renderedComics < viewedComicJsons.length) {
    setLoading(true);
    for (let i = renderedComics; i < viewedComicJsons.length; i++) {
      xkcdComicCards.unshift(
        <XkcdComicCard
          navigation={navigation}
          comicJson={viewedComicJsons[i]}
          screen="History"
          key={i}
        />,
      );
      renderedComics++;
    }
    setLoading(false);
  }
  return (
    <ScrollView>
      {[...xkcdComicCards]}
      <View style={styles.activityIndicatorView}>
        <ActivityIndicator animating={isLoading} color={Colors.black} />
      </View>
    </ScrollView>
  );
  // return <ScrollView>{createComicCards()}</ScrollView>;
};

const mapStateToProps = (state: HistoryState) => {
  return {
    viewedComicJsons: state.viewedComicJsons,
  };
};

const XkcdHistoryPage = connect(mapStateToProps, null)(XkcdHistoryPageBase);

export default XkcdHistoryPage;
