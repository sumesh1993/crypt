import React, { useRef, useState } from "react";
import {
  View,
  Text,
  Touchable,
  TouchableWithoutFeedback,
  Image,
  TouchableOpacity,
} from "react-native";

import Video from "react-native-video";
import styles from "./styles";

import Entypo from "react-native-vector-icons/Entypo";
import AntDesign from "react-native-vector-icons/AntDesign";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";

const Post = (props) => {
  const videoRef = useRef(null);

  const [post, setPost] = useState(props.post);
  const [isLiked, setIsLiked] = useState(false);

  //const {post} = props;

  const [paused, setPaused] = useState(false);

  const onPlayPausePress = () => {
    setPaused(!paused);
  };

  const onLikePress = () => {
    const likesToAdd = isLiked ? -1 : 1;
    setPost({
      ...post,
      likes: post.likes + likesToAdd,
    });
    setIsLiked(!isLiked);
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={onPlayPausePress}>
        <View>
          <Video
            ref={videoRef}
            source={{ uri: post.videoUri }}
            style={styles.video}
            onError={(e) => console.log(e)}
            resizeMode={"cover"}
            repeat={true}
            paused={post.id !== props.activeKey}
            muted={post.id !== props.activeKey}
          />
          <View style={styles.uiContainer}>
            <View style={styles.rightContainer}>
              <View style={styles.profilePictureContainer}>
                <Image
                  style={styles.profilePicture}
                  source={{ uri: post.user.imageUri }}
                />
              </View>

              <TouchableOpacity
                style={styles.iconContainer}
                onPress={onLikePress}
              >
                <AntDesign
                  name={"heart"}
                  size={38}
                  color={isLiked ? "red" : "white"}
                />
                <Text style={styles.statsLabel}>{post.likes}</Text>
              </TouchableOpacity>
              <View style={styles.iconContainer}>
                <FontAwesome name={"comment-o"} size={38} color="white" />
                <Text style={styles.statsLabel}>{post.comments}</Text>
              </View>
              <View style={styles.iconContainer}>
                <Feather name={"share"} size={36} color="white" />
                <Text style={styles.statsLabel}>{post.shares}</Text>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <View>
                <Text style={styles.handle}>@{post.user.username}</Text>
                <Text style={styles.description}>{post.description}</Text>
                <View style={styles.songRow}>
                  <Entypo name={"note"} size={19} color="white" />
                  <Text style={styles.songName}>{post.songName}</Text>
                </View>
              </View>
              <Image
                style={styles.songImage}
                source={{ uri: post.songImage }}
              />
            </View>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
};

export default Post;
