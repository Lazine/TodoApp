class TodoModel {
  constructor(title, completed) {
    this.title = title;
    this.completed = completed || false;
    this.createdAt = new Date();
  }
}

export default TodoModel;

// 下為commonJS 等於同上ES6
// module.exports = TodoModel;

