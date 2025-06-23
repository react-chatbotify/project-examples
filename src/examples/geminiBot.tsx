import { Chatbot } from 'react-chatbotify';

export default function GeminiBot() {
  const messages = [
    { role: 'bot', content: 'I am the Gemini Bot.' }
  ];
  return <Chatbot messages={messages} />;
}
