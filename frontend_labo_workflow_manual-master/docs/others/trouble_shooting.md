# trouble_shooting

## agl_general_template

## agl_general_template

> "NODE_ENV" is not recognized as an internal or external command, operable command or batch file.

```sh
npm install -g win-node-env
```

> This is probably not a problem with npm.

reinstall all node_modules.

```sh
rm -rf node_modules
npm install -g npm
npm i
```

