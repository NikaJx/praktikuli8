//დავალება 1

function expo(num, pow, callback) {
  return pow === 0 ? callback(1) : expo(num, pow - 1, result => callback(num * result));
}

expo(5, 3, result => console.log(result));

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
