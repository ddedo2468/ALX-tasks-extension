chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: async () => {
      let taskDivs = document.querySelectorAll('div[id^="task-num-"]');
      let dirName = document.querySelector(
        "div.list-group-item > ul > li:nth-child(2) > code",
      ).innerText;
      let fileLi,
        fileName,
        command,
        textArea,
        fileNames = [];

      taskDivs.forEach((taskDiv) => {
        fileLi = Array.from(taskDiv.querySelectorAll("li")).find(function (li) {
          return li.innerText.includes("File:");
        });

        if (fileLi) {
          fileName = fileLi.querySelector("code").textContent;
          fileNames.push(`${dirName}/${fileName}`);
        }
      });

      command = `mkdir -p ${dirName} && touch ${fileNames.join(" ")} && chmod u+x ${dirName}/* && echo "# ${dirName}" > ${dirName}/README.md `;

      textArea = document.createElement("textarea");
      textArea.value = command;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
    },
  });
});
