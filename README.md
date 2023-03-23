# Send update action

This action sends the event details and optionally a file from the repo to a specified url as a POST-request.


## Inputs

| Parameter     | Required | Default  | Info                                                     |
| ----------    | -------- | -------- | -------------------------------------------------------- |
| `filepath`    | `false`   |      | The filepath relative to the root. |
| `url`    | `true`   |          | The API url to which the POST-request is being sent.|


## Outputs

- `response`: The API response of the POST-request as a JSON-string.


## Example usage

```yml
name: Send log update to <name-of-api>

on:
  push:
    branches:
      - main

jobs:
  send-update:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    - uses: actions/send-update-action@v0.1
      with:
        filepath: <filepath-to-file>
        url: <url-to-api>      
```

**Important**: The job must include the checkout action before the send-file action, otherwise it is not possible to send the specified file in the latter.


## License

[MIT](LICENSE)
