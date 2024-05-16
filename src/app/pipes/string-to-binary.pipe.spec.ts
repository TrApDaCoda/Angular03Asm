import { StringToBinaryPipe } from './string-to-binary.pipe';

describe('StringToBinaryPipe', () => {
  it('create an instance', () => {
    const pipe = new StringToBinaryPipe();
    expect(pipe).toBeTruthy();
  });
});
