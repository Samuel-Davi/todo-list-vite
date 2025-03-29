
export type ItemSchema = {
    id: number,
    title: string,
    category: string,
    maxDate: Date,
    isCompleted: boolean,
}

type ItemProps = {
    item: ItemSchema,
    removeItem: (id: number) => void,
    completeItem: (id: number) => void,
}

export default function TodoItem( { item, removeItem, completeItem }:ItemProps){
    return (
        <div key={item.id} className={!item.isCompleted ? 'shadow-lg w-full flex items-center justify-between px-3 py-1 bg-white rounded-xl' : 'line-through shadow-lg w-full flex items-center justify-between px-3 py-1 bg-white rounded-xl'}>
            <div className='flex w-1/2 items-start flex-col'>
                <h3>{item.title}</h3><br />
                <div className='flex justify-between w-full'>
                <p >{item.category}</p>
                <p >{item.maxDate.toLocaleDateString()}</p>
                </div>
            </div>
            <div className='flex flex-col space-y-2 items-center justify-between'>
                <button onClick={() => completeItem(item.id)} className='bg-green-400 p-1 rounded-sm text-sm'>Completar</button>
                <button onClick={() => removeItem(item.id)} className='bg-red-600 w-1/3 text-sm rounded-sm'>X</button>
            </div>
        </div>
    )
}