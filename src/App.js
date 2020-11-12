import { useState } from 'react';
import './App.css';
import { InputTodo } from './components/InputTodo';
import { IncompleteTodos } from './components/IncompleteTodos';
import { CompleteTodo } from './components/CompleteTodo';

export const App = () => {
  const [todoText, setTodoText] = useState('');
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  const onChangeTodoText = e => setTodoText(e.target.value)

  const onClickAdd = () => {
    if(todoText === '') return;
    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos)
    setTodoText('');
  }

  const onClickDelete = index => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1)
    setIncompleteTodos(newTodos);
  }

  const onClickComplete = index => {
    const newIncompleteTodos = [...incompleteTodos];
    newIncompleteTodos.splice(index, 1)
    
    const newCompleteTodos = [...completeTodos, incompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  }

  const onClickBack = index => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1)
    
    const newIncompleteTodos = [...incompleteTodos, completeTodos[index]];
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  }

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompleteTodos.length >= 5}
      />

      {incompleteTodos.length >= 5  && <p style={{color: "red"}}>登録できるtodoは5個までです</p>}

      <IncompleteTodos
        data={completeTodos}
        todos={incompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}  
      />

      <CompleteTodo data={incompleteTodos} todos={completeTodos} onClick={onClickBack} />
    </>
  );
}