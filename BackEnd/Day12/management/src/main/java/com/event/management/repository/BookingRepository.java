package com.event.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.event.management.entity.Booking;

public interface BookingRepository extends JpaRepository<Booking,Long> {

}
