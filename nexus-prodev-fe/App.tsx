import { Text, View } from "react-native";

export default function App() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Project Nexus – ProDev Frontend</Text>
    </View>
  );
}

npm start

git init
git add .
git commit -m "feat: initialize Expo project with TypeScript"


import { Provider } from "react-redux";
import { store } from "./src/store";
import { Text, View } from "react-native";

export default function App() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Project Nexus – ProDev Frontend</Text>
      </View>
    </Provider>
  );
}

import { Provider } from "react-redux";
import { store } from "./src/store";
import ProductListScreen from "./src/screens/ProductListScreen";

export default function App() {
  return (
    <Provider store={store}>
      <ProductListScreen />
    </Provider>
  );
}

npm start

git add .
git commit -m "feat: configure Redux Toolkit and RTK Query"
git commit -m "feat: implement products API integration"
git commit -m "feat: display products with loading and error states"
git push

