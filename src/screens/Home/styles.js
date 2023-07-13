import { StyleSheet, Dimensions } from "react-native";
const { width} = Dimensions.get("window");
const TOTAL_HEIGHT = width * 0.5;
const TOTAL_WIDTH = width * 0.7;

const styles = StyleSheet.create({
  mapStyle: {
    flex: 1
  },
  markerBody: {
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
  },
  marker: {
    width: 30,
    height: 30,
  },
  ring: {
    width: 20, height: 20,
    borderRadius: 50
  },
  card: {
    elevation: 2,
    backgroundColor: "#FFF",
    borderRadius: 5,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: TOTAL_HEIGHT,
    width: TOTAL_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 4.5,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 13,
    color:"#000",
    fontWeight: "bold",
  },
  cardAddress: {
    fontSize: 12,
    color: "#444",
  },
  scrollView: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 8,
  },
});

export default styles;
