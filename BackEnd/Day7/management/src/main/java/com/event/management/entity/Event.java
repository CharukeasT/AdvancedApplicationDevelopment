package com.event.management.entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
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
@Table(name="event")
public class Event {
    @Id
    @GeneratedValue
    private Long id;
    private String eventType;
    private String description;
    private Integer partcipantsCount;
    @OneToMany(mappedBy = "events",cascade = CascadeType.ALL)
    private List<Booking> bookings;

    // public List<Booking> getBookings(){
    //     return this.bookings;
    // }

}
