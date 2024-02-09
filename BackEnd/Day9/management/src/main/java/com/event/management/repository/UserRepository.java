package com.event.management.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.event.management.entity.User;

public interface UserRepository extends JpaRepository<User,Long> {
    Optional<User> findByEmail(String email);
}
