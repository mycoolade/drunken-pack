# drunken-pack [![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

toolkit to web frontend develop

## installation

```
npm install lerna -g
npm install
```

## parts

### @jdrunken/style

- normalize css
- env & util function

See this [documents][readme-style] get more information


### @jdrunkenstylelint

- lint for css/scss

See this [document][readme-stylelint]




## lerna

this project using lerna to package management in mono-repo.
Please read [lerna repository][lerna_repo]

- independent package
- Modifications to Readme file do not affect package updates.


### for Maintainer

#### add your account in NPM
If you publish each module to NPM, follow after.

1.  join npm <https://www.npmjs.com/signup>
2.  verify mail in your email client, **click follow link in mail**.
    ```
    Hi *******!

    Welcome to npm! To verify your email so that you can publish packages, click the following link:

    https://www.npmjs.com/verify/da******684b-4472-a***-549f******72

    Thanks for joining the community. Can’t wait to see what you build…

    npm ♥ you!
    ```
3.  and add user and input personal infomation

    ```
    > npm adduser

    ...

    Logged in as @jdrunken on https://registry.npmjs.org/.
    ```

4.  check infomation

    ```
    npm whoami
    ```

5.  and publish

    ```
    lerna publish
    ```

#### create package

```
lerna create <package-name>
```


<!-- link -->
[lerna_repo]: https://github.com/lerna/lerna
[readme-style]: ./packages/style/readme.md
[readme-stylelint]: ./packages/stylelint/readme.md
