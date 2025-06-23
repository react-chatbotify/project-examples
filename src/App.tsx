import React, { useState } from 'react';
import FaqBot from './examples/faqBot';
import OpenAIBot from './examples/openAIBot';
import GeminiBot from './examples/geminiBot';
import BrowserLlmBot from './examples/browserLlmBot';

type BotKey = 'faq' | 'openai' | 'gemini' | 'browser';

const bots: Record<BotKey, React.FC> = {
  faq: FaqBot,
  openai: OpenAIBot,
  gemini: GeminiBot,
  browser: BrowserLlmBot
};

export default function App() {
  const [selected, setSelected] = useState<BotKey>('faq');
  const Bot = bots[selected];

  return (
    <div style={{ padding: 16 }}>
      <select value={selected} onChange={(e) => setSelected(e.target.value as BotKey)}>
        <option value="faq">FAQ Bot</option>
        <option value="openai">OpenAI Bot</option>
        <option value="gemini">Gemini Bot</option>
        <option value="browser">Browser LLM Bot</option>
      </select>
      <div style={{ marginTop: 16 }}>
        <Bot />
      </div>
    </div>
  );
}
