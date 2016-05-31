package com.github.aceisnotmycard.repositories;

import com.github.aceisnotmycard.repositories.entities.DoctorSpecialization;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface DoctorSpecializationRepository extends JpaRepository<DoctorSpecialization, Integer> {
    Optional<DoctorSpecialization> findByName(String name);
}
