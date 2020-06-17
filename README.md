# denorun
Simple Deno project config/run script

It works but is not very robust atm.

Written in python and includes a `--install` command line flag that *"should"* work on linux but hasn't been tested.
This is more of a proof of concept than anything in reponce to the Deno issue [#1431](https://github.com/denoland/deno/issues/1431) with the yaml based on the syntax created by [mauritzn](https://github.com/mauritzn)'s [example](https://gist.github.com/mauritzn/04d8a6e910d6612356d4daf231c7a6d1).

## Install
```bash
./denorun --install
```

## Demo
The repository includes a demo config and sample deno project that simply outputs a suggestion to the command line if you're bored using the [boredapi](https://www.boredapi.com)'s faas api call.

### Example Output
```
$ denorun
If you're bored, Cook something together with someone.
```

## Config File
* The config file is required and can be in yaml or json format.
* The config file must be named "deno_config.json" when using json.
* The config file must be named "deno_config.yaml" when using yaml.
* Yaml is the prefered format thus if both json and yaml config files exist, the script with use the yaml version and ignore the json file.

At this time the only required fields are:
* **main** - filename of deno script.
* **permissions** - array of permisions to add. 

### Examples
#### Yaml
```yml
main:
  server.ts
permissions:
  - allow-net
```
#### Json
```json
{
  "main": "server.ts",
  "permissions": [
    "allow-net"
  ]
}
```
