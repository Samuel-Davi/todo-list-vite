import { useEffect, useState } from "react"
import { categorias } from "../modals/categorias"


export type ItemSchema = {
    id: number,
    title: string,
    category: string,
    maxDate: Date,
    isCompleted: boolean,
}

type ItemProps = {
    item: ItemSchema,
}

export default function TodoItem( { item }:ItemProps){

    const [isEditing, setIsEditing] = useState(false);
    const [isDropdown, setIsDropdown] = useState(false);
    const [isDate, setIsDate] = useState(false);
    const [isDone, setIsDone] = useState(false);

    const [title, setTitle] = useState(item.title);
    const [category, setCategory] = useState(item.category);
    const [maxDate, setMaxDate] = useState<Date | null>(item.maxDate);
    const [feito, setFeito] = useState(item.isCompleted);

    useEffect(() => {
        item.isCompleted = feito;
    }, [feito, setFeito]);


    return (
        <div key={item.id} className={!item.isCompleted ? 'h-6 shadow-lg w-full flex items-center justify-between bg-white rounded-xl' : 'h-6 line-through shadow-lg w-full flex items-center justify-between bg-white rounded-xl'}>
            {isEditing ? 
            (<input
                className="border-1 border-gray-200 w-1/4 px-2"
                autoFocus
                value={title}
                onKeyDown={(e) => e.key === "Enter" && setIsEditing(false)}
                onChange={(e) => setTitle(e.target.value)}
                onBlur={() => setIsEditing(false)} 
                type="text" />) : 
            (<label 
                onClick={() => setIsEditing(true)}
                className="cursor-pointer border-1 border-gray-200 w-1/4 text-start px-2"
            >
                    {title}
            </label>)}
            {isDropdown ? 
            (<select
                className="border-1 border-gray-200 w-1/4 px-2"
                autoFocus
                onBlur={() => {setIsDropdown(false)}}
                onChange={(e) => {setCategory(e.target.value)}}
                value={category}
            >
                <option value="" disabled>Selecione uma opção</option>
                {Object.entries(categorias).map(([key, value]) =>{
                    return (<option key={key}>{value}</option>)
                })}
            </select>) : 
            (<label 
                onClick={() => setIsDropdown(true)}
                className="cursor-pointer border-1 border-gray-200 w-1/4 text-start px-2"
            >
                    {category !== "" ? category : "Selecione uma opção"}
            </label>)}
            {isDate ? 
            (<input
                type="date"
                onBlur={() => setIsDate(false)}
                onKeyDown={(e) => e.key === "Enter" && setIsDate(false)}
                value={maxDate ? maxDate.toISOString().split('T')[0] : ""}
                onChange={(e) => {
                    const [year, month, day] = e.target.value.split("-").map(Number);
                    if (year && month && day) {
                        setMaxDate(new Date(year, month - 1, day));
                    }else{
                        setMaxDate(null);
                    }
                }}
                className="border-1 border-gray-200 w-1/4 px-2"
                autoFocus
            />) : (
                <label 
                    onClick={() => setIsDate(true)}
                    className="cursor-pointer border-1 border-gray-200 w-1/4 text-start px-2"
                >
                    {maxDate ? maxDate.toLocaleDateString() : "Selecionar Data"}
                </label>
            )}
            {isDone ? 
            (
                <select
                    className="w-1/4 px-2 border-1 border-gray-200"
                    autoFocus
                    onBlur={() => {setIsDone(false)}}
                    onChange={(e) => {setFeito(e.target.value === "Sim" ? true : false)}}
                    value={feito ? "Sim" : "Não"}
                >
                    <option >Não</option>
                    <option >Sim</option>
                </select>
            ) : 
            (
                <label 
                    onClick={() => setIsDone(true)}
                    className="cursor-pointer border-1 border-gray-200 w-1/4 text-start px-2"
                    >{feito ? 'Sim' : 'Não'}
                </label>
            )}
        </div>
    )
}