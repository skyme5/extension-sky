const LIBGEN_PREFIX =
  "https://libgen.rs/search.php?&res=100&req=%s&phrase=1&view=simple&sort=year&sortmode=DESC&column=";

const SEARCH_URL = {
  default: `${LIBGEN_PREFIX}def`,
  title: `${LIBGEN_PREFIX}title`,
  author: `${LIBGEN_PREFIX}author`,
  isbn: `${LIBGEN_PREFIX}identifier`,
  book: "https://1lib.in/s/%s?order=year",
};

export const menus = [
  {
    title: "Libgen Default Latest",
    contexts: ["selection"],
    id: SEARCH_URL.default,
  },
  {
    title: "Libgen Title",
    contexts: ["selection"],
    id: SEARCH_URL.title,
  },
  {
    title: "Libgen Author",
    contexts: ["selection"],
    id: SEARCH_URL.author,
  },
  {
    title: "Libgen ISBN",
    contexts: ["selection"],
    id: SEARCH_URL.isbn,
  },
  {
    title: "B-ok Title",
    contexts: ["selection"],
    id: SEARCH_URL.book,
  },
];
