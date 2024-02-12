
import './App.css'
import Login from './component/Login'
import Profile from './component/profile'
import UserContextProvider from './context/usercontextProvider'

function App() {


  return (
 <UserContextProvider>

 <h1>React ,With Chai and sahil</h1>
 <Login/>
 <Profile/>
    </UserContextProvider>
  )
}

export default App
