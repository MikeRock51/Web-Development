exports.getDate = () => {
    const today = new Date();
    const options = {
        month: "long",
        weekday: "long",
        day: "numeric"
    };

    return (today.toLocaleString("en-US", options));
};
