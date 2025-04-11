# Disclaimers

1. Parcel version was changed to 2.13.3 due to the following error that happened to me: "Error: Cannot find module '@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js'" Based on this resource [here](https://github.com/parcel-bundler/parcel/issues/10115), I found out that changing it to 2.13.3 would fix it. They also said that removing the "main" section of `package.json` would work as well - but since our `package.json` does not have a "main" section, I decided to update Parcel version only.

# Prototyping

The primary structure that I projected to the Timeline app is as the following image displays:

![image](./assets/timeline_prototype.drawio.png)

Each rectangle refers to a component:

- Red/Salmon - `timeline-container`, which will be our `App` component.
- Green - `action-header`
- Dark Blue - `timeline-content`
- Yellow - `dates-header`
- Cyan - `date`
- Black - `events-container`
- Purple - `event`

The purple rectangles are there also to demonstrate possible renderings of the event badges.

The project architecture will follow the component hierarchy displayed at the image, so the architecture follows the visual structure seen on the web page.

**Naming conventions:**

- Diretories - `kebab-case`
- Components - `PascalCase`
- Files in general (except Components) - `camelCase`

I will not be using `Diretory/index.js` style to avoid confusion when opening multiple files in the IDE.

# Styles

- **Font Awesome v5** is used on UI to provide beautiful and consistent icons.
- `app.css` will hold styles that are applicable universally.
- Every component will have its own style file `<component-name>.css`, stored in the same diretory as the component itself, to better organize files across the app and keeping maintainance simple.
