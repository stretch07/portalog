import chalk from "chalk"
import ora from "ora"

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
        this.rawText = ""
        switch (type) {
            case "fatal":
                this.rawText = `${this.tabs}${chalk.bgRed(item)}`
                break
            case "error":
                this.rawText = `${this.tabs}${chalk.red(item)}`
                break
            case "warning":
                this.rawText = `${this.tabs}${chalk.yellow(item)}`
                break
            case "success":
                this.rawText = `${this.tabs}${chalk.green(item)}`
                break
            case "info":
                this.rawText = `${this.tabs}${chalk.cyan(item)}`
                break
            default:
                this.rawText = `${this.tabs}${item}`
                break
        }
        console.log(this.rawText)
        this.spinner = ora(this.rawText)
    }

    addItem(item, type) {
        return new LogItem(this.level + 1, item, type)
    }

    start() {
        this.spinner.start()
    }

    stop() {
        this.spinner.stop()
    }

    succeed() {
        this.spinner.succeed()
    }

    fail() {
        this.spinner.fail()
    }

    warn() {
        this.spinner.warn()
    }

    info() {
        this.spinner.info()
    }

    clear() {
        this.spinner.clear()
    }

    isSpinning() {
        return this.spinner.isSpinning
    }

    color(color) {
        if (color) {
            this.spinner.color = color
        } else {
            return this.spinner.color
        }
    }

    spinner(spinner) {
        if (spinner) {
            this.spinner.spinner = spinner
        } else {
            return this.spinner.spinner
        }
    }
}
