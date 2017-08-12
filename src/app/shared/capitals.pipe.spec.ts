import { CapitalsPipe } from './capitals.pipe';

describe('CapitalsPipe', () => {
  it('create an instance', () => {
    const pipe = new CapitalsPipe();
    expect(pipe).toBeTruthy();
  });
});
