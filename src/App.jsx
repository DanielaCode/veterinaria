import './App.css'
import Form from './components/Form'
import Header from './components/Header'
import ListPatients from './components/ListPatients'

function App() {
  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <Form/>
      <ListPatients/>
    </div>
  )
}

export default App
