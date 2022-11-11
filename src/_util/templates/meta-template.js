module.exports = (uid, name) => ({
  content: `
{
  "meta": {
    "${uid}": {
      "name": "${name}",
      "description": "",
      "ticketNumber": "",
      "ticketURL": "",
      "ownerName": "",
      "ownerGitHubURL": "",
      "figmaLink": "",
      "variants": [],
      "options": [],
      "hasInteractionStates": false, // change this to true if the component has interaction states
      "dependencyTree": [],
    },
  },
}  
`,
  extension: '.json5',
});
