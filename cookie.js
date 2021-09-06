const getCookie = name => {
    const cookie = document.cookie;
    const allCoolie = cookie.split(' ; ');
    const findCookie = allCoolie.find(c => c.includes(name));
    if (findCookie) {
        'Country=US'
        const cookieNameValue = findCookie.split('=');
        return cookieNameValue[1];
    }
}