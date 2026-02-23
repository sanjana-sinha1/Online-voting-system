export function loadReports(){
    document.getElementById("reports").innerHTML=`
        <div class="card">
            <h3>Reports</h3>
            <button>Download Result PDF</button>
            <button>Export CSV</button>
        </div>
    `;
}
