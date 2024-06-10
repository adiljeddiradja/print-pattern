function printPattern(n){
    if(n % 2 === 0){
        console.log("Bilangan harus ganjil")
    }else{
    let tengah = (n-1)/2;

    console.log("===Tengah===")

    for(let i = 0; i < n ; i++){
        let baris= '';
        for(let j = 0;j < n ; j ++){
            if(i === tengah  || j === 0 || j === n - 1){
                baris += "*";
            }
            else{
                baris += "=";
            }
            if(j < n-1){
                baris += " ";
            }
        }
        console.log(baris)
    }
    }
}

printPattern(5);