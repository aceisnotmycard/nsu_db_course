package com.github.aceisnotmycard.repositories;

import com.github.aceisnotmycard.repositories.entities.Lab;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface LabRepository extends JpaRepository<Lab, Integer> {
    Optional<Lab> findByName(String name);
}
