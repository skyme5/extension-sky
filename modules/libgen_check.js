async function checkDownloaded(md5, isbn, a) {
  const id = md5 || isbn;
  const response = await chrome.runtime.sendMessage({
    fetchJSON: `http://localhost/api/v2/book/${id}/exist`,
  });
  const newClass = response.exist ? "completed" : "new";
  const img = document.createElement("span");
  img.className = "completed";
  img.textContent = response.exist ? "✅" : "❌";

  a.closest("tr").classList.add(newClass);
  a.classList.add(newClass);
  a.prepend(img);
}

let list = [];
document.querySelectorAll("table tbody td a").forEach(async (a) => {
  if (a.href.includes("/index.php?md5=")) {
    const md5 = a.href.split("md5=").pop();
    const text = a.innerText.replace(/[\r\n]+/g, " ");
    const isbn = (text.match(/[\d\-]{10,}/g) || [])
      .map((e) => e.replace(/[^\d]+/g, ""))
      .filter((value, index, self) => {
        return self.indexOf(value) === index;
      });

    await checkDownloaded(md5, isbn, a);
    list.push(`${text} MD5:${md5}`);
  }
});
console.log(list.join("\n"));
