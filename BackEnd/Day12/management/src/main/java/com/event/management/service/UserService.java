package com.event.management.service;

import org.springframework.beans.factory.annotation.Autowired;
import java.util.List;
import java.util.Optional;

import com.event.management.entity.Role;

import com.event.management.entity.User;
import com.event.management.repository.UserRepository;

public class UserService {
    @Autowired
    private UserRepository usersRepository;

    public List<User> getAllUsers(boolean isAdmin) {
        if (isAdmin) {
            return usersRepository.findAll();
        }
        return null;
    }

    public Role getRoleByEmail(String email) {
        Optional<User> user = usersRepository.findByEmail(email);
        if (user.isPresent()) {
            User u = user.get();
            Role r = u.getRole();
            return r;
        }
        return null;
    }
}
