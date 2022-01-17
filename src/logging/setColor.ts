export default (statusCode: string | number) => {
    let color;
      if (+statusCode < 400) {
        color = '\x1b[32m%s\x1b[0m';
      } else if (+statusCode < 500) {
        color = '\x1b[36m%s\x1b[0m';
      } else {
        color = '\x1b[31m%s\x1b[0m';
      }
      return color;
}