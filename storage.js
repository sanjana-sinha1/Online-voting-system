import { defaultCandidates } from "./config.js";

export function getCandidates() {
    let data = JSON.parse(localStorage.getItem("candidates"));

    if (!data) {
        localStorage.setItem("candidates", JSON.stringify(defaultCandidates));
        return defaultCandidates;
    }

    return data;
}

export function saveCandidates(data) {
    localStorage.setItem("candidates", JSON.stringify(data));
}

export function hasVoted(user) {
    return localStorage.getItem("voted_" + user);
}

export function markVoted(user) {
    localStorage.setItem("voted_" + user, "true");
}

export function resetAll() {
    localStorage.clear();
}
