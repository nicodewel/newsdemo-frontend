import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import { Api } from './myApi';
import AuthorView from './features/authors/AuthorView';

const api = new Api();
const getNews = async () => {
  const res = await api.api.getAllAuthors();
  console.log(await res.json());
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Counter />
        <AuthorView />
        <button onClick={() => getNews()}>ClickMe</button>
      </header>
    </div>
  );
}

export default App;
