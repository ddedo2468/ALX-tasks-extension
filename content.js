function extractAndCopyFileNames() {
    var taskDivs = document.querySelectorAll('div[id^="task-num-"]');
    var fileNames = [];

    let dirName = document.querySelector('div.list-group-item > ul > li:nth-child(2) > code').innerText;

    taskDivs.forEach(function (taskDiv) {
        var fileLi = Array.from(taskDiv.querySelectorAll('li')).find(function (li) {
            return li.innerText.includes("File:");
        });

        if (fileLi) {
            var fileName = fileLi.querySelector('code').textContent;

            fileNames.push(`${dirName}/${fileName}`);
        }
    });

    var command = `mkdir -p ${dirName} && touch ${fileNames.join(" ")} && chmod u+x ${dirName}/* && echo "# ${dirName}" > ${dirName}/README.md `;

    navigator.clipboard.writeText(command).then(function () {
        console.log('Command copied to clipboard:', command);
    }).catch(function (error) {
        console.error('Failed to copy command to clipboard:', error);
    });
}

extractAndCopyFileNames();