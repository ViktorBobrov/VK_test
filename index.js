const select = document.querySelector(".select");
const optionsList = document.querySelector(".options_list");
const options = document.querySelectorAll(".options");

//прячем и показываем опции 

select.addEventListener("click", () => {
	optionsList.classList.toggle('active');
	
});
//берем опцию
options.forEach((option)=>{
option.addEventListener("click", () => {
	options.forEach((option)=>{option.classList.remove('selected')})
	select.querySelector("span").innerHTML = option.innerHTML;
	option.classList.add("selected");
	optionsList.classList.toggle('active');
	
})
});

const buttonPush = document.querySelector("push_but");

