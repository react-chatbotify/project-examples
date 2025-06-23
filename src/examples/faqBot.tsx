import { Chatbot } from 'react-chatbotify';

export default function FaqBot() {
  const messages = [
    { role: 'bot', content: 'Welcome to the FAQ Bot!' }
  ];
  return <Chatbot messages={messages} />;
}
