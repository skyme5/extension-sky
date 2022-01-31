const addPreferenceColor = () => {
  var tr = document.querySelectorAll("table.c tbody tr");
  tr.forEach((tr) => {
    if (/(pdf)/.test(tr.textContent)) {
      tr.classList.add("first-pref");
    }
    if (!/(pdf|epub)/.test(tr.textContent)) {
      tr.classList.add("second-pref");
    }
    if (!/(pdf|epub)/.test(tr.textContent)) {
      tr.classList.add("no-pref");
    }
  });
};

const addQueryToPageTitle = () => {
  if (document.location.href.includes("search.php")) {
    document.title = `${
      document.querySelector("#searchform").value
    } · Library Genesis`;
  }
};

addQueryToPageTitle();
addPreferenceColor();
