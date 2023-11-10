import chalk from "chalk"

export class LogSession {
    constructor() {
        this.logItems = []
    }

    addItem(item, type) {
        const logItem = new LogItem(0, item, type)
        this.logItems.push(logItem)
        return logItem
    }
}

export class LogItem {
    constructor(level, item, type) {
        this.item = item
        this.type = type
        this.level = level
        this.tabs = ""
        for (let i = 0; i < level; i++) {
            this.tabs += `\t`
        }
        switch (type) {
            case "error":
                console.log(`${this.tabs}${chalk.red(item)}`)
                break
            case "warning":
                console.log(`${this.tabs}${chalk.yellow(item)}`)
                break
            case "success":
                console.log(`${this.tabs}${chalk.green(item)}`)
                break
            case "info":
                console.log(`${this.tabs}${chalk.blue(item)}`)
                break
            default:
                console.log(`${this.tabs}${item}`)
                break
        }
    }

    addItem(item, type) {
        return new LogItem(this.level + 1, item, type)
    }
}
