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
        this.spin = ora(this.rawText)
    }

    addItem(item, type) {
        return new LogItem(this.level + 1, item, type)
    }

    start() {
        this.spin.start()
        return this
    }

    stop() {
        this.spin.stop()
        return this
    }

    succeed() {
        this.spin.succeed()
        return this
    }

    fail() {
        this.spin.fail()
        return this
    }

    warn() {
        this.spin.warn()
        return this
    }

    info() {
        this.spin.info()
        return this
    }

    clear() {
        this.spin.clear()
        return this
    }

    isSpinning() {
        return this.spin.isSpinning
    }

    color(color) {
        if (color) {
            this.spin.color = color
        } else {
            return this.spin.color
        }
    }

    spin(spinner) {
        if (spinner) {
            this.spin.spinner = spinner
        } else {
            return this.spin.spinner
        }
    }
}
