exports.createPages = async function ({ actions }) {
  actions.createPage({
    path: 'my-dynamic-page',
    component: require.resolve(`./src/templates/dynamic-page.tsx`),
    context: {
      name: 'Wasi',
      description: 'This is Muhammad Wasi JAMstack developer',
    },
  });
  console.log(`End of Gatsby Node file`);
};
