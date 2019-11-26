
function move(array, fromIndex, toIndex) {
  return array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
}

function findTodo(todo, todoList) {
  return todoList.find(
    item => item.title.toLowerCase() === todo.title.toLowerCase(),
  );
}

export default {move, findTodo}

// 下為commonJS 等於同上ES6
// module.exports = {
//   move: function(array, fromIndex, toIndex) {
//     return array.splice(toIndex, 0, array.splice(fromIndex, 1)[0]);
//   },

//   findTodo: function(todo, todoList) {
//     return todoList.find(
//       item => item.title.toLowerCase() === todo.title.toLowerCase(),
//     );
//   },
// };
