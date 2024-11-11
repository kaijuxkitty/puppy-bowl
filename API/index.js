export const fetchAllPlayers= async ()=> {
    const response= await fetch('https://fsa-puppy-bowl.herokuapp.com//api/2409-ftb-et-web-ft/players');
    return response.json();
};


export const fetchSinglePlayer = async (id) => {
    const response= await fetch('https://fsa-puppy-bowl.herokuapp.com/api/2409-ftb-et-web-ft/players/$(id)');
 return response.json();
};
