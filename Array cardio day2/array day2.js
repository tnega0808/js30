
// ## Array Cardio Day 2
const people = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
];
const comments = [
    { text: 'Love this!', id: 523423 },
    { text: 'Super good', id: 823423 },
    { text: 'You are the best', id: 2039842 },
    { text: 'Ramen is my fav food ever', id: 123523 },
    { text: 'Nice Nice Nice!', id: 542328 }
];
const now = new Date();
//добавила функцию для вычисления возраста чтобы не дублировать несколько раз
const carrentYear = now.getFullYear();
const getAge = (birthYear) => carrentYear - birthYear;

console.log(now.getFullYear());
const howOld = people.map(pers => getAge(pers.year));
console.table(howOld);//38 40 56 11

// Some and Every Checks
// Array.prototype.some() // is at least one person 19 or older?
const isAnyoneOlder19 = people.some((pers) => getAge(pers.year) >= 19);
console.log(isAnyoneOlder19); //true
// Array.prototype.every() // is everyone 19 or older?
const isEveryoneOlder19 = people.every((pers) => getAge(pers.year) >= 19);
console.log(isEveryoneOlder19); //false
// Array.prototype.find()
// Find is like filter, but instead returns just the one you are looking for
// find the comment with the ID of 823423
const targetComment = comments.find(comm => comm.id === 823423);
console.log(targetComment); //{ text: 'Super good', id: 823423 }

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423
const index823423 = comments.findIndex(comm => comm.id === 823423);
console.log(index823423);//1

//оказывается, delete() удаляет по индексу, но оставляет дыру в памяти
//и не уменьшает длину length
//при этом forEach будет пропускать это пустое место
//delete(comments[index823423]);

//перенесла до splice чтобы newComments поолучал немутировавший массив
//еще можно не изменять сам массив, а создать новый без эл-а
const newComments = [
    ...comments.slice(0, index823423),//часть от 0 включительно до index823423 (не включительно)
    ...comments.slice(index823423+1),//часть от index823423+1 до конца. index823423 не попал в массив 
];
console.table(newComments);

//можно использовать .splice()
// .splice(start(откуда начинаем удалять),deleteCount(сколько эл-ов начиная от start нужно удалить))
comments.splice(index823423, 1);

//еще .splice можно использовать чтобы вставить эл-ы в массив в нужное место
// comments.splice(index823423,0,"ghbdn","hjvfirb");

console.table(comments);


const areArraysEqual = (a, b) =>
    a.length === b.length && a.every((item, index) => item === b[index]);

console.log(areArraysEqual(comments, newComments));
