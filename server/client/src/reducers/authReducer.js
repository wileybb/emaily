// creating reducer and immediately exporting it
export default function(state = {}, action) {
    console.log(action);
    switch (action.type) {
        default:
            return state;
    }
}