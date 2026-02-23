export function loadResults(){

    document.getElementById("results").innerHTML=`
        <div class="card">
            <h3>Live Results</h3>
            <canvas id="chart" width="400" height="200"></canvas>
        </div>
    `;

    const ctx=document.getElementById("chart").getContext("2d");

    new Chart(ctx,{
        type:"pie",
        data:{
            labels:["Candidate A","Candidate B","Candidate C"],
            datasets:[{
                data:[15,10,10],
                backgroundColor:["#1e3c72","#3b6acb","#6c8df5"]
            }]
        }
    });
}
