# React ChatBotify Example Project

This repository provides minimal examples for using [React ChatBotify](https://github.com/react-chatbotify/react-chatbotify) bots.
Developers can clone the repo, install dependencies and run a small playground
where different bot examples can be loaded.

The project mirrors the setup used in official [React ChatBotify](https://github.com/react-chatbotify) examples and relies on
community resources such as the [community-themes repository](https://github.com/react-chatbotify/community-themes) for styling.

## Running the examples

```bash
npm install
npm run dev
```

After starting the dev server, open `http://localhost:3000` and select the bot you
wish to preview (FAQ Bot, Browser LLM Bot, OpenAI Bot or Gemini Bot).

## Project Structure

```
project-examples/
├── public/
│   └── index.html
├── src/
│   ├── App.tsx          # bot selector and router
│   ├── main.tsx
│   └── examples/        # individual bot implementations
│       ├── faqBot.tsx
│       ├── browserLlmBot.tsx
│       ├── openAIBot.tsx
│       └── geminiBot.tsx
├── package.json         # uses vite + react
├── tsconfig.json
└── vite.config.ts
```

For advanced examples and documentation, refer to the official
[React ChatBotify documentation website](https://react-chatbotify.com/docs/introduction/quickstart/).
