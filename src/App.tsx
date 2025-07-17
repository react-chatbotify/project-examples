import React, { useState } from 'react';
import FaqBot from './examples/FaqBot';
import GeminiBot from './examples/GeminiBot';
import OpenAiBot from './examples/OpenAiBot';
import BrowserLLMBot from './examples/BrowserLlmBot';
import HelloWorldBot from './examples/HelloWorldBot';

const bots: Record<string, React.FC> = {
  helloworldbot: HelloWorldBot,
  faqbot: FaqBot,
  openaibot: OpenAiBot,
  geminibot: GeminiBot,
  browserllmbot: BrowserLLMBot,
};

const App = () => {
  // default to faq bot
  const [selected, setSelected] = useState<string>('browserllmbot');
  const Bot = selected ? bots[selected] : BrowserLLMBot;

  return (
    <div style={{ padding: 16, fontFamily: 'Arial, sans-serif' }}>
      <label htmlFor="bot-select" style={{ marginRight: 8, fontWeight: 'bold' }}>
        Choose an example:
      </label>
      <select
        id="bot-select"
        value={selected}
        onChange={(e) => setSelected(e.target.value)}
        style={{
          padding: '8px 12px',
          fontSize: '16px',
          borderRadius: '4px',
          border: '1px solid #ccc',
          backgroundColor: '#f8f8f8',
          cursor: 'pointer',
        }}
      >
        <option value="helloworldbot">Hello World Bot</option>
        <option value="faqbot">FAQ Bot</option>
        <option value="openaibot">OpenAI Bot</option>
        <option value="geminibot">Gemini Bot</option>
        <option value="browserllmbot">Browser LLM Bot</option>
      </select>
      {Bot ? <Bot /> : null}
    </div>
  );
};

export default App;
