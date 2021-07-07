import React from 'react';
import {ScrollView} from 'react-native';
import XkcdImageCard from '../components/XkcdImageCard';

const XkcdListPage = () => {
  let xkcdImageCards = [];
  for (let i = 1; i <= 100; i++) {
    xkcdImageCards.push(<XkcdImageCard comicNum={i} key={i}></XkcdImageCard>);
  }
  return (
    <ScrollView>
      {xkcdImageCards}
    </ScrollView>
  );
};

export default XkcdListPage;
