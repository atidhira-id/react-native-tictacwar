import React from "react";
import { ScrollView, Text } from "react-native";
import styles from "./styles";

const Credits = () => {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionHeader}>Dibuat Oleh:</Text>
      <Text style={styles.text}>Atidhira Habibillah</Text>
      <Text style={styles.text}>Role: Developer</Text>

      <Text style={styles.sectionHeader}>Support Team:</Text>
      <Text style={styles.text}>- Muh. Attokillah S.H</Text>
      <Text style={styles.text}>- Muh. Farros Putra</Text>
      <Text style={styles.text}>- Adillah Giyats</Text>
      <Text style={styles.text}>- Danang</Text>

      <Text style={styles.sectionHeader}>Dibuat dengan:</Text>
      <Text style={styles.text}>- React Native</Text>
      <Text style={styles.text}>- React Navigation</Text>

      <Text style={styles.sectionHeader}>Special Thanks:</Text>
      <Text style={styles.text}>
        - Tim Laboran yang sudah meminjamkan komputer untuk membuat project ini.
      </Text>
    </ScrollView>
  );
};

export default Credits;
