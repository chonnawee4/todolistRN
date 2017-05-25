import uuid from 'uuid'
import moment from 'moment'

const todos = (stage = [], action) => {
    switch (action.type) {
        case 'ADD_TODO':
            return [
                ...stage,
                {
                    id: uuid.v1(),
                    text: action.text,
                    isCompleted: false,
                    createdAt: moment().format('DD-MM-YYYY HH:mm:ss')
                }
            ]
        default:
            return stage
    }
}

export default todos