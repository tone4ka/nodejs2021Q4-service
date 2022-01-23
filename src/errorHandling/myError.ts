class MyError extends Error {
    constructor(msg: string, replyStatusCode: number) {
      super(msg);
      this.message = msg;
      this.name = `${replyStatusCode}`;
    }
  }

export default MyError;