export function loadCandidates(){
    document.getElementById("candidates").innerHTML=`
        <div class="card">
            <h3>Manage Candidates</h3>
            <input placeholder="Candidate Name">
            <button>Add Candidate</button>
            <p>Candidate A, Candidate B, Candidate C</p>
        </div>
    `;
}
