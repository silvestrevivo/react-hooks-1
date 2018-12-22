import React, { useState } from 'react';

import Todo from './components/Todo';
import Header from './components/Header';
import Auth from './components/Auth';


const App = () => {
  const [page, setPage] = useState(true);

  return (
    <div className="App">
      <Header onLoadTodos={() => setPage(true)} onLoadAuth={() => setPage(false)} />
      <hr />
      {page ? <Todo /> : <Auth />}
    </div>
  )
}

export default App
