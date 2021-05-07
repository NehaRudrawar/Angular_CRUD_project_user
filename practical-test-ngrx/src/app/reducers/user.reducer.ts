import { Action } from '@ngrx/store'
import { User } from './../models/user.model'
import * as UserActions from './../actions/user.action'

const initialState: User = {
    id:1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@gmail.com',
    advertisingMonthlyBudget: 40000,
    phoneNumber: 8956119841
}

export function reducer(state: User[] = [initialState], action: UserActions.Actions) {

    // Section 3
    switch(action.type) {
        case UserActions.ADD_USER:
            return [...state, action.payload];
             // Add this case:
        case UserActions.REMOVE_USER:
            state.splice(action.payload, 1)
            return state;
        default:
            return state;
    }
}
