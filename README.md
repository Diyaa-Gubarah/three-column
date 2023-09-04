**Three columns app.**

## Project Goals

The primary goals of this project include:

- Goal 1: As a user I want to be able to type id or name of entity in Left search bar/right search bar .
- Goal 2: As a user I want to see overview fields in left result preview/ right result preview
- Goal 3: As a user I want to see combination of detailed fields in Combined info

## Design Patterns

In this project, I have applied several design patterns and best practices to maintain a clean and structured codebase:

1. **Well-Structured Folder Layout**: The project is organized into folders that separate concerns and components. This makes it easy to navigate and locate specific parts of the application.

2. **Higher-Order Components (HOC)**: I've used Higher-Order Components to abstract and reuse logic across multiple components [withFetchData]. This promotes code reusability and reduces redundancy.

3. **Custom Hooks**: Custom hooks are implemented to encapsulate and share stateful logic between components. This ensures that the logic is reusable and separates concerns [useFetch].

4. **Render Props**: Render Props are employed in certain components to allow flexibility in rendering content based on specific conditions or requirements [the search props in Overview.tsx].

5. **Separation of Concerns**: Each component focuses on a specific concern or functionality, ensuring that components are modular and maintainable.

## Styled-components for Reusability

Styled-components have been used in this project to create reusable UI components, such as `Box`, `Text`, and `List`. These components are styled using styled-components, making it easy to apply consistent styles throughout the application. Additionally, styled-components offer the advantage of encapsulating styles with the component, enhancing code readability and maintainability.

## How to Run

To run this application, follow these steps:

1. Clone the repository to your local machine:
   `git clone https://github.com/Diyaa-Gubarah/three-column.git`

2. Install the project dependencies:
   `npm install`

3. Start the JSON server (mock API):
   `npm run server`

4. Start the development server:
   `npm run dev`

The application will be available at `http://127.0.0.1:5173/` in your browser.

## Technologies and Libraries Used

- React
- TypeScript
- Styled-components
- Redux Toolkit
- vite
