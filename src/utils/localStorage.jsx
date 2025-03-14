
  


  export const saveSearch = (username, success) => {
    let history = JSON.parse(localStorage.getItem("searchHistory") || "[]");
    history.push({ username, success });
    localStorage.setItem("searchHistory", JSON.stringify(history));
  };
  
  export const getSearchHistory = () => 
    JSON.parse(localStorage.getItem("searchHistory") || "[]");
  
  export const clearSearch = (username) => {
    let history = getSearchHistory().filter((item) => item.username !== username);
    localStorage.setItem("searchHistory", JSON.stringify(history));
  };
  