//1-Misol//



// let raqamlar=[5,8,5,3,2,9,6,52,6,5,3,5,6,1,2 ,"Slom"];

// let yegindi =raqamlar.reduce((raqam,num)=>raqam+num,0 );

// console.log(yegindi);


//1-Tugashi//



//2-Misol//

// let massiv =[9,5,8,6,3,2,6,8,6,23,6,8,258,4]

// let toplam=massiv[0];

// for(let i=0 ; i<massiv.length ; i++) {

//     if (massiv[i]>toplam) {

//         toplam=massiv[i]; 
//     }

// }

// alert(toplam);

//2-Tugashi//


//3-Misol//


// let massiv =[9,5,8,6,3,2,6,8,6,23,6,8,258,4];

// let toplam =massiv[0];

// let top =0;

// for(let i=0 ; i<massiv.length ; i++) {

//     if (massiv[i]>toplam) {

//         toplam=massiv[i]; 

//         top=i;
//     }
// }

// massiv.splice(top ,1);

// console.log(massiv);



//3-Tugashi//


//4-Misol//


// let ism = "Abdulaziz Akbarovvvvvvvv";

// let matn = ism.split(" ");

// let soz = "";

// for (let i = 0; i < matn.length; i++) {
//   if (matn[i].length > soz.length) {
//     soz = matn[i];
//   }
// }

// alert("Familya Uzun  " + soz);


//4-Tugashi//



//5-Misol//

// let matn = prompt("Matn kiriting:");
// let sozlar = matn.toLowerCase().split(" ");

// let text = sozlar.reduce((a, soz) => {
//   a[soz] = (a[soz] || 0) + 1;
//   return a;
// }, {});

// for (let [soz, soni] of Object.entries(text)) {
//   alert(`So'z: "${soz}" - ${soni} marta uchradi`);
// }

//5-Tugashi//
