import React from "react";
import { View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import TrainingCompletionSvg from "../../../../assets/svgs/trainingsScreen/TrainingCompletionSvg";
import TrainingSuccessSvg from "../../../../assets/svgs/trainingsScreen/TrainingSuccessSvg";

const StatsCard = ({ title, data }) => {
  const sum = data.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );
  const average = Math.round(sum / data.length);
  return (
    <View className="mt-3">
      <View className="flex-row items-center gap-[7] ml-3">
        {title === "Training Completion" ? (
          <TrainingCompletionSvg />
        ) : title === "Training Success" ? (
          <TrainingSuccessSvg />
        ) : (
          ""
        )}

        <Text className="text-textSecondary text-lg font-medium">{title}</Text>
      </View>

      <View
        className={`bg-cardBg mt-3 pt-[12] pb-[6] px-[12] w-[43vw] rounded-[25px]`}
      >
        <Text className="text-textPrimary text-base">Avg. {average}%</Text>
        <View className="flex-row justify-between mt-2 ">
          {data.map((value, index) => {
            return (
              <View
                key={index}
                className="relative w-[10] h-[58] flex items-center justify-end rounded-full bg-chartDark"
              >
                <LinearGradient
                  colors={
                    value > 80
                      ? ["rgba(86, 170, 251, 1)", "rgba(57, 86, 211, 1)"]
                      : value > 30
                      ? ["rgba(108, 228, 221, 1)", "rgba(86, 170, 251, 1)"]
                      : ["rgba(86, 170, 251, 1)", "rgba(108, 228, 221, 1)"]
                  }
                  style={{
                    width: 10,
                    borderRadius: 999,
                    height: `${value}%`,
                  }}
                />
              </View>
            );
          })}
        </View>
        <View className="flex-row justify-between mt-[2]">
          {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
            <Text key={index} className="text-textSecondary text-xs">
              {day}
            </Text>
          ))}
        </View>
      </View>
    </View>
  );
};

export default StatsCard;
