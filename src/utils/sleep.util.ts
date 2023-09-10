/**
 * A "modern" sleep statement.
 *
 * @param ms The number of milliseconds to wait.
 */
export const sleep = (ms: number) => {
  //@ts-ignore
  return new Promise(resolve => setTimeout(resolve, ms));
};
