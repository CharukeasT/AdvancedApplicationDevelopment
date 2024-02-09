package com.event.management.controller;

import org.springframework.web.bind.annotation.RestController;

import com.event.management.repository.UserRepository;
import com.event.management.service.JwtService;
import com.event.management.service.UserService;

import com.event.management.entity.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;


@RestController
@RequestMapping("/api/users")
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JwtService jwtService;
    // @Autowired
    private UserService userService;
    @GetMapping("/")
    public ResponseEntity<?> getAllUsers(@RequestHeader("Authorization") String token) {
        String tk = token.replace("Bearer ", "");
        Role r = userService.getRoleByEmail(jwtService.extractUserEmail(tk));

        boolean isAdmin = false;

        if (r == Role.ADMIN) {
            isAdmin = true;
        }
        if (isAdmin) {
            return ResponseEntity.ok().body(userRepository.findAll());
        }
        return ResponseEntity.status(403).body("Access Restricted");
    }
}
