import React from 'react';

export const CompleteTodo = props => {
   const { data, todos, onClick } = props;
   return(
      <div className="complete-area">
        <p className="title">完了のTODO ({todos.length} / {data.length + todos.length})</p>
        <ul>
          { todos.map((todo, index) => {
            return(
              <div className="list-row">
                <li>{todo}</li>
                <button onClick={() => onClick(index)}>戻す</button>
              </div>
            )
          }) }
        </ul>
      </div>
   )
}


