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

