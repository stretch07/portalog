import { LogSession } from "../src/index.js";

const session = new LogSession()
const category1 = session.addItem("Category 1", "📁")
category1.addItem("example item", "📄")