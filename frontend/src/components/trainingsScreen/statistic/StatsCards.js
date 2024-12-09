import React from "react";
import { View } from "react-native";

import StatsCard from "./StatsCard";
import { statsData } from "../../../constants/statsData";

const StatsCards = () => {
  return (
    <View className="flex-row justify-between">
      {statsData.map((stat, index) => (
        <StatsCard key={index} title={stat.title} data={stat.data} />
      ))}
    </View>
  );
};

export default StatsCards;
