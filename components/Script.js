
async function filterByGroupName(GroupName) {
    const JsonData = await fetch("components/Data.json")    // Datayı aldık
        .then((response) => response.json())
        .catch((error) => console.log(error));
    var DataList = JsonData.filter(item => item.group === GroupName);   // Datalist filter
    getGroups(DataList);
};

function getGroups(arr) {

    const Result = arr.reduce((acc, currentValue) => {
        if (currentValue.type == null) {
            acc[currentValue.group] = acc[currentValue.group] || [];
            acc[currentValue.group].push(currentValue);
        } else {
            acc[currentValue.type] = acc[currentValue.type] || [];
            acc[currentValue.type].push(currentValue);
        }
        return acc;
    }, Object.create(null)
    )
    console.log(Result);
}

filterByGroupName("SteelBlue");


    // const newObj = arr.reduce(function (acc, currentValue) {
    //     if (!acc[currentValue[criteria]]) {
    //         acc[currentValue[criteria]] = [];
    //     }
    //     acc[currentValue[criteria]].push(currentValue);

    //     return acc;
    // }, {});
    // console.log(newObj);
    // return newObj;


    //         (currentValue.type !== null) {
    //         acc[currentValue.type] = acc[currentValue.type] || [];
    //         acc[currentValue.type].push(currentValue);
    //     }
    //     return acc;
    // }, Object.create(null)
    // )