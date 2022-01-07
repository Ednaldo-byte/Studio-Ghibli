function show_hide(){
  let modal = document.querySelector(".modal");
  let iframe = document.querySelector(".iframe");
  let close = document.querySelector("#close");
  if (modal.classList.contains("invisible") || iframe.classList.contains("invisible") || close.classList.contains("invisible")){
    modal.classList.remove("invisible")
    iframe.classList.remove("invisible")
    close.classList.remove("invisible")
  }
  else{
    modal.classList.add("invisible")
    iframe.classList.add("invisible")
    close.classList.add("invisible")
    
  }
}