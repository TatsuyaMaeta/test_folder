function test(data) {
    console.table(data);
    // console.log(typeof(data));
    return new Promise(function (resolve) {
        setTimeout(function () {
            const result = data.map(
                () =>
                    (data["full_name"] =
                        data.family_name + " " + data.first_name)
            );
            console.log();
            Promise.resolve(result);
        }, 3000);
    });
}

async function getData() {
    // Promiseを使った実装をやってみましょう！APIとの通信でよく使う表現になります！
    // ３秒後にフルネームのリストを表示されるようにしましょう。
    // 最初から表示されていると、クリアになりません。

    const userList = [
        {
            id: 1,
            first_name: "優",
            family_name: "大木",
            affilication: "TechTrain",
            is_student: false,
        },
        {
            id: 2,
            first_name: "太郎",
            family_name: "山田",
            affilication: "HogeHoge大学",
            is_student: true,
        },
    ];
    // const a = [1, 2, 3];
    // console.log(typeof a);
    // console.table(userList);
    console.log(typeof userList);
    const result = await test(userList);
    return await result;
}
