const trim = (object) => JSON.parse(JSON.stringify(object).replace(/"\s+|\s+"/g, '"'));

export default trim;