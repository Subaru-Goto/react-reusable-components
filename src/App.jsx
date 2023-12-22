import Badges from "./components/Badges/Badges"
import Banners from "./components/Banners/Banners"
function App() {
  return (
    <>
      <Badges variant="square" color="yellow">Badge</Badges>
      <Badges variant="pill" color="red">Badge</Badges>
      <Banners variant="success">
        <h4>Lorem ipsum dolor sit amet aaaaa</h4>
        <p>subtitle</p>
      </Banners>
      <Banners variant="error">
        <h4>Lorem ipsum dolor sit amet aaaaa</h4>
      </Banners>
      <Banners variant="warning">
        <h4>Alert!!!!!</h4>
      </Banners>
      <Banners variant="neutral">
        <h4>This is neutral!!!!</h4>
      </Banners>
    </>
  )
}

export default App
