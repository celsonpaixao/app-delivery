import { ScrollView, StatusBar, Text, View } from "react-native";
import Header from "../components/header";
import Constants from "expo-constants";
import Banner from "../components/banner";

const statusbarHeigth = Constants.statusBarHeight;
export default function Index() {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      className="flex-1 bg-slate-200"
    >
      <View className="w-full  px-4" style={{ marginTop: statusbarHeigth + 1 }}>
        <Header />
        <Banner />
      </View>
    </ScrollView>
  );
}
