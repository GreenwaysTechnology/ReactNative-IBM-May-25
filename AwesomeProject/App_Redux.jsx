import { View } from "react-native"
import { styles } from "./styles/app.style"
import { Provider } from 'react-redux'
import { Review } from "./components/Review"
import { store } from "./store"

//root Component
function App() {
    return <Provider store={store}>
        <View style={styles.container}>
            <Review />
        </View>
    </Provider>
}

export default App
