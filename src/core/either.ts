export class Left<L, R = never> {
  readonly value: L;
  constructor(value: L) {
    this.value = value;
  }
  isLeft(): this is Left<L, R> {
    return true;
  }
  isRight(): this is Right<L, R> {
    return false;
  }
}

export class Right<R, L = never> {
  readonly value: R;
  constructor(value: R) {
    this.value = value;
  }
  isLeft(): this is Left<L, R> {
    return false;
  }
  isRight(): this is Right<L, R> {
    return true;
  }
}

export type Either<L, R> = Left<L, R> | Right<R, L>;

export const left = <L, R = never>(l: L): Either<L, R> => new Left(l);
export const right = <R, L = never>(r: R): Either<L, R> => new Right(r);
