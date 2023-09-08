export class LogSession {
    constructor() {
        this.logItems = []
    }
    addItem(item, emoji) {
        const logItem = new LogItem(0, item, emoji)
        this.logItems.push(logItem)
        return logItem
    }
}

export class LogItem {
    constructor(level, item, emoji) {
        this.item = item
        this.emoji = emoji
        this.level = level
        this.tabs = ""
        for (let i = 0; i < level; i++) {
            this.tabs += `\t`
        }
        console.log(`${this.tabs}${emoji} ${item}`)
    }
    addItem(item, emoji) {
        return new LogItem(this.level + 1, item, emoji)
    }
}
