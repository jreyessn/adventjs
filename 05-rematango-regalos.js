function daysToXmas(date) {
    date.setHours(0)
    date.setMinutes(0)
    date.setSeconds(0)
  
    const xmasDate = new Date('Dec 25, 2021 00:00:00')
    const diffTime = xmasDate.getTime() - date.getTime();
    const diffDays = parseInt(diffTime / (3600 * 24 * 1000)); 
  
    return diffDays
}

const date = new Date('Dec 25, 2021')
console.log(daysToXmas(date)) // 0

const date1 = new Date('Dec 26, 2021')
console.log(daysToXmas(date1)) // -1

const date2 = new Date('Dec 31, 2021')
console.log(daysToXmas(date2)) // -6

const date3 = new Date('Jan 1, 2022 00:00:01')
console.log(daysToXmas(date3)) // -7

const date4 = new Date('Jan 1, 2022 23:59:59')
console.log(daysToXmas(date4)) // -7