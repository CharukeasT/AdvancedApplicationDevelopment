package com.event.management.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import java.util.*;
import com.event.management.repository.BookingRepository;
import com.event.management.entity.Booking;

@Service
public class BookingService {
    @Autowired
    private BookingRepository bookingRepository;

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public Booking getBookingById(Long id) {
        return bookingRepository.findById(id).orElse(null);
    }

    public ResponseEntity<String> deleteBookingById(Long id, boolean isAdmin) {
        Booking booking = bookingRepository.findById(id).orElse(null);
        if (booking != null && isAdmin) {
            bookingRepository.deleteById(id);
            return ResponseEntity.ok().body("Course Deleted");
        }
        return ResponseEntity.status(403).body("Access Restricted");
    }

    public ResponseEntity<String> addBooking(Booking booking, boolean isAdmin) {
        if (booking != null && isAdmin) {
            bookingRepository.save(booking);
            return ResponseEntity.ok().body("Course added");
        }
        return ResponseEntity.status(403).body("Access restricted");
    }

    public ResponseEntity<String> updateBooking(Long bookingId, Booking booking, Boolean isAdmin) {
        Booking existingBooking = bookingRepository.findById(bookingId).orElse(null);

        if (existingBooking != null && isAdmin) {

            existingBooking.setBookingId(booking.getBookingId());
            existingBooking.setSubmissionDate(booking.getSubmissionDate());
            existingBooking.setDescription(booking.getDescription());
            existingBooking.setEventDate(booking.getEventDate());
            existingBooking.setHeadcount(booking.getHeadcount());
            existingBooking.setAmount(booking.getAmount());

            bookingRepository.save(existingBooking);
            return ResponseEntity.ok().body("Course Updated");
        }

        return ResponseEntity.status(403).body("Access Restricted");

    }
}
