# wellnr.design-system

This project aims to build a reusable design-system for web applications using (almost) Vanilla JS. The only dependency is [Lit Element](https://lit.dev/) to build web components.

## Motivation

I'd like to program a web-project like in the good old days: A simple code editor and a browser should be enough. No need for transpiling, complex build processes, nor hard dependency management. The application should be built upon standard web technologies. However, the components should be usable from common frameworks, such as Vue, React or Angular.

There are several potential motivations for building a Design System with Vanilla JS:

* **Familiarity.** Developers may be more comfortable working with Vanilla JS than with other frameworks or libraries.
* **Control.** Building a Design System with Vanilla JS allows for more control over the codebase and the ability to fine-tune every aspect of the system.
* **Performance.** Vanilla JS can be faster than other frameworks or libraries, making it a good choice for projects where performance is a concern.
* **Portability.** A Design System built with Vanilla JS can be easily integrated into any project, regardless of the framework or library being used.
* **SPA.** (Single Page Application) : Vanilla JS is a good fit for Single Page Applications, because it gives you more control over how the application is rendered and updated.

Building a Design System based on Web Components can be a good idea for some projects. Here are some reasons why:

* **Reusability.** Web Components are reusable, self-contained units of functionality that can be easily integrated into any web project. This makes them ideal for building a Design System that can be used across multiple projects.
* **Interoperability.** Web Components are based on web standards, which means they can work seamlessly with other web technologies, including other frameworks and libraries.
* **Browser Support.** Web Components are supported by all modern browsers, so there's no need to worry about cross-browser compatibility issues.
* **Isolation.** Web Components can help to isolate different parts of a design system, making it easier to maintain and update individual components.
* **Future proof.** Web Components help to provide a consistent API and behavior, which will be more and more relevant as the web evolves and new features are added.

However, it's worth noting that Web Components have a steeper learning curve than some other options, and they may not be the best choice for all projects. That's why this project is still an experiment.

## Development

For local development we use [webpack](https://webpack.js.org/) for packaging the library and [hugo](https://gohugo.io/) to build the documentation page. Both must be started to have an auto-updating webserver.

```bash
$ npm run watch
```

... and in another terminal

```bash
$ cd src/docs
$ hugo serve
```

### New components

To add new components to the documentation, a new content item in needs to be created with Hugo:

```
$ cd src/docs
$ hugo new atoms/code.md
```

Replace `atoms` with the related component category and `code` with the components tag name (without leading `w-`). 

To display the components properties, extend `src/js/components/molecules/element-properties-table/element-properties-table.js` with and import for the component and update the function `_getComponentClass` to map the component class with its name.