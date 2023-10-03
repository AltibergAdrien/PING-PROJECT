const botao = document.querySelector("#btn");
const input = document.querySelector("#input");
const DivErro = document.querySelector("DivErro")

botao.onclick = function () {
    event.preventDefault();
    const searchTerm = input.value.trim();

    if(!searchTerm){
        DivErro.innerHTML = '<p class="msg-erro">Please provide a valid email address</p>';
    }
};

//function verificarInput() {
//    const searchTerm = input.value.trim();
//    if (!searchTerm) {
//
//        const searchTerm = input.value.trim();
//

 //       var msg = document.createElement("p");
//        msg.classList.add("msg-erro");
//        msg.textContent = "Please provide a valid email address";
//

 //       var Divmsg = document.querySelector("div-erro");
 //       Divmsg.appendChild(msg);
//
  //      Divmsg.innerHTML = 

   //     return false;
  ///  };
//};