(function () {
  const searchInput = document.getElementById('search-input');

  const showSearchResult = () => {
    let searchWord = searchInput.value;
    location.href = `https://www.google.com/search?q=${searchWord}`;
    searchWord = '';
  };

  const enterKey = (e) => {
    if (e.code === 'Enter') {
      showSearchResult();
    }
  };

  searchInput.addEventListener('keypress', (event) => {
    enterKey(event);
  });
})();