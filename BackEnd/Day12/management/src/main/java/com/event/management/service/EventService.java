package com.event.management.service;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;


import com.event.management.entity.Event;
import com.event.management.repository.EventRepository;

@Service
public class EventService {
    @Autowired
    private EventRepository eventRepository;
    public ResponseEntity<String> addEvent(Event event, boolean isAdmin) {
        if (event != null && isAdmin) {

            eventRepository.save(event);
            return ResponseEntity.ok().body("Academy Added");
        }
        return ResponseEntity.status(403).body("Access Restricted");
    }
    public ResponseEntity<?> getBookings(Long id) {
        Event event = eventRepository.findById(id).orElse(null);
        if (event != null) {
            return ResponseEntity.ok(event.getBookings());
        }
        return ResponseEntity.status(404).body("Academy not found");
    }
    public ResponseEntity<String> updateEventDetails(Long eventId, Event updatedEvent, Boolean isAdmin) {
        Event existingEvent = getEventById(eventId);

        if (existingEvent != null && isAdmin) {
            existingEvent.setEventType(updatedEvent.getEventType());
            existingEvent.setDescription(updatedEvent.getDescription());
            existingEvent.setPartcipantsCount(updatedEvent.getPartcipantsCount());

            eventRepository.save(existingEvent);
            return ResponseEntity.ok().body("Academy Updated");
        }

        return ResponseEntity.status(403).body("Access Restricted");

    }
    public ResponseEntity<String> deleteEvent(Long eventId, Boolean isAdmin) {
        Event existingEvent = getEventById(eventId);

        if (existingEvent != null && isAdmin) {
            eventRepository.delete(existingEvent);
            return ResponseEntity.ok().body("Academy Deleted");
        }
        return ResponseEntity.status(403).body("Access Restricted");
    }
    public Event getEventById(Long eventId) {
        return eventRepository.findById(eventId).orElse(null);
    }
    public List<Event> getAllEvents() {
        return eventRepository.findAll();
    }
}
