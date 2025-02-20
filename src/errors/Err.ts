export class Err extends Error {
  status: number;
  msg: string;

  constructor(status: number, msg: string) {
    super(msg);
    this.name = "Err";
    this.status = status;
    this.msg = msg;
  }
}
