export default class Splash{
  static load(cb: (v: any) => void){
    setTimeout(cb, 2000);
  }
}