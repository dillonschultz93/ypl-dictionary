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
      "dependencyTree": [],
    },
  },
}  
`,
  extension: '.json5',
});
