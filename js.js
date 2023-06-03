//დავალება 1

const expo = (num, quality) => {
    if (quality > 1) {
        return num * expo(num, --quality);
    }
    return num;
};

console.log(expo(5, 3));

//დავალება 2

const fetchFunc = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');

        if(!res.ok) {
            throw Error('err');
        }

        const data = await res.json();

        data.forEach(post => {
            const poster = funcAp(post);
            document.body.append(poster)
        });

        // console.log(data);
    } catch (error) {
        console.log(error.message);
    }
}



const funcAp = ({title, body}) => {
    const h1  = document.querySelector('.title');
    const p = document.querySelector('.text');

    // console.log(title, body);

    h1.textContent = title;
    p.textContent = body;
}
fetchFunc();


//დავალება3/4
const deepCopy = async obj => {
    try {
        if(typeof obj !== 'object') {
            console.log('not obj');
        }
    
        let copy = {};
        for(i in obj) copy[i] = typeof obj[i] == 'object' ? deepCopy(obj[i]) : obj[i]

        return copy;
    } catch (error) {
        console.log(error);
    }   

}