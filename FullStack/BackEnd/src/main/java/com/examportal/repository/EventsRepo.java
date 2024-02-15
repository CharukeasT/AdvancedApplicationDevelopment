package com.examportal.repository;


import org.springframework.data.jpa.repository.JpaRepository;

import com.examportal.model.Events;


public interface EventsRepo extends JpaRepository<Events,Integer> {

}
