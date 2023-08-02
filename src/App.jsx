import './App.css'
import Navigation from './components/navigation/Navigation'
import ProductList from './pages/ProductList/ProductList'

function App() {

  return (
    <div className='container m-auto'>
      <Navigation/>
      <ProductList/>
    </div>
  )
}

export default App
