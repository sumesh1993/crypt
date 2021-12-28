import React, { useState } from "react";
import { View, FlatList, Dimensions, ScrollView } from "react-native";
import Post from "../../components/Post";
import Carousel from "react-native-snap-carousel";

import posts from "../../../data/posts";

const { height } = Dimensions.get("screen");

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  return (
    <View>
      <Carousel
        ref={(c) => {
          this._carousel = c;
        }}
        vertical
        data={posts}
        renderItem={({ item }) => (
          <Post post={item} activeKey={posts[currentIndex].id} />
        )}
        itemHeight={height}
        sliderHeight={height}
        inactiveSlideScale={1}
        layout={"stack"}
        onSnapToItem={(index) => setCurrentIndex(index)}
      />

      {/* <FlatList
        onMomentumScrollEnd={(data) => console.log("onMomentumScrollEnd", data)}
        data={posts}
        renderItem={({ item }) => <Post post={item} />}
        showsVerticalScrollIndicator={false}
        snapToInterval={Dimensions.get("window").height - 130}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
      /> */}
    </View>
  );
};

export default Home;
