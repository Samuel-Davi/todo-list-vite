import React from "react";

interface Props{
    categorias: {[key:string] : string};
}

const AddItem:React.FC<Props> = ({categorias}) => {
    return (
        <div className="w-3/4 px-2 py-2.5 flex flex-col items-start space-y-1">
            <h2 className="text-sm font-medium">Criar Atividade:</h2>
            <input onChange={(e) => {(e.target.value.toLowerCase())}} className='w-full bg-white border-gray-400 border-1 rounded-sm px-1' placeholder='Título' type="text" name="title"/>
            <select className="w-full bg-white rounded-sm border-gray-300 border-2">
                <option value="">Selecionar Categoria</option>
                {Object.entries(categorias).map(([key, value]) => (
                    <option key={key} value={value}>{value}</option>
                ))}
            </select>
        </div>
    )
}

export default AddItem;