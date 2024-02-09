package com.event.management.entity;

import java.sql.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="booking")
public class Booking {
    @Id
    @GeneratedValue
    private Long bookingId;
    private Date submissionDate;
    private String description;
    private Date eventDate;
    private boolean bookingStatus;
    private Integer headcount;
    private Double amount;
    @ManyToOne
    @JoinColumn(name = "event_id",referencedColumnName = "id")
    private Event events;    
     
}
