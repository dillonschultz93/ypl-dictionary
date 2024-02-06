# ypl-dictionary

### How to contribute

After cloning the repository, you can run the following command to install the dependencies:

```bash
npm install
```

Then you can run the following command to build the tokens:

```bash
npm run build
```

### Releasing

Releases are handled automatically via github actions triggered by a push to
a `release/` branch.

To tag a release automatically, merge main with one of the following branches:
 - `release/prerelease`
 - `release/major`
 - `release/minor`
 - `release/patch`
