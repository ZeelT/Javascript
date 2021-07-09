
"use strict";
let total=0;

const score1= parseInt(prompt("Enter test score1"));
total+=score1;

const score2= parseInt(prompt("Enter test score2"));
total+=score2;

const score3= parseInt(prompt("Enter test score3"));
total+=score3;

const avg=parseInt(total/3);

const html = `<p> Score1= ${score1}</p>
            <p> Score2= ${score2}</p>
            <p> Score3= ${score3}</p>
            <p> Average= ${avg}</p>`;

document.write(html);
            