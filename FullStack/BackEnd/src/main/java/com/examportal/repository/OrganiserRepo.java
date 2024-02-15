package com.examportal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examportal.model.OrganiserEntity;

public interface OrganiserRepo extends JpaRepository<OrganiserEntity, Integer>  {
	Optional<OrganiserEntity> findByEmail(String email);
	boolean existsByEmail(String email);
}
