var generateMessage = (from, text) => {
    return {
        from,
        text,
        createdAt: new Date().getTime()
    };
};

var generateLocationMessage = (from, latitude, longitude) => {
    return {
        from,
        url: `https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt: new Date().getTime()
    };
};

var generatePrivateMessage = (from, to, text, files) => {
    return {
        from,
        to,
        text,
        files,
        createdAt: new Date().getTime()
    }
};

module.exports = { generateMessage, generateLocationMessage, generatePrivateMessage };