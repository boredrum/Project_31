                                        // EXCERCISE 1
document.body.querySelector('h2').nextElementSibling.innerHTML = 'DOM method description';


                                         // EXCERCISE 2
// let allLinks = document.querySelectorAll('a');
// for (let i = 0; i < allLinks.length; i++){
//     if (allLinks[i].outerHTML.includes('/ua/')){
//         console.log(allLinks[i])
//     }
// }


                                         // EXCERCISE 3
// console.log(document.getElementById('ul').outerHTML); //BEFORE
// let list = document.getElementById('ul');
// let liNull = document.createElement('li');
// let liSecond = document.createElement('li');
// let liFourth = document.createElement('li');
// liNull.setAttribute('id', 'null');
// liNull.innerHTML = 0;
// list.firstChild.before(liNull);
// liSecond.setAttribute('id', 'second');
// liSecond.innerHTML = 2;
// document.getElementById('third').before(liSecond);
// liFourth.setAttribute('id', 'fourth');
// liFourth.innerHTML = 4;
// list.appendChild(liFourth);
// console.log(document.getElementById('ul').outerHTML); //AFTER


                                         // EXCERCISE 4
// let h1 = document.querySelector('h1');
// let createLink = document.createElement('a');
// createLink.setAttribute('id', 'link');
// createLink.setAttribute('href', "https://dom.spec.whatwg.org/");
// createLink.innerHTML = h1.outerHTML;
// h1.after(createLink);
// h1.remove();