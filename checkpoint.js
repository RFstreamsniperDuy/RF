// 1
function findEven(number) {
    let kq= 0;
for (let i = 4;i<number; i++){
    if (i%2 == 0){
        kq = i
        }
    }
    console.log(kq)
}
findEven(15);

//3 
function numberOneTriangle() {
    let text = "";
        for (i = 0; i <= 5; i++ ){
            document.write("</br>");
        for ( j = 6-i; j <= 5; j++ ){ 
            document.write( "1" );
        }
    }
}
numberOneTriangle();