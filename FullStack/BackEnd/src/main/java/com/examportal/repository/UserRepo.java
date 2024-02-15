package com.examportal.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.examportal.model.UserEntity;

public interface UserRepo extends JpaRepository<UserEntity, Integer> {
	Optional<UserEntity> findByEmail(String email);
	boolean existsByEmail(String email);
}
