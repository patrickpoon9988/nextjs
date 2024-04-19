export default function FirstReducers(tasks, action) {
    switch(action.type) {
        case 'added' : {
            return {
                id: action.id,
                text: action.text
            }
        }
    }
}