const INITIAL_STATE = {
    conditions: { sidebar: false },
};

interface actionProp {
    type: string;
    payload: any;
}

const condition = (state = INITIAL_STATE, action: actionProp) => {
    switch (action.type) {
        case 'SIDEBARTOGGLE':
            return {
                ...state,
                conditions: { sidebar: action.payload },
            }
        default:
            return state;
    }
};

export default condition