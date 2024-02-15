package com.examportal.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.examportal.model.Bookings;
import com.examportal.model.Events;
import com.examportal.model.UserEntity;
import com.examportal.repository.BookingRepo;
import com.examportal.repository.EventsRepo;
import com.examportal.repository.UserRepo;

// import io.swagger.v3.oas.annotations.tags.Tag;
@CrossOrigin
@RestController
@RequestMapping("/api/v1/admin/rights")
// @Tag(name="All EventAdmin Controls", description = "Endpoint for All Controls for eventadmin")
public class EventAdminController {

    @Autowired
    private EventsRepo eventsrepo;

    @Autowired
    private UserRepo userrepo;

    @Autowired
    private BookingRepo bkr;

    
    @SuppressWarnings("null")
    @PostMapping("/postnewevent")
    public ResponseEntity<String> saveEvent(@RequestBody Events e) {
        try {
            eventsrepo.save(e);
            return ResponseEntity.ok("Event Added");
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error adding event: " + ex.getMessage());
        }
    }

    @GetMapping("/getallevent")
    public List<Events> getAllEvents() {
        return eventsrepo.findAll();
    }
    // @GetMapping("/getbooking/{bookingid}")
    // public List<Bookings> getBookingById(@PathVariable("bookingid") String bookingid) {
    //     return bkr.findAllById(bookingid);
    // }

@DeleteMapping("/deleteone/{eventid}")
public ResponseEntity<String> deleteDetails(@PathVariable("eventid") String eventid) {
    try {
        eventsrepo.deleteById(Integer.parseInt(eventid));
        return ResponseEntity.ok("Deleted event with eventid: " + eventid);
    } catch (EmptyResultDataAccessException e) {
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Event with eventid " + eventid + " not found");
    } catch (Exception e) {
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error deleting event: " + e.getMessage());
    }
}

@DeleteMapping("/deleteonebooking/{bookingid}")
public String deleteDetail(@PathVariable("bookingid") String bookingid) {
    bkr.deleteById(Integer.parseInt(bookingid));
    return "Deleted booking with bookingid:"+bookingid;
}

    @GetMapping("/getallbooking")
    public List<Bookings> getAllEvent() {
        return bkr.findAll();
    }

    @PutMapping("/updatebookStatus/{bookingid}")
    public ResponseEntity<?> updateBookingStatus(
        @PathVariable("bookingid") int bookingid,
        @RequestBody String newStatus
    ) {
        try {
            Bookings booking = bkr.findById(bookingid).orElse(null);
            if (booking != null) {
                booking.setStatus(newStatus);
                bkr.save(booking);
                return ResponseEntity.ok(booking);
            } else {
                return ResponseEntity.status(404).body("Booking not found with id: " + bookingid);
            }
        } catch (Exception e) {
            return ResponseEntity.status(500).body("Error updating status: " + e.getMessage());
        }
    }

    @GetMapping("/getallusers")
    public List<UserEntity> getAllUsers() {
        return userrepo.findAll();
    }


    @DeleteMapping("/deleteoneuser/{id}")
    public String deleteUser(@PathVariable("id") int id) {
        bkr.deleteById(id);
        return "Deleted user with id:"+id;
    }


}
