# ALX Tasks made easy for you!
ALX-Tasks-Extension

Introduction

This Chrome extension streamlines your workflow with the ALX program by automatically extracting task file names and generating a single command to create them all at once. Say goodbye to tedious manual file creation!

Features

Extracts file names associated with tasks on the ALX intranet project page (https://intranet.alxswe.com/projects/*/*).
Generates a comprehensive command that:
Creates the required directory structure.
Creates empty files based on extracted file names.
Sets appropriate permissions (chmod u+x).
Initializes a README.md file in the directory.
Copies the generated command to your clipboard for easy pasting into your terminal.
Installation

Download the Repository:

Clone or download the ALX-tasks-extension repository from GitHub.
Activate Developer Mode (Chrome):

Open Chrome.
In the address bar, navigate to chrome://extensions.
Toggle the switch on for "Developer mode" in the upper right corner.
Load Unpacked Extension:

Click the "Load unpacked" button.
Select the unzipped folder containing the extension's files (background.js, content.js, manifest.json, and icon.png).
Usage

Navigate to an ALX intranet project page.
Click the extension's icon in your Chrome toolbar (the icon you specified in manifest.json).
The extension will automatically process the page, extract file names, and generate the command.
Paste the command from your clipboard into your terminal and press Enter to create all directory and file structures in one step.

Authors
Abdullah Mosbah - Github / Twitter - abdallahmosbah25@gmail.com Aya Tarek - Github / Twitter aya.tarek213@icloud.com
