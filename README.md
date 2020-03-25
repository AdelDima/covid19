# COVID-19 DZ

Original source: [Link](https://github.com/tokyo-metropolitan-gov/covid19)

## How to Contribute

All contributions are welcome!
Please check [How to contribute](./CONTRIBUTING.md) for details.

## Code of Conduct

Please check [Code of conduct for developers](./CODE_OF_CONDUCT.md) for details.

## License

This software is released under [the MIT License](./../../LICENSE.txt).

## For Developers

### How to Set Up Environments

- Required Node.js version: 10.19.0 or higher

**Use yarn**

```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**Use docker**

```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### How to resolve `Cannot find module ****` error

**Use yarn**

```bash
$ yarn install
```

**Use docker**

```bash
$ docker-compose run --rm app yarn install
```

[PLEASE TRANSLATE ME]

### VSCode + Remote Containers

1. VSCode の[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)
2. [Quick start: Try a dev container](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)

#### Topic

- If you want to change the settings,`.devcontainer/devcontainer.json`
  Detail [devcontainer.json](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)
- Remote Container Extensions valid only at runtime「ESLint」`devcontainer.json
  Detailed procedure is [here (external site)](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)
  -To rebuild the development environment, execute "Rebuild Container" at the lower left.
  [/PLEASE TRANSLATE ME]

### Detect production/others environment

On the production environment, `'production'` is assigned to `process.env.GENERATE_ENV` variable, on the other case `'development'` is assigned to the variable.
Please use the variable to detect which enviroinment is used at the runtime.

### Deployment to Staging & Production Environments

When `master` branch is updated, the HTML files will be automatically built onto `production` branch,
and then the production site (http://covid19-dz.live/) will be also updated.

When `dev` branch is updated, the HTML files will be automatically built onto `dev-pages` branch.

### Branch rules

Pull Request is allowed only for `dev`.
Please use the following naming rules for the branch when sending a Pull Request.

Feature implementation: feature/#{ISSUE_ID}-#{branch_title_name}
Hotfix commit: hotfix/#{ISSUE_ID}-{branch_title_name}

#### Basic branch

| Purpose       | Branch      | Confirmation URL                       | Remarks                                                                                         |
| ------------- | ----------- | -------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Dev           | development |                                        | base branch. Basically send a Pull Request here                   |
| Production    | master      | | Pull Requests other than Administrators are prohibited                                          |
