const API = {
  url: "/data/menu.json",
  fetchMenu: async () => {
    const result = await fetch(API.url);
    await result.json();
  },
};

export default API;