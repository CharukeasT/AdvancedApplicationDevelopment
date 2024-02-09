package com.event.management.controller;

import org.springframework.web.bind.annotation.RestController;

import com.event.management.entity.Booking;
import com.event.management.entity.Role;
import com.event.management.service.BookingService;
import com.event.management.service.JwtService;
import com.event.management.service.UserService;
import io.swagger.v3.oas.annotations.parameters.RequestBody;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/api/bookings")
public class BookingController {
    @Autowired
    private BookingService bookingService;

    @Autowired
    private JwtService jwtService;

    // @Autowired
    private UserService userService;

    @GetMapping("/")
    public List<Booking> getBooking() {
        return bookingService.getAllBookings();
    }

    @GetMapping("/{id}")
    public Booking getBookingById(@PathVariable Long id) {
        return bookingService.getBookingById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteCourseById(@PathVariable Long id,
            @RequestHeader("Authorization") String token) {
        String tk = token.replace("Bearer ", "");
        Role r = userService.getRoleByEmail(jwtService.extractUserEmail(tk));

        boolean isAdmin = false;

        if (r == Role.ADMIN) {
            isAdmin = true;
        }
        return bookingService.deleteBookingById(id, isAdmin);
    }

    @PostMapping("/")
    public ResponseEntity<String> addBooking(@RequestBody Booking booking,
            @RequestHeader("Authorization") String token) {
        String tk = token.replace("Bearer ", "");
        Role r = userService.getRoleByEmail(jwtService.extractUserEmail(tk));

        boolean isAdmin = false;

        if (r == Role.ADMIN) {
            isAdmin = true;
        }
        return bookingService.addBooking(booking, isAdmin);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateBooking(@RequestBody Booking booking,
            @RequestHeader("Authorization") String token) {
        String tk = token.replace("Bearer ", "");
        Role r = userService.getRoleByEmail(jwtService.extractUserEmail(tk));

        boolean isAdmin = false;

        if (r == Role.ADMIN) {
            isAdmin = true;
        }
        return bookingService.updateBooking(booking.getBookingId(), booking, isAdmin);
    }
}
