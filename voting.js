const candidates=["Candidate A","Candidate B","Candidate C"];

export function renderCandidates(){
    const container=document.getElementById("candidateOptions");

    container.innerHTML="";

    candidates.forEach(c=>{
        container.innerHTML+=`
        <label>
            <input type="radio" name="candidate" value="${c}">
            ${c}
        </label><br>
        `;
    });
}

export function submitVote(){
    const selected=document.querySelector('input[name="candidate"]:checked');

    if(!selected){
        alert("Select candidate");
        return;
    }

    const user=localStorage.getItem("currentVoter");

    localStorage.setItem("voted_"+user,selected.value);

    alert("Vote submitted successfully!");
    location.href="index.html";
}
