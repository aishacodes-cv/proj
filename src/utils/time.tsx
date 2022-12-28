export const setTime = () =>{
    const date = new Date()
    const hour = (date.getHours() % 12) || 12;
    const minute = date.getMinutes().toString()
    const meridian = hour >= 12 ? 'pm' : 'am'
    let time = hour + ':' + minute + meridian

    return time
}