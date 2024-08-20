import "./styles.css";
import { Projects } from "./projects";
import { addToDo  } from "./todos";
import { renderProjects } from "./render";

const app = Projects();

// app.addProjectTask(0, "My List", addToDo(0, "My List", ["Pay Taxes", "Before I get audited", "Oct 1, 2024", "High", "Call Mark Muler",""]));
// app.addProjectTask(0, "My List", addToDo(0, "My List", ["Passport Photo", "Need to Travel", "Nov 10, 2025", "Low", "CVS Visit",""]));
// app.delProjectTask(0, "My List", 0)

renderProjects();