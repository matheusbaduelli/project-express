const btn = document.querySelector('#btn');


btn.addEventListener("click",(e)=>{

    e.preventDefault();

    const input = document.querySelector('#input');
    const senha = document.querySelector('#senha');

    const valueInput = input.value;
    const valueSenha = senha.value;

    const result = {valueInput, valueSenha};
    const result2 = valueInput + " " +valueSenha;

    const para = document.getElementById('paragrafo');

    console.log(result)
    alert(result2)

    if(valueInput == "Matheus" && valueSenha == "123"){
        para.innerHTML = "usuario logado"
    }else{
        throw new Error("deu ruim");
    }

})