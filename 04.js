//import { element } from "prop-types";

/**
 * [04.js]
 *
 * 1) todos 배열과 삭제할 todo의 id가 주어집니다.
 * 2) deleteTodo 함수를 작성하여,
 *   - 해당 id를 가진 todo만 제외하고 새로운 배열을 반환하세요.
 *   - id가 존재하지 않으면 기존 배열을 그대로 반환하세요.
 *
 * @param {Array} todos
 * @param {number} id
 * @returns {Array} 새로운 todos 배열
 */
function deleteTodo(todos, id) {
  return todos.some((element) => element.id === id)
    ? todos.filter((element) => element.id !== id)
    : todos;
}
const todos1 = [
  { id: 1, title: "첫 번째 할 일", completed: false },
  { id: 2, title: "두 번째 할 일", completed: true },
];

console.log(deleteTodo(todos1, 2));
// export 수정 불가
export { deleteTodo };
