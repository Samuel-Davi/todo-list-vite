
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
        <div key={item.id} className={!item.isCompleted ? 'shadow-lg w-full flex items-center justify-between bg-white rounded-xl' : 'line-through shadow-lg w-full flex items-center justify-between bg-white rounded-xl'}>
            <label className=" border-1 border-gray-200 w-1/4 text-start px-2">{item.title}</label>
            <label className=" border-1 border-gray-200 w-1/4 text-start px-2">{item.category}</label>
            <label className=" border-1 border-gray-200 w-1/4 text-start px-2">{item.maxDate.toLocaleDateString()}</label>
            <label className=" border-1 border-gray-200 w-1/4 text-start px-2">{item.isCompleted ? 'Sim' : 'Não'}</label>
        </div>
    )
}