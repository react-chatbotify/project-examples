import { Chatbot } from 'react-chatbotify';

export default function OpenAIBot() {
  const messages = [
    { role: 'bot', content: 'I am powered by OpenAI.' }
  ];
  return <Chatbot messages={messages} />;
}
