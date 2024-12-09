import React from "react";
import { View, ScrollView } from "react-native";

import Header from "./../components/trainingsScreen/Header";
import ActivityCards from "../components/trainingsScreen/activity/ActivityCards";
import AddActivity from "../components/trainingsScreen/AddActivity";
import ChatCards from "../components/trainingsScreen/chat/ChatCards";
import StatsCards from "../components/trainingsScreen/statistic/StatsCards";

const TrainingsScreen = () => {
  return (
    <View className="flex-1 bg-darkBg px-[18]">
      <Header />
      <ScrollView className="">
        <StatsCards />
        <ActivityCards />
        <AddActivity />
        <ChatCards />
      </ScrollView>
    </View>
  );
};

export default TrainingsScreen;
