# Portalog

## Description

This library provides a simple way to log your JavaScript sessions with the use of the `LogSession` and `LogItem` classes. You can easily track and structure the logging of information, involving addition of emojis for easy visualization and synchronous logging of items at different indentation levels, reflecting the hierarchical structure of the logged data.

## Installation

Portalog is a Node.js module available through the npm registry.

Installation is done using the `npm install` command:

```bash
npm install portalog
```

## Usage

Import the LogSession and LogItem classes from the library and start logging your session data.

```javascript
import { LogSession, LogItem } from 'portalog'

// Create a new log session
let logSession = new LogSession()

// Add an item to the log session
let logItem = logSession.addItem('Hello, world!', '🌍')

// Log a sub-item under the above item in the session
logItem.addItem('Sub-item', '⚙')
```

### API

#### LogSession

- `addItem(item: string, emoji: string): LogItem`

Adds an item to the current log session and returns a `LogItem` object.

#### LogItem

- `addItem(item: string, emoji: string): LogItem`

Adds a sub-item to the current log item in the session. The level of indentation of the logged information is increased by one compared to the parent `LogItem` object. Returns a `LogItem` object that represents the sub-item.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

MIT

## Enjoy 😉👍