<p align="center">
  <img width="200px" src="https://raw.githubusercontent.com/tjtanjin/react-chatbotify/main/assets/logo.png" />
  <h1 align="center">React ChatBotify Project Examples</h1>
</p>

## Table of Contents

- [Introduction](#introduction)
- [Running Examples](#running-examples)
- [Project Structure](#project-structure)
- [Team](#team)
- [Contributing](#contributing)
- [Support](#support)

### Introduction

This repository provides minimal examples for creating chatbots with [**React ChatBotify**](https://react-chatbotify.com). Developers can reference the [**provided examples**](https://github.com/react-chatbotify/project-examples/tree/main/src/examples) or clone the repo to try out the various examples locally. Note that some of these examples are used as materials for the [**React ChatBotify Youtube Channel**](https://www.youtube.com/@react-chatbotify). If you're a visual/hands-on learner, you may find the youtube tutorials helpful.

Apart from the examples provided here, you may also refer to live examples provided on the official [**React ChatBotify Documentation Website**](https://react-chatbotify.com/docs/v2/examples/basic_form).

**Note:** Examples will be actively expanded to cover more use cases with time (e.g. ECommerce, Forms, Auth)

### Running Examples

To try out the examples locally, clone the repository and run the following commands:

```bash
npm install
npm run dev
```

After starting the dev server, open `http://localhost:5173` and select the bot you wish to preview (e.g. FAQ Bot, Browser LLM Bot).

### Project Structure

```
project-examples/
├── src/
│   ├── App.tsx          # bot selector and router
│   ├── main.tsx
│   └── examples/        # individual bot implementations
│       ├── FaqBot.tsx
│       ├── BrowserLlmBot.tsx
│       ├── GeminiBot.tsx
│       └── ... more examples
├── index.html
├── package.json
├── tsconfig.json
└── ... other files
```

### Team

- [Tan Jin](https://github.com/tjtanjin)

### Contributing

If you are keen to add more examples to the project, feel free to open a pull request with clear descriptions on the example(s). Alternatively, you may simply raise bugs or suggestions by opening an [**issue**](https://github.com/react-chatbotify/project-examples/issues) or raising it up on [**discord**](https://discord.gg/6R4DK4G5Zh).

Note: Templates have been created for pull requests and issues to guide you in the process.

### Support

If you have any questions regarding any of the examples or projects, you may create an [**issue**](https://github.com/react-chatbotify/project-examples/issues), raise it up on [**discord**](https://discord.gg/6R4DK4G5Zh), or drop me an email at: **cjtanjin@gmail.com.**
