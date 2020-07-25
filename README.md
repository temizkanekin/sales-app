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

## Feature TODO's
- UI/UX Improvements
- [Tailwind CSS](https://tailwindcss.com/) integration
- Next.js implementation/concepts improvements

## Notes

This example shows how to integrate the TypeScript type system into Next.js. Since TypeScript is supported out of the box with Next.js, all we have to do is to install TypeScript.

```
npm install --save-dev typescript
```

To enable TypeScript's features, we install the type declarations for React and Node.

```
npm install --save-dev @types/react @types/react-dom @types/node
```

When we run `next dev` the next time, Next.js will start looking for any `.ts` or `.tsx` files in our project and builds it. It even automatically creates a `tsconfig.json` file for our project with the recommended settings.

Next.js has built-in TypeScript declarations, so we'll get autocompletion for Next.js' modules straight away.

A `type-check` script is also added to `package.json`, which runs TypeScript's `tsc` CLI in `noEmit` mode to run type-checking separately. You can then include this, for example, in your `test` scripts.
