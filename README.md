# 2. Задание:
Учёт тренировок
===

Вы решили реализовать небольшое приложение, которое хранит данные о тренировках и прогулках, которые вы совершаете в течение недели.

Общий интерфейс должен выглядеть следующим образом:

![Steps](./src/assets/steps.png)

## Добавление данных

У вас должна быть форма ввода, в которую вводится дата и количество пройденных километров. Новые значения добавляются в таблицу при отправке формы.

_Особенности добавления_:
1. Новые значения добавляются не в конец, а согласно сортировке по дате, то есть если мы добавим 21.07.2019, то значение встанет на первую позицию, согласно скриншоту, а если 17.07.2019 — то на последнюю.
2. Если мы добавляем значения, указывая уже существующую дату, то значения суммируются с теми, что хранятся в таблице, например, если добавить 20.07.2019 и 10 км, то для даты 20.07.2019 будет отображаться 15.7 км.

## Удаление данных

С помощью иконки ✘ должна быть возможность удалить строку. Удаляется вся строка целиком и данные, связанные с ней.

## Редактирование данных

Дополнительное, необязательное задание: вы можете реализовать кнопку редактирования ✎, при нажатии на которую происходит перенос данных в форму ввода с последующим сохранением при нажатии кнопки Ok.


# 1. Задание:
Конвертер цветов из HEX в RGB
===

Вам необходимо разработать конвертер цветов из HEX в RGB.

![Конвертер цветов](./src/assets/preview.png)

## Интерфейс конвертера

При правильном вводе цвета он показывает его представление в формате RGB и меняет цвет фона на заданный:
![Цвет](./src/assets/color.png)

Конвертер при вводе неправильного цвета в формате HEX должен сообщать об ошибке:
![Ошибка](./src/assets/error.png)

Необходимо дожидаться ввода всех семи символов, включая решётку, чтобы принимать решение о том, показывать ошибку или менять цвет фона.



++++++++++++++++++++++++++++++++++++++++++++++++
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

++++++++++++++++++++++++++++++++++++++++++++++++

2025.12.16 tsx-достал переделал обратно на-jsx -------------

++++++++++++++++++++++++++++++++++++++++++++++++
2025.12.12
Скопировал проет для ДЗ.
в папку C:\_GitHub_\15.04_DZ файлы проекта из C:\_GitHub_\15.04
++++++++++++++++++++++++++++++++++++++++++++++++
2025.12.10
Создал папку 15.04 в папке _GitHub_ и запустил установку:
yarn create vite my-vau-app --template react-ts
	на вопросы ответил так:
o  Use rolldown-vite (Experimental)?:
|  No
|
o  Install with yarn and start now?
|  No

mv my-vau-app/* ./
mv my-vau-app/.* ./
	после переноса всех файлов удалил папку my-vau-app.
+++
	Переименовал папку src на src_, и перенес эту папку из листинга, потом 	заремировал строку:
// import './index.css'
	=>
code -n .
yarn
yarn dev
	Страница открылась.

  Добавил:
yarn add uuid
  
++++++++++++++++++++++++++++++++++++++++++++++++
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
