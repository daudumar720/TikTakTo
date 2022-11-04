import { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Image,
  Dimensions,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
export default function App() {
  const [active_player, setActive_player] = useState("X");
  const [marker, setmarker] = useState([
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
    null,
  ]);

  const markPosition = (position) => {
    if (!marker[position]) {
      let temp = [...marker];
      temp[position] = active_player;
      setmarker(temp);
      if (active_player === "X") {
        setActive_player("O");
      } else {
        setActive_player("X");
      }
    }
  };

  const resetMarker = () => {
    setmarker([null, null, null, null, null, null, null, null, null]);
  };

  const calculateWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  useEffect(() => {
    const winner = calculateWinner(marker);
    if (winner === "X") {
      alert("Player X Won!");
      resetMarker();
    } else if (winner === "O") {
      alert("Player O Won!");
      resetMarker();
    }
  }, [marker]);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.playerInfo,
          { backgroundColor: active_player === "X" ? "#007FF4" : "#F40075" },
        ]}
      >
        <Text style={styles.playerText}>Player {active_player}'s turn</Text>
      </View>
      <View style={styles.mainContainer}>
        <Pressable onPress={() => markPosition(0)} style={styles.cell}>
          {marker[0] === "X" && (
            <Image
              style={styles.icon}
              source={require("./assets/img/cross.png")}
            />
          )}
          {marker[0] === "O" && (
            <Image
              style={styles.icon}
              source={require("./assets/img/zero.png")}
            />
          )}
        </Pressable>
        <Pressable onPress={() => markPosition(1)} style={styles.cell}>
          {marker[1] === "X" && (
            <Image
              style={styles.icon}
              source={require("./assets/img/cross.png")}
            />
          )}
          {marker[1] === "O" && (
            <Image
              style={styles.icon}
              source={require("./assets/img/zero.png")}
            />
          )}
        </Pressable>
        <Pressable onPress={() => markPosition(2)} style={styles.cell}>
          {marker[2] === "X" && (
            <Image
              style={styles.icon}
              source={require("./assets/img/cross.png")}
            />
          )}
          {marker[2] === "O" && (
            <Image
              style={styles.icon}
              source={require("./assets/img/zero.png")}
            />
          )}
        </Pressable>
        <Pressable onPress={() => markPosition(3)} style={styles.cell}>
          {marker[3] === "X" && (
            <Image
              style={styles.icon}
              source={require("./assets/img/cross.png")}
            />
          )}
          {marker[3] === "O" && (
            <Image
              style={styles.icon}
              source={require("./assets/img/zero.png")}
            />
          )}
        </Pressable>
        <Pressable onPress={() => markPosition(4)} style={styles.cell}>
          {marker[4] === "X" && (
            <Image
              style={styles.icon}
              source={require("./assets/img/cross.png")}
            />
          )}
          {marker[4] === "O" && (
            <Image
              style={styles.icon}
              source={require("./assets/img/zero.png")}
            />
          )}
        </Pressable>
        <Pressable onPress={() => markPosition(5)} style={styles.cell}>
          {marker[5] === "X" && (
            <Image
              style={styles.icon}
              source={require("./assets/img/cross.png")}
            />
          )}
          {marker[5] === "O" && (
            <Image
              style={styles.icon}
              source={require("./assets/img/zero.png")}
            />
          )}
        </Pressable>
        <Pressable onPress={() => markPosition(6)} style={styles.cell}>
          {marker[6] === "X" && (
            <Image
              style={styles.icon}
              source={require("./assets/img/cross.png")}
            />
          )}
          {marker[6] === "O" && (
            <Image
              style={styles.icon}
              source={require("./assets/img/zero.png")}
            />
          )}
        </Pressable>
        <Pressable onPress={() => markPosition(7)} style={styles.cell}>
          {marker[7] === "X" && (
            <Image
              style={styles.icon}
              source={require("./assets/img/cross.png")}
            />
          )}
          {marker[7] === "O" && (
            <Image
              style={styles.icon}
              source={require("./assets/img/zero.png")}
            />
          )}
        </Pressable>
        <Pressable onPress={() => markPosition(8)} style={styles.cell}>
          {marker[8] === "X" && (
            <Image
              style={styles.icon}
              source={require("./assets/img/cross.png")}
            />
          )}
          {marker[8] === "O" && (
            <Image
              style={styles.icon}
              source={require("./assets/img/zero.png")}
            />
          )}
        </Pressable>
      </View>
      <Pressable onPress={resetMarker} style={styles.cancelBtn}>
        <Image
          style={styles.cancelIcon}
          source={require("./assets/img/replay.png")}
        />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 80,
    flex: 1,
    backgroundColor: "#fff",
  },
  playerInfo: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 20,
    paddingVertical: 10,
    marginTop: 10,
    borderRadius: 10,
  },
  playerText: {
    fontSize: 20,
    fontWeight: "bold",
    padding: 6,
    color: "#fff",
  },
  mainContainer: {
    marginTop: 40,
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  cell: {
    width: windowWidth / 3.4,
    height: windowWidth / 3.4,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderRadius: 15,
    margin: 1,
  },
  icon: {
    height: 62,
    width: 62,
  },
  cancelBtn: {
    position: "absolute",
    bottom: 20,
    right: 20,
  },
  cancelIcon: {
    height: 80,
    width: 80,
  },
});
