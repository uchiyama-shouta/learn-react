import React from 'react';

export const IncompleteTodos = props => {
   const { data, todos, onClickComplete, onClickDelete } = props;
   return(
      <div className="imcomplete-area">
        <p className="title">未完了のTODO ({todos.length} / {data.length + todos.length})</p>
        <ul>
          { todos.map((todo, index) => {
            return(
              <div key={todo.toString()} className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            )
          }) }
        </ul>
      </div>
   )
}