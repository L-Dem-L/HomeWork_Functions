/**
1. Написати функцію, яка приймає 2 числа та повертає -1, якщо перше
менше, ніж друге; 1 - якщо перше більше, ніж друге; та 0 – якщо числа
рівні.
*/
function higherLower(x, y) {
    if (x < y) {
        return -1;
    } else {
        if (x > y) {
            return 1;
        } else {
            if (x == y) {
                return 0;
            }
        }
    }
}

/**
2. Написати функцію, яка обчислює факторіал переданого їй числа.
*/
function factorial(x) {
    let result = 1;
    while (x) {
        result *= x--;
    }
    return result;
}

/**
3. Написати функцію, яка приймає три окремі цифри та перетворює їх на
одне число. Наприклад: цифри 1, 4, 9 перетворяться на число 149.
*/
function number(x, y, z) {
    x = String(x);
    y = String(y);
    z = String(z);
    str = x + y + z;
    let num = Number(str);
    return (num);
}

/**
4. Написати функцію, яка приймає довжину та ширину прямокутника та
обчислює його площу. Якщо функцію передали 1 параметр, вона
обчислює площу квадрата.
*/
function squareArea(x, y) {
    let result = 1;
    if (y == null) {
        result = Math.pow(x, 2);
    } else {
        result = x * y;
    }
    return result;
}

/**
5. Написати функцію, яка перевіряє, чи є передане їй число досконалим.
Досконале число – це число, що дорівнює сумі всіх своїх дільників.
*/
function perfectNum(x) {
    let num = 0;
    for (let i = 1; i <= x / 2; i++) {
        if (x % i === 0) {
            num += i;
        }
    }
    if (num === x && num !== 0) {
        return 'Perfect number.';
    } else {
        return 'Not a perfect number.';
    }
}

/**
6. Написати функцію, яка приймає мінімальне та максимальне значення
для діапазону, та виводить лише ті числа з діапазону, які є досконалими.
*/
function perfectNumArray(x, y) {
    let result = [];
    for (let i = x; i < y; i++) {
        sum = 0;
        for (let n = 1; n <= i / 2; n++) {
            if (i % n === 0) {
                sum += n;
            }
        }
        if (i === sum) {
            result.push(i);
        }
    }
    return result;
}