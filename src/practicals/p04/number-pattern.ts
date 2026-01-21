export{}
const args = process.argv.slice(2);
const size = parseInt(args[0]);

if (!isNaN(size) && size > 0) {

    for (let i = 1; i <= size; i++) {

        const spaces = ' '.repeat(size - i);

        let number = '';
        for (let j = i; j >= 1; j--) {
            number += j;
        }

        
        console.log(spaces + number);
    }
}