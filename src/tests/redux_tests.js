import React from 'react';

import deepFreeze from 'deep-freeze-node';
import expect from 'expect';

// results
import results from '../results/';
const { reducer, actions } = results;
//import { updateResults } from '../results/actions';
// actions


exports.testUpdateResults = () => {
    const stateBefore = [];
    const action = actions.updateResults([
            "birds",
            "bees",
            "Bob the Builder"
    ]);

    deepFreeze(stateBefore);
    deepFreeze(action);

    const stateAfter = [
        "birds",
        "bees",
        "Bob the Builder"
    ];

    expect (
        results.reducer(stateBefore, action)
    ).toEqual(stateAfter);
}
