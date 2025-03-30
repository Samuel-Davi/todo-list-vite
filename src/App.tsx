import { useEffect, useState } from 'react'
import './App.css'
import TodoItem, { ItemSchema } from './components/TodoItem'
import AddItem from './components/AddItem'

function App() {

  const [searchText, setSearchText] = useState("")

  const categorias = {
    Namoro: "Namoro",
    Lazer: "Lazer",
    Trabalho: "Trabalho",
    Estudos: "Estudos",
    Familia: "Familia",
    Igreja: "Igreja",
    Outros: "Outros",
  } as const;

  const fixedData: Array<ItemSchema> = [
    {
      id: 1,
      title: "Niver Tena",
      category: categorias.Namoro,
      maxDate: new Date(2025, 6, 8),
      isCompleted: false,
    },
    {
      id: 2,
      title: "Quartas de Final TAPA",
      category: categorias.Lazer,
      maxDate: new Date(2025, 3, 29),
      isCompleted: false,
    },
    {
      id: 3,
      title: "Entrega proposta pibic",
      category: categorias.Estudos,
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
      <div className='bg-white py-5 min-h-5/6 rounded-2xl w-5/6 flex flex-col items-center'>
        <div className='w-full flex justify-around'>
          <label className='w-1/4 border-1 border-gray-200 text-start px-2' >Nome</label>
          <label className='w-1/4 border-1 border-gray-200 text-start px-2' >Categoria</label>
          <label className='w-1/4 border-1 border-gray-200 text-start px-2' >Data Máxima</label>
          <label className='w-1/4 border-1 border-gray-200 text-start px-2' >Feito</label>
        </div>
        <div className='w-full'>
          {dataItems.map((item) => (
            <TodoItem key={item.id} item={item} removeItem={removeItem} completeItem={completeItem} />
          ))}
        </div>
      </div>
    </>
  )
}

export default App
