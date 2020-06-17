# denorun
Simple Deno project config/run script

It works but is not very robust atm.

Written in python and includes a `--install` command line flag that *"should"* work on linux but hasn't been tested.
This is more of a proof of concept than anything in reponce to the Deno issue [#1431](https://github.com/denoland/deno/issues/1431) with the yaml based on the syntax created by [mauritzn](https://github.com/mauritzn)'s [example](https://gist.github.com/mauritzn/04d8a6e910d6612356d4daf231c7a6d1).

## Install
```bash
denorun --install
```

## Demo
The repository includes a demo config and sample deno project that simply outputs a suggestion to the command line if you're bored using the [boredapi](https://www.boredapi.com)'s faas api call.

### Example Output
```
$ denorun
If you're bored, Cook something together with someone.
```