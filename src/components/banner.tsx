import React from "react";
import { View, Pressable, Image } from "react-native";
import PagerView from "react-native-pager-view";
import banner1 from "../../assets/images/banner1.png";
import banner2 from "../../assets/images/banner2.png";

const images = [banner1, banner2];

const Banner = () => {
  return (
    <View className="w-full h-36 md:h-60 rounded-2xl my-4">
      <PagerView style={{ flex: 1 }} initialPage={0} pageMargin={14}>
        {images.map((image, index) => (
          <Pressable
            key={index}
            className="bg-gray-400 w-full h-full rounded-2xl overflow-hidden"
            onPress={() => {
              console.log(`Clicked...! Banner ${index}`);
            }}
          >
            <Image
              source={image}
             className="w-full h-36 "
            />
          </Pressable>
        ))}
      </PagerView>
    </View>
  );
};

export default Banner;
