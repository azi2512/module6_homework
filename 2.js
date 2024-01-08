function number(item) {
    if (item < 1000) {
        for (let i = 2; i < item; i++) {
            if (item % i === 0) {
                console.log('Не простое');
                return;
            } else {
                console.log('Простое');
                return;
            }
        }
    } else {
      console.log('Данные неверны')
    }
    if (item <= 1) console.log('Не простое');  
}

number(0)