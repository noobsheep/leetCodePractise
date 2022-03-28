function dayOfYear(date: string): number {
    const dateformat: string [] = date.split('-');
    const bigMonth: number [] = [1,3,5,7,8,10,12];
    const month = Number(dateformat[1]);
    const year = Number(dateformat[0]);
    let day: number =  Number(dateformat[2]);
    let isping = true
    if (year % 400 === 0 && year % 100 === 0 || year % 4 === 0 ) {
        isping = false
    }
    console.log(isping)
    for(let i:number = 1; i < month; i ++) {
        if(i === 2) {
            isping ? day += 28 :day += 29
        } else if (bigMonth.includes(i)) {
            day += 31
        } else {
            day += 30
        }
    }
    return day
};
console.log(dayOfYear("2021-12-21"))