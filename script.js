let startDate;
let endDate;

function startChange(date) {
    startDate = new Date(date.value).getTime()
    console.log(startDate);
}

function endChange(date) {
    endDate = new Date(date.value).getTime()
    console.log(endDate);
}

let vacancyPeriods = [
    { start: '12/1/2022 00:00', end: '12/20/2022 00:00' },
    // { start: '12/6/2022 00:00', end: '12/8/2022 00:00' },
    // { start: '12/14/2022 00:00', end: '12/21/2022 00:00' },
]

function checkDate() {
    const isAvailable = vacancyPeriods.some((vacancyPeriod) => {
        const availableStartDate = new Date(vacancyPeriod.start).getTime()
        const availableEndDate = new Date(vacancyPeriod.end).getTime()
        console.log(availableStartDate, availableEndDate);
        return (
            startDate >= availableStartDate && endDate <= availableEndDate
        )
    })

    if (isAvailable) {
        alert('Booked successfully')
    } else if (startChange.value === startDate || endChange.value === endDate) {
        alert('Choose dates')
    } else {
        alert('These dates are not available')
    }
}
