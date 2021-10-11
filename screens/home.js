import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Modal,
  FlatList,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
  Image,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../shared/card";
import { MaterialIcons } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { blogs } from "../context/data";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "cake",
      rating: 5,
      body: "$50",
      key: "1",
      image: require("../assets/images/1.jpg"),
      description:
        "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      title: "cake1",
      rating: 3,
      body: "$70",
      key: "2",
      image: require("../assets/images/1.jpg"),
      description:
        "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      title: "cake2",
      rating: 2,
      body: "$50",
      key: "3",
      image: require("../assets/images/1.jpg"),
      description:
        "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      title: "cake2",
      rating: 2,
      body: "$50",
      key: "4",
      image: require("../assets/images/1.jpg"),
      description:
        "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      title: "cake2",
      rating: 2,
      body: "$50",
      key: "5",
      image: require("../assets/images/1.jpg"),
      description:
        "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      title: "cake2",
      rating: 2,
      body: "$50",
      key: "6",
      image: require("../assets/images/1.jpg"),
      description:
        "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      title: "cake2",
      rating: 2,
      body: "$50",
      key: "7",
      image: require("../assets/images/1.jpg"),
      description:
        "s simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
  ]);
  const [images, setImages] = useState([
    require("../assets/images/1.jpg"),
    require("../assets/images/2.jpg"),
    require("../assets/images/3.jpg"),
    require("../assets/images/4.jpg"),
  ]);

  const addReview = (review) => {
    review.key = Math.random().toString();
    setReviews((currentReviews) => {
      return [review, ...currentReviews];
    });
    setModalOpen(false);
  };
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <View style={globalStyles.container}>
      <View style={styles.sliderContainer}>
        <SliderBox
          images={images}
          sliderBoxHeight={200}
          inactiveDotColor="#90A4AE"
          dotColor="#FFEE58"
          autoplay
          circleLoop
          paginationBoxVerticalPadding={20}
        />
      </View>
      <View style={styles.headingCon}>
        <Text style={styles.catogary}>GIFTS</Text>
        <TouchableOpacity onPress={() => navigation.navigate("AddPost")}>
          <View style={styles.addCon}>
            <MaterialIcons
              name="add"
              size={24}
              style={styles.modalToggle}
              onPress={() => setModalOpen(true)}
            />

            <Text style={styles.addPost}>Add post</Text>
          </View>
        </TouchableOpacity>
      </View>
      <FlatList
        keyExtractor={(item) => item.key}
        data={reviews}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Image source={item.image} style={styles.cardImage} />
              <Text style={globalStyles.titleText}>{item.title}</Text>
              <Text style={globalStyles.titleText}>Price : {item.body}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    borderRadius: 10,
    color: "blue",
    marginLeft: 30,
    paddingTop: 10,
  },
  addPost: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#f2f2f2",
    borderRadius: 10,
    color: "blue",
    paddingTop: 10,
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
  },
  modalContent: {
    flex: 1,
  },
  sliderContainer: {
    // alignItems: "center",
    marginTop: 20,
  },
  catogary: {
    fontWeight: "700",
    margin: 10,
  },
  headingCon: {
    flexDirection: "row",
  },
  addCon: {
    flexDirection: "row",
  },
  cardImage: {
    width: 130,
    height: 90,
  },
});
