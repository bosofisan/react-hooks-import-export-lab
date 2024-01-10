const username = "Liza";
const city = "New York";

const image = "https://i.imgur.com/mV8PQxj.gif";

// export all three variables as named exports
function getUsername(){
    return username;
}

function getCity(){
    return city;
}

function getImage(){
    return image
}

export { getUsername, getCity, getImage };