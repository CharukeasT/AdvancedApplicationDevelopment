package com.examportal.model;

import java.sql.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="bookings")
public class Bookings {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int bookingid;
    @Column
    private int eventid;
    @Column
    private int userid;
    @Column
    private String description;
    @Column
    private Date submissionDate;
    @Column
    private Date eventDate;
    @Column
    private int headCount;
    @Column
    private String status;
    
}
