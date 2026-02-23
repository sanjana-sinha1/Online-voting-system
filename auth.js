import { startFaceRecognition, authenticateBiometric } 
from "./biometric.js";

export async function login(role, user, pass) {

    // ADMIN LOGIN
    if (role === "admin" && user === "admin" && pass === "1234") {
        window.location.href = "admin.html";
        return;
    }

    // VOTER LOGIN WITH BIOMETRIC
    if (role === "voter") {

        const bioSection = document.getElementById("biometricSection");
        bioSection.innerHTML = "";

        // STEP 1: Face Recognition
        const face = await startFaceRecognition();
        if (!face) return;

        // STEP 2: Fingerprint
        const bio = await authenticateBiometric();
        if (!bio) return;

        // Save user
        localStorage.setItem("currentVoter", user);

        // Redirect after success
        setTimeout(() => {
            window.location.href = "voting.html";
        }, 1500);

        return;
    }

    alert("Invalid Login");
}
