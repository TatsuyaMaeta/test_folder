async function main() {
    console.log("hello");
    const results = await getData();
    const elem = document.getElementById("result");

    results.forEach( result => {
        // console.log(result);
        let li = document.createElement('li');
        // console.log(li);
        let text = document.createTextNode(result.full_name);
        // console.log(text);
        li.appendChild(text);
        elem.appendChild(li);
    })
}

main()
