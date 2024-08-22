import "./styles.css";
import { renderProjectList, taskController } from "./render";

renderProjectList();

const test = taskController();
test.renderTaskList()