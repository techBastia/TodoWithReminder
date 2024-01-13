import React from 'react'
import { useState } from 'react'
import {useForm} from 'react-hook-form'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import '../style/style.css'

const Todo = () => {
  const [tasks, setTasks] = useState([]);
  const inputData = useForm()
  const {register, handleSubmit} = inputData

  const onSubmit = (data, e) => {
    console.log(data);
    setTasks([...tasks, Object.values(data)]);
    e.target.reset();
  } 
  
  const del = (i) => {
    const deletItem = [...tasks]
    deletItem.splice(i, 1)
    setTasks(deletItem)
  }

  return (
    <>
    <div className='flex flex-col justify-center main-wrap'>
      <div className='inner-div m-10'>
      <h1 className="text-center font-bold text-3xl heading my-6">Todo App</h1>
      
      <form onSubmit={handleSubmit(onSubmit)} className='form'>
          <TextField 
          className='form-input w-3/4 mx-4 text-xl'
          label="Todo" 
          variant="outlined"
          type="text" 
          name="" 
          id="userInput" 
          {...register('userInput', {required: "please enter your todo"})} />
          <button><AddIcon className='mt-3'/></button>
      </form>

        {tasks.map((data, i) => {
          return(
            <>
              <span key={i} className='dataLists relative text-xl'> 
                {data}  
              </span> 
              <Button className='delBtn' variant="contained" onClick={() => del(i)}><DeleteIcon/></Button>
            </>
          )
        })}
        </div>
        </div>
    </>
  )
}

export default Todo
