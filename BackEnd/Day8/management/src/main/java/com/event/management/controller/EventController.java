package com.event.management.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

import com.event.management.entity.Event;
import com.event.management.entity.Role;
import com.event.management.service.EventService;
import com.event.management.service.JwtService;
import com.event.management.service.UserService;

import io.swagger.v3.oas.annotations.parameters.RequestBody;
@RestController
@RequestMapping("/api/events")
public class EventController {
    @Autowired
    private EventService eventService;

    @Autowired
    private JwtService jwtService;

    // @Autowired
    private UserService userService;

    @GetMapping("/")
    public List<Event> getEvents() {
        return eventService.getAllEvents();
    }

    @GetMapping("/bookings/{id}")
    public ResponseEntity<?> getBookings(@PathVariable Long id) {
        return eventService.getBookings(id);
    }

    @GetMapping("/{id}")
    public Event getEventById(@PathVariable Long id) {
        return eventService.getEventById(id);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEventById(@PathVariable Long id,
            @RequestHeader("Authorization") String token) {
        String tk = token.replace("Bearer ", "");
        Role r = userService.getRoleByEmail(jwtService.extractUserEmail(tk));

        boolean isAdmin = false;

        if (r == Role.USER) {
            isAdmin = true;
        }
        return eventService.deleteEvent(id, isAdmin);
    }

    @PostMapping("/")
    public ResponseEntity<String> addEvent(@RequestBody Event event,
            @RequestHeader("Authorization") String token) {
        String tk = token.replace("Bearer ", "");
        Role r = userService.getRoleByEmail(jwtService.extractUserEmail(tk));

        boolean isAdmin = false;

        if (r == Role.USER) {
            isAdmin = true;
        }
        return eventService.addEvent(event, isAdmin);
    }

    @PutMapping("/{id}")
    public ResponseEntity<String> updateEvent(@RequestBody Event event,
            @RequestHeader("Authorization") String token) {
        String tk = token.replace("Bearer ", "");
        Role r = userService.getRoleByEmail(jwtService.extractUserEmail(tk));

        boolean isAdmin = false;

        if (r == Role.USER) {
            isAdmin = true;
        }
        return eventService.updateEventDetails(event.getId(), event, isAdmin);
    }
}
