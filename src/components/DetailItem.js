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
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

function renderHeader() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: wp(SIZES.padding / 4),
        marginTop: hp(1),
      }}
    >
      <TouchableOpacity
        hitSlop={{ top: hp(4), bottom: hp(4), left: wp(4), right: wp(4) }}
        onPress={() => console.log("aaa")}
      >
        <Image
          source={icons.menu}
          resizeMode="contain"
          style={{ width: wp(6), height: hp(6), tintColor: COLORS.white }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        hitSlop={{ top: hp(4), bottom: hp(4), left: wp(4), right: wp(4) }}
        onPress={() => console.log("aaa")}
      >
        <Image
          source={icons.search}
          resizeMode="contain"
          style={{ width: wp(6), height: hp(6), tintColor: COLORS.white }}
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
          height: hp(10),
          flexDirection: "row",
          justifyContent: "space-evenly",
          alignItems: "center",
          borderRadius: SIZES.padding * 2,
          width: wp("90%"),
        }}
      >
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          hitSlop={{ top: hp(4), bottom: hp(4), left: wp(4), right: wp(4) }}
        >
          <Image
            source={icons.dashboard}
            style={{ width: wp(7), height: hp(4), tintColor: COLORS.darkGray }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          hitSlop={{ top: hp(4), bottom: hp(4), left: wp(4), right: wp(4) }}
        >
          <View
            style={[
              {
                backgroundColor: COLORS.primary,
                paddingHorizontal: wp(SIZES.base / 2),
                paddingVertical: wp(SIZES.base / 2.5),
                borderRadius: SIZES.font,
              },
              styles.shadow,
            ]}
          >
            <Image
              source={icons.plus}
              style={{ width: wp(6), height: hp(4), tintColor: COLORS.white }}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          hitSlop={{ top: hp(3), bottom: hp(3), left: wp(3), right: wp(3) }}
        >
          <Image
            source={icons.user}
            style={{ width: wp(6), height: hp(4), tintColor: COLORS.darkGray }}
          />
        </TouchableOpacity>
      </View>
    );
  }

  function renderProductName() {
    return (
      <View style={{width: wp(50)}}>
        <Text style={{ ...FONTS.body3, color: COLORS.white }}>Furniture</Text>
        <Text
          style={{
            ...FONTS.h1,
            color: COLORS.white,
            marginTop: hp(SIZES.base / 4),
          }}
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
            width: wp(10),
            height: wp(10),
            justifyContent: "center",
            alignItems: "center",
            borderRadius: wp(10),
            backgroundColor: COLORS.transparentLightGray1,
            marginRight: wp(SIZES.base),
          }}
        >
          <View
            style={{
              width: wp(2),
              height: wp(2),
              backgroundColor: COLORS.blue,
              borderRadius: 10,
            }}
          />
        </View>
        <View
          style={{
            backgroundColor: COLORS.transparentLightGray1,
            paddingHorizontal: wp(SIZES.base / 2),
            paddingVertical: hp(SIZES.base / 4),
            borderRadius: SIZES.font,
            flexDirection: "row",
            width: wp(50),
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
      <ImageBackground style={{ height: hp("100%") }} source={item.image}>
        {renderHeader()}
        <View
          style={{
            position: "absolute",
            bottom: hp("50%"),
            width: wp("100%"),
            left: wp("26%"),
            justifyContent: "flex-end",
          }}
        >
          {renderPrice()}
        </View>
        <View
          style={{
            position: "absolute",
            bottom: hp("20%"),
            width: wp("100%"),
            paddingHorizontal: wp(SIZES.padding / 4),
          }}
        >
          {renderProductName()}
        </View>
        <View
          style={{
            position: "absolute",
            bottom: hp("4%"),
            width: wp("100%"),
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
