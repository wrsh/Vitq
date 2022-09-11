const mainDiv = document.querySelector('#main');
let plan_items = [["question #1", 30], ["question #2", 20], ["question #3", 15], ["question #4", 25]];   // заглушка - исходные данные
let number_of_items = plan_items.length;


for(let i = 0; i < number_of_items; i ++){
    let current_theme = plan_items[i][0];
    const itemDiv = document.createElement('div');
    itemDiv.innerText = `${current_theme}`;
    itemDiv.className = 'itemDiv';
    mainDiv.appendChild(itemDiv);
}

