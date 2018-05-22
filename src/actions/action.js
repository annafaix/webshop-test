import {ADD_TABLE} from '../actions/constants.js';

let actionAddTable = (o) => {
	return {
		type: ADD_TABLE,
		furniture: o,
	};
}

export {actionAddTable};
