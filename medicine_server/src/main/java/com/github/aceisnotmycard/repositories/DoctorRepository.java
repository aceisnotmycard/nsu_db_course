package com.github.aceisnotmycard.repositories;

import com.github.aceisnotmycard.repositories.entities.Doctor;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DoctorRepository extends JpaRepository<Doctor, Integer> {
    Optional<Doctor> findByName(String name);
}
