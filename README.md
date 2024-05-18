# ProfitOnlyClosedAI Replacer Chrome Extension

ProfitOnlyClosedAI Replacer is a free and open-source Chrome extension that replaces every mention of "OpenAI" with "ProfitOnlyClosedAI" on X.com (formerly Twitter). This extension is designed to make browsing X.com a bit more fun and expressive.

## Features

- Replaces all instances of "OpenAI" with "ProfitOnlyClosedAI" on X.com.
- Dynamically updates the text as new content is loaded on the page.
- Lightweight and easy to install.

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/profitonlyclosedai-replacer.git
   ```

2. **Navigate to the project directory:**
  ```bash
  cd profitonlyclosedai-replacer
  ```
3. **Load the extension in Chrome:**
  - Open Chrome and go to chrome://extensions/
  - Enable "Developer mode" by clicking the toggle switch in the top right corner
  - Click the "Load unpacked" button and select the directory where you cloned the repository

## How It Works

This extension uses a content script (content.js) to:
- Initially replace all instances of "OpenAI" with "ProfitOnlyClosedAI" on the loaded X.com page
- Monitor the page for any new content loaded dynamically and apply the same text replacement

**manifest.json**: The manifest.json file configures the extension to run on X.com and specifies the content script to be used.

**content.js**: The content.js script: Replaces the text content on page load and Uses a MutationObserver to track and replace text in dynamically added content.

## Contributing

## Contributing

Contributions are welcome! If you have suggestions for improvements or new features, feel free to create an issue or submit a pull request.

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`
3. Make your changes and commit them: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin feature-branch-name`
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.

## Acknowledgements

- This project is inspired by the open-source community and aims to provide a fun tool for X.com users.

## Contact

For any questions or feedback, please open an issue on GitHub.
