import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { COLORS, FONTS, icons, images, SIZES } from "../../constants";
import { selectedTabData, tabListData } from "../../data";

function renderHeader() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: SIZES.padding,
        paddingTop: SIZES.base,
      }}
    >
      <TouchableOpacity onPress={() => console.log("pressed")}>
        <Image
          source={icons.menu}
          resizeMode="contain"
          style={{ width: 25, height: 25 }}
        />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log("pressed")}>
        <Image
          source={icons.cart}
          resizeMode="contain"
          style={{ width: 25, height: 25 }}
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
          paddingHorizontal: SIZES.radius,
          paddingVertical: SIZES.base,
        },
        styles.shadow,
      ]}
    >
      <View
        style={{
          backgroundColor: COLORS.lightGray2,
          width: 50,
          borderRadius: SIZES.radius,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image source={images.sofa} resizeMode="contain" style={{ width: '60%', height: '60%' }} />
      </View>
      <View style={{ justifyContent: "center", marginLeft: SIZES.radius }}>
        <Text style={{ ...FONTS.h3 }}>Special offer</Text>
        <Text style={{ ...FONTS.body3, color: COLORS.darkGray }}>
          Adding to your cart
        </Text>
      </View>
      <View style={{ flex: 1, alignItems: 'flex-end'}}>
        <TouchableOpacity
          style={{
            backgroundColor: COLORS.primary,
            borderRadius: SIZES.base,
            justifyContent: "center",
            alignItems: "center",
            paddingHorizontal: SIZES.radius,
            marginVertical: SIZES.base,
            marginRight: SIZES.padding,
            width: 40,
            height: 60,

          }}
        >
          <Image
            source={icons.chevron}
            resizeMode="contain"
            style={{ width: 14, height: 14 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default function Home({navigation}) {
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
        style={{ marginHorizontal: SIZES.padding, alignItems: "center" }}
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
              width: 8,
              height: 8,
              borderRadius: 20,
              backgroundColor: COLORS.blue,
              justifyContent: "center",
              marginTop: SIZES.base,
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
          marginLeft: SIZES.padding,
          height: SIZES.height / 2,
        }}
        onPress={() => {
          navigation.navigate('DetailItem', {
            item
          })
        }}
      >
        <View style={{ width: SIZES.width / 2 }}>
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
              top: 15,
              left: "10%",
              right: "10%",
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
              bottom: 15,
              left: "10%",
              backgroundColor: COLORS.transparentLightGray1,
              paddingHorizontal: SIZES.base * 2,
              paddingVertical: SIZES.base,
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
          marginHorizontal: SIZES.padding,
          marginVertical: SIZES.base,
        }}
      >
        Collection of chairs
      </Text>
      {renderTabList()}
      {renderProductList()}
      <View
        style={{
          flexGrow: 1,
          paddingHorizontal: SIZES.padding,
          paddingVertical: SIZES.padding,
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
