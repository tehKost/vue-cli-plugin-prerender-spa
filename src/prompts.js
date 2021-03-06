const prompts = [
  {
    name: "renderRoutes",
    type: "input",
    message: "Which routes to pre-render? (separate with comma) (only with Vue Router history mode)",
    default: "/",
    /**
     * @param {String} input
     */
    filter: input =>
      new Promise((resolve, reject) => {
        const dataArray = input.split(",").map(value => value.trim());
        resolve(dataArray);
      })
  },
  {
    name: "useRenderEvent",
    type: "confirm",
    message: "Use a render event to trigger the snapshot?",
    default: true
  },
  {
    name: "headless",
    type: "confirm",
    message: "Use a headless browser to render the application? (recommended)",
    default: true
  },
  {
    name: "onlyProduction",
    type: "confirm",
    message: "Only use prerendering for production builds? (recommended)",
    default: true
  }
];

export default prompts;
module.exports = prompts;
