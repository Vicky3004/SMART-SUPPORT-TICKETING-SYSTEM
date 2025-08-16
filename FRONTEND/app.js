const API_URL = "http://localhost:8080/api/tickets";

document.getElementById("ticketForm").addEventListener("submit", async (e) => {
    e.preventDefault();
    const ticket = {
        customerName: document.getElementById("customerName").value,
        issue: document.getElementById("issue").value,
        priority: document.getElementById("priority").value
    };
    await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(ticket)
    });
    loadTickets();
});

async function loadTickets() {
    const res = await fetch(API_URL);
    const tickets = await res.json();
    const list = document.getElementById("ticketList");
    list.innerHTML = "";
    tickets.forEach(ticket => {
        const div = document.createElement("div");
        div.className = "ticket";
        div.innerHTML = `<strong>${ticket.customerName}</strong> - ${ticket.issue} 
                         [${ticket.priority}] - Status: ${ticket.status}`;
        list.appendChild(div);
    });
}

loadTickets();
