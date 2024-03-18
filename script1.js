const onClick=()=>{
    const input=document.getElementById('input').value;
    let vc=0;
    let cc=0;

    for(let i=0;i<input.length;i++ ){
        if (input.charAt(i) == "a" || input.charAt(i) == "e" || input.charAt(i) == "i" || input.charAt(i) == "o" || input.charAt(i) == "u") {
            vc++;
        }
    }
    document.getElementById('output').innerHTML=`Count of vowels is ${vc} and count of consonants is ${input.length-vc} for string ${input}`;
    console.log(document.getElementById('output'));
}
const reset=()=>{
    document.getElementById('input').value="";
    document.getElementById('output').innerHTML="";
}
