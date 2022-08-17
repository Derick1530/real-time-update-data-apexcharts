import moment from 'moment';

export const sendRandomData = async () => {
    const currentDate = new Date();
    const randNumber = Math.floor(Math.random() * 100);
    const showDate = moment(currentDate).format('HH:mm:ss');
    const doc = {
        time: showDate,
        bid: randNumber,
    }
    await fetch('http://localhost:7000/data', {
        method: 'POST',
        body: JSON.stringify(doc),
        headers: { 'Content-Type': 'application/json' }
    })
}