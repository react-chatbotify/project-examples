import { Chatbot } from 'react-chatbotify';

export default function BrowserLlmBot() {
  const messages = [
    { role: 'bot', content: 'Running a browser-based LLM.' }
  ];
  return <Chatbot messages={messages} />;
}
