window.showSection = function(section){
    document.querySelectorAll(".section")
    .forEach(s=>s.classList.remove("active"));

    document.getElementById(section)
    .classList.add("active");

    if(section==="dashboard") loadDashboard();
    if(section==="results") loadResults();
}

window.logout = function(){
    location.href="index.html";
}

function loadDashboard(){
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

function loadResults(){
    document.getElementById("results").innerHTML=`
        <div class="card">
            <canvas id="chart"></canvas>
        </div>
    `;

    const ctx=document.getElementById("chart");

    new Chart(ctx,{
        type:"pie",
        data:{
            labels:["Candidate A","Candidate B","Candidate C"],
            datasets:[{
                data:[15,10,10]
            }]
        }
    });
}

loadDashboard();
