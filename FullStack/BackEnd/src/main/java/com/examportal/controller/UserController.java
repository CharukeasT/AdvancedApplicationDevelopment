package com.examportal.controller;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.examportal.model.Bookings;
import com.examportal.model.Events;
import com.examportal.repository.BookingRepo;
import com.examportal.repository.EventsRepo;
import org.springframework.web.bind.annotation.RequestParam;


// import io.swagger.v3.oas.annotations.tags.Tag;
@CrossOrigin
@RestController
@RequestMapping("/api/user/rights")
// @Tag(name="All User Controls", description = "Endpoint for All user controls")
public class UserController {

    @Autowired
    private BookingRepo bkr;

    @Autowired
    private EventsRepo eventsrepo;

    // @GetMapping("/getevent")
    // public List<Events> getAllEvent() {
    //     return eventsrepo.findAll();
    // }

    // @GetMapping("/getallevent")
    // public ResponseEntity<List<Events>> getAllEvent() {
    //     try {
    //         List<Events> events = eventsrepo.findAll();
    //         return ResponseEntity.ok(events);
    //     } catch (Exception e) {
    //         e.printStackTrace();
    //         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
    //     }
    // }

    // @GetMapping("/getallevent")
    // public ResponseEntity<List<Events>> getAllEvent() {
    //     try {
    //         List<Events> events = eventsrepo.findAll();
    //         return ResponseEntity.ok(events);
    //     } catch (Exception e) {
    //         e.printStackTrace();  
    //         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
    //                 .body(Collections.emptyList()); 
    //     }
    // }

//     @GetMapping(value = "/getallevent", produces = MediaType.APPLICATION_JSON_VALUE)
// @ResponseBody
// public ResponseEntity<?> getAllEvent() {
//     try {
//         List<Events> events = eventsrepo.findAll();
//         System.out.println("Events fetched successfully:" + events);
//         return ResponseEntity.ok(events);
//     } catch (Exception e) {
//         e.printStackTrace();
//         return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
//             .body(Collections.singletonMap("error", "Failed to fetch events. Exception: " + e.getMessage()));
//     }
// }


@GetMapping(value = "/getallevent", produces = MediaType.APPLICATION_JSON_VALUE)
@ResponseBody
public ResponseEntity<?> getAllEvent() {
    try {
        List<Events> events = eventsrepo.findAll();
        return ResponseEntity.ok(events);
    } catch (Exception e) {
        e.printStackTrace();
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
            .body(Collections.singletonMap("error", "Failed to fetch events. Exception: " + e.getMessage()));
    }
}



    








    @SuppressWarnings("null")
    @PostMapping("/postnewbooking")
    public ResponseEntity<String> saveEvent(@RequestBody Bookings e) {
        try {
            bkr.save(e);
            return ResponseEntity.ok("Booking Successful");
        } catch (Exception ex) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Error booking event: " + ex.getMessage());
        }
    }

    @GetMapping("/getallbooking")
    public List<Bookings> getAllEven() {
        return bkr.findAll();
    }
    @GetMapping("/getallbooking/{userid}")
    public List<Bookings> getBookingById(@PathVariable("userid") int userid) {
        return bkr.getBookingid(userid);
    }
    

    @DeleteMapping("/deleteobooking/{bookingid}")
	public String deleteDetails(@PathVariable("bookingid") int bookingid) {
		bkr.deleteById(bookingid);
		return "Deleted booking with bookingid:"+bookingid;
	}

   

}
