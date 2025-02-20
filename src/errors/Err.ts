export class Err extends Error {
  status: number;

  constructor(status: number, msg: string) {
    super(msg);
    this.name = "Err";
    this.status = status;
  }
}
