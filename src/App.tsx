import { useEffect, useState } from 'react'
import './App.css'
import TodoItem, { ItemSchema } from './components/TodoItem'

function App() {

  const [searchText, setSearchText] = useState("")

  const fixedData: Array<ItemSchema> = [
    {
      id: 1,
      title: "Niver Tena",
      category: "Namoro",
      maxDate: new Date(2025, 6, 8),
      isCompleted: false,
    },
    {
      id: 2,
      title: "Quartas de Final TAPA",
      category: "Lazer",
      maxDate: new Date(2025, 3, 29),
      isCompleted: false,
    },
    {
      id: 3,
      title: "Entrega proposta pibic",
      category: "Faculdade",
      maxDate: new Date(2025, 4, 7),
      isCompleted: false,
    }
  ]

  const [dataItems, setDataItems] = useState(fixedData) 

  useEffect(() => {
    document.title = "Todo List"
  }, [])

  const removeItem = (id:number) =>{
    const items = [...dataItems]
    const filteredItems = items.filter((item) => item.id !== id)
    setDataItems(filteredItems)
  }

  const completeItem = (id:number) =>{
    const items = [...dataItems]
    items.map((item) => {
      item.id === id ? item.isCompleted = !item.isCompleted : item
    })
    setDataItems(items)
  }

  useEffect(() => {
    setDataItems(fixedData.filter(item => item.title.toLowerCase().includes(searchText)))
  }, [searchText, setSearchText])

  return (
    <>
      <div className='bg-gray-200 py-5 min-h-5/6 rounded-2xl w-4/6 flex flex-col items-center'>
        <h2 className='py-5 text-lg font-bold'>Lista de Tarefas</h2>
        <div className='w-3/4 px-2 flex flex-col items-start border-b-1 py-2.5'>
          <h2>Pesquisar:</h2>
          <input value={searchText} onChange={(e) => {setSearchText(e.target.value.toLowerCase())}} className='w-full bg-white border-gray-400 border-1 rounded-sm p-1' placeholder='Pesquisar...' type="text" name="search" id="search" />
        </div>
        <div className='border-b-1 w-3/4 items-center space-y-4 py-4 flex flex-col'>
          {dataItems.map((item) => {
            return (
              <TodoItem key={item.id} completeItem={completeItem} removeItem={removeItem} item={item}/>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default App
