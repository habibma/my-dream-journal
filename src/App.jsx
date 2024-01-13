import './App.css'
import data from "./data";

import Header from './components/Header'
import Hero from './components/Hero'
import Card from  './components/Card'


function App() {

  const cards = data.map(item => <Card key={item.id} {...item} />)
  return (
    <div>
      <Header />
      <Hero />
      <section className='cards-list'>
      <p>My life so far has had a lot of ups and downs, but here are my journey's milestones</p>
        {cards}
      </section>
    </div>
  )
}

export default App
