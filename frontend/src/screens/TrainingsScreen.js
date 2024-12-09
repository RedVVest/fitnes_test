import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import Header from "./../components/trainingsScreen/Header";
import StatsCard from "./../components/trainingsScreen/StatsCard";
import ActivityCard from "./../components/trainingsScreen/ActivityCard";
import ChatCard from "./../components/trainingsScreen/ChatCard";
import ActivityCards from "../components/trainingsScreen/ActivityCards";
import AddActivity from "../components/trainingsScreen/AddActivity";

const TrainingsScreen = () => {
  return (
    <View className="flex-1 bg-darkBg px-[18]">
      <Header />
      <ScrollView className="">
        <View className="flex-row justify-between">
          <StatsCard
            title="Training Completion"
            average={67}
            data={[60, 80, 70, 50, 90, 25, 75]}
          />
          <StatsCard
            title="Training Success"
            average={87}
            data={[75, 85, 80, 95, 60, 90, 85]}
          />
        </View>

        <ActivityCards />

        <AddActivity />

        <Text className="text-textPrimary text-lg font-bold mt-8 mb-4">
          Chats with coaches
        </Text>
        <ChatCard
          name="Max"
          message="When will you start running?"
          activity={["Running"]}
          time="13:03"
          unread={10}
        />
        <ChatCard
          name="Daniel"
          message="Nah"
          activity={["Gym", "Stretching"]}
          time="13:03"
          unread={0}
        />
      </ScrollView>
    </View>
  );
};

export default TrainingsScreen;
