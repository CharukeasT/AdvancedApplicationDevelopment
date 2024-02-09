package com.event.management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.event.management.entity.Event;

public interface EventRepository extends JpaRepository<Event,Long> {

}
