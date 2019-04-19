const main = document.getElementById("main");

const input1 = document.createElement("input");
input1.setAttribute("type", "text");

const input2 = document.createElement("input");
input1.setAttribute("type", "text");

const select = document.createElement("select");

const option1 = document.createElement("option");
const optionPlus = document.createTextNode("+");
option1.appendChild(optionPlus);

const option2 = document.createElement("option");
const optionMInus = document.createTextNode("-");
option2.appendChild(optionMInus);

const option3 = document.createElement("option");
const optionMulti = document.createTextNode("*");
option3.appendChild(optionMulti);

const option4 = document.createElement("option");
const optionDiv = document.createTextNode("/");
option4.appendChild(optionDiv);

select.appendChild(option1);
select.appendChild(option2);
select.appendChild(option3);
select.appendChild(option4);

const button = document.createElement("button");
const textnode = document.createTextNode("Equals"); // Create a text node
button.appendChild(textnode);

main.appendChild(input1);
main.appendChild(select);
main.appendChild(input2);
main.appendChild(button);

const methzz = (num1, num2, char) => {
  let a = "";
  if (char === "+") {
    a = parseInt(num1) + parseInt(num2);
  } else if (char === "-") {
    a = parseInt(num1) - parseInt(num2);
  } else if (char === "*") {
    a = parseInt(num1) * parseInt(num2);
  } else if (char === "/") {
    a = parseInt(num1) / parseInt(num2);
  }

  const nerd = document.createElement("p");
  const nerdText = document.createTextNode(a);
  nerd.appendChild(nerdText);
  main.appendChild(nerd);
};

button.addEventListener("click", () => {
  methzz(input1.value, input2.value, select.value);
});
