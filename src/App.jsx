import Body from "./pages/components/Body"
import Footer from "./pages/components/Footer"
import Header from "./pages/components/header"
import GlobalStyle from "./styles/global"
import Theme from "./styles/theme"

function App() {
  return (
    <>
      <GlobalStyle />
      <Theme>
        <Header />
        <Body/>
        <Footer/>
      </Theme>
    </>
  )
}

export default App
