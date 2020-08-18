// // let arr = ['HTML', 'CSS', 'JavaScript'];
// // arr.forEach((item,i, push) => {
// //     console.log(item.length)
// //     // console.log(item, i, push);
// // });
// // let newArr = arr.filter((item) => {
// //     return item > 2;
// // });

// // console.log(newArr);

// var names = ['HTML', 'CSS', 'JavaScript'];

// var nameLengths = names.map(function(name) {
//   return name.length;
// });

// // получили массив с длинами
// console.log(nameLengths); // 4,3,10

// let array = [1, -1, 2, -2, 3]
// function isPositive(number) {
//     return number > 1
// }
// console.log(array.every(isPositive))
// // array.every((number => {
// //     return number > 1
// // }))
// var arr = [1, 2, 3, 4, 5]

// // для каждого элемента массива запустить функцию,
// // промежуточный результат передавать первым аргументом далее
// var result = arr.reduce(function(prev, currentValue) {
//     console.log('PrevValue = ' + prev)
//     console.log('CurrentValue = ' + currentValue)
//     // console.log('sum = ' + prev + currentValue)
//     return prev + currentValue
//     // console.log(currentValue)
// //   return sum + current;
// });

// console.log( result ); // 15

// function sum(x,y,z) {
//     return +(x+y+z)
// }
// let number = [1,2,3]
// console.log(sum(...number))
// console.log(sum.apply(null,number))



// let string = 'hello world'
// let myObj = {
//     name: 'samat',
//     surname: 'ibraimov',
//     age: 22
// }

// let splitString = [...string]
// console.log(splitString)
// function str(e) {
//     console.log(e)
// }
// str(...string)

// str(myObj)
// myObj.country = 'KGZ'
// str({myObj})

// const createPlayer = (...params) => {
//     console.log(params);
// };

// createPlayer('Bob', 99, null, 29);
// const x = [1,2,3,4]
// const y = [5,6,7]
// console.log(...x, ...y);



// const xhr = new XMLHttpRequest();

// xhr.responseType = 'json'

// xhr.open('GET', requestUrl)

// xhr.onload = () => {
//     console.log(xhr.response)
// }

// xhr.send();
// let xhttp = new XMLHttpRequest();

// xhttp.onload = function() {
//     console.log(`загружено: ${xhttp.status} ${xhttp.response}`)
// }
// ();
// xhttp.onerror = function() {
//     console.log('error')
// }
// ();
// xhttp.onprogress = function(event) {
//     // console.log(event.loaded);
//     // console.log(event.lengthComputable);
//     // console.log(event.total);
//     console.log(event);
// }
// ();


// xhttp.open("GET", requestUrl)

// xhttp.responseType = 'json'

// xhttp.send()

// function callbackFunction (data) {
//     console.log(data)
// }

// fetch(requestUrl)
// .then(data => {
//     // console.log(data)
//     return data.text();
// })
// .then(data => {
//     console.log(data)
// })

//...............................
// const xhttp = new XMLHttpRequest()

// xhttp.open('GET', requestUrl)

// xhttp.send()

// xhttp.onload = function() {
//     if(xhttp.status != 200) {
//         console.log(`Произошла ошибка ${xhttp.status} : ${xhttp.statusText}`)
//     }
//     else {
//         console.log(`Загружено: ${xhttp.response.length} Байт`)
//     }
// }
// xhttp.onprogress = function(event) {
//     if (event.lengthComputable) {
//       alert(`Получено ${event.loaded} из ${event.total} байт`);
//     } else {
//       alert(`Получено ${event.loaded} байт`); // если в ответе нет заголовка Content-Length
//     }
  
//   };
//   xhttp.onerror = function() {
//       alert("Запрос не удался")
//   }
//......................................


// const xhr = new XMLHttpRequest();
// xhr.open('GET', requestUrl);
// xhr.responseType = 'json';
// xhr.send();
// xhr.onload = function() {
//     let responeObj = xhr.response;
//     // console.log(responeObj[0].login)
    
    
// }
// const arr = [1,2,3,4,5]
// document.body.innerHTML = arr
// console.log(`${arr}`)
// console.log(arr)
// console.log(...arr)

// const person = {
//     name: 'Max',
//     age: 20,
//     address: {
//         country: 'Russia',
//         city: 'Moscow'
//     }
// }
// const {
//     name,
//     address: {country}
// } = person
// console.log(name, country)
// const {name, ...info} = person
// console.log(name, info)

// const requestUrl = 'https://api.github.com/users';

// function sendRequest(method, url, body = null) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
    
//         xhr.open(method, url);
    
//         xhr.responseType = 'json';
    
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 console.error(xhr.response);
//             }   else {
//                 console.log(xhr.response);
//             }
//         };
//         xhr.onerror = () => {
//             console.log(xhr.response);
//         };
//         xhr.send(JSON.stringify(body));
//     });

// }
// // sendRequest('get', requestUrl)
// // .then(data => console.log(data))
// // .catch(err => console.log(err))

// const body =  {
//     name: 'Vladilen',
//     age: 25
// };

// sendRequest('POST', requestUrl, body)
//     .then(data => console.log(data))
//     .catch(err => console.log(err))


// function sendRequest(method, url){
    //     return fetch(url).then(response => {
        //         return response.json()
        //     })
        // }
        
        // sendRequest('GET', requestUrl)
        //     .then(data => data.map((item) => {
            //         if(item.id < 100) {
                //             console.log(item)
                //         }
                //     })) 
                //     .catch(err => console.log(err))
                
                
                // TASK API
const requestUrl = 'https://jsonplaceholder.typicode.com/photos';
fetch(requestUrl)
    .then((response) => {
        return response.json()

    })
    .then((data) => {
        let result = data.splice(0,10);

        // let key;
        // for (key in result) {
        //     let ul = document.getElementById('list')`
        //     ul.innerHTML += `
        //     <li>
        //     ${result[key].title}
        //     <img src = ${result[key].url}>
        //     </li>
        //     `
        // }   

        result.map((item) => {
            let ul = document.getElementById('list');
            let li = document.createElement('li');
            ul.append(li);
            li.innerHTML = `<img src=${item.url}>`;
            let h = document.createElement('h2');
            li.append(h);
            h.innerHTML = item.title;
            
        })
    })
    






