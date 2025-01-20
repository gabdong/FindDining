/**
 * - HTML class 만들어주는 함수
 */
export function buildClassName(classArr: string[]): string {
  return classArr.filter((className) => className && className != '').join(' ');
}
