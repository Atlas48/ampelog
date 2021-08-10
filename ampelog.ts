import * as amst from 'https://deno.land/x/ampelstatus@deno/ampelstatus.ts';
export function wrn(out:string):void {
  console.warn(amst.wrn+out);
};
export function err(out:string):void {
  console.error(amst.err+out);
};
export function inf(out:string):void {
  console.info(amst.inf+out);
};
