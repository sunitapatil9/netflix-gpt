import { Provider } from "react-redux"
import Body from "./components/Body"
import appStore from "./utils/appStrore"

function App() {

  return (
    <Provider store={appStore} >
      <div>
        <Body />
      </div>
      </Provider>
  )
}

export default App
