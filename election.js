export function loadElection(){
    document.getElementById("election").innerHTML=`
        <div class="card">
            <h3>Election Control</h3>
            <button>Start Election</button>
            <button>Stop Election</button>
            <button>Reset Election</button>
        </div>
    `;
}
