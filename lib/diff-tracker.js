/**
 * Created by barakedry on 6/20/15.
 */
'use strict';

function addChildTracker(childTracker, key) {
    if (childTracker.hasAdditions) {
        this.additions[key] = childTracker.additions;
        this.hasAdditions = true;
    }

    if (childTracker.hasDeletions) {
        this.deletions[key] = childTracker.deletions;
        this.hasDeletions = true;
    }

    if (childTracker.hasUpdates) {
        this.updates[key] = childTracker.updates;
        this.hasUpdates = true;
    }

    if (childTracker.hasDifferences) {
        this.differences[key] = childTracker.differences;
        this.hasDifferences = true;
    }
}

module.exports.create = function createDiffTracker(diffsAsArray) {
    return {
        hasAdditions: false,
        hasDeletions: false,
        hasUpdates: false,
        hasDifferences: false,
        additions: diffsAsArray ? [] : {},
        deletions: {},
        updates: {},
        differences: diffsAsArray ? [] : {},
        addChildTracking: addChildTracker
    };
};