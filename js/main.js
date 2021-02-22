function getEle (ele){
    return document.getElementById(ele);
}

function bienDungChung(){
    input1 = parseInt(getEle("input1").value);
    return input1;
}


// Bài 1
var bai1 = function(){
    input1 = parseInt(getEle("input1").value);
    var tong = 0;
    for (i=0;i<=input1;i++){
        if(i%2==0){
            tong += i;
        }
     
    }
    tb1=getEle("tb1");
    tb1.innerHTML = "Tổng các số chẵn từ 1 đến " + input1 + " là: " + tong;
 }

btn1 = getEle("btn1");
btn1.onclick = bai1;

// _____________________________________________________
// Bài 2
var bai2 = function(){
  
    var count = 0;
    for (i=0;i<=1000;i++){
        if(i%3==0){
           count++;
        }
    }
    tb2=getEle("tb2");
    tb2.innerHTML = "Có bao nhiêu số dương ⋮ 3 từ 0-1000? " + "=> Có: " + count;
 }

btn2 = getEle("btn2");
btn2.onclick = bai2;

// _____________________________________________________
// Bài 3
var bai3 = function(){
    var tong = 0
    for (i=0;i<Infinity;i++){
        tong += i;
        if(tong>10000){
            console.log(i);
            console.log(tong);
           break;
        }
    }
    tb3=getEle("tb3");
    tb3.innerHTML = " Số nguyên dương nhỏ nhất thỏa điền kiện là " +  i;
 }

btn3 = getEle("btn3");
btn3.onclick = bai3;


// _____________________________________________________
// Bài 4

vietHam = function(x,n){
    
    var tong = 0;
    var string4 = "";
    for(i=1;i<=n;i++){
        tong += Math.pow (x,i); 
         string4 +=  "+" + x +"^" +i;
    }
    return tong;
}

vietHamChuoi = function(x,n){
    
    var tong = 0;
    var string4 = "";
    for(i=1;i<=n;i++){
        tong += Math.pow (x,i); 
         string4 +=  "+" + x +"^" +i;
    }
    return string4;
}


var bai4 = function(){
    var bienn = parseInt(getEle("input41").value);
    var bienx = parseFloat(getEle("input42").value);

    Tong = vietHam(bienx,bienn);
    Chuoi = (vietHamChuoi(bienx,bienn)).substr(1);

    tb4=getEle("tb4");
    tb4.innerHTML = "Tổng: S(n) = " +  Chuoi + " = " + Tong;
 }

btn4 = getEle("btn4");
btn4.onclick = bai4;


// _____________________________________________________
// Bài 5

var bai5 = function(){
    input5 = parseInt(getEle("input5").value);
     var tong = 1 ;
    var string = "";
    console.log(input5);
    for (i=1;i<=input5;i++){
      tong *= i; 
      string += "*" + i 
    }

    string  = string.substr(1);
    tb5=getEle("tb5");
    tb5.innerHTML = "Tính giai thừa " + string + " là: " + tong;
 }

 btn5 = getEle("btn5");
btn5.onclick = bai5;