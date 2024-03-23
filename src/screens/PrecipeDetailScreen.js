import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  ScrollView,
} from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";

const PrecipeDetailScreen = ({ navigation, route }) => {
  const { item } = route.params;
  console.log(item);
  return (
    <View style={{ backgroundColor: item.color, flex: 1 }}>
      <SafeAreaView style={{ flexDirection: "row", marginHorizontal: 16 }}>
        <Pressable style={{ flex: 1 }} onPress={() => navigation.goBack()}>
          <FontAwesome name={"arrow-circle-left"} size={28} color="white" />
        </Pressable>

        <FontAwesome name={"heart-o"} size={28} color="white" />
      </SafeAreaView>
      <View
        style={{
          backgroundColor: "#fff",
          flex: 1,
          marginTop: 240,
          borderTopLeftRadius: 56,
          borderTopRightRadius: 56,
          alignItems: "center",
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            // backgroundColor: "red",
            height: 300,
            width: 300,
            position: "absolute",
            top: -150,
          }}
        >
          <Image
            source={item.image}
            style={{ width: "100%", height: "100%", resizeMode: "contain" }}
          />
        </View>
        {/* Recipe Name */}
        <Text
          style={{ marginTop: 160, font: 30, fontWeight: "bold", fontSize: 25 }}
        >
          {item.name}
        </Text>
        <View style={{ flex: 1 }}>
          <ScrollView showsHorizontalScrollIndicator={false}>
            {/* Recipe Description */}
            <Text style={{ fontSize: 15, marginVertical: 16 }}>
              {item.description}
            </Text>
            {/* Recipe Extra Details */}
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                width: "100%",
                // backgroundColor: "green",
              }}
            >
              <View
                style={{
                  backgroundColor: "#f08080",
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 23 }}>Time</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {item.time}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#6495ed",
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 23 }}>Difficulty</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {item.difficulty}
                </Text>
              </View>
              <View
                style={{
                  backgroundColor: "#faebd7",
                  paddingHorizontal: 10,
                  paddingVertical: 20,
                  borderRadius: 8,
                  alignItems: "center",
                }}
              >
                <Text style={{ fontSize: 23 }}>Calories</Text>
                <Text style={{ fontSize: 15, fontWeight: "bold" }}>
                  {item.calories}
                </Text>
              </View>
            </View>
            {/* Recipe Ingredients */}
            <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
              <Text
                style={{ fontSize: 22, fontWeight: "bold", marginBottom: 2 }}
              >
                Ingredients:
              </Text>
              {item.ingredients.map((ingredients, index) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 3,
                    }}
                    key={index}
                  >
                    <View
                      style={{
                        backgroundColor: "red",
                        height: 10,
                        width: 10,
                        borderRadius: 5,
                      }}
                    ></View>
                    <Text style={{ fontSize: 15, marginLeft: 16 }}>
                      {ingredients}
                    </Text>
                  </View>
                );
              })}
            </View>
            {/* Recipe Steps */}
            <View style={{ alignSelf: "flex-start", marginVertical: 22 }}>
              <Text
                style={{ fontSize: 22, fontWeight: "bold", marginBottom: 2 }}
              >
                Steps:
              </Text>
              {item.steps.map((step, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      marginVertical: 3,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 15,
                        marginLeft: 16,
                        marginVertical: 4,
                        fontWeight: "bold",
                      }}
                    >{`${index + 1} . ${step}`}</Text>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </View>
    </View>
  );
};

export default PrecipeDetailScreen;

const styles = StyleSheet.create({});
