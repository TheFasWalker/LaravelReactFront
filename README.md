# Фронтенд на react TS  для бэка на laravel 
<a href="">Бэк на laravel</a>


N.B!!! Запуск для разработки

запустить контейнер Laravel
запустить сборщик vite в контейнере с laravel
запустить react приложение
п.с. Если запустить сначала реакт , потом запускать контейнер c Laravel может появиться конфликт портов


## Что есть в данной сборке :

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) for utility CSS classes
- [ESLint](https://eslint.org/) configured with some initial rules
- [Prettier](https://prettier.io/) to enforce consistent code style
- [Vitest](https://vitest.dev/) for unit testing and code coverage
- [Vite](https://vitejs.dev/) to build the project for development or production
- [Husky 🐶](https://typicode.github.io/husky/) runs the full list of specs before committing your changes to ensure that you have a green build

## Разработка

### Setup

1. Run `npm install` to install all of the project's dependencies
2. Build the project for production: `npm run build`
3. Run the local development server: `npm run dev`

### Tailwind + CSS Modules

1. Create a CSS Module file by following the naming convention - `<Component>.module.css`
2. Use the `@apply` directive in your CSS class definitions to use Tailwind's utility classes into your own custom CSS
    
    ```css
    .app-heading {
        @apply text-5xl font-semibold mb-4;
    }
    ```
3. Import the CSS Module file into the React component file

### Dev Loop

- `prettier-format` - run the autoformatter
- `lint` - run the linter
- `test` - run the specs
- `test-filter <spec-name>` - run a specific spec
- `coverage` - get a coverage report of the specs
- `build` - build the project files for distribution
- `dev` - run the local development server



Сборка взята <a href="https://github.com/nrabhiram/vite-react-ts-tailwind-template.git">тут</a>
