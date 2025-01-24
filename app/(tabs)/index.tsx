import axios from "axios";
import { StyleSheet, Text, View, FlatList, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CustomText from "@/components/CustomText";
import CustomView from "@/components/CustomView";
import auth from "@react-native-firebase/auth";
export default function index() {
  const [data, setData] = useState([]);
  const user = auth().currentUser;
  useEffect(() => {
    const fetchMarketData = async () => {
      try {
        const response = await axios.get(
          "https://api.coingecko.com/api/v3/coins/markets",
          {
            params: {
              vs_currency: "usd",
              order: "market_cap_desc",
              per_page: 100,
              page: 1,
            },
          }
        );
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMarketData();
  }, []);

  return (
    <CustomView style={styles.container}>
      <Text>mmarket {user?.email}</Text>
    </CustomView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  flatListContent: {
    justifyContent: "center",
    padding: 5,
    backgroundColor: "yellow",
    marginTop: 100,
  },
  card: {
    borderBottomWidth: 2,
    width: "100%",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    marginBottom: 5,
  },
});
