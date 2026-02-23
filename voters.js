export function loadDashboard(){
    document.getElementById("dashboard").innerHTML=`
        <div class="card">
            <h3>Total Voters</h3>
            <p>50</p>
        </div>
        <div class="card">
            <h3>Total Votes</h3>
            <p>35</p>
        </div>
    `;
}

export function loadVoters(){
    document.getElementById("voters").innerHTML=`
        <div class="card">
            <h3>Manage Voters</h3>
            <input placeholder="New Voter Name">
            <button>Add Voter</button>
            <p>Demo Voters: Ram, Shyam, Mohan</p>
        </div>
    `;
}
