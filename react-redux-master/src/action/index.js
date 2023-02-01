//The action here is to increase the counter by the click of a button.
//'val' is the value to increase the counter by.
const increment = (val) => {
    return {
        type : 'INCREMENT',
        inc : val
    }
}

export default increment;