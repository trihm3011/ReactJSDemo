import database from './database';
import firebase from 'firebase';

const VALUE = 'value';
const CHILD_ADDED = 'child_added';

export const getAll = (path) => database.ref(path).once(VALUE);

export const create = (path, model) => {
    const id = model.id || database.ref().child(path).push().key;
    Object.assign(model, { timestamp: firebase.database.ServerValue.TIMESTAMP, id: id });
    database.ref(`${path}/${id}`).set(model);
}

export const subscribeChildAdded = (path, func) => {
    const now = new Date().getTime();
    database.ref(path).orderByChild('timestamp').startAt(now).on(CHILD_ADDED, func);
}

export const unsubscribeChildAdded = (path, func) => {
    func && database.ref(path).off(func);
}