/* eslint-disable react/function-component-definition */
module.exports = (uid, variant) => ({
  content: `{
  YPL: {
    FFL: {
      TKUI_D: {
        '${uid}${variant ? `-${variant}` : ''}': {
          // TODO: Add your tokens here
        },
      },
    },
  },
}  
`,
  extension: '.tokens.json5',
});
