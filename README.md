# Send update action

This action sends a file from the repo to a specified url as a POST-request.


## Inputs

| Parameter     | Required | Default  | Info                                                     |
| ----------    | -------- | -------- | -------------------------------------------------------- |
| `filepath_changelog`    | `false`   |  `CHANGELOG.md`    | The path to CHANGELOG.md relative to the root. |
| `url`    | `true`   |          | The API url to which the POST-request is being sent.|


## Outputs

- `response`: The API response of the POST-request.


## Example usage

```yml
name: Send log update to Shyp

on:
  push:
    branches:
      - main

jobs:
  send-changelog:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: actions/send-file-action@v0.1
      with:
        filepath_changelog: 'CHANGELOG.md'
        url: 'https://ktyneweuinbildzchkli.functions.supabase.co/hello'
        GITHUB_TOKEN: "${{ secrets.GITHUB_TOKEN }}"
      
```

**Important**: The job must include the checkout action before the send-file action, otherwise it is not possible to send the specified file in the latter.


## License

[MIT](LICENSE)
