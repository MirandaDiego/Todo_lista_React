
"use client"
import { useState } from "react";
import { TodoItem } from "./types/TodoItens";

const Page = () => {

  const [itemInput, setItemInput] = useState('')

  const [list, setList] = useState<TodoItem[]>([
    //{id:1, label:'comer', checked:true}
  ])

  const handleAddButton = () =>{
    itemInput ? (setList([...list, {id:list.length + 1, label: itemInput, checked:false}])):
    setItemInput('');
    setItemInput('')
  }
  const deleteItem = (id:number)=>{
    setList(list.filter((item) => item.id !== id));
  }
  
  return(
    <div className="w-screen h-screen flex flex-col items-center text-2xl">
      <h1 className="text-4xl mt-5">Lista de Tarefas</h1>

      <div className="flex w-500 my-6 p-4 rounded-md bg-gray-700 border border-gray-500">
        <input 
        type="text" 
        placeholder="O que deseja fazer?"
        className="flex-1 border border-black p-3 text-2xl text-black rounded-md mr-3"
        value={itemInput}
        onChange={e => setItemInput(e.target.value)}
        />
        <button onClick={handleAddButton}> ADICIONAR</button>
      </div>

      <p className="my-4">{list.length} Itens na lista</p>
      <ul className="w-full max-w-lg list-disc pl-5">
        {list.map(item => (
           <li key={item.id}>
           <input  type="checkbox" className="w-6 h-6 mr-3" />
           {item.label} <button onClick={() => deleteItem(item.id)} className="hover:underline bg-red-700 border">[ Deletar]</button>
         </li>
        ))}
       
        
      </ul>
    </div>
    
    
  )

}
export default Page;