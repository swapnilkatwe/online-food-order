import Header from "./component/Header"
import MealItem from "./component/MealItem"

function App() {
  return (
    <>
     <Header />

     <ol id="meals">
      <MealItem />
      <MealItem />
      <MealItem />
      <MealItem />
     </ol>
    </>
  )
}

export default App
