
async function filterByGroupName(GroupName) {

    const JsonData = await fetch("components/Data.json")  // Datayı fetch ile aldım.
        .then((response) => response.json())
        .catch((error) => console.log(error));  // Hata olması durumunda bunu console'a yazdırdım.

    var DataList = JsonData.filter(item => item.group === GroupName);           // JsonData'yı filter yaparak GroupName adı verdiğim parametreye eşitledim. Burada grup adına eşit olup olmadığını kontrol ediyoruz
    DataList.length > 1 ? getGroups(DataList) : console.log("Hatalı grup adı");    // Eğer Datalist boşsa hata veriyor, değilse getGroups fonksiyonunu çağırarak DataList'i parametre olarak yolladım.

};

function getGroups(arr) {

    const Result = arr.reduce((acc, currentValue) => {                          // Burada reduce methodu ile aldığımız parametreyi (arr) olarak aldım.
        if (currentValue.type == null) {                                        // Eğer type null'sa yani kişi öğrenciyse buradaki kod bloğu geçerli grup değerini pushlar.(GroupName)
            acc[currentValue.group] = acc[currentValue.group] || [];
            acc[currentValue.group].push(currentValue);
        } else {                                                                // Eğer type null değilse yani kişi asistansa buradaki kod bloğu geçerli grup değerini pushlar.(assistant)
            acc[currentValue.type] = acc[currentValue.type] || [];
            acc[currentValue.type].push(currentValue);
        }
        return acc;
    }, Object.create(null)
    )
    console.log(Result);                                                        //Sonucu konsola bastırıyoruz
}

filterByGroupName("Orcshid");                                                 // Bu fonksiyon ile filtrelemek istediğimiz grup ismini giriyoruz

// Bilgi edindiğim kaynaklar
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/group
// https://stackoverflow.com/questions/14446511/most-efficient-method-to-groupby-on-an-array-of-objects

//================================================================================================================================================================================================================================
    // Denemeler
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