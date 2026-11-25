const endpoint='https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
const cities=[];
fetch(endpoint)
.then(blob=>blob.json())
.then(data=>{
   cities.push(...data);
});

function findMatches(wordToMatch,cities){
    return cities.filter(place=>{
        
        // можно использовать и  includes, но этот метод не учитывает регистр букв
        // поэтому надо привести и искомое и то где ищем к одному регистру, 
        // но кажется, что оно перегружает очень текст и делает его менее читабельным
        //  return place.city.toLowerCase().includes(wordToMatch.toLowerCase())||place.state.toLowerCase().includes(wordToMatch.toLowerCase())});
        const regex=new RegExp(wordToMatch,"gi");
        // .match выдает массив такой же длины в котором все null, кроме совпадений (судя по выводу ниже)
        // console.log(place.city.match(regex));
        return place.city.match(regex)||place.state.match(regex)
    });
}

function displayMatches(){
    console.log(this.value);
}
