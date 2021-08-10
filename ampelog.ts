import * as amst from 'https://deno.land/x/ampelstatus@deno/ampelstatus';
export const version:number[]=[1,1,0];
export function wrn(out:string):void {
  console.warn(amst.wrn+out);
};
export function err(out:string):void {
  console.error(amst.err+out);
};
export function inf(out:string):void {
  console.info(amst.inf+out);
};
export enum status {
  inf,
  wrn,
  err
}
