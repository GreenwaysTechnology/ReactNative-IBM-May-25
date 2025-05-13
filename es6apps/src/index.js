import { address, calculate, firstName, isValid, lastName, salary } from "./util.js"
import TodoService, { status, valid } from "./services/todo.service.js"

function main() {
  console.log(firstName, lastName, salary, isValid, calculate(), address)
  let todoService = new TodoService()
  console.log(todoService.findAll())
  console.log(status,valid)
}
main()