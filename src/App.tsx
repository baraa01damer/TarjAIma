import ChatGPTLogo from './assets/OpenAI-white-monoblossom.svg'
import './App.css'
import { useState } from 'react';
import { languages } from './constants/languages';

function App() {
  const [search, setSearch] = useState('');
  const filteredLanguages = languages.filter(lang =>
    lang.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="flex justify-center">
        <a href="https://chatgpt.com/" target="_blank">
          <img src={ChatGPTLogo} className="logo chatgpt" alt="ChatGPT logo" />
        </a>
      </div>
      <h1>Translator</h1>
      <div className="card">
        <div className="flex flex-col items-center gap-2">
          {/* Search Box */}
          <input
            type="text"
            placeholder="Search language..."
            className="border rounded p-2 mb-2"
            value={search}
            onChange={e => setSearch(e.target.value)}
          />
          {/* Language Dropdown */}
          <select className="border rounded p-2 w-64">
            {filteredLanguages.map(lang => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>
      </div>
    </>
  )
}

export default App