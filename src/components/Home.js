import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";
import { selectedTabData, tabListData } from "../../data";
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
        paddingTop: hp(1),
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        hitSlop={{ top: hp(4), bottom: hp(4), left: wp(4), right: wp(4) }}
        onPress={() => console.log("pressed")}
      >
        <Image
          source={icons.menu}
          resizeMode="contain"
          style={{ width: wp(6), height: hp(6) }}
        />
      </TouchableOpacity>
      <TouchableOpacity
        hitSlop={{ top: hp(6), bottom: hp(6), left: wp(4), right: wp(4) }}
        onPress={() => console.log("pressed")}
      >
        <Image
          source={icons.cart}
          resizeMode="contain"
          style={{ width: wp(6), height: wp(6) }}
        />
      </TouchableOpacity>
    </View>
  );
}

function AddToCart() {
  return (
    <View
      style={[
        {
          flex: 1,
          flexDirection: "row",
          backgroundColor: COLORS.white,
          borderRadius: SIZES.padding,
          paddingHorizontal: wp(2),
          paddingVertical: hp(1),
        },
        styles.shadow,
      ]}
    >
      <View
        style={{
          backgroundColor: COLORS.lightGray2,
          width: wp(16),
          borderRadius: SIZES.radius,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={images.sofa}
          resizeMode="contain"
          style={{ width: "60%", height: "60%" }}
        />
      </View>
      <View style={{ justifyContent: "center", marginLeft: SIZES.radius }}>
        <Text style={{ ...FONTS.h3 }}>Special offer</Text>
        <Text style={{ ...FONTS.body3, color: COLORS.darkGray }}>
          Adding to your cart
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: "flex-end" }}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            borderRadius: wp(SIZES.base / 3),
            justifyContent: "center",
            alignItems: "center",
            marginVertical: hp(1),
            marginRight: wp(6),
            width: wp(10),
            height: hp(8),
          }}
        >
          <Image
            source={icons.chevron}
            resizeMode="contain"
            style={{ width: wp(4), height: hp(4) }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function Home({ navigation }) {
  const [selectedTab, setSelectedTab] = useState(selectedTabData);

  function renderTabList() {
    return (
      <View>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={tabListData}
          renderItem={renderTabItem}
          keyExtractor={(item) => `tab-${item.id}`}
        />
      </View>
    );
  }

  function renderTabItem({ item }) {
    return (
      <TouchableOpacity
        style={{
          marginHorizontal: wp(SIZES.padding / 4),
          alignItems: "center",
        }}
        onPress={() => {
          setSelectedTab(item);
        }}
      >
        <Text style={{ ...FONTS.body2, color: COLORS.lightGray }}>
          {item.name}
        </Text>
        {item.id === selectedTab.id && (
          <View
            style={{
              width: wp(2),
              height: wp(2),
              borderRadius: 20,
              backgroundColor: COLORS.blue,
              justifyContent: "center",
              marginTop: hp(1),
            }}
          ></View>
        )}
      </TouchableOpacity>
    );
  }

  function renderProductList() {
    return (
      <View style={{ marginTop: SIZES.radius }}>
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={selectedTab.productList}
          renderItem={renderProductItem}
          keyExtractor={(item) => `product-item-${item.productId}`}
        />
      </View>
    );
  }

  function renderProductItem({ item }) {
    return (
      <TouchableOpacity
        style={{
          marginLeft: wp(SIZES.padding / 4),
          height: hp(49),
        }}
        onPress={() => {
          navigation.navigate("DetailItem", {
            item,
          });
        }}
      >
        <View style={{ width: wp(50), flex: 1 }}>
          <Image
            source={item.image}
            resizeMode="stretch"
            style={{
              width: "100%",
              height: "100%",
              borderRadius: SIZES.radius * 2,
            }}
          />
          <View
            style={{
              position: "absolute",
              top: hp(2),
              left: wp("4%"),
              right: wp("4%"),
            }}
          >
            <Text style={{ ...FONTS.body3, color: COLORS.lightGray2 }}>
              Furniture
            </Text>
            <Text style={{ ...FONTS.h2, color: COLORS.lightGray2 }}>
              {item.productName}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              bottom: hp(2),
              left: wp("4%"),
              backgroundColor: COLORS.transparentLightGray1,
              paddingHorizontal: wp(SIZES.base / 2),
              paddingVertical: hp(1),
              borderRadius: SIZES.radius,
            }}
          >
            <Text style={{ ...FONTS.h2, color: COLORS.secondary }}>
              ${item.price}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {renderHeader()}
      <Text
        style={{
          ...FONTS.largeTitle,
          color: COLORS.black,
          marginHorizontal: wp(SIZES.padding / 4),
          marginVertical: hp(1),
        }}
      >
        Collection of chairs
      </Text>
      {renderTabList()}
      {renderProductList()}
      <View
        style={{
          flexGrow: 1,
          paddingHorizontal: wp(SIZES.base),
          paddingVertical: hp(3),
        }}
      >
        <AddToCart />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
