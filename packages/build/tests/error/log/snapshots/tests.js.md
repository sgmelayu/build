# Snapshot report for `packages/build/tests/error/log/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## Do not log secret values on build errors

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      build:␊
        command: node --invalid␊
        environment:␊
          SECRET: secret␊
      plugins:␊
        - inputs:␊
            notSecret: true␊
            secret: secret␊
            secretToo: 15␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - /file/path from netlify.toml␊
    ␊
    ┌────────────────────────────────────┐␊
    │ 1. build.command from netlify.toml │␊
    └────────────────────────────────────┘␊
    ␊
    $ node --invalid␊
    ␊
    ┌─────────────────────────────┐␊
    │   "build.command" failed    │␊
    └─────────────────────────────┘␊
    ␊
      Error message␊
      Command failed with exit code 9: node --invalid␊
    ␊
      Error location␊
      In build.command from netlify.toml:␊
      node --invalid␊
    ␊
      Resolved config␊
      build:␊
        command: node --invalid␊
      plugins:␊
        - inputs:␊
            notSecret: true␊
          origin: config␊
          package: /file/path␊
    ␊
    node: bad option: --invalid`