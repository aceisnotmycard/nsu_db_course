package com.github.aceisnotmycard.repositories;

import com.github.aceisnotmycard.repositories.entities.Facility;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface FacilityRepository extends JpaRepository<Facility, Integer> {
    Optional<Facility> findByAddress(String address);
}
