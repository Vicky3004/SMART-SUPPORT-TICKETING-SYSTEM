package com.example.support.model;

import jakarta.persistence.*;

@Entity
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String customerName;
    private String issue;
    private String status; // OPEN, IN_PROGRESS, CLOSED
    private String priority; // LOW, MEDIUM, HIGH

    public Ticket() {}

    public Ticket(String customerName, String issue, String status, String priority) {
        this.customerName = customerName;
        this.issue = issue;
        this.status = status;
        this.priority = priority;
    }

    public Long getId() { return id; }
    public String getCustomerName() { return customerName; }
    public void setCustomerName(String customerName) { this.customerName = customerName; }
    public String getIssue() { return issue; }
    public void setIssue(String issue) { this.issue = issue; }
    public String getStatus() { return status; }
    public void setStatus(String status) { this.status = status; }
    public String getPriority() { return priority; }
    public void setPriority(String priority) { this.priority = priority; }
}
