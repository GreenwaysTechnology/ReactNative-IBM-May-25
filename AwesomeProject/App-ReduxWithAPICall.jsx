import { View } from "react-native"
import { styles } from "./styles/app.style"
import { Provider } from 'react-redux'
import { Post } from "./components/Posts"
import { store } from "./store"

//root Component
function App() {
    return <Provider store={store}>
        <View style={styles.container}>
            <Post />
        </View>
    </Provider>
}

export default App
