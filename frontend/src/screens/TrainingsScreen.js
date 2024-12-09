import React from "react";
import { View, ScrollView, Text, TouchableOpacity } from "react-native";
import Header from "./../components/trainingsScreen/Header";
import StatsCard from "./../components/trainingsScreen/StatsCard";
import ActivityCard from "./../components/trainingsScreen/ActivityCard";
import ChatCard from "./../components/trainingsScreen/ChatCard";
import ActivityCards from "../components/trainingsScreen/ActivityCards";

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

        <TouchableOpacity className="flex-row items-center mt-4">
          <Text className="text-accent text-sm font-medium">
            Add new activity
          </Text>
          <View className="bg-accent w-6 h-6 rounded-full items-center justify-center ml-2">
            <Text className="text-white text-lg">+</Text>
          </View>
        </TouchableOpacity>

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
