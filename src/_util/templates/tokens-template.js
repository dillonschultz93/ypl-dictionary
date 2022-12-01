/* eslint-disable react/function-component-definition */
module.exports = (uid, name, project, variant) => ({
  content: `{
  YPL: {
    FFL: {
      '${uid}${variant ? `-${variant}` : '-001'}': {
        META: {
          name: '${name}',
          version: '',
          ticket: '',
          designLink: '',
          // optional:
          lastEditor: '',
          // shortName: '', // uncomment if you want to use a short name
          GENS: {
            // ¡ DO NOT EDIT ! Script generated:
            GEN_UID: '${uid}${variant ? `-${variant}` : '-001'}',
            GEN_timeStamp: '${new Date().toISOString()}',
            GEN_project: '${project}',
            GEN_dependents: [],
            GEN_dependentsUpdated: [],
          },
        },
        TREE: {},
        OVERRIDES: {},
      },
    },
  },
}  
`,
  extension: '.tokens.json5',
});
