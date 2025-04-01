import { useEffect, useState } from 'react'
import './App.css'
import TodoItem, { ItemSchema } from './components/TodoItem'
import { categorias } from './modals/categorias'
import trashIcon from '../public/trash-bin.png'

function App() {

  const [searchText, setSearchText] = useState("")

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

  useEffect(() => {
    setDataItems(fixedData.filter(item => item.title.toLowerCase().includes(searchText)))
  }, [searchText, setSearchText])

  const newItem:ItemSchema = {
    id: dataItems.length + 1,
    title: "Edite o titulo",
    category: "",
    maxDate: new Date(),
    isCompleted: false,
  }

  return (
    <>
      <div className='bg-white py-2 min-h-5/6 rounded-2xl w-5/6 flex flex-col items-center'>
        <h2 className='text-2xl text-black'>To-do List</h2>
        <div className='w-full flex justify-around'>
          <label className='w-10'></label>
          <label className='w-1/4 border-1 border-gray-200 text-start px-2' >Nome</label>
          <label className='w-1/4 border-1 border-gray-200 text-start px-2' >Categoria</label>
          <label className='w-1/4 border-1 border-gray-200 text-start px-2' >Data Máxima</label>
          <label className='w-1/4 border-1 border-gray-200 text-start px-2' >Feito</label>
        </div>
        <div className='w-full'>
          {dataItems.map((item) => (
            <div key={item.id} className='flex'>
              <img 
              src={trashIcon} 
              alt="Delete" 
              className='w-6 h-5 cursor-pointer mx-2 self-center' 
              onClick={()=>{
                const newItems = [...dataItems];
                newItems.splice(newItems.indexOf(item), 1);
                setDataItems(newItems);
              }}/>
              <TodoItem item={item} />
            </div>
          ))}
          <div 
          onClick={() => {
            const newItems = [...dataItems];
            newItems.push(newItem);
            setDataItems(newItems);
          }}
          className='w-full flex justify-start px-2 py-1 bg-white cursor-pointer hover:bg-gray-100'
          >
            <p>+ Nova Tarefa</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
