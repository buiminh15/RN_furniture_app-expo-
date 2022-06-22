import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  ImageBackground,
  View,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { COLORS, FONTS, icons, SIZES } from "../../constants";

function renderHeader() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.padding,
        marginTop: SIZES.base,
      }}
    >
      <TouchableOpacity
        hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}
        onPress={() => console.log("aaa")}
      >
        <Image
          source={icons.menu}
          style={{ width: 25, height: 25, tintColor: COLORS.white }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}
        onPress={() => console.log("aaa")}
      >
        <Image
          source={icons.search}
          style={{ width: 25, height: 25, tintColor: COLORS.white }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default function DetailItem({ route, navigation }) {
  const { item } = route.params;

  function renderTabButton() {
    return (
      <View
        style={{
          backgroundColor: COLORS.white,
          height: 60,
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          borderRadius: SIZES.padding * 2,
          width: "90%",
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}
        >
          <Image
            source={icons.dashboard}
            style={{ width: 25, height: 25, tintColor: COLORS.darkGray }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}
        >
          <View
            style={[
              {
                backgroundColor: COLORS.primary,
                padding: SIZES.font,
                borderRadius: SIZES.font,
              },
              styles.shadow,
            ]}
          >
            <Image
              source={icons.plus}
              style={{ width: 16, height: 16, tintColor: COLORS.white }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          hitSlop={{ top: 20, bottom: 20, left: 30, right: 30 }}
        >
          <Image
            source={icons.user}
            style={{ width: 25, height: 25, tintColor: COLORS.darkGray }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderProductName() {
    return (
      <View>
        <Text style={{ ...FONTS.body3, color: COLORS.white }}>Furniture</Text>
        <Text
          style={{ ...FONTS.h1, color: COLORS.white, marginTop: SIZES.base }}
        >
          {item.productName}
        </Text>
      </View>
    );
  }

  function renderPrice() {
    return (
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View
          style={{
            width: 60,
            height: 60,
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 60,
            backgroundColor: COLORS.transparentLightGray1,
            marginRight: SIZES.base * 3,
          }}
        >
          <View
            style={{
              width: 10,
              height: 10,
              backgroundColor: COLORS.blue,
              borderRadius: 10,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: COLORS.transparentLightGray1,
            paddingHorizontal: SIZES.padding,
            paddingVertical: SIZES.padding,
            borderRadius: SIZES.font,
            flexDirection: "row",
            width: 200,
          }}
        >
          <View style={{ flex: 1 }}>
            <Text style={{ ...FONTS.body3, color: COLORS.darkGray }}>
              {item.productName}
            </Text>
          </View>
          <View style={{ flex: 0.4, justifyContent: "flex-end" }}>
            <Text style={{ ...FONTS.h3, color: COLORS.darkGreen }}>
              ${item.price}
            </Text>
          </View>
        </View>
      </View>
    );
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground style={{ height: "100%" }} source={item.image}>
        {renderHeader()}
        <View
          style={{
            position: "absolute",
            bottom: "50%",
            width: "100%",
            left: "20%",
            justifyContent: "flex-end",
          }}
        >
          {renderPrice()}
        </View>
        <View
          style={{
            position: "absolute",
            bottom: "16%",
            width: "100%",

            paddingHorizontal: SIZES.padding,
          }}
        >
          {renderProductName()}
        </View>
        <View
          style={{
            position: "absolute",
            bottom: "4%",
            width: "100%",
            alignItems: "center",
          }}
        >
          {renderTabButton()}
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});
