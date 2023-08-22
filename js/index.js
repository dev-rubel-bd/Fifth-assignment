let total = 0;
function clickCart(target) {
    const itemName = target.childNodes[5].innerText;

    const li = document.createElement('li');
    li.innerText = itemName;
    const selectedItemCointainer = document.getElementById('selected-item');
    selectedItemCointainer.appendChild(li);

    const price = target.childNodes[7].innerText.split(" ")[0];
    total = parseInt(total) + parseInt(price);
    document.getElementById('total').innerText = total;


    const discount = document.getElementById('discount-price').innerText.split(" ")[0];
    totalAmound = parseInt(total) - parseInt(discount)
    document.getElementById('total-ammount').innerText = totalAmound;
    document.getElementById('appy-button').addEventListener('click', function () {
        
        const discount = document.getElementById('discount-price').innerText.split(" ")[0];
        totalAmound = parseInt(total) - parseInt(discount)
        document.getElementById('total-ammount').innerText = totalAmound;
        
     
    })

    document.getElementById('appy-button').addEventListener('click', function () {
        const yourCoupon = document.getElementById('your-coupon').value;
        if (yourCoupon === 'SELL200') {
            const yourDiscount = (total * 20) / 100;
            document.getElementById('discount-price').innerText = yourDiscount;
        }
    })
    document.getElementById('go-home-button').addEventListener('click', function () {
        document.getElementById('total-ammount').innerText = 0;
        document.getElementById('total').innerText = 0;
        document.getElementById('discount-price').innerText = 0;
        document.getElementById('selected-item').innerText = " ";
        
    })
    
}

