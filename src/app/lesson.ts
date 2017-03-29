export class Lesson {
  name: string;
  user: string;
  static fromJsonList(value: Array<any>, index: number) {
    return value.map(el => { return {name: el.$key, user: el.$value}; });
  }
}
