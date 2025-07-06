const API = {
    url: "/data/menu.json", // change to this to see in the local
    // url: "https://homayunmmdy.github.io/VanillaJS-You-Might-Not-Need-a-Framework/data/menu.json",
    fetchMenu: async () => {
        const result = await fetch(API.url);
        return await result.json();
    }
}

export default API;
