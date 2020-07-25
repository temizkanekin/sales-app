## Available Scripts

In the project directory, you can run:

#### `yarn install`

Install the node dependencies before run the app.

#### `yarn dev`

Runs next which starts Next.js in development mode

#### `yarn build`

Runs next build which builds the application for production usage

#### `yarn start`

Runs next start which starts a Next.js production server

## Description about app
- This simple sales management application consist of two main views. These are:
    - Sales Market view to list orders in a table. You can double click to route order detail view with specified order id. Additionally, you can select order type from the top bar in order to filter the orders.
    - Sales Detail view for specified order id. You can see more details about the order in here. Additionally, you can add comments about order history. You can route back to sales market view by clicking "Geri" button.
- By clicking "Pazaryeri" element from the side bar, you can proceed to sales market view. (routing is not implemented for other side bar elements)
- Redux is used for managing the state throughout the application flow.
- There is a custom snackbar component to inform the user about the addition of the order history status.
- [Styled components](https://styled-components.com/) used to style button component to use the new custom styled component across the app.

## Technologies/Libraries Used
- [next.js](https://nextjs.org/): Production grade React applications that scale
- [typescript](https://www.typescriptlang.org/): TypeScript brings you optional static type-checking along with the latest ECMAScript features.
- [react-redux](https://react-redux.js.org/): Official React bindings for Redux
- [styled components](https://styled-components.com/): styled-components utilises tagged template literals to style your components.
- [font awesome icons](https://fontawesome.com/): Font Awesome, the web's most popular icon set and toolkit.

## Feature TODO's
- UI/UX Improvements
- [Tailwind CSS](https://tailwindcss.com/) integration
- Next.js implementation/concepts improvements
- Responsive UI Support
- Netlify deployment
