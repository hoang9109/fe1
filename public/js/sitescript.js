const inputBtn = document.querySelectorAll('.btn-number');
const phepTinh = document.querySelector('#operation');
const kQ = document.querySelector('#result');
const removeBtn = document.querySelector('#remove');
const enterBtn = document.querySelector('#enter');
inputBtn.forEach(item => {
    item.addEventListener('click', event => {
        const lastChar = phepTinh.textContent.substr(-1);
        const curChar = event.currentTarget.textContent;
        if(curChar == '+' || curChar == '-' || curChar == '*' || curChar == '/') {
            if(lastChar == '+' || lastChar == '-' || lastChar == '*' || lastChar == '/') {
                phepTinh.textContent = phepTinh.textContent.slice(0, -1) + curChar;
                return;
            }
        }
        phepTinh.textContent += event.currentTarget.textContent;
    });

});

removeBtn.onclick = function () {
    kQ.textContent = '';
    phepTinh.textContent = '';
}
enterBtn.onclick =function(){
    let value = eval(phepTinh.textContent) ;
    kQ.textContent = value;
}

