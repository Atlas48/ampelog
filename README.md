# ampelog

Simple, pretty, traffic-light logger

ampelog is an incredably lightweight traffic-light pattern logger, only a single, 7-element object in memory.
It wraps [ampelstatus](ampelstatus@deno), and is currently classed as it's API.

## Example

```js
import * as amst from 'https://deno.land/x/ampelstatus@deno/ampelstatus.ts';

ampelog.err('This is an error');
ampelog.inf('The process ran succesfully');
ampelog.wrn('You forgot to brush your teeth.');
```

## Commands
### err
Prints red, bold `ERR:` next to the output. It's designed for any fatal errors

### wrn
Prints yellow, bold `WRN:` next to the output. Designed for non-fatal errors and warnings.

### inf
Prints green, bold `INF:` next to the output. Designed for successful processes.
