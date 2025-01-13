/**
 * [05.js]
 *
 * - userTodos 배열 안에는 userId, title, completed, priority 속성을 가진 객체들이 있습니다.
 * - filterUserTodos 함수를 작성하세요.
 *   1) userId가 일치하고
 *   2) priority가 일치하며
 *   3) completed가 false인 항목들의 title만 뽑아서 문자열 배열로 만들어 반환하세요.
 *
 * @param {Array} userTodos
 * @param {number} userId
 * @param {string} priority
 * @returns {string[]}
 */

function filterUserTodos(userTodos, userId, priority) {
  const result = "";
  return userTodos
    .filter(
      (todos) =>
        todos.userId === userId &&
        todos.priority === priority &&
        todos.completed === false
    )
    .map(({ title }) => title);
}
const userTodos = [
  {
    userId: 1,
    title: "자바스크립트 공부",
    completed: false,
    priority: "high",
  },
  { userId: 2, title: "마트 가기", completed: true, priority: "low" },
  { userId: 1, title: "운동하기", completed: false, priority: "low" },
  { userId: 1, title: "청소하기", completed: false, priority: "high" },
];
console.log(filterUserTodos(userTodos, 1, "high"));
// export 수정 불가
export { filterUserTodos };
